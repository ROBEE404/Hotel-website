

const express    = require('express');
const session    = require('express-session');
const bcrypt     = require('bcryptjs');
const helmet     = require('helmet');
const rateLimit  = require('express-rate-limit');
const path       = require('path');
require('dotenv').config();   // loads your .env file

const app  = express();
const PORT = process.env.PORT || 3001;

/* ── 1. SECURITY HEADERS ─────────────────────────────────────
   helmet() adds security headers to every response.
   This protects against common web attacks automatically.
─────────────────────────────────────────────────────────── */
app.use(helmet({
  contentSecurityPolicy: false,  // disabled so our CDN fonts/icons still load
}));

/* ── 2. PARSE JSON BODY ──────────────────────────────────────
   Allows us to read JSON data sent from the frontend.
─────────────────────────────────────────────────────────── */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ── 3. RATE LIMITING ────────────────────────────────────────
   Prevents brute-force attacks on the login endpoint.
   If someone tries to guess the password, they get blocked
   after 10 failed attempts within 15 minutes.
─────────────────────────────────────────────────────────── */
const loginLimiter = rateLimit({
  windowMs : 15 * 60 * 1000,   // 15 minutes window
  max      : 10,                // max 10 attempts per window
  message  : { success: false, message: 'Too many login attempts. Please wait 15 minutes and try again.' },
  standardHeaders: true,
  legacyHeaders : false,
});

/* ── 4. SESSION ──────────────────────────────────────────────
   A session is how the server "remembers" that a user is
   already logged in. When you log in, the server creates
   a session and sends a cookie to your browser.
   Next time you visit, the browser sends the cookie back
   and the server knows you're already authenticated.
─────────────────────────────────────────────────────────── */
app.use(session({
  secret           : process.env.SESSION_SECRET,  // from .env — keep this private!
  resave           : false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,    // JavaScript cannot read this cookie — protects from XSS attacks
    secure  : process.env.NODE_ENV === 'production',  // HTTPS only in production
    maxAge  : 8 * 60 * 60 * 1000,   // session expires after 8 hours
    sameSite: 'strict',              // prevents CSRF attacks
  },
}));

/* ── 5. SERVE FRONTEND FILES ─────────────────────────────────
   This tells the backend to serve your HTML, CSS, and JS files
   from the "frontend" folder. This way you only need ONE server
   for both frontend and backend.
─────────────────────────────────────────────────────────── */
app.use(express.static(path.join(__dirname, '..', 'frontend')));

/* ── 6. MIDDLEWARE: CHECK IF LOGGED IN ───────────────────────
   This function is used to protect routes that require login.
   If the user is not logged in, it returns a 401 error.
─────────────────────────────────────────────────────────── */
function requireAuth(req, res, next) {
  if (req.session && req.session.isAdmin === true) {
    return next();   // user is logged in, continue
  }
  return res.status(401).json({ success: false, message: 'Not authenticated. Please log in.' });
}

/* ────────────────────────────────────────────────────────────
   API ROUTES
   All routes start with /api/
   The frontend calls these routes to login, logout, etc.
──────────────────────────────────────────────────────────── */

/* ── POST /api/login ─────────────────────────────────────────
   The frontend sends email + password here.
   We check them on the SERVER — password never visible in browser.
─────────────────────────────────────────────────────────── */
app.post('/api/login', loginLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    // Get admin credentials from environment variables (.env file)
    const adminEmail    = process.env.ADMIN_EMAIL;
    const adminPassHash = process.env.ADMIN_PASSWORD_HASH;

    // Check email (case-insensitive)
    if (email.toLowerCase().trim() !== adminEmail.toLowerCase().trim()) {
      // Wait a moment before responding — prevents timing attacks
      await delay(500);
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    // Check password using bcrypt
    // bcrypt.compare() safely compares the password with the stored hash
    // Even if someone steals the hash, they can't reverse it to get the password
    const passwordMatch = await bcrypt.compare(password, adminPassHash);

    if (!passwordMatch) {
      await delay(500);
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    // Password is correct — create a session
    req.session.isAdmin   = true;
    req.session.loginTime = new Date().toISOString();

    console.log(`[${new Date().toISOString()}] Admin logged in from ${req.ip}`);

    return res.json({ success: true, message: 'Login successful.' });

  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

/* ── POST /api/logout ────────────────────────────────────────
   Destroys the session so the user is logged out.
─────────────────────────────────────────────────────────── */
app.post('/api/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ success: false, message: 'Logout failed.' });
    res.clearCookie('connect.sid');
    return res.json({ success: true, message: 'Logged out successfully.' });
  });
});

/* ── GET /api/check-auth ───────────────────────────────────────
   The frontend can call this to check if the user is still
   logged in (e.g. after page refresh).
─────────────────────────────────────────────────────────── */
app.get('/api/check-auth', requireAuth, (req, res) => {
  return res.json({ success: true, isAdmin: true });
});

/* ── GET /api/status ─────────────────────────────────────────
   Simple health check — tells you the server is running.
─────────────────────────────────────────────────────────── */
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'Hotel Vero backend is running.' });
});

/* ── CATCH-ALL: Serve index.html for all other routes ────────
   always loads the frontend correctly.
─────────────────────────────────────────────────────────── */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

/* ── HELPER FUNCTION ─────────────────────────────────────────
   Small delay to prevent timing attacks on login endpoint
─────────────────────────────────────────────────────────── */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* ── START SERVER ────────────────────────────────────────────
─────────────────────────────────────────────────────────── */
app.listen(PORT, () => {
  console.log('');
  console.log('  ╔══════════════════════════════════════════╗');
  console.log('  ║     Hotel Vero — Backend Running       ║');
  console.log(`  ║     http://localhost:${PORT}                ║`);
  console.log('  ╚══════════════════════════════════════════╝');
  console.log('');
  console.log('  Open your browser and go to:');
  console.log(`  → http://localhost:${PORT}`);
  console.log('');
});
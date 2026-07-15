

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
─────────────────────────────────────────────────────────── */
app.use(helmet({
  contentSecurityPolicy: false,  
}));

/* ── 2. PARSE JSON BODY ──────────────────────────────────────
─────────────────────────────────────────────────────────── */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ── 3. RATE LIMITING ────────────────────────────────────────
─────────────────────────────────────────────────────────── */
const loginLimiter = rateLimit({
  windowMs : 15 * 60 * 1000,   
  max      : 10,                
  message  : { success: false, message: 'Too many login attempts. Please wait 15 minutes and try again.' },
  standardHeaders: true,
  legacyHeaders : false,
});

/* ── 4. SESSION ──────────────────────────────────────────────
─────────────────────────────────────────────────────────── */
app.use(session({
  secret           : process.env.SESSION_SECRET, 
  resave           : false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,    
    secure  : process.env.NODE_ENV === 'production',  
    maxAge  : 8 * 60 * 60 * 1000,   
    sameSite: 'strict',              
  },
}));

/* ── 5. SERVE FRONTEND FILES ─────────────────────────────────
─────────────────────────────────────────────────────────── */
app.use(express.static(path.join(__dirname, '..', 'frontend')));

/* ── 6. MIDDLEWARE: CHECK IF LOGGED IN ───────────────────────
─────────────────────────────────────────────────────────── */
function requireAuth(req, res, next) {
  if (req.session && req.session.isAdmin === true) {
    return next();   // user is logged in, continue
  }
  return res.status(401).json({ success: false, message: 'Not authenticated. Please log in.' });
}

/* ── POST /api/login ─────────────────────────────────────────
─────────────────────────────────────────────────────────── */
app.post('/api/login', loginLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    const adminEmail    = process.env.ADMIN_EMAIL;
    const adminPassHash = process.env.ADMIN_PASSWORD_HASH;


    if (email.toLowerCase().trim() !== adminEmail.toLowerCase().trim()) {
      await delay(500);
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    const passwordMatch = await bcrypt.compare(password, adminPassHash);

    if (!passwordMatch) {
      await delay(500);
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    req.session.isAdmin   = true;
    req.session.loginTime = new Date().toISOString();

    console.log(`[${new Date().toISOString()}] Admin logged in from ${req.ip}`);

    return res.json({ success: true, message: 'Login successful.' });

  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

app.post('/api/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ success: false, message: 'Logout failed.' });
    res.clearCookie('connect.sid');
    return res.json({ success: true, message: 'Logged out successfully.' });
  });
});

/* ── GET /api/check-auth ───────────────────────────────────────
─────────────────────────────────────────────────────────── */
app.get('/api/check-auth', requireAuth, (req, res) => {
  return res.json({ success: true, isAdmin: true });
});

/* ── GET /api/status ─────────────────────────────────────────
─────────────────────────────────────────────────────────── */
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'Hotel Vero backend is running.' });
});

/* ── CATCH-ALL: ──────────────────────────────────── */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

/* ── HELPER FUNCTION ─────────────────────────────────────────
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

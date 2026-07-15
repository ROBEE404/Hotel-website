/* ══════════════════════════════════════
    ADMIN LOGIN
══════════════════════════════════════ */
function openAdminLogin(e) { e.preventDefault(); document.getElementById('admin-login').style.display='flex'; }
function closeAdminLogin() { document.getElementById('admin-login').style.display='none'; }
document.getElementById('admin-login').addEventListener('click',e=>{ if(e.target===e.currentTarget)closeAdminLogin(); });
document.getElementById('pass-toggle').addEventListener('click',function(){
  const p=document.getElementById('admin-pass');
  p.type=p.type==='text'?'password':'text';
  this.innerHTML=`<i class="fas fa-eye${p.type==='text'?'-slash':''}"></i>`;
});
function handleAdminLogin(e) {
  e.preventDefault();
  const email=document.getElementById('admin-email').value;
  const pass=document.getElementById('admin-pass').value;
  const err=document.getElementById('admin-error');
  if(email==='admin@hotelvero.com' && pass==='admin123') {
    closeAdminLogin();
    document.getElementById('cms-dashboard').classList.add('open');
    document.body.style.overflow='hidden';
    buildCMSDashboard();
  } else {
    err.textContent='Invalid credentials. Use admin@hotelvero.com / admin123';
  }
}
function adminLogout() {
  document.getElementById('cms-dashboard').classList.remove('open');
  document.body.style.overflow='';
}
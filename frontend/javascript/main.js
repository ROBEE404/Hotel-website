/* ══════════════════════════════════════
    BOOT
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', ()=>{
  setTimeout(()=>{ const l=document.getElementById('loading-screen'); if(l)l.classList.add('done'); }, 2000);
});

loadData();
renderSite();
reobserve();
document.querySelectorAll('.stat-num[data-target]').forEach(el=>ctrObs.observe(el));

console.log('%cHotel Vero CMS v3 — Ready ✦', 'color:#c9a96e;font-family:serif;font-size:14px;');
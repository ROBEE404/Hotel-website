/* ══════════════════════════════════════
   BOOKING POPUP
══════════════════════════════════════ */
let bookingStep = 1;
let selectedPayment = 'card';

function openBookingModal() {
  document.getElementById('booking-popup').classList.add('open');
  document.body.style.overflow='hidden';
  showBookingStep(1);
  // Sync dates from booking bar if available
  const ci=document.getElementById('checkin'),bci=document.getElementById('bm-checkin');
  const co=document.getElementById('checkout'),bco=document.getElementById('bm-checkout');
  if(ci&&bci&&ci.value) bci.value=ci.value;
  if(co&&bco&&co.value) bco.value=co.value;
}
function closeBookingModal() {
  document.getElementById('booking-popup').classList.remove('open');
  document.body.style.overflow='';
}
document.getElementById('booking-popup').addEventListener('click',function(e){
  if(e.target===this) closeBookingModal();
});

function showBookingStep(step) {
  bookingStep = step;
  document.querySelectorAll('.bp-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('bp-step'+step).classList.add('active');
  document.querySelectorAll('.bp-step').forEach(s=>{
    const n=parseInt(s.dataset.step);
    s.classList.toggle('active',n===step);
    s.classList.toggle('done',n<step);
  });
  const footer=document.getElementById('bp-footer');
  const backBtn=document.getElementById('bp-back-btn');
  const nextBtn=document.getElementById('bp-next-btn');
  if(step>=5){footer.style.display='none';return;}
  footer.style.display='flex';
  backBtn.style.display=step>1?'':'none';
  if(step===4){nextBtn.innerHTML='Confirm Booking <i class="fas fa-check"></i>';}
  else if(step===3){nextBtn.innerHTML='Review Booking <i class="fas fa-arrow-right"></i>';}
  else{nextBtn.innerHTML='Continue <i class="fas fa-arrow-right"></i>';}
  if(step===4) updateFinalSummary();
}

function bookingNext() {
  if(bookingStep===1){
    if(!document.getElementById('bm-roomtype').value){showToast('Please select a room type','error');return;}
    updateBookingSummary();
  }
  if(bookingStep===2){
    const f=document.getElementById('bm-fname').value, l=document.getElementById('bm-lname').value;
    const em=document.getElementById('bm-email').value, ph=document.getElementById('bm-phone').value;
    if(!f||!l||!em||!ph){showToast('Please fill in all required guest fields','error');return;}
  }
  if(bookingStep===3 && selectedPayment==='card'){
    const cn=document.getElementById('bm-cardname').value;
    const num=document.getElementById('bm-cardnum').value;
    if(!cn||num.replace(/\s/g,'').length<12){showToast('Please enter valid card details','error');return;}
  }
  if(bookingStep===4){
    // Confirm booking
    const ref='HV-'+Math.floor(100000+Math.random()*900000);
    document.getElementById('bp-ref-num').textContent=ref;
    showBookingStep(5);
    return;
  }
  showBookingStep(bookingStep+1);
}
function bookingBack(){if(bookingStep>1)showBookingStep(bookingStep-1);}

function updateBookingSummary() {
  const roomSel=document.getElementById('bm-roomtype');
  const roomOpt=roomSel.options[roomSel.selectedIndex];
  const pricePerNight=parseInt(roomOpt.dataset.price)||0;
  const ci=document.getElementById('bm-checkin').value;
  const co=document.getElementById('bm-checkout').value;
  let nights=1;
  if(ci&&co){const d=Math.round((new Date(co)-new Date(ci))/(86400000));if(d>0)nights=d;}
  const total=pricePerNight*nights;
  const summary=document.getElementById('bp-room-summary');
  if(roomSel.value){
    summary.style.display='flex';
    const roomImg=D.rooms.find(r=>r.type.toLowerCase()===roomSel.value)||D.rooms[0];
    document.getElementById('bprs-img').src=roomImg?roomImg.img:'';
    document.getElementById('bprs-name').textContent=roomOpt.text.split(' — ')[0];
    document.getElementById('bprs-nights').textContent=`${nights} night${nights!==1?'s':''}`;
    document.getElementById('bprs-total').textContent=`$${total}`;
  } else { summary.style.display='none'; }
  document.getElementById('bp-total-display').textContent=total?`$${total}  total`:'—';
}

function updateFinalSummary() {
  const roomSel=document.getElementById('bm-roomtype');
  const roomOpt=roomSel.options[roomSel.selectedIndex];
  const price=parseInt(roomOpt.dataset.price)||0;
  const ci=document.getElementById('bm-checkin').value;
  const co=document.getElementById('bm-checkout').value;
  let nights=1;
  if(ci&&co){const d=Math.round((new Date(co)-new Date(ci))/(86400000));if(d>0)nights=d;}
  const total=price*nights;
  const taxes=Math.round(total*0.1);
  const fname=document.getElementById('bm-fname').value;
  const lname=document.getElementById('bm-lname').value;
  const email=document.getElementById('bm-email').value;
  const phone=document.getElementById('bm-phone').value;
  document.getElementById('bp-final-summary').innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px">
      <div style="background:var(--ivory);border-radius:10px;padding:16px">
        <div style="font-size:.72rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-lt);margin-bottom:10px;font-weight:700">Stay Details</div>
        <div style="font-size:.9rem;margin-bottom:6px"><strong>Room:</strong> ${esc(roomOpt.text.split(' — ')[0])}</div>
        <div style="font-size:.9rem;margin-bottom:6px"><strong>Check-In:</strong> ${esc(ci)}</div>
        <div style="font-size:.9rem;margin-bottom:6px"><strong>Check-Out:</strong> ${esc(co)}</div>
        <div style="font-size:.9rem"><strong>Nights:</strong> ${nights}</div>
      </div>
      <div style="background:var(--ivory);border-radius:10px;padding:16px">
        <div style="font-size:.72rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-lt);margin-bottom:10px;font-weight:700">Guest Details</div>
        <div style="font-size:.9rem;margin-bottom:6px"><strong>Name:</strong> ${esc(fname+' '+lname)}</div>
        <div style="font-size:.9rem;margin-bottom:6px"><strong>Email:</strong> ${esc(email)}</div>
        <div style="font-size:.9rem;margin-bottom:6px"><strong>Phone:</strong> ${esc(phone)}</div>
        <div style="font-size:.9rem"><strong>Payment:</strong> ${selectedPayment==='card'?'Credit Card':selectedPayment==='paypal'?'PayPal':'Pay at Hotel'}</div>
      </div>
    </div>
    <div style="background:var(--charcoal);color:#fff;border-radius:10px;padding:16px">
      <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.1);font-size:.9rem"><span>Room Rate (${nights} nights × $${price})</span><span>$${price*nights}</span></div>
      <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.1);font-size:.9rem;color:rgba(255,255,255,.6)"><span>Taxes & Fees (10%)</span><span>$${taxes}</span></div>
      <div style="display:flex;justify-content:space-between;padding:8px 0;font-family:'Playfair Display',serif;font-size:1.15rem"><span>Total</span><strong style="color:var(--gold)">$${total+taxes}</strong></div>
    </div>`;
  document.getElementById('bp-total-display').textContent=`$${total+taxes} total`;
}

function selectPayment(type, btn) {
  selectedPayment = type;
  document.querySelectorAll('.pm-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('card-form-wrap').style.display=type==='card'?'':'none';
  document.getElementById('paypal-form-wrap').style.display=type==='paypal'?'':'none';
  document.getElementById('reception-form-wrap').style.display=type==='reception'?'':'none';
}

// Card number formatting
document.getElementById('bm-cardnum').addEventListener('input',function(){
  let v=this.value.replace(/\D/g,'').substring(0,16);
  this.value=v.replace(/(.{4})/g,'$1 ').trim();
});
document.getElementById('bm-expiry').addEventListener('input',function(){
  let v=this.value.replace(/\D/g,'');
  if(v.length>=2) v=v.substring(0,2)+' / '+v.substring(2,4);
  this.value=v;
});
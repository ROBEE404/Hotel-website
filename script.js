
'use strict';
/* ============================================================
   HOTEL VERO — Complete CMS Engine v3
   localStorage persistence · Full admin dashboard · Booking popup
   ============================================================ */

/* ══ DEFAULT DATA ══ */
const DEFAULT_DATA = {
  hotelName:'Hotel VERO', hotelInitials:'HV',
  siteTitle:'Hotel VERO — Luxury 4-Star Hotel',
  footerTagline:'A sanctuary of refined luxury and warm hospitality, where every guest becomes a cherished part of our story.',
  footerCopy:'© 2025 Hotel VERO. All rights reserved.',
  footerAddress:'12 Grand Blvd, City Center, Erbil',
  footerQlHeading:'Quick Links', footerSvHeading:'Services',
  whatsappNum:'9647500000000',

  navItems:[
    {label:'Home',href:'#home'},{label:'About',href:'#about'},
    {label:'Rooms',href:'#rooms'},{label:'Services',href:'#services'},
    {label:'Offers',href:'#offers'},{label:'Gallery',href:'#gallery'},
    {label:'Location',href:'#location'},{label:'Contact',href:'#contact'},
  ],

  heroImg:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80',
  heroBadge:'4-Star Luxury Hotel',
  heroTitle:'Where Elegance|Meets Comfort',
  heroSub:'Experience a world of refined luxury, unparalleled service, and timeless hospitality at Hotel VERO.',
  heroBtn1:'Book Your Stay', heroBtn2:'Explore Rooms',
  statRooms:250, statRoomsLabel:'Rooms',
  statYears:15, statYearsLabel:'Years of Excellence',
  statSatisfaction:98, statSatLabel:'% Guest Satisfaction',
  bookingBarTitle:'Reserve Your Stay',

  aboutImgMain:'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=700&q=80',
  aboutImgSecondary:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80',
  aboutEyebrow:'Our Story', aboutEstYear:'2009',
  aboutTitle:'A Legacy of|Refined Hospitality',
  aboutPara1:'Since 2009, Hotel VERO has stood as a beacon of luxury and warmth in the heart of the city. We believe that true hospitality is more than comfortable rooms — it is the art of making every guest feel genuinely at home, surrounded by elegance and cared for in every detail.',
  aboutPara2:'Our team of dedicated professionals works tirelessly to ensure that each stay becomes a cherished memory. From the crisp white linens to the handcrafted cuisine, we pour passion into every corner of your experience.',
  pillar1:'Safety First', pillar2:'Immaculate Cleanliness',
  pillar3:'Warm Service', pillar4:'Premium Comfort',
  aboutCTA:'Discover Our Rooms',

  whyEyebrow:'Why Hotel VERO',
  whyTitle:'Crafted for the|Discerning Traveler',
  whyCards:[
    {icon:'fas fa-bed',title:'Luxury Rooms',text:'Every room is a sanctuary of comfort, designed with premium materials and attention to every detail.'},
    {icon:'fas fa-location-dot',title:'Prime Location',text:"Situated in the city's cultural heart, steps away from landmarks, dining, and entertainment."},
    {icon:'fas fa-tag',title:'Exceptional Value',text:"World-class amenities at competitive prices — luxury that doesn't compromise your budget."},
    {icon:'fas fa-concierge-bell',title:'Dedicated Staff',text:'Our hospitable team is available around the clock, anticipating your every need with a warm smile.'},
    {icon:'fas fa-wifi',title:'Blazing Fast Wi-Fi',text:'Complimentary high-speed internet throughout all areas of the hotel.'},
    {icon:'fas fa-star',title:'5-Star Service',text:'Though we are a 4-star hotel, our service philosophy reaches well beyond the standard.'},
    {icon:'fas fa-moon',title:'Perfect Nights',text:'Orthopaedic mattresses, blackout curtains, and ideal room temperatures for restorative sleep.'},
    {icon:'fas fa-headset',title:'24/7 Support',text:'Day or night, our concierge team is ready to assist with any request.'},
  ],

  roomsEyebrow:'Accommodations',
  roomsTitle:'Choose Your|Perfect Room',
  roomsSubtitle:'Each of our rooms is a carefully curated space that balances aesthetics with comfort.',
  rooms:[
    {img:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80',type:'Standard',name:'Classic Standard Room',desc:'A beautifully appointed room with all the essentials for a comfortable stay. Perfect for solo travelers and couples.',capacity:'2 Guests',features:['Free Wi-Fi','A/C','Smart TV','Breakfast'],tag:'',tagStyle:'',price:'$89',featured:false},
    {img:'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=700&q=80',type:'Deluxe',name:'Deluxe King Room',desc:'Elevated luxury with panoramic city views, a king-sized bed, and a separate seating area for ultimate relaxation.',capacity:'2 Guests',features:['Free Wi-Fi','A/C','Smart TV','Breakfast'],tag:'Most Popular',tagStyle:'popular',price:'$149',featured:true},
    {img:'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=700&q=80',type:'Executive',name:'Executive Suite',desc:'Designed for the business traveler, featuring a dedicated work area, premium toiletries, and executive lounge access.',capacity:'2 Guests',features:['Free Wi-Fi','A/C','Smart TV','Breakfast'],tag:'',tagStyle:'',price:'$199',featured:false},
    {img:'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80',type:'Family',name:'Family Comfort Room',desc:'Spacious and welcoming, with two bedrooms and a connecting lounge area — everything a family needs.',capacity:'4 Guests',features:['Free Wi-Fi','A/C','Smart TV','Breakfast'],tag:'',tagStyle:'',price:'$179',featured:false},
    {img:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80',type:'Suite',name:'Presidential Suite',desc:'The pinnacle of luxury. A full floor of indulgence — private terrace, jacuzzi, butler service, and panoramic views.',capacity:'4 Guests',features:['Free Wi-Fi','A/C','Smart TV','Breakfast'],tag:'Luxury',tagStyle:'luxury',price:'$499',featured:false},
  ],

  pricingEyebrow:'Pricing Plans', pricingTitle:'Transparent|Rates',
  pricingTabs:['Weekday','Weekend','Holiday'],
  pricingCards:[
    {type:'Standard',prices:['$89','$109','$129'],features:['Queen Bed','Free Wi-Fi','Breakfast Included','Air Conditioning'],disabledFeatures:['City View','Lounge Access'],featured:false,label:''},
    {type:'Deluxe',prices:['$149','$179','$219'],features:['King Bed','Free Wi-Fi','Breakfast Included','Air Conditioning','City View'],disabledFeatures:['Lounge Access'],featured:true,label:'Best Value'},
    {type:'Executive',prices:['$199','$239','$289'],features:['King Bed','Free Wi-Fi','Breakfast Included','Air Conditioning','City View','Lounge Access'],disabledFeatures:[],featured:false,label:''},
    {type:'Suite',prices:['$499','$599','$749'],features:['King Bed + Sofa','Free Wi-Fi','Full Breakfast','Climate Control','Panoramic View','Butler Service'],disabledFeatures:[],featured:false,label:''},
  ],

  offersEyebrow:'Exclusive Deals',
  offersTitle:'Special|Offers',
  offersSubtitle:'Limited-time promotions designed to make your stay even more memorable.',
  offers:[
    {img:'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80',badge:'50% OFF',badgeStyle:'',tag:'Limited Time',title:'Summer Escape Deal',desc:'Book any Deluxe or Executive room and enjoy 50% off your second night. Perfect for a romantic getaway.',endDate:'2025-09-30'},
    {img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80',badge:'Weekend',badgeStyle:'weekend',tag:'Fri–Sun',title:'Weekend Luxury Package',desc:'Arrive Friday, leave Sunday. Includes spa credit of $50, late checkout, and complimentary cocktails on arrival.',endDate:'2025-12-31'},
    {img:'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=700&q=80',badge:'Family',badgeStyle:'family',tag:'Kids Stay Free',title:'Family Fun Package',desc:'Children under 12 stay absolutely free. Includes a family breakfast, kids activities, and pool access all day.',endDate:'2026-01-15'},
  ],

  servicesEyebrow:'Hotel Amenities', servicesTitle:'Everything You|Need & More',
  services:[
    {icon:'fas fa-utensils',title:'Fine Restaurant',desc:'International and local cuisine prepared by award-winning chefs.',active:true},
    {icon:'fas fa-mug-hot',title:'Daily Breakfast',desc:'A lavish buffet breakfast served each morning, included with every room.',active:true},
    {icon:'fas fa-wifi',title:'Free Wi-Fi',desc:'Blazing-fast internet throughout all areas of the hotel, at no charge.',active:true},
    {icon:'fas fa-car',title:'Valet Parking',desc:'Secure, covered parking for all guests with professional valet service.',active:true},
    {icon:'fas fa-plane-arrival',title:'Airport Transfer',desc:'Complimentary airport pickup and drop-off for guests upon request.',active:true},
    {icon:'fas fa-water-ladder',title:'Swimming Pool',desc:'An outdoor heated pool with poolside service and sun loungers.',active:true},
    {icon:'fas fa-dumbbell',title:'Fitness Center',desc:'State-of-the-art gym equipment with personal training available.',active:true},
    {icon:'fas fa-shirt',title:'Laundry Service',desc:'Same-day laundry, dry cleaning, and ironing service for all guests.',active:true},
    {icon:'fas fa-bell-concierge',title:'24/7 Room Service',desc:'Round-the-clock in-room dining from our extensive menu.',active:true},
    {icon:'fas fa-briefcase',title:'Conference Rooms',desc:'Fully equipped meeting rooms for business events of all sizes.',active:true},
    {icon:'fas fa-champagne-glasses',title:'Event Hall',desc:'A grand ballroom accommodating up to 500 guests for special occasions.',active:true},
    {icon:'fas fa-moon',title:'24/7 Reception',desc:'Our front desk team is always on hand to assist with any request.',active:true},
  ],

  galleryEyebrow:'Visual Tour', galleryTitle:'A Glimpse of|Hotel VERO',
  gallery:[
    {img:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=85',caption:'Hotel Exterior'},
    {img:'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=700&q=80',caption:'Grand Lobby'},
    {img:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80',caption:'Standard Room'},
    {img:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80',caption:'Fine Dining Restaurant'},
    {img:'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=700&q=80',caption:'Outdoor Pool'},
    {img:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80',caption:'Fitness Center'},
    {img:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700&q=80',caption:'Suite Interior'},
    {img:'https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=700&q=80',caption:'Conference Room'},
    {img:'https://images.unsplash.com/photo-1540304453527-62f979142a17?w=700&q=80',caption:'Elegant Hallway'},
  ],

  reviewsEyebrow:'Guest Voices', reviewsTitle:'What Our|Guests Say',
  reviews:[
    {img:'https://randomuser.me/api/portraits/women/44.jpg',name:'Sarah Mitchell',country:'United Kingdom',rating:5,text:'"The Presidential Suite was an absolute dream. Every detail was meticulously arranged. The staff remembered my name from the moment I checked in — that personal touch is rare and deeply appreciated."'},
    {img:'https://randomuser.me/api/portraits/men/32.jpg',name:'Ahmed Al-Rashid',country:'United Arab Emirates',rating:5,text:'"We chose Hotel VERO for our anniversary and couldn\'t have made a better decision. The room was exquisite, the restaurant\'s food was exceptional, and the ambiance throughout was magical."'},
    {img:'https://randomuser.me/api/portraits/women/68.jpg',name:'Julia Hoffmann',country:'Germany',rating:5,text:'"Traveling for business is rarely this enjoyable. The Executive Suite\'s workspace was perfectly designed, the Wi-Fi was genuinely fast, and the breakfast buffet set me up beautifully each morning."'},
    {img:'https://randomuser.me/api/portraits/men/54.jpg',name:'Carlos Reyes',country:'Spain',rating:4,text:'"The Family Room was spacious and comfortable for our family of four. The kids loved the pool and the daily activities. We will definitely return — Hotel VERO is now our family\'s go-to destination."'},
    {img:'https://randomuser.me/api/portraits/women/22.jpg',name:'Yuki Tanaka',country:'Japan',rating:5,text:'"From the moment we arrived, the concierge team made us feel like royalty. The hotel\'s design is stunning, and the restaurant deserves its own five-star review. Absolutely flawless experience."'},
  ],

  faqEyebrow:'Common Questions', faqTitle:'Frequently Asked|Questions',
  faqs:[
    {q:'What is the check-in and check-out time?',a:'Check-in begins at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out can be arranged based on availability.'},
    {q:'Is breakfast included with every room?',a:'Yes! A full buffet breakfast is included complimentarily with all room types, served from 6:30 AM to 10:30 AM in our main restaurant.'},
    {q:'Do you offer airport transportation?',a:'We offer complimentary airport transfers for guests upon request. Please notify us of your arrival details at least 24 hours in advance.'},
    {q:'Is there parking available at the hotel?',a:'Yes, we offer secure covered valet parking for all hotel guests. The parking fee is $15/night and is charged separately.'},
    {q:'Are pets allowed at Hotel VERO?',a:'We welcome small pets (under 10 kg) in designated pet-friendly rooms. A refundable deposit of $50 is required at check-in.'},
    {q:'What is your cancellation policy?',a:'Reservations may be cancelled free of charge up to 48 hours before arrival. Cancellations within 48 hours incur a one-night fee.'},
  ],

  contactEyebrow:'Get In Touch', contactTitle:'We\'d Love to|Hear From You',
  contactPhone:'+964 750 000 0000', contactWa:'+964 750 000 0000',
  contactEmail:'info@hotelvero.com',
  contactAddress:'12 Grand Boulevard, City Center, Erbil, Iraq',
  contactHours:'Front Desk: 24/7 · Reservations: 8AM–10PM',

  ctaTitle:'Ready for an Unforgettable Stay?',
  ctaSub:'Book directly for the best rates and exclusive benefits.',
  nlTitle:'Stay in the Know',
  nlSub:'Subscribe for exclusive deals, seasonal offers, and curated travel inspiration.',

  locEyebrow:'Find Us', locTitle:'Our|Location',
  locAddress:'12 Grand Boulevard, City Center, Erbil, Iraq',
  locLandmarks:'Erbil Citadel (5 min), Sami Abdulrahman Park (3 min), Ankawa Mall (10 min)',
  locByCar:'Exit at Grand Boulevard, the hotel is directly on the right with a visible entrance arch.',
  locAirport:'Erbil International Airport — 20 minutes via Highway 2. Free transfer available on request.',
  locHours:'Open 24 hours, 7 days a week',

  socialLinks:[
    {icon:'fab fa-facebook-f',label:'Facebook',href:'#',active:true},
    {icon:'fab fa-instagram',label:'Instagram',href:'#',active:true},
    {icon:'fab fa-twitter',label:'Twitter',href:'#',active:true},
    {icon:'fab fa-tripadvisor',label:'TripAdvisor',href:'#',active:true},
    {icon:'fab fa-youtube',label:'YouTube',href:'#',active:true},
  ],

  footerQuickLinks:[
    {label:'Home',href:'#home'},{label:'About Us',href:'#about'},
    {label:'Rooms & Suites',href:'#rooms'},{label:'Hotel Services',href:'#services'},
    {label:'Special Offers',href:'#offers'},{label:'Gallery',href:'#gallery'},
  ],
  footerServLinks:[
    {label:'Fine Restaurant',href:'#services'},{label:'Swimming Pool',href:'#services'},
    {label:'Fitness Center',href:'#services'},{label:'Airport Transfer',href:'#services'},
    {label:'Conference Rooms',href:'#services'},{label:'Event Hall',href:'#services'},
  ],
};

/* ══ DATA STORE ══ */
let D = {};
const STORAGE_KEY = 'hotelVEROCMS_v3';

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    D = saved ? deepMerge(JSON.parse(JSON.stringify(DEFAULT_DATA)), saved) : JSON.parse(JSON.stringify(DEFAULT_DATA));
  } catch(e) { D = JSON.parse(JSON.stringify(DEFAULT_DATA)); }
}
function saveData() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(D)); } catch(e){} }
function deepMerge(target, source) {
  for (const k in source) {
    if (Array.isArray(source[k])) target[k] = source[k];
    else if (source[k] && typeof source[k]==='object') { target[k]=target[k]||{}; deepMerge(target[k],source[k]); }
    else target[k]=source[k];
  }
  return target;
}

function esc(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function formatTitle(val) {
  const parts = String(val).split('|');
  if (parts.length===1) return esc(val);
  return esc(parts[0]) + '<br/><em>' + esc(parts[1]) + '</em>';
}

/* ══ TOAST ══ */
function showToast(msg='Changes saved', type='success') {
  const t = document.getElementById('cms-toast');
  const icon = t.querySelector('i');
  t.querySelector('#cms-toast-msg').textContent = msg;
  t.className = 'cms-toast ' + type;
  icon.className = type==='error' ? 'fas fa-circle-xmark' : 'fas fa-circle-check';
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

function saveAllAndToast() {
  saveData();
  const btn = document.querySelector('.cms-save-all-btn');
  btn.classList.add('saving');
  btn.innerHTML = '<i class="fas fa-check"></i> All Saved!';
  setTimeout(() => { btn.classList.remove('saving'); btn.innerHTML = '<i class="fas fa-floppy-disk"></i> Save All Changes'; }, 2000);
  showToast('All changes saved successfully!');
}

/* ══════════════════════════════════════
   SITE RENDERING — all sections updated from D
══════════════════════════════════════ */
function renderSite() {
  applyIdentity();
  applySimpleFields();
  renderNav();
  renderHero();
  renderWhyGrid();
  renderRooms();
  renderPricing();
  renderOffers();
  renderServices();
  renderGallery();
  renderReviews();
  renderFAQ();
  renderContact();
  renderFooter();
}

function applyIdentity() {
  document.title = D.siteTitle || 'Hotel VERO';
  setText('site-initials', D.hotelInitials);
  setText('site-name-loader', D.hotelName);
  setText('nav-initials', D.hotelInitials);
  setHTML('nav-hotel-name', esc(D.hotelName).replace(' ', ' <strong>') + '</strong>');
  setText('footer-initials', D.hotelInitials);
  setHTML('footer-hotel-name', esc(D.hotelName).replace(' ', ' <strong>') + '</strong>');
  setText('footer-tagline', D.footerTagline);
  setText('footer-copy', D.footerCopy);
  const waBtn = document.getElementById('whatsapp-btn');
  if (waBtn) waBtn.href = 'https://wa.me/' + (D.whatsappNum||'').replace(/\D/g,'');
}

function applySimpleFields() {
  const map = {
    'hero-badge-text':D.heroBadge,'hero-sub-el':D.heroSub,
    'about-eyebrow':D.aboutEyebrow,'about-est-year':D.aboutEstYear,
    'about-para1':D.aboutPara1,'about-para2':D.aboutPara2,
    'pillar1':D.pillar1,'pillar2':D.pillar2,'pillar3':D.pillar3,'pillar4':D.pillar4,
    'about-cta':D.aboutCTA,
    'why-eyebrow':D.whyEyebrow,
    'rooms-eyebrow':D.roomsEyebrow,'rooms-subtitle':D.roomsSubtitle,
    'pricing-eyebrow':D.pricingEyebrow,
    'offers-eyebrow':D.offersEyebrow,'offers-subtitle':D.offersSubtitle,
    'services-eyebrow':D.servicesEyebrow,
    'gallery-eyebrow':D.galleryEyebrow,
    'reviews-eyebrow':D.reviewsEyebrow,
    'faq-eyebrow':D.faqEyebrow,
    'contact-eyebrow':D.contactEyebrow,
    'loc-eyebrow':D.locEyebrow,
    'booking-bar-title':D.bookingBarTitle,
    'contact-phone':D.contactPhone,'contact-wa':D.contactWa,
    'contact-email':D.contactEmail,'contact-address':D.contactAddress,'contact-hours':D.contactHours,
    'loc-address':D.locAddress,'loc-landmarks':D.locLandmarks,'loc-bycar':D.locByCar,
    'loc-airport':D.locAirport,'loc-hours':D.locHours,
    'footer-address':D.footerAddress,'footer-phone':D.contactPhone,
    'footer-email':D.contactEmail,'footer-hours':'24/7 Front Desk',
    'cta-title':D.ctaTitle,'cta-sub':D.ctaSub,
    'nl-title':D.nlTitle,'nl-sub':D.nlSub,
  };
  for (const [id, val] of Object.entries(map)) setText(id, val);

  // Titles with pipe formatting
  const titles = {
    'hero-title-el':D.heroTitle,'about-title-el':D.aboutTitle,'why-title-el':D.whyTitle,
    'rooms-title-el':D.roomsTitle,'pricing-title-el':D.pricingTitle,
    'offers-title-el':D.offersTitle,'services-title-el':D.servicesTitle,
    'gallery-title-el':D.galleryTitle,'reviews-title-el':D.reviewsTitle,
    'faq-title-el':D.faqTitle,'contact-title-el':D.contactTitle,'loc-title-el':D.locTitle,
  };
  for (const [id, val] of Object.entries(titles)) setHTML(id, formatTitle(val||''));

  // Images
  setAttr('hero-img','src',D.heroImg);
  setAttr('about-img-main','src',D.aboutImgMain);
  setAttr('about-img-sec','src',D.aboutImgSecondary);

  // Buttons
  setText('hero-btn2', D.heroBtn2);

  // Phone/email links
  setAttr('contact-phone-link','href','tel:'+D.contactPhone);
  setAttr('contact-wa-link','href','https://wa.me/'+(D.contactWa||'').replace(/\D/g,''));
  setAttr('contact-email-link','href','mailto:'+D.contactEmail);
  setAttr('footer-phone-a','href','tel:'+D.contactPhone);
  setAttr('footer-email-a','href','mailto:'+D.contactEmail);

  // Stats counters
  const sr = document.getElementById('stat-rooms');
  const sy = document.getElementById('stat-years');
  const ss = document.getElementById('stat-sat');
  if(sr){sr.dataset.target=D.statRooms;} setText('stat-rooms-lbl',D.statRoomsLabel);
  if(sy){sy.dataset.target=D.statYears;} setText('stat-years-lbl',D.statYearsLabel);
  if(ss){ss.dataset.target=D.statSatisfaction;} setText('stat-sat-lbl',D.statSatLabel);
}

function renderNav() {
  const container = document.getElementById('nav-links');
  if (!container) return;
  const items = (D.navItems||[]).map(n =>
    `<a href="${esc(n.href)}" class="nav-link">${esc(n.label)}</a>`
  ).join('');
  container.innerHTML = items + `<a href="#" class="nav-cta" onclick="openBookingModal();return false;">${esc(D.heroBtn1||'Book Now')}</a>`;
  // Bind smooth scroll on new links
  container.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) { e.preventDefault(); window.scrollTo({top:el.offsetTop-80,behavior:'smooth'}); }
      document.getElementById('hamburger').classList.remove('open');
      container.classList.remove('open');
    });
  });
}

function renderHero() {
  setAttr('hero-img','src',D.heroImg);
  setHTML('hero-title-el', formatTitle(D.heroTitle));
  const p = document.getElementById('hero-img-preview');
  if(p) p.src = D.heroImg;
}

function renderWhyGrid() {
  const g = document.getElementById('why-grid');
  if (!g) return;
  g.innerHTML = (D.whyCards||[]).map((c,i) => `
    <div class="why-card" data-animate="fade-up" data-delay="${i*100}">
      <div class="why-icon"><i class="${esc(c.icon)}"></i></div>
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.text)}</p>
    </div>`).join('');
  reobserve();
}

function renderRooms() {
  const g = document.getElementById('rooms-grid');
  if (!g) return;
  g.innerHTML = (D.rooms||[]).map((r,i) => `
    <div class="room-card${r.featured?' featured':''}" data-animate="fade-up" data-delay="${i*100}">
      <div class="room-img-wrap">
        <img src="${esc(r.img)}" alt="${esc(r.name)}" loading="lazy" />
        ${r.tag ? `<div class="room-tag${r.tagStyle?' '+esc(r.tagStyle):''}">${esc(r.tag)}</div>` : ''}
      </div>
      <div class="room-info">
        <div class="room-type">${esc(r.type)}</div>
        <h3 class="room-name">${esc(r.name)}</h3>
        <p class="room-desc">${esc(r.desc)}</p>
        <div class="room-features">
          <span><i class="fas fa-user-group"></i> ${esc(r.capacity)}</span>
          ${(r.features||[]).map(f=>`<span><i class="fas fa-check"></i> ${esc(f)}</span>`).join('')}
        </div>
        <div class="room-footer">
          <div class="room-price"><span class="price-from">from</span> ${esc(r.price)} <span class="price-night">/night</span></div>
          <a href="#" class="btn btn-gold btn-sm" onclick="openBookingModal();return false;">Book Now</a>
        </div>
      </div>
    </div>`).join('');
  reobserve();
}

function renderPricing() {
  const tabs = document.getElementById('pricing-tabs');
  const grid = document.getElementById('pricing-grid');
  if (!tabs||!grid) return;
  const tabNames = D.pricingTabs||['Weekday','Weekend','Holiday'];
  let activeTab = 0;

  tabs.innerHTML = tabNames.map((t,i) =>
    `<button class="ptab${i===0?' active':''}" data-tab="${i}">${esc(t)}</button>`
  ).join('');

  function renderCards() {
    grid.innerHTML = (D.pricingCards||[]).map((c,ci) => `
      <div class="price-card${c.featured?' featured-price':''}" data-animate="fade-up" data-delay="${ci*100}">
        ${c.featured&&c.label ? `<div class="price-label">${esc(c.label)}</div>` : ''}
        <div class="price-type">${esc(c.type)}</div>
        <div class="price-amount">${esc((c.prices||[])[activeTab]||'')}</div>
        <div class="price-period">per night</div>
        <ul class="price-features">
          ${(c.features||[]).map(f=>`<li><i class="fas fa-check"></i> ${esc(f)}</li>`).join('')}
          ${(c.disabledFeatures||[]).map(f=>`<li><i class="fas fa-times"></i> ${esc(f)}</li>`).join('')}
        </ul>
        <a href="#" class="btn ${c.featured?'btn-gold':'btn-outline-gold'}" onclick="openBookingModal();return false;">Book Now</a>
      </div>`).join('');
    reobserve();
  }

  tabs.querySelectorAll('.ptab').forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.querySelectorAll('.ptab').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = parseInt(btn.dataset.tab);
      renderCards();
    });
  });
  renderCards();
}

function renderOffers() {
  const g = document.getElementById('offers-grid');
  if (!g) return;
  g.innerHTML = (D.offers||[]).map((o,i) => `
    <div class="offer-card" data-animate="fade-up" data-delay="${i*100}">
      <div class="offer-badge${o.badgeStyle?' '+esc(o.badgeStyle):''}">${esc(o.badge)}</div>
      <img src="${esc(o.img)}" alt="${esc(o.title)}" class="offer-img" loading="lazy" />
      <div class="offer-content">
        <div class="offer-tag">${esc(o.tag)}</div>
        <h3 class="offer-title">${esc(o.title)}</h3>
        <p class="offer-desc">${esc(o.desc)}</p>
        <div class="offer-countdown" data-end="${esc(o.endDate)}" id="cd-wrap-${i}">
          <div class="cd-item"><span class="cd-num" id="cd-d-${i}">00</span><span class="cd-lbl">Days</span></div>
          <div class="cd-item"><span class="cd-num" id="cd-h-${i}">00</span><span class="cd-lbl">Hours</span></div>
          <div class="cd-item"><span class="cd-num" id="cd-m-${i}">00</span><span class="cd-lbl">Mins</span></div>
        </div>
        <a href="#" class="btn btn-gold" onclick="openBookingModal();return false;">Claim Offer</a>
      </div>
    </div>`).join('');
  startCountdowns();
  reobserve();
}

function renderServices() {
  const g = document.getElementById('services-grid');
  if (!g) return;
  const active = (D.services||[]).filter(s=>s.active);
  g.innerHTML = active.map((s,i) => `
    <div class="service-card" data-animate="fade-up" data-delay="${i*50}">
      <div class="svc-icon"><i class="${esc(s.icon)}"></i></div>
      <h4>${esc(s.title)}</h4>
      <p>${esc(s.desc)}</p>
    </div>`).join('');
  reobserve();
}

function renderGallery() {
  const g = document.getElementById('gallery-grid');
  if (!g) return;
  g.innerHTML = (D.gallery||[]).map((item,i) => `
    <div class="gallery-item${i===0?' large':''}" data-src="${esc(item.img)}" data-caption="${esc(item.caption)}" data-gi="${i}">
      <img src="${esc(item.img)}" alt="${esc(item.caption)}" loading="lazy" />
      <div class="gallery-overlay"><i class="fas fa-magnifying-glass-plus"></i><span>${esc(item.caption)}</span></div>
    </div>`).join('');
  bindGallery();
  reobserve();
}

function renderReviews() {
  const track = document.getElementById('reviews-track');
  if (!track) return;
  track.innerHTML = (D.reviews||[]).map(r => {
    const stars = '★'.repeat(r.rating||5) + (r.rating<5?'☆'.repeat(5-r.rating):'');
    return `<div class="review-card">
      <div class="review-stars" style="color:var(--gold)">${stars}</div>
      <p class="review-text">${esc(r.text)}</p>
      <div class="reviewer">
        <img src="${esc(r.img)}" alt="${esc(r.name)}" class="reviewer-img" loading="lazy" />
        <div class="reviewer-info"><strong>${esc(r.name)}</strong><span>${esc(r.country)}</span></div>
      </div>
    </div>`;
  }).join('');
  initReviewsSlider();
}

function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = (D.faqs||[]).map(f => `
    <div class="faq-item">
      <button class="faq-q">${esc(f.q)} <i class="fas fa-plus"></i></button>
      <div class="faq-a"><p>${esc(f.a)}</p></div>
    </div>`).join('');
  list.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const open = item.classList.contains('open');
      list.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));
      if (!open) item.classList.add('open');
    });
  });
}

function renderContact() {
  renderSocialLinks();
}

function renderSocialLinks() {
  const active = (D.socialLinks||[]).filter(s=>s.active);
  const html = active.map(s => `<a href="${esc(s.href)}" aria-label="${esc(s.label)}" target="_blank"><i class="${esc(s.icon)}"></i></a>`).join('');
  setHTML('contact-social', html);
  setHTML('footer-social', html);
}

function renderFooter() {
  const ql = document.getElementById('footer-quicklinks');
  if (ql) ql.innerHTML = (D.footerQuickLinks||[]).map(l=>`<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`).join('');
  const sl = document.getElementById('footer-servlinks');
  if (sl) sl.innerHTML = (D.footerServLinks||[]).map(l=>`<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`).join('');
  setText('footer-ql-heading', D.footerQlHeading);
  setText('footer-sv-heading', D.footerSvHeading);
}

/* ══ HELPERS ══ */
function setText(id,val){const el=document.getElementById(id);if(el)el.textContent=val||'';}
function setHTML(id,val){const el=document.getElementById(id);if(el)el.innerHTML=val||'';}
function setAttr(id,attr,val){const el=document.getElementById(id);if(el)el.setAttribute(attr,val||'');}

/* ══ COUNTDOWNS ══ */
function startCountdowns() {
  function tick() {
    (D.offers||[]).forEach((o,i) => {
      const d=document.getElementById('cd-d-'+i),h=document.getElementById('cd-h-'+i),m=document.getElementById('cd-m-'+i);
      if(!d) return;
      const diff = new Date(o.endDate).getTime() - Date.now();
      if(diff<=0){d.textContent=h.textContent=m.textContent='00';return;}
      d.textContent=String(Math.floor(diff/86400000)).padStart(2,'0');
      h.textContent=String(Math.floor((diff%86400000)/3600000)).padStart(2,'0');
      m.textContent=String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
    });
  }
  tick();
  if(window._cdTimer) clearInterval(window._cdTimer);
  window._cdTimer = setInterval(tick, 30000);
}

/* ══ GALLERY LIGHTBOX ══ */
function bindGallery() {
  const items = document.querySelectorAll('.gallery-item');
  let lbIndex = 0;
  const lbItems = Array.from(items);
  function openLB(i) {
    lbIndex = i;
    const it = lbItems[i];
    document.getElementById('lb-img').src = it.dataset.src || it.querySelector('img').src;
    document.getElementById('lb-caption').textContent = it.dataset.caption || '';
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLB() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }
  items.forEach((it,i) => it.addEventListener('click', ()=>openLB(i)));
  document.getElementById('lb-close').onclick = closeLB;
  document.getElementById('lb-prev').onclick = ()=>openLB((lbIndex-1+lbItems.length)%lbItems.length);
  document.getElementById('lb-next').onclick = ()=>openLB((lbIndex+1)%lbItems.length);
  document.getElementById('lightbox').addEventListener('click', e=>{ if(e.target===e.currentTarget)closeLB(); });
  document.removeEventListener('keydown',window._lbKey||null);
  window._lbKey = e => {
    if(!document.getElementById('lightbox').classList.contains('open'))return;
    if(e.key==='Escape')closeLB();
    if(e.key==='ArrowLeft')openLB((lbIndex-1+lbItems.length)%lbItems.length);
    if(e.key==='ArrowRight')openLB((lbIndex+1)%lbItems.length);
  };
  document.addEventListener('keydown',window._lbKey);
}

/* ══ REVIEWS SLIDER ══ */
let revIndex = 0, revAuto;
function initReviewsSlider() {
  revIndex = 0;
  buildRevDots();
  slideRev();
  clearInterval(revAuto);
  revAuto = setInterval(()=>{
    const cards = document.querySelectorAll('.review-card');
    const vis = window.innerWidth<680?1:window.innerWidth<1100?2:3;
    revIndex = revIndex >= cards.length-vis ? 0 : revIndex+vis;
    slideRev();
  }, 5000);
  document.getElementById('rev-prev').onclick = ()=>{
    const cards = document.querySelectorAll('.review-card');
    const vis = window.innerWidth<680?1:window.innerWidth<1100?2:3;
    revIndex = Math.max(0, revIndex-vis);
    slideRev(); clearInterval(revAuto);
  };
  document.getElementById('rev-next').onclick = ()=>{
    const cards = document.querySelectorAll('.review-card');
    const vis = window.innerWidth<680?1:window.innerWidth<1100?2:3;
    revIndex = revIndex >= cards.length-vis ? 0 : revIndex+vis;
    slideRev(); clearInterval(revAuto);
  };
}
function slideRev() {
  const track = document.getElementById('reviews-track');
  const cards = track.querySelectorAll('.review-card');
  if(!cards.length) return;
  const cardW = cards[0].getBoundingClientRect().width + 24;
  track.style.transform = `translateX(-${revIndex * cardW}px)`;
  document.querySelectorAll('.rev-dot').forEach((d,i)=>d.classList.toggle('active',i===Math.floor(revIndex/(window.innerWidth<680?1:window.innerWidth<1100?2:3))));
}
function buildRevDots() {
  const dots = document.getElementById('rev-dots');
  if(!dots) return;
  const cards = document.querySelectorAll('.review-card');
  const vis = window.innerWidth<680?1:window.innerWidth<1100?2:3;
  const total = Math.ceil(cards.length/vis);
  dots.innerHTML = Array.from({length:total},(_,i)=>`<div class="rev-dot${i===0?' active':''}"></div>`).join('');
  dots.querySelectorAll('.rev-dot').forEach((d,i)=>{
    d.addEventListener('click',()=>{ revIndex=i*vis; slideRev(); });
  });
}

/* ══ SCROLL ANIMATIONS ══ */
const animObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    const d = parseInt(e.target.dataset.delay||0);
    setTimeout(()=>e.target.classList.add('animated'),d);
    animObs.unobserve(e.target);
  });
},{threshold:0.12});

function reobserve() {
  document.querySelectorAll('[data-animate]:not(.animated)').forEach(el=>animObs.observe(el));
}

/* ══ COUNTER ANIMATION ══ */
const ctrObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.target);
    const step = target/125;
    let cur = 0;
    const tick = ()=>{ cur+=step; if(cur<target){el.textContent=Math.floor(cur);requestAnimationFrame(tick);}else el.textContent=target; };
    tick();
    ctrObs.unobserve(el);
  });
},{threshold:0.5});

/* ══ NAVBAR ══ */
window.addEventListener('scroll',()=>{
  const nb = document.getElementById('navbar');
  const st = document.getElementById('scroll-top');
  if(window.scrollY>80){nb.classList.add('scrolled');st.classList.add('visible');}
  else{nb.classList.remove('scrolled');st.classList.remove('visible');}
});
document.getElementById('scroll-top').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.getElementById('hamburger').addEventListener('click',function(){
  this.classList.toggle('open');
  document.getElementById('nav-links').classList.toggle('open');
});

/* ══ BOOKING DATES INIT ══ */
(function(){
  const today = new Date(), tom = new Date(today);
  tom.setDate(today.getDate()+1);
  const fmt = d=>d.toISOString().split('T')[0];
  const ci=document.getElementById('checkin'),co=document.getElementById('checkout');
  const bci=document.getElementById('bm-checkin'),bco=document.getElementById('bm-checkout');
  if(ci){ci.value=fmt(today);ci.min=fmt(today);}
  if(co){co.value=fmt(tom);co.min=fmt(tom);}
  if(bci){bci.value=fmt(today);bci.min=fmt(today);}
  if(bco){bco.value=fmt(tom);bco.min=fmt(tom);}
  if(ci) ci.addEventListener('change',()=>{
    const n=new Date(ci.value);n.setDate(n.getDate()+1);
    if(co){co.min=fmt(n);if(new Date(co.value)<=new Date(ci.value))co.value=fmt(n);}
  });
  if(bci) bci.addEventListener('change',()=>{
    const n=new Date(bci.value);n.setDate(n.getDate()+1);
    if(bco){bco.min=fmt(n);if(new Date(bco.value)<=new Date(bci.value))bco.value=fmt(n);}
    updateBookingSummary();
  });
  if(bco) bco.addEventListener('change',updateBookingSummary);
})();

/* ══ NEWSLETTER ══ */
document.getElementById('nl-btn').addEventListener('click',function(){
  const inp=document.getElementById('nl-input');
  if(!inp.value||!inp.value.includes('@')){inp.style.borderColor='#e63946';setTimeout(()=>inp.style.borderColor='',2000);return;}
  this.textContent='✓ Subscribed!';inp.value='';
  setTimeout(()=>this.textContent='Subscribe',3000);
});

/* ══ CONTACT FORM ══ */
document.getElementById('contact-form').addEventListener('submit',function(e){
  e.preventDefault();
  const btn=this.querySelector('button[type=submit]');
  btn.disabled=true; btn.textContent='Sending…';
  setTimeout(()=>{
    document.getElementById('form-success').classList.add('show');
    btn.disabled=false; btn.innerHTML='Send Message <i class="fas fa-paper-plane"></i>';
    this.reset();
    setTimeout(()=>document.getElementById('form-success').classList.remove('show'),5000);
  },1200);
});

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
    const ref='HR-'+Math.floor(100000+Math.random()*900000);
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

/* ══════════════════════════════════════
   CMS DASHBOARD PANEL SWITCHER
══════════════════════════════════════ */
function switchCmsPanel(id) {
  document.querySelectorAll('.cms-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.cms-nav-link').forEach(l=>l.classList.remove('active'));
  const panel=document.getElementById(id);
  if(panel) panel.classList.add('active');
  const link=document.querySelector(`[data-cms-panel="${id}"]`);
  if(link) link.classList.add('active');
  const titles={'cms-overview':'Overview','cms-identity':'Hotel Identity','cms-nav-editor':'Navigation Menu',
    'cms-hero':'Hero Section','cms-about':'About Us','cms-why':'Why Choose Us',
    'cms-rooms':'Rooms','cms-pricing':'Pricing Plans','cms-offers':'Special Offers',
    'cms-services':'Services','cms-gallery':'Gallery','cms-reviews':'Guest Reviews',
    'cms-faq':'FAQ','cms-contact':'Contact Info','cms-location':'Location Texts',
    'cms-social':'Social Media','cms-footer':'Footer'};
  setText('cms-page-title', titles[id]||id);
}

document.querySelectorAll('.cms-nav-link').forEach(btn => {
  btn.addEventListener('click', ()=>switchCmsPanel(btn.dataset.cmsPanel));
});

// Card collapsibles
document.addEventListener('click', e => {
  const header = e.target.closest('.cms-card-header');
  if (!header) return;
  header.closest('.cms-card').classList.toggle('collapsed');
});

/* ══════════════════════════════════════
   CMS DASHBOARD BUILDERS
══════════════════════════════════════ */
function buildCMSDashboard() {
  updateOverviewCounts();
  bindSimpleInputs();
  buildHeroPreview();
  buildNavEditor();
  buildWhyEditor();
  buildRoomsEditor();
  buildPricingEditor();
  buildOffersEditor();
  buildServicesEditor();
  buildGalleryEditor();
  buildReviewsEditor();
  buildFaqEditor();
  buildSocialEditor();
  buildFooterLinksEditor();
}

function updateOverviewCounts() {
  setText('ov-rooms',(D.rooms||[]).length);
  setText('ov-offers',(D.offers||[]).length);
  setText('ov-gallery',(D.gallery||[]).length);
  setText('ov-reviews',(D.reviews||[]).length);
}

/* ── Simple [data-cms] inputs ── */
function bindSimpleInputs() {
  document.querySelectorAll('[data-cms]').forEach(inp => {
    const key = inp.dataset.cms;
    if(D[key]!==undefined) inp.value=D[key];
    inp.addEventListener('input', () => {
      D[key] = inp.type==='number' ? Number(inp.value) : inp.value;
      saveData(); renderSite();
    });
  });
}

/* ── Hero image preview ── */
function buildHeroPreview() {
  const inp = document.querySelector('[data-cms="heroImg"]');
  const prev = document.getElementById('hero-img-preview');
  if(!inp||!prev) return;
  inp.addEventListener('input', () => { prev.src=inp.value; });
  const aboutMain=document.querySelector('[data-cms="aboutImgMain"]');
  const aboutSec=document.querySelector('[data-cms="aboutImgSecondary"]');
  if(aboutMain) aboutMain.addEventListener('input',()=>{
    const p=document.getElementById('about-main-preview'); if(p)p.src=aboutMain.value;
  });
  if(aboutSec) aboutSec.addEventListener('input',()=>{
    const p=document.getElementById('about-sec-preview'); if(p)p.src=aboutSec.value;
  });
}

/* ── Nav editor ── */
function buildNavEditor() {
  const wrap=document.getElementById('nav-items-editor');
  const addBtn=document.getElementById('add-nav-item');
  if(!wrap) return;
  const render=()=>{
    wrap.innerHTML=(D.navItems||[]).map((n,i)=>`
      <div class="nav-edit-row">
        <input data-nl="${i}" value="${esc(n.label)}" placeholder="Label (e.g. Home)" />
        <input data-nh="${i}" value="${esc(n.href)}" placeholder="Link (e.g. #home)" />
        <button class="fl-del" data-nd="${i}"><i class="fas fa-trash"></i></button>
      </div>`).join('');
    wrap.querySelectorAll('[data-nl]').forEach(inp=>inp.addEventListener('input',()=>{D.navItems[inp.dataset.nl].label=inp.value;renderNav();saveData();}));
    wrap.querySelectorAll('[data-nh]').forEach(inp=>inp.addEventListener('input',()=>{D.navItems[inp.dataset.nh].href=inp.value;renderNav();saveData();}));
    wrap.querySelectorAll('[data-nd]').forEach(btn=>btn.addEventListener('click',()=>{D.navItems.splice(parseInt(btn.dataset.nd),1);render();renderNav();saveData();}));
  };
  if(addBtn) addBtn.onclick=()=>{D.navItems.push({label:'New Page',href:'#'});render();renderNav();saveData();};
  render();
}

/* ── Why Cards ── */
function buildWhyEditor() {
  const wrap=document.getElementById('why-cards-editor');
  const addBtn=document.getElementById('add-why-card');
  if(!wrap) return;
  const render=()=>{
    wrap.innerHTML=(D.whyCards||[]).map((c,i)=>`
      <div class="why-edit-row">
        <div class="cms-field"><label class="cms-label">Icon Class</label><input class="cms-input" data-wi="${i}" data-wf="icon" value="${esc(c.icon)}" placeholder="fas fa-bed"/></div>
        <div class="cms-field"><label class="cms-label">Title</label><input class="cms-input" data-wi="${i}" data-wf="title" value="${esc(c.title)}" /></div>
        <div class="cms-field"><label class="cms-label">Description</label><input class="cms-input" data-wi="${i}" data-wf="text" value="${esc(c.text)}" /></div>
        <button class="cms-btn-del" data-wd="${i}"><i class="fas fa-trash"></i></button>
      </div>`).join('');
    wrap.querySelectorAll('[data-wi]').forEach(inp=>inp.addEventListener('input',()=>{D.whyCards[inp.dataset.wi][inp.dataset.wf]=inp.value;renderWhyGrid();saveData();}));
    wrap.querySelectorAll('[data-wd]').forEach(btn=>btn.addEventListener('click',()=>{D.whyCards.splice(parseInt(btn.dataset.wd),1);render();renderWhyGrid();saveData();}));
  };
  if(addBtn) addBtn.onclick=()=>{D.whyCards.push({icon:'fas fa-star',title:'New Feature',text:'Description here.'});render();renderWhyGrid();saveData();};
  render();
}

/* ── Rooms Editor ── */
function buildRoomsEditor() {
  const wrap=document.getElementById('rooms-editor');
  const addBtn=document.getElementById('add-room-btn');
  if(!wrap) return;
  const render=()=>{
    wrap.innerHTML=(D.rooms||[]).map((r,i)=>`
      <div class="room-edit-card">
        <div class="re-header">
          <strong>${esc(r.name)}</strong>
          <button class="cms-btn-del" data-rd="${i}"><i class="fas fa-trash"></i> Delete Room</button>
        </div>
        <div class="cms-row cols2" style="margin-bottom:10px">
          <div class="cms-field"><label class="cms-label">Room Image URL</label>
            <div class="cms-img-field">
              <input class="cms-input" data-ri="${i}" data-rf="img" value="${esc(r.img)}" />
              <img src="${esc(r.img)}" class="cms-img-preview" id="rprev-${i}" alt="p" />
            </div>
          </div>
          <div class="cms-field"><label class="cms-label">Room Type Label <span class="cms-where">→ small eyebrow</span></label><input class="cms-input" data-ri="${i}" data-rf="type" value="${esc(r.type)}" /></div>
        </div>
        <div class="cms-row cols2" style="margin-bottom:10px">
          <div class="cms-field"><label class="cms-label">Room Name</label><input class="cms-input" data-ri="${i}" data-rf="name" value="${esc(r.name)}" /></div>
          <div class="cms-field"><label class="cms-label">Price <span class="cms-where">→ shown on card</span></label><input class="cms-input" data-ri="${i}" data-rf="price" value="${esc(r.price)}" placeholder="$149" /></div>
        </div>
        <div class="cms-field" style="margin-bottom:10px"><label class="cms-label">Description</label><textarea class="cms-input cms-textarea" data-ri="${i}" data-rf="desc">${esc(r.desc)}</textarea></div>
        <div class="cms-row cols3" style="margin-bottom:10px">
          <div class="cms-field"><label class="cms-label">Capacity</label><input class="cms-input" data-ri="${i}" data-rf="capacity" value="${esc(r.capacity)}" placeholder="2 Guests" /></div>
          <div class="cms-field"><label class="cms-label">Tag Text <span class="cms-where">→ badge on image</span></label><input class="cms-input" data-ri="${i}" data-rf="tag" value="${esc(r.tag)}" placeholder="Most Popular" /></div>
          <div class="cms-field"><label class="cms-label">Tag Style <span class="cms-where">popular / luxury / empty</span></label><input class="cms-input" data-ri="${i}" data-rf="tagStyle" value="${esc(r.tagStyle)}" placeholder="popular" /></div>
        </div>
        <div class="cms-field" style="margin-bottom:6px"><label class="cms-label">Features <span class="cms-where">→ tags shown below description</span></label>
          <div class="room-feat-wrap" id="rfeat-${i}">
            ${(r.features||[]).map((f,fi)=>`<div class="room-feat-tag">${esc(f)}<button data-rfi="${i}" data-rffi="${fi}"><i class="fas fa-times"></i></button></div>`).join('')}
          </div>
          <div class="room-feat-add"><input id="rfeat-inp-${i}" placeholder="Add feature…" /><button data-rfadd="${i}"><i class="fas fa-plus"></i></button></div>
        </div>
        <label class="featured-toggle"><input type="checkbox" data-ri="${i}" data-rf="featured" ${r.featured?'checked':''}/> Mark as Featured (gold border)</label>
      </div>`).join('');

    // Bind all room inputs
    wrap.querySelectorAll('[data-ri]').forEach(inp=>{
      inp.addEventListener('input',()=>{
        const i=parseInt(inp.dataset.ri), f=inp.dataset.rf;
        if(f==='featured') D.rooms[i][f]=inp.checked;
        else D.rooms[i][f]=inp.value;
        if(f==='img'){const p=document.getElementById('rprev-'+i);if(p)p.src=inp.value;}
        renderRooms();saveData();updateOverviewCounts();
      });
      inp.addEventListener('change',()=>{ // for checkboxes
        if(inp.type==='checkbox'){D.rooms[parseInt(inp.dataset.ri)][inp.dataset.rf]=inp.checked;renderRooms();saveData();}
      });
    });
    // Delete room
    wrap.querySelectorAll('[data-rd]').forEach(btn=>btn.addEventListener('click',()=>{
      if(!confirm('Delete this room?'))return;
      D.rooms.splice(parseInt(btn.dataset.rd),1);render();renderRooms();saveData();updateOverviewCounts();
    }));
    // Delete feature
    wrap.querySelectorAll('[data-rfi]').forEach(btn=>btn.addEventListener('click',()=>{
      D.rooms[parseInt(btn.dataset.rfi)].features.splice(parseInt(btn.dataset.rffi),1);
      render();renderRooms();saveData();
    }));
    // Add feature
    wrap.querySelectorAll('[data-rfadd]').forEach(btn=>btn.addEventListener('click',()=>{
      const i=parseInt(btn.dataset.rfadd);
      const inp=document.getElementById('rfeat-inp-'+i);
      if(inp.value.trim()){D.rooms[i].features.push(inp.value.trim());inp.value='';render();renderRooms();saveData();}
    }));
  };
  if(addBtn) addBtn.onclick=()=>{
    D.rooms.push({img:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80',type:'New',name:'New Room',desc:'Room description.',capacity:'2 Guests',features:['Free Wi-Fi','A/C'],tag:'',tagStyle:'',price:'$99',featured:false});
    render();renderRooms();saveData();updateOverviewCounts();
  };
  render();
}

/* ── Pricing Editor ── */
function buildPricingEditor() {
  const wrap=document.getElementById('pricing-editor');
  const addBtn=document.getElementById('add-pricing-btn');
  if(!wrap) return;
  const render=()=>{
    wrap.innerHTML=(D.pricingCards||[]).map((c,i)=>`
      <div class="pricing-plan-card">
        <div class="pp-header">
          <strong>${esc(c.type)} Plan</strong>
          <div style="display:flex;align-items:center;gap:10px">
            <label style="font-size:.78rem;display:flex;align-items:center;gap:6px;cursor:pointer">
              <input type="checkbox" data-ppi="${i}" data-ppf="featured" ${c.featured?'checked':''} style="accent-color:var(--gold)" /> Featured
            </label>
            <button class="cms-btn-del" data-ppd="${i}"><i class="fas fa-trash"></i></button>
          </div>
        </div>
        <div class="cms-row cols2" style="margin-bottom:12px">
          <div class="cms-field"><label class="cms-label">Plan Type Name</label><input class="cms-input" data-ppi="${i}" data-ppf="type" value="${esc(c.type)}" /></div>
          <div class="cms-field"><label class="cms-label">Label Badge <span class="cms-where">→ "Best Value" badge (optional)</span></label><input class="cms-input" data-ppi="${i}" data-ppf="label" value="${esc(c.label||'')}" placeholder="Best Value" /></div>
        </div>
        <div class="pp-prices">
          ${(D.pricingTabs||['Weekday','Weekend','Holiday']).map((tab,ti)=>`
            <div class="cms-field"><label class="cms-label">${esc(tab)} Price</label>
              <input class="cms-input" data-ppi="${i}" data-ppf="price${ti}" value="${esc((c.prices||[])[ti]||'')}" placeholder="$99" /></div>
          `).join('')}
        </div>
        <div style="margin-bottom:8px">
          <label class="cms-label" style="margin-bottom:6px;display:block">Enabled Features <span class="cms-where">→ shown with ✓ checkmark</span></label>
          <div class="pp-feat-list" id="ppfl-${i}">
            ${(c.features||[]).map((f,fi)=>`
              <div class="pp-feat-row">
                <input type="checkbox" checked data-ppfi="${i}" data-ppenable="${fi}" style="accent-color:var(--gold)" />
                <input type="text" value="${esc(f)}" data-ppfi="${i}" data-ppft="${fi}" />
                <button data-ppfd="${i}" data-ppfdi="${fi}"><i class="fas fa-times"></i></button>
              </div>`).join('')}
            ${(c.disabledFeatures||[]).map((f,fi)=>`
              <div class="pp-feat-row">
                <input type="checkbox" data-ppfi="${i}" data-ppdisable="${fi}" style="accent-color:var(--gold)" />
                <input type="text" value="${esc(f)}" data-ppfi="${i}" data-ppdft="${fi}" />
                <button data-ppdfd="${i}" data-ppdfdi="${fi}"><i class="fas fa-times"></i></button>
              </div>`).join('')}
          </div>
          <div style="display:flex;gap:6px;margin-top:6px">
            <input id="ppf-inp-${i}" class="cms-input" placeholder="Add feature…" style="flex:1" />
            <button class="cms-btn-add" data-ppfadd="${i}" style="margin-top:0;padding:8px 14px">+</button>
          </div>
        </div>
      </div>`).join('');

    wrap.querySelectorAll('[data-ppi]').forEach(inp=>{
      const ev=inp.type==='checkbox'?'change':'input';
      inp.addEventListener(ev,()=>{
        const i=parseInt(inp.dataset.ppi),f=inp.dataset.ppf;
        if(f.startsWith('price')){const ti=parseInt(f[5]);D.pricingCards[i].prices=D.pricingCards[i].prices||[];D.pricingCards[i].prices[ti]=inp.value;}
        else if(f==='featured'){D.pricingCards[i].featured=inp.checked;}
        else D.pricingCards[i][f]=inp.value;
        renderPricing();saveData();
      });
    });
    // Feature text edit
    wrap.querySelectorAll('[data-ppft]').forEach(inp=>inp.addEventListener('input',()=>{
      D.pricingCards[inp.dataset.ppfi].features[inp.dataset.ppft]=inp.value;renderPricing();saveData();
    }));
    wrap.querySelectorAll('[data-ppdft]').forEach(inp=>inp.addEventListener('input',()=>{
      D.pricingCards[inp.dataset.ppfi].disabledFeatures[inp.dataset.ppdft]=inp.value;renderPricing();saveData();
    }));
    // Toggle enabled/disabled
    wrap.querySelectorAll('[data-ppenable]').forEach(cb=>cb.addEventListener('change',()=>{
      if(!cb.checked){
        const i=parseInt(cb.dataset.ppfi),fi=parseInt(cb.dataset.ppenable);
        const f=D.pricingCards[i].features.splice(fi,1)[0];
        D.pricingCards[i].disabledFeatures.push(f);
        render();renderPricing();saveData();
      }
    }));
    wrap.querySelectorAll('[data-ppdisable]').forEach(cb=>cb.addEventListener('change',()=>{
      if(cb.checked){
        const i=parseInt(cb.dataset.ppfi),fi=parseInt(cb.dataset.ppdisable);
        const f=D.pricingCards[i].disabledFeatures.splice(fi,1)[0];
        D.pricingCards[i].features.push(f);
        render();renderPricing();saveData();
      }
    }));
    // Delete feature
    wrap.querySelectorAll('[data-ppfd]').forEach(btn=>btn.addEventListener('click',()=>{
      D.pricingCards[btn.dataset.ppfd].features.splice(parseInt(btn.dataset.ppfdi),1);render();renderPricing();saveData();
    }));
    wrap.querySelectorAll('[data-ppdfd]').forEach(btn=>btn.addEventListener('click',()=>{
      D.pricingCards[btn.dataset.ppdfd].disabledFeatures.splice(parseInt(btn.dataset.ppdfdi),1);render();renderPricing();saveData();
    }));
    // Delete plan
    wrap.querySelectorAll('[data-ppd]').forEach(btn=>btn.addEventListener('click',()=>{
      if(!confirm('Delete this pricing plan?'))return;
      D.pricingCards.splice(parseInt(btn.dataset.ppd),1);render();renderPricing();saveData();
    }));
    // Add feature
    wrap.querySelectorAll('[data-ppfadd]').forEach(btn=>btn.addEventListener('click',()=>{
      const i=parseInt(btn.dataset.ppfadd);
      const inp=document.getElementById('ppf-inp-'+i);
      if(inp.value.trim()){D.pricingCards[i].features.push(inp.value.trim());inp.value='';render();renderPricing();saveData();}
    }));
  };
  if(addBtn) addBtn.onclick=()=>{
    D.pricingCards.push({type:'New Plan',prices:['$99','$119','$139'],features:['Queen Bed','Free Wi-Fi'],disabledFeatures:[],featured:false,label:''});
    render();renderPricing();saveData();
  };
  render();
}

/* ── Offers Editor ── */
function buildOffersEditor() {
  const wrap=document.getElementById('offers-editor');
  const addBtn=document.getElementById('add-offer-btn');
  if(!wrap) return;
  const render=()=>{
    wrap.innerHTML=(D.offers||[]).map((o,i)=>`
      <div class="offer-edit-card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
          <strong>${esc(o.title)}</strong>
          <button class="cms-btn-del" data-od="${i}"><i class="fas fa-trash"></i> Delete</button>
        </div>
        <div class="cms-row cols2" style="margin-bottom:10px">
          <div class="cms-field"><label class="cms-label">Offer Image URL</label>
            <div class="cms-img-field">
              <input class="cms-input" data-oi="${i}" data-of="img" value="${esc(o.img)}" />
              <img src="${esc(o.img)}" class="cms-img-preview" id="oprev-${i}" alt="p" />
            </div>
          </div>
          <div class="cms-field"><label class="cms-label">Badge Text <span class="cms-where">→ corner badge</span></label><input class="cms-input" data-oi="${i}" data-of="badge" value="${esc(o.badge)}" placeholder="50% OFF" /></div>
        </div>
        <div class="cms-row cols3" style="margin-bottom:10px">
          <div class="cms-field"><label class="cms-label">Badge Style <span class="cms-where">weekend / family / empty</span></label><input class="cms-input" data-oi="${i}" data-of="badgeStyle" value="${esc(o.badgeStyle)}" /></div>
          <div class="cms-field"><label class="cms-label">Tag Label <span class="cms-where">→ small tag inside card</span></label><input class="cms-input" data-oi="${i}" data-of="tag" value="${esc(o.tag)}" /></div>
          <div class="cms-field"><label class="cms-label">Countdown End Date</label><input class="cms-input" type="date" data-oi="${i}" data-of="endDate" value="${esc(o.endDate)}" /></div>
        </div>
        <div class="cms-field" style="margin-bottom:10px"><label class="cms-label">Offer Title</label><input class="cms-input" data-oi="${i}" data-of="title" value="${esc(o.title)}" /></div>
        <div class="cms-field"><label class="cms-label">Description</label><textarea class="cms-input cms-textarea" data-oi="${i}" data-of="desc">${esc(o.desc)}</textarea></div>
      </div>`).join('');
    wrap.querySelectorAll('[data-oi]').forEach(inp=>inp.addEventListener('input',()=>{
      D.offers[inp.dataset.oi][inp.dataset.of]=inp.value;
      if(inp.dataset.of==='img'){const p=document.getElementById('oprev-'+inp.dataset.oi);if(p)p.src=inp.value;}
      renderOffers();saveData();updateOverviewCounts();
    }));
    wrap.querySelectorAll('[data-od]').forEach(btn=>btn.addEventListener('click',()=>{
      if(!confirm('Delete this offer?'))return;
      D.offers.splice(parseInt(btn.dataset.od),1);render();renderOffers();saveData();updateOverviewCounts();
    }));
  };
  if(addBtn) addBtn.onclick=()=>{
    D.offers.push({img:'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80',badge:'NEW',badgeStyle:'',tag:'Limited Time',title:'New Special Offer',desc:'Offer description goes here.',endDate:'2026-12-31'});
    render();renderOffers();saveData();updateOverviewCounts();
  };
  render();
}

/* ── Services Editor ── */
function buildServicesEditor() {
  const wrap=document.getElementById('services-editor');
  const addBtn=document.getElementById('add-service-btn');
  if(!wrap) return;
  const render=()=>{
    wrap.innerHTML=(D.services||[]).map((s,i)=>`
      <div class="svc-edit-row">
        <input type="checkbox" ${s.active?'checked':''} data-svi="${i}" data-svf="active" style="accent-color:var(--gold);width:16px;height:16px" title="Show on website" />
        <input class="cms-input" data-svi="${i}" data-svf="icon" value="${esc(s.icon)}" placeholder="fas fa-wifi" />
        <input class="cms-input" data-svi="${i}" data-svf="title" value="${esc(s.title)}" placeholder="Service name" />
        <button class="cms-btn-del" data-svd="${i}"><i class="fas fa-trash"></i></button>
      </div>`).join('');
    wrap.querySelectorAll('[data-svi]').forEach(inp=>{
      const ev=inp.type==='checkbox'?'change':'input';
      inp.addEventListener(ev,()=>{
        const i=parseInt(inp.dataset.svi),f=inp.dataset.svf;
        D.services[i][f]=inp.type==='checkbox'?inp.checked:inp.value;
        renderServices();saveData();
      });
    });
    wrap.querySelectorAll('[data-svd]').forEach(btn=>btn.addEventListener('click',()=>{
      if(!confirm('Delete this service?'))return;
      D.services.splice(parseInt(btn.dataset.svd),1);render();renderServices();saveData();
    }));
  };
  if(addBtn) addBtn.onclick=()=>{
    D.services.push({icon:'fas fa-star',title:'New Service',desc:'Service description.',active:true});
    render();renderServices();saveData();
  };
  render();
}

/* ── Gallery Editor ── */
function buildGalleryEditor() {
  const wrap=document.getElementById('gallery-editor');
  const addBtn=document.getElementById('add-gallery-btn');
  if(!wrap) return;
  const render=()=>{
    wrap.innerHTML=(D.gallery||[]).map((g,i)=>`
      <div class="gal-edit-row">
        <img src="${esc(g.img)}" class="gal-thumb" id="gprev-${i}" alt="p" />
        <div class="cms-field"><label class="cms-label">Image URL</label><input class="cms-input" data-gi="${i}" data-gf="img" value="${esc(g.img)}" /></div>
        <div class="cms-field"><label class="cms-label">Caption <span class="cms-where">→ shown in lightbox</span></label><input class="cms-input" data-gi="${i}" data-gf="caption" value="${esc(g.caption)}" /></div>
        <button class="cms-btn-del" data-gd="${i}"><i class="fas fa-trash"></i></button>
      </div>`).join('');
    wrap.querySelectorAll('[data-gi]').forEach(inp=>inp.addEventListener('input',()=>{
      D.gallery[inp.dataset.gi][inp.dataset.gf]=inp.value;
      if(inp.dataset.gf==='img'){const p=document.getElementById('gprev-'+inp.dataset.gi);if(p)p.src=inp.value;}
      renderGallery();saveData();updateOverviewCounts();
    }));
    wrap.querySelectorAll('[data-gd]').forEach(btn=>btn.addEventListener('click',()=>{
      if(!confirm('Remove this photo?'))return;
      D.gallery.splice(parseInt(btn.dataset.gd),1);render();renderGallery();saveData();updateOverviewCounts();
    }));
  };
  if(addBtn) addBtn.onclick=()=>{
    D.gallery.push({img:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=700&q=80',caption:'New Photo'});
    render();renderGallery();saveData();updateOverviewCounts();
  };
  render();
}

/* ── Reviews Editor ── */
function buildReviewsEditor() {
  const wrap=document.getElementById('reviews-editor');
  const addBtn=document.getElementById('add-review-btn');
  if(!wrap) return;
  const render=()=>{
    wrap.innerHTML=(D.reviews||[]).map((r,i)=>`
      <div class="rev-edit-card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
          <strong>${esc(r.name)}</strong>
          <button class="cms-btn-del" data-rvd="${i}"><i class="fas fa-trash"></i> Delete</button>
        </div>
        <div class="cms-row cols2" style="margin-bottom:10px">
          <div class="cms-field"><label class="cms-label">Photo URL</label>
            <div class="cms-img-field">
              <input class="cms-input" data-rvi="${i}" data-rvf="img" value="${esc(r.img)}" />
              <img src="${esc(r.img)}" class="cms-img-preview" id="rvprev-${i}" alt="p" style="border-radius:50%" />
            </div>
          </div>
          <div>
            <div class="cms-field" style="margin-bottom:8px"><label class="cms-label">Reviewer Name</label><input class="cms-input" data-rvi="${i}" data-rvf="name" value="${esc(r.name)}" /></div>
            <div class="cms-field"><label class="cms-label">Country</label><input class="cms-input" data-rvi="${i}" data-rvf="country" value="${esc(r.country)}" /></div>
          </div>
        </div>
        <div class="cms-field" style="margin-bottom:8px">
          <label class="cms-label">Star Rating</label>
          <div class="rev-star-row">
            <div class="rev-stars-edit" id="rvstars-${i}">
              ${[1,2,3,4,5].map(s=>`<button data-rstar="${i}" data-sv="${s}" class="${s<=(r.rating||5)?' on':''}">★</button>`).join('')}
            </div>
            <span style="font-size:.8rem;color:var(--text-lt)">${r.rating||5}/5 stars</span>
          </div>
        </div>
        <div class="cms-field"><label class="cms-label">Review Text</label><textarea class="cms-input cms-textarea" data-rvi="${i}" data-rvf="text">${esc(r.text)}</textarea></div>
      </div>`).join('');

    wrap.querySelectorAll('[data-rvi]').forEach(inp=>inp.addEventListener('input',()=>{
      D.reviews[inp.dataset.rvi][inp.dataset.rvf]=inp.value;
      if(inp.dataset.rvf==='img'){const p=document.getElementById('rvprev-'+inp.dataset.rvi);if(p)p.src=inp.value;}
      renderReviews();saveData();updateOverviewCounts();
    }));
    wrap.querySelectorAll('[data-rstar]').forEach(btn=>btn.addEventListener('click',()=>{
      const i=parseInt(btn.dataset.rstar),v=parseInt(btn.dataset.sv);
      D.reviews[i].rating=v;
      render();renderReviews();saveData();
    }));
    wrap.querySelectorAll('[data-rvd]').forEach(btn=>btn.addEventListener('click',()=>{
      if(!confirm('Delete this review?'))return;
      D.reviews.splice(parseInt(btn.dataset.rvd),1);render();renderReviews();saveData();updateOverviewCounts();
    }));
  };
  if(addBtn) addBtn.onclick=()=>{
    D.reviews.push({img:'https://randomuser.me/api/portraits/men/1.jpg',name:'New Guest',country:'Country',rating:5,text:'"Review text goes here."'});
    render();renderReviews();saveData();updateOverviewCounts();
  };
  render();
}

/* ── FAQ Editor ── */
function buildFaqEditor() {
  const wrap=document.getElementById('faq-editor');
  const addBtn=document.getElementById('add-faq-btn');
  if(!wrap) return;
  const render=()=>{
    wrap.innerHTML=(D.faqs||[]).map((f,i)=>`
      <div class="faq-edit-row">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
          <strong style="font-size:.82rem">FAQ ${i+1}</strong>
          <button class="cms-btn-del" data-faqd="${i}"><i class="fas fa-trash"></i></button>
        </div>
        <input class="faq-q-inp" data-faqi="${i}" data-faqf="q" value="${esc(f.q)}" placeholder="Question…" />
        <textarea class="faq-a-inp" data-faqi="${i}" data-faqf="a">${esc(f.a)}</textarea>
      </div>`).join('');
    wrap.querySelectorAll('[data-faqi]').forEach(inp=>inp.addEventListener('input',()=>{
      D.faqs[inp.dataset.faqi][inp.dataset.faqf]=inp.value;renderFAQ();saveData();
    }));
    wrap.querySelectorAll('[data-faqd]').forEach(btn=>btn.addEventListener('click',()=>{
      D.faqs.splice(parseInt(btn.dataset.faqd),1);render();renderFAQ();saveData();
    }));
  };
  if(addBtn) addBtn.onclick=()=>{
    D.faqs.push({q:'New question?',a:'Answer goes here.'});render();renderFAQ();saveData();
  };
  render();
}

/* ── Social Editor ── */
function buildSocialEditor() {
  const wrap=document.getElementById('social-editor');
  const addBtn=document.getElementById('add-social-btn');
  if(!wrap) return;
  const render=()=>{
    wrap.innerHTML=(D.socialLinks||[]).map((s,i)=>`
      <div class="social-edit-row">
        <div class="soc-preview"><i class="${esc(s.icon)}"></i></div>
        <input data-soi="${i}" data-sof="icon" value="${esc(s.icon)}" placeholder="fab fa-instagram" />
        <input data-soi="${i}" data-sof="href" value="${esc(s.href)}" placeholder="https://instagram.com/…" />
        <button class="social-toggle${s.active?' on':''}" data-sot="${i}" title="${s.active?'Visible — click to hide':'Hidden — click to show'}"></button>
        <button class="cms-btn-del" data-sod="${i}"><i class="fas fa-trash"></i></button>
      </div>`).join('');
    wrap.querySelectorAll('[data-soi]').forEach(inp=>inp.addEventListener('input',()=>{
      const i=parseInt(inp.dataset.soi);
      D.socialLinks[i][inp.dataset.sof]=inp.value;
      // Update icon preview
      const row=inp.closest('.social-edit-row');
      if(inp.dataset.sof==='icon'){const prev=row.querySelector('.soc-preview i');if(prev)prev.className=inp.value;}
      renderSocialLinks();saveData();
    }));
    wrap.querySelectorAll('[data-sot]').forEach(btn=>btn.addEventListener('click',()=>{
      const i=parseInt(btn.dataset.sot);
      D.socialLinks[i].active=!D.socialLinks[i].active;
      render();renderSocialLinks();saveData();
    }));
    wrap.querySelectorAll('[data-sod]').forEach(btn=>btn.addEventListener('click',()=>{
      D.socialLinks.splice(parseInt(btn.dataset.sod),1);render();renderSocialLinks();saveData();
    }));
  };
  if(addBtn) addBtn.onclick=()=>{
    D.socialLinks.push({icon:'fab fa-facebook-f',label:'New Platform',href:'#',active:true});
    render();renderSocialLinks();saveData();
  };
  render();
}

/* ── Footer Links Editor ── */
function buildFooterLinksEditor() {
  buildLinkList('footer-quicklinks-editor','add-quicklink-btn',D.footerQuickLinks,'footerQuickLinks');
  buildLinkList('footer-servlinks-editor','add-servlink-btn',D.footerServLinks,'footerServLinks');
}
function buildLinkList(wrapId, addBtnId, arr, key) {
  const wrap=document.getElementById(wrapId);
  const addBtn=document.getElementById(addBtnId);
  if(!wrap) return;
  const render=()=>{
    wrap.innerHTML=(arr||[]).map((l,i)=>`
      <div class="footer-link-row">
        <input data-fll="${i}" value="${esc(l.label)}" placeholder="Label" />
        <input data-flh="${i}" value="${esc(l.href)}" placeholder="#section or URL" />
        <button class="fl-del" data-fld="${i}"><i class="fas fa-trash"></i></button>
      </div>`).join('');
    wrap.querySelectorAll('[data-fll]').forEach(inp=>inp.addEventListener('input',()=>{arr[inp.dataset.fll].label=inp.value;renderFooter();saveData();}));
    wrap.querySelectorAll('[data-flh]').forEach(inp=>inp.addEventListener('input',()=>{arr[inp.dataset.flh].href=inp.value;renderFooter();saveData();}));
    wrap.querySelectorAll('[data-fld]').forEach(btn=>btn.addEventListener('click',()=>{arr.splice(parseInt(btn.dataset.fld),1);render();renderFooter();saveData();}));
  };
  if(addBtn) addBtn.onclick=()=>{arr.push({label:'New Link',href:'#'});render();renderFooter();saveData();};
  render();
}

/* ══════════════════════════════════════
   BOOT
══════════════════════════════════════ */
window.addEventListener('load', ()=>{
  setTimeout(()=>{ const l=document.getElementById('loading-screen'); if(l)l.classList.add('done'); }, 2000);
});

loadData();
renderSite();
reobserve();
document.querySelectorAll('.stat-num[data-target]').forEach(el=>ctrObs.observe(el));

console.log('%cHotel VERO CMS v3 — Ready ✦', 'color:#c9a96e;font-family:serif;font-size:14px;');


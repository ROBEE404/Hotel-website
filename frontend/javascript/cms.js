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
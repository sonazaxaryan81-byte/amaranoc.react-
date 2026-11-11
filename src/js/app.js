import { listings } from './data.js';

export function initApp(){
 const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
 const state={currency:'֏',guests:0,overnight:0,category:'all',search:'',sort:'default',favorites:new Set(),visible:32};
 const formatPrice=n=>{const rates={'֏':1,'$':1/390,'€':1/420,'₽':1/4.2};return `${Math.round(n*rates[state.currency]).toLocaleString('en-US')} ${state.currency}`};
 const selected=(selector)=>$$(selector).filter(x=>x.checked).map(x=>x.value);
 const filtered=()=>{
  let list=[...listings];
  if(state.search) list=list.filter(x=>(x.name+' '+x.place).toLowerCase().includes(state.search.toLowerCase()));
  const places=selected('.place-filter'); if(places.length) list=list.filter(x=>places.includes(x.place));
  const amenities=selected('.amenity-filter'); if(amenities.length) list=list.filter(x=>amenities.every(a=>x.amenities.includes(a)));
  const types=selected('.type-filter'); if(types.length) list=list.filter(x=>types.includes(x.type));
  const min=Number($('#priceMin').value)||0,max=Number($('#priceMax').value)||Infinity;
  if(state.currency!=='֏'){const rate={'$':390,'€':420,'₽':4.2}[state.currency];list=list.filter(x=>x.price/rate>=min&&x.price/rate<=max)}
  else list=list.filter(x=>x.price>=min&&x.price<=max);
  if(state.guests) list=list.filter(x=>x.guests>=state.guests);
  if(state.overnight) list=list.filter(x=>x.overnight>=state.overnight);
  if(state.category==='pool'||state.category==='sauna'||state.category==='bbq'||state.category==='mountain'||state.category==='wifi') list=list.filter(x=>x.amenities.includes(state.category));
  if(state.category==='cottage'||state.category==='villa') list=list.filter(x=>x.type===state.category);
  if(state.sort==='price') list.sort((a,b)=>a.price-b.price);
  if(state.sort==='price-desc') list.sort((a,b)=>b.price-a.price);
  return list;
 };
 const card=x=>`<article class="listing-card" data-id="${x.id}">
  <div class="card-photo"><img src="${x.image}" alt="${x.name} հանգստյան տուն" loading="lazy"><span class="photo-count">▧ ${3+(x.id%8)}</span>${x.featured?'<span class="featured-badge">Լավագույն</span>':''}<button class="favorite ${state.favorites.has(x.id)?'is-fav':''}" data-fav="${x.id}" aria-label="Նախընտրածներ">${state.favorites.has(x.id)?'♥':'♡'}</button></div>
  <div class="card-info"><div class="card-title-row"><h3>${x.place}</h3><span class="rating">★ ${x.rating}</span></div><div class="card-meta"><span>♙ ${x.guests} անձ</span><span>⌂ ${x.rooms} սենյակ</span><span>⌖ ${x.overnight} գիշերակաց</span></div><div class="card-price"><strong>${formatPrice(x.price)}</strong><small> / օր</small><button data-detail="${x.id}">Մանրամասն <span>→</span></button></div></div>
 </article>`;
 const render=()=>{
  const list=filtered(), featured=list.filter(x=>x.featured),regular=list.filter(x=>!x.featured);
  $('#featuredGrid').innerHTML=featured.length?featured.map(card).join(''):'';
  $('#regularGrid').innerHTML=regular.slice(0,state.visible).map(card).join('');
  $('.best-heading').hidden=!featured.length;
  $('.regular-heading').hidden=!regular.length;
  $('#resultCount').textContent=`${list.length} առաջարկ`;
  $('#emptyState').hidden=!!list.length;
  $('#loadMore').hidden=regular.length<=state.visible;
  bindCards();

  if (state.sort === 'price') {
  list.sort((a, b) => a.price - b.price);
}

if (state.sort === 'price-desc') {
  list.sort((a, b) => b.price - a.price);
}

if (state.sort === 'rating') {
  list.sort((a, b) => Number(b.rating) - Number(a.rating));
}

if (state.sort === 'guests') {
  list.sort((a, b) => b.guests - a.guests);
}

return list;
 };
 function bindCards(){

    if (state.search) {
  const q = state.search.toLowerCase();

  result = result.filter(item =>
    item.name.toLowerCase().includes(q) ||
    item.place.toLowerCase().includes(q)
  );
}
  $$('[data-fav]').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();const id=+b.dataset.fav;state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);render();toast(state.favorites.has(id)?'Ավելացվեց նախընտրածների մեջ':'Հեռացվեց նախընտրածներից')}));
  $$('[data-detail]').forEach(b=>b.addEventListener('click',()=>showDetail(+b.dataset.detail)));
  $$('.listing-card').forEach(c=>c.addEventListener('click',e=>{if(!e.target.closest('button'))showDetail(+c.dataset.id)}));
 }
 function showDetail(id){
  const x=listings.find(v=>v.id===id);if(!x)return;
  $('#modalContent').innerHTML=`<img class="modal-image" src="${x.image}" alt="${x.name}"><div class="modal-body"><span class="section-kicker">${x.place.toUpperCase()}</span><h2>${x.name} — հանգստյան տուն</h2><div class="modal-facts"><span>★ ${x.rating} գնահատական</span><span>♙ Մինչև ${x.guests} անձ</span><span>⌂ ${x.rooms} սենյակ</span></div><p>Հարմարավետ հանգստյան տուն՝ հաճելի հանգստի համար։ Ունի լողավազան, Wi-Fi և խորովածի գոտի։ Կապ հաստատիր՝ հասանելի օրերն ու պայմանները ճշտելու համար։</p><div class="modal-price">${formatPrice(x.price)} <small>/ օր</small></div><a class="btn-dark modal-call" href="tel:+37400000000">Կապ հաստատել</a></div>`;
  $('#detailModal').showModal();
 }
 $('#modalClose').addEventListener('click',()=>$('#detailModal').close());
 $('#detailModal').addEventListener('click',e=>{if(e.target===$('#detailModal'))$('#detailModal').close()});
 function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),2300)}
 $('#currencySwitch').addEventListener('click',e=>{if(e.target.matches('button')){state.currency=e.target.dataset.currency;$$('#currencySwitch button').forEach(b=>b.classList.toggle('selected',b===e.target));render()}});
 $$('[data-step]').forEach(b=>b.addEventListener('click',()=>{const k=b.dataset.step;state[k]=Math.max(0,state[k]+Number(b.dataset.delta));$('#'+(k==='guests'?'guests':'overnight')+'Value').textContent=state[k];render()}));
 $$('.place-filter,.amenity-filter,.type-filter').forEach(x=>x.addEventListener('change',render));
 ['priceMin','priceMax'].forEach(id=>$('#'+id).addEventListener('change',render));
 const doSearch=v=>{state.search=v.trim();$('#topSearch').value=v;render()};
// Live search — արդյունքները թարմացնել մուտքագրելիս
$('#topSearch').addEventListener('input', e => {
  doSearch(e.target.value);
// Clear search without resetting other filters
$('#clearSearch').addEventListener('click', () => {
  state.search = '';
  $('#topSearch').value = '';
  render();
});
});
 $('#topSearchBtn').addEventListener('click',()=>doSearch($('#topSearch').value));
 $('#topSearch').addEventListener('keydown',e=>{if(e.key==='Enter')doSearch(e.target.value)});
 $('#applyFilters').addEventListener('click',render);
 function clear(){ $$('.sidebar input[type=checkbox]').forEach(x=>x.checked=false);$('#priceMin').value='';$('#priceMax').value='';state.guests=state.overnight=0;$('#guestsValue').textContent=$('#overnightValue').textContent='0';state.search='';$('#topSearch').value='';state.category='all';$$('.category').forEach(x=>x.classList.toggle('active',x.dataset.category==='all'));render()}
 $('#clearFilters').addEventListener('click',clear);$('#emptyClear').addEventListener('click',clear);
 $$('.category').forEach(b=>b.addEventListener('click',()=>{state.category=b.dataset.category;$$('.category').forEach(x=>x.classList.toggle('active',x===b));render()}));
 $('#sortBtn').addEventListener('click',()=>{state.sort=state.sort==='default'?'price':state.sort==='price'?'price-desc':'default';$('#sortBtn').textContent=state.sort==='price'?'Գին՝ աճող':state.sort==='price-desc'?'Գին՝ նվազող':'⇅ Դասավորել';render()});

 $('#sortSelect').addEventListener('change', (e) => {
  state.sort = e.target.value;
  render();
});
 $('#loadMore').addEventListener('click',()=>{state.visible+=12;render()});
 $('#favoritesTop').addEventListener('click',()=>{state.search='';render();const fav=[...state.favorites];if(!fav.length){toast('Նախընտրածների ցանկը դատարկ է');return}$('#resultCount').textContent=`${fav.length} նախընտրած առաջարկ`;$('#featuredGrid').innerHTML='';$('#regularGrid').innerHTML=listings.filter(x=>state.favorites.has(x.id)).map(card).join('');$('.regular-heading').hidden=false;$('.regular-heading span').textContent='Նախընտրածներ';$('.best-heading').hidden=true;bindCards()});
 $('#mapBtn').addEventListener('click',()=>toast('Քարտեզի ցուցադրումը ցուցադրական տարբերակում հասանելի չէ'));
 $('#mobileMap').addEventListener('click',()=>toast('Քարտեզի ցուցադրումը ցուցադրական տարբերակում հասանելի չէ'));
 $('#languageBtn').addEventListener('click',()=>toast('Լեզուների տարբերակները՝ հայերեն, English, Русский'));
 $('#loginBtn').addEventListener('click',()=>toast('Մուտքի բաժինը ցուցադրական տարբերակում հասանելի չէ'));
 $('#mobileMenu').addEventListener('click',()=>$('#mainNav').classList.toggle('open'));
 $$('#mainNav a').forEach(a=>a.addEventListener('click',()=>$('#mainNav').classList.remove('open')));
 const openFilters=()=>{$('#sidebar').classList.add('open');$('#mobileBackdrop').classList.add('visible')};
 const closeFilters=()=>{$('#sidebar').classList.remove('open');$('#mobileBackdrop').classList.remove('visible')};
 $('#openFilters').addEventListener('click',openFilters);$('#closeFilters').addEventListener('click',closeFilters);$('#mobileBackdrop').addEventListener('click',closeFilters);
 $('#contactForm').addEventListener('submit',e=>{e.preventDefault();$('#formMessage').textContent='Շնորհակալություն։ Ձեր տվյալները լրացվել են, և մենք կկապնվենք Ձեզ հետ։';e.target.reset()});
 render();
}

// Mobile navigation accessibility
const mobileMenu = $('#mobileMenu');
const mainNav = $('#mainNav');

// Փակել մենյուն
const closeMobileMenu = () => {
  mainNav.classList.remove('open');
  mobileMenu.setAttribute('aria-expanded', 'false');
};

// Բացել և փակել մենյուն
mobileMenu.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');

  mobileMenu.setAttribute('aria-expanded', String(isOpen));
});

// Հղման վրա սեղմելիս փակել մենյուն
$$('#mainNav a').forEach(a => {
  a.addEventListener('click', closeMobileMenu);
});

// Escape ստեղնով փակել մենյուն
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMobileMenu();
  }
});
import './css/style.css';
import { initApp } from './js/app.js';

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="#home" aria-label="Amaranoc գլխավոր էջ">
        <span class="brand-name">AMARANOC<span>.AM</span></span>
        <small>ՀԱՆԳՍՏԻ ՔՈ ՀԱՍՑԵՆ</small>
      </a>
      <button class="mobile-menu" id="mobileMenu" aria-label="Բացել մենյուն">☰</button>
      <nav class="main-nav" id="mainNav">
        <a class="active" href="#home">Գլխավոր</a>
        <a href="#discounts">Զեղչեր</a>
        <a href="#services">Ծառայություններ</a>
        <a href="#about">Մեր մասին</a>
      </nav>
      <div class="header-actions">
        <button class="icon-button" id="favoritesTop" title="Նախընտրածներ">♡</button>
        <button class="icon-button" id="languageBtn" title="Լեզու">◎</button>
       

  <main id="home">
    <div class="mobile-filter-bar"><button id="openFilters">☷ Ֆիլտրեր</button><button id="mobileMap">⌖ Քարտեզ</button></div>
    <div class="catalog-layout">
      <aside class="sidebar" id="sidebar">
        <div class="filter-head"><strong>Ֆիլտրեր</strong><button class="close-filters" id="closeFilters">×</button></div>
        <section class="filter-group">
          <h3>Հանգստի վայր</h3>
          <div class="check-list">
            <label><input type="checkbox" value="Բջնի" class="place-filter"> Բջնի</label>
            <label><input type="checkbox" value="Ծաղկաձոր" class="place-filter"> Ծաղկաձոր</label>
            <label><input type="checkbox" value="Դիլիջան" class="place-filter"> Դիլիջան</label>
            <label><input type="checkbox" value="Աղվերան" class="place-filter"> Աղվերան</label>
            <label><input type="checkbox" value="Ապարան" class="place-filter"> Ապարան</label>
            <label><input type="checkbox" value="Ջերմուկ" class="place-filter"> Ջերմուկ</label>
            <label><input type="checkbox" value="Այլ" class="place-filter"> Այլ վայրեր</label>
          </div>
        </section>
        <section class="filter-group">
          <h3>Արժեք</h3>
          <div class="currency-switch" id="currencySwitch"><button class="selected" data-currency="֏">֏</button><button data-currency="$">$</button><button data-currency="€">€</button><button data-currency="₽">₽</button></div>
          <div class="range-inputs"><input id="priceMin" type="number" min="0" placeholder="Սկսած"><input id="priceMax" type="number" min="0" placeholder="Մինչև"></div>
        </section>
        <section class="filter-group">
          <h3>Մարդկանց թույլատրելի քանակ</h3>
          <div class="stepper"><button data-step="guests" data-delta="-1">−</button><output id="guestsValue">0</output><button data-step="guests" data-delta="1">+</button></div>
        </section>
        <section class="filter-group">
          <h3>Մարդկանց թույլատրելի քանակը գիշերակացով</h3>
          <div class="stepper"><button data-step="overnight" data-delta="-1">−</button><output id="overnightValue">0</output><button data-step="overnight" data-delta="1">+</button></div>
        </section>
        <section class="filter-group">
          <h3>Հարմարություններ</h3>
          <div class="check-list">
            <label><input type="checkbox" class="amenity-filter" value="pool"> Լողավազան</label>
            <label><input type="checkbox" class="amenity-filter" value="sauna"> Սաունա</label>
            <label><input type="checkbox" class="amenity-filter" value="wifi"> Wi-Fi</label>
            <label><input type="checkbox" class="amenity-filter" value="bbq"> Խորովածի գոտի</label>
            <label><input type="checkbox" class="amenity-filter" value="mountain"> Տեսարան դեպի լեռներ</label>
          </div>
        </section>
        <section class="filter-group">
          <h3>Տան տեսակ</h3>
          <div class="check-list">
            <label><input type="checkbox" class="type-filter" value="cottage"> Քոթեջ</label>
            <label><input type="checkbox" class="type-filter" value="house"> Առանձնատուն</label>
            <label><input type="checkbox" class="type-filter" value="villa"> Վիլլա</label>
          </div>
        </section>
        <div class="filter-actions"><button class="btn-light" id="clearFilters">Մաքրել</button><button class="btn-dark" id="applyFilters">Ցուցադրել</button></div>
      </aside>

      <section class="catalog-content">
        <div class="category-strip">
          <button class="category active" data-category="all"><span>⌂</span> Բոլորը</button>
          <button class="category" data-category="pool"><span>♒</span> Լողավազան</button>
          <button class="category" data-category="cottage"><span>⌂</span> Քոթեջներ</button>
          <button class="category" data-category="sauna"><span>♨</span> Սաունա</button>
          <button class="category" data-category="mountain"><span>♧</span> Լեռնային</button>
          <button class="category" data-category="family"><span>♙</span> Ընտանեկան</button>
          <button class="category" data-category="bbq"><span>♨</span> Խորոված</button>
          <button class="category" data-category="wifi"><span>⌁</span> Wi-Fi</button>
          <button class="category" data-category="villa"><span>⌂</span> Վիլլաներ</button>
          <button class="category" data-category="view"><span>◉</span> Տեսարան</button>
          <button class="category" data-category="more"><span>•••</span> Ավելին</button>
        </div>
        <div class="catalog-toolbar">
          <div><p class="eyebrow">ԳՏԻՐ ՔՈ ՀԱՆԳԻՍՏԸ ՀԱՅԱՍՏԱՆՈՒՄ</p><h1>Հանգստյան տներ և ամառանոցներ</h1></div>
          <div class="toolbar-right"><span id="resultCount">32 առաջարկ</span><button class="sort-btn" id="sortBtn">⇅ Դասավորել</button><button class="view-btn active" title="Ցանց">▦</button><button class="view-btn" id="mapBtn" title="Քարտեզ">⌖</button></div>
        </div>
        <div class="best-heading"><span>✦</span> Լավագույն առաջարկներ</div>
        <div class="listing-grid" id="featuredGrid"></div>
        <div class="regular-heading"><span>Հանգստյան տներ</span><small>Սովորական առաջարկներ</small></div>
        <div class="listing-grid" id="regularGrid"></div>
        <div class="empty-state" id="emptyState" hidden><div>⌕</div><h3>Համապատասխան առաջարկ չի գտնվել</h3><p>Փորձիր փոխել որոնման կամ ֆիլտրերի պայմանները։</p><button class="btn-dark" id="emptyClear">Մաքրել ֆիլտրերը</button></div>
        <button class="load-more" id="loadMore">Ցուցադրել ավելին <span>↓</span></button>
      </section>
    </div>

    <section class="discount-section" id="discounts">
      <div class="section-title"><span>ՀԱՏՈՒԿ ԱՌԱՋԱՐԿՆԵՐ</span><h2>Լավագույն զեղչերը</h2><p>Բաց մի թող քո հաջորդ հանգստի լավագույն հնարավորությունը։</p></div>
      <div class="discount-grid">
        <article class="discount-card discount-one"><span class="discount-tag">ՄԻՆՉԵՎ</span><strong>-15%</strong><h3>Ամառային հանգիստ</h3><p>Ընտրված հանգստյան տներում</p></article>
        <article class="discount-card discount-two"><span class="discount-tag">ՀԱՏՈՒԿ ԳԻՆ</span><strong>-10%</strong><h3>Հանգիստ ընկերների հետ</h3><p>Ամրագրիր անմոռանալի օրեր</p></article>
        <article class="discount-card discount-three"><span class="discount-tag">ՇԱԲԱԹՎԱ ԱՌԱՋԱՐԿ</span><strong>-5%</strong><h3>Հանգիստ ընտանիքով</h3><p>Հարմարավետություն բոլորի համար</p></article>
      </div>
    </section>

    <section class="services-section" id="services">
      <div class="section-title"><span>ՄԵՐ ՀՆԱՐԱՎՈՐՈՒԹՅՈՒՆՆԵՐԸ</span><h2>Ծառայություններ</h2><p>Ամեն ինչ՝ հարմարավետ և անհոգ հանգստի համար։</p></div>
      <div class="service-grid">
        <article><div class="service-icon">⌕</div><h3>Հեշտ որոնում</h3><p>Գտիր քո նախընտրած հանգստյան տունը՝ մի քանի պարզ քայլով։</p></article>
        <article><div class="service-icon">♧</div><h3>Ընտրության լայն հնարավորություն</h3><p>Տարբեր վայրեր, գներ և հարմարություններ՝ մեկ հարթակում։</p></article>
        <article><div class="service-icon">♡</div><h3>Անհատական մոտեցում</h3><p>Օգնում ենք ընտրել հանգստի լավագույն տարբերակը։</p></article>
        <article><div class="service-icon">✓</div><h3>Վստահելի կապ</h3><p>Կապ հաստատիր տան սեփականատիրոջ հետ հեշտությամբ։</p></article>
      </div>
    </section>

    <section class="about-section" id="about">
      <div class="about-image"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85" alt="Ժամանակակից հանգստյան տուն"></div>
      <div class="about-copy"><span class="section-kicker">ՄԵՐ ՄԱՍԻՆ</span><h2>Քո հանգիստը սկսվում է այստեղից</h2><p>Amaranoc.am հարթակը ստեղծված է, որպեսզի Հայաստանում հանգստյան տուն գտնելը լինի հեշտ, արագ և հարմարավետ։ Այստեղ կարող ես ուսումնասիրել տարբեր առաջարկներ, համեմատել պայմանները և գտնել հենց քո հանգստին համապատասխան տարբերակը։</p><p>Մեր նպատակն է միավորել հանգստացողներին և հանգստյան տների սեփականատերերին՝ ստեղծելով պարզ ու վստահելի միջավայր։</p><a class="outline-link" href="#contact">Կապ հաստատել <span>→</span></a></div>
    </section>

    <section class="reviews-section">
      <div class="section-title"><span>ԿԱՐԾԻՔՆԵՐ</span><h2>Մեր հաճախորդները</h2><p>Հանգստի լավագույն պահերը սկսվում են ճիշտ ընտրությունից։</p></div>
      <div class="review-grid">
        <article><div class="stars">★★★★★</div><p>«Շատ հարմար հարթակ է։ Արագ գտանք մեր ընտանիքի համար գեղեցիկ տուն՝ լողավազանով»։</p><strong>Անի Մ.</strong><small>Երևան</small></article>
        <article><div class="stars">★★★★★</div><p>«Ընտրությունը մեծ է, իսկ կայքից օգտվելը՝ շատ հեշտ։ Անպայման նորից կօգտվենք»։</p><strong>Գոռ Հ.</strong><small>Գյումրի</small></article>
        <article><div class="stars">★★★★★</div><p>«Գտանք հրաշալի քոթեջ Դիլիջանում։ Հանգիստը ստացվեց անմոռանալի»։</p><strong>Մարիամ Ս.</strong><small>Երևան</small></article>
      </div>
    </section>

    <section class="contact-banner" id="contact">
      <div class="contact-overlay">
        <span>ՔՈ ՀԱՋՈՐԴ ՀԱՆԳԻՍՏԸ ՍԿՍՎՈՒՄ Է ԱՅՍՏԵՂ</span><h2>Տեղադրե՞լ հայտարարություն</h2>
        <p>Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ։</p>
        <form id="contactForm" class="contact-form"><input name="name" placeholder="Անուն Ազգանուն" required><input name="phone" placeholder="Հեռախոսահամար" required><input name="email" type="email" placeholder="Էլ․ հասցե"><button type="submit">Ուղարկել <span>→</span></button></form>
        <p class="form-message" id="formMessage" aria-live="polite"></p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-brand"><a class="brand brand-light" href="#home"><span class="brand-name">AMARANOC<span>.AM</span></span><small>ՀԱՆԳՍՏԻ ՔՈ ՀԱՍՑԵՆ</small></a><p>Գտիր քո կատարյալ հանգիստը Հայաստանում։</p></div>
      <div><h3>Կոնտակտներ</h3><a href="tel:+37400000000">+374 00 00 00 00</a><a href="mailto:info@amaranoc.am">info@amaranoc.am</a><span>Թումանյան 5, Երևան</span></div>
      <div><h3>Տեղեկատվություն</h3><a href="#about">Մեր մասին</a><a href="#services">Ծառայություններ</a><a href="#contact">Տեղադրել հայտարարություն</a></div>
      <div><h3>Հետևեք մեզ</h3><div class="socials"><a href="#contact">f</a><a href="#contact">◎</a><a href="#contact">▶</a></div><span>Ամառանոց ՍՊԸ</span></div>
    </div>
    <div class="footer-bottom"><span>© 2026 Amaranoc.am — Բոլոր իրավունքները պաշտպանված են</span><a href="#about">Գաղտնիության քաղաքականություն</a><span>Amaranoc LLC</span></div>
  </footer>
  <div class="toast" id="toast" role="status"></div>
  <dialog class="detail-modal" id="detailModal"><button class="modal-close" id="modalClose">×</button><div id="modalContent"></div></dialog>
  <div class="mobile-backdrop" id="mobileBackdrop"></div>
`;
initApp();

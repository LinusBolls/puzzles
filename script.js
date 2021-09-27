(() => {
  function initFooter() {
    const footerEl = document.querySelector(`[js-data-slot="footer"]`);
    if (!footerEl) return;

    footerEl.innerHTML += `<a href="/impressum.html#impressum">Impressum</a>
    <span class="copyright" style="padding: 0 2rem"
      >© Linus Bolls 2021</span
    >
    <a href="/impressum.html#datenschutz">Datenschutz</a>`;
  }
  function initHeader() {
    const headerEl = document.querySelector(`[js-data-slot="header"]`);
    if (!headerEl) return;

    headerEl.innerHTML = `<a href="/" class="header__logo"
      ><img src="/gallery/logo.png" alt="Puzzles Logo"/>
      <h2>PUZZLES</h2>
    </a>
    <navbar class="header__navbar">
      <a href="/#events">Events</a>
      <a href="/#anfahrt">Anfahrt</a>
      <a href="/#preise">Preise</a>
      <a href="/#kontakt">Kontakt</a>
      <a href="/#zeiten">Öffnungszeiten</a>
    </navbar>
    <div class="header__menuButton">
      <button class="button invis square icon menuButton">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="flyoutShadow"></div>
    <div class="flyoutMenu flyoutMenu--closed">
      <a href="/" class="logo"><img src="/gallery/logo.png" alt="Puzzles Logo"/></a>
      <a href="/#events">Events</a>
      <a href="/#anfahrt">Anfahrt</a>
      <a href="/#preise">Preise</a>
      <a href="/#kontakt">Kontakt</a>
      <a href="/#zeiten">Öffnungszeiten</a>
      <a href="/impressum.html#impressum">Impressum</a>
      <a href="/impressum.html#datenschutz">Datenschutz</a>
      <span class="copyright">© Linus Bolls 2021</span>
    </div>`;

    let isAtTop = true;
    const scrollListener = () => {
      const scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
      if (scrollTop > 0 && isAtTop) {
        isAtTop = false;
        document
          .querySelector(`[js-data-slot="header"]`)
          .classList.add("header--solid");
      }
      if (scrollTop <= 0 && !isAtTop) {
        isAtTop = true;
        document
          .querySelector(`[js-data-slot="header"]`)
          .classList.remove("header--solid");
      }
    };
    const toggleFlyout = () => {
      const flyout = document.querySelector(".flyoutMenu");
      const flyoutShadow = document.querySelector(".flyoutShadow");
      const button = document.querySelector(".menuButton");
      flyout.classList.toggle("flyoutMenu--open");
      flyout.classList.toggle("flyoutMenu--closed");
      button.classList.toggle("menuButton--open");
      flyoutShadow.classList.toggle("flyoutShadow--open");
    };
    scrollListener(); //  in case the page isnt loaded at the top
    document.querySelector(".header__menuButton").onclick = toggleFlyout;
    document.querySelector(".flyoutShadow").onclick = toggleFlyout;
    document.onscroll = scrollListener;
  }
  function initGallery() {
    const galleryEl = document.querySelector(`[js-data-slot="gallery"]`);
    if (!galleryEl) return;

    const galleryColumns = [
      [
        ["img_10.jpg", "Bar"],
        ["img_27.jpg", "Nether"],
        ["img_30.jpg", "Rosenzimmer"],
        ["img_29.jpg", "Glory Hole"],
      ],
      [
        ["img_19.jpg", "Blue Light Bereich"],
        ["img_26.jpg", "Pilzzimmer"],
        ["img_20.jpg", "Blue Light Bereich"],
      ],
      [
        ["img_17.jpg", "Massagestuhl"],
        ["img_15.jpg", "Umkleideraum"],
        ["img_5.jpg", "Wohnzimmer"],
        ["img_18.jpg", "Blue Light Bereich"],
      ],
      [
        ["img_17.jpg", "Massagestuhl"],
        ["img_15.jpg", "Umkleideraum"],
        ["img_5.jpg", "Wohnzimmer"],
        ["img_18.jpg", "Blue Light Bereich"],
      ],
    ];
    const galleryImg = ([path, desc]) =>
      `<a href="gallery/img/${path}" data-caption="${desc}">
      <img src="gallery/img/${path}" alt="${desc}">
    </a>`;

    const galleryColumn = (column, index) =>
      `<div class="gallery__column" style="grid-area: c${index}">
      ${column.map(galleryImg).join("")}
    </div>`;

    galleryEl.innerHTML = galleryColumns.map(galleryColumn).join("");
    baguetteBox.run(".gallery");
  }
  window.onload = () => {
    initHeader();
    initFooter();
    initGallery();
  };
})();

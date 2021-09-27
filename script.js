(() => {
  const navLinks = `<a href="/#events">Events</a>
  <a href="/#anfahrt">Anfahrt</a>
  <a href="/#preise">Preise</a>
  <a href="/#kontakt">Kontakt</a>
  <a href="/#zeiten">Öffnungszeiten</a>`;

  const fillSlot = (query, template) => {
    const els = document.querySelectorAll(query);
    els.forEach(el => (el.innerHTML = template));
    return els.length > 0 ? true : false;
  };
  function initFooter() {
    fillSlot(
      `[js-data-slot="footer"]`,
      `<a href="/impressum.html#impressum">Impressum</a>
    <span class="copyright">© Linus Bolls ${new Date().getFullYear()}</span>
    <a href="/impressum.html#datenschutz">Datenschutz</a>`
    );
  }
  function initHeader() {
    const headerExists = fillSlot(
      `[js-data-slot="header"]`,
      `<a href="/" class="header__logo"
    ><img src="/gallery/logo.png" alt="Puzzles Logo"/>
    <h2>PUZZLES</h2>
  </a>
  <navbar class="header__navbar">${navLinks}</navbar>
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
    ${navLinks}
    <footer js-data-slot="footer"></footer>
  </div>`
    );
    if (!headerExists) return;

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
        ["img_25.jpg", "Massagestuhl"],
        ["img_5.jpg", "Wohnzimmer"],
        ["img_3.jpg", "Wohnzimmer"],
        ["img_18.jpg", "Blue Light Bereich"],
      ],
      [
        ["img_17.jpg", "Massagestuhl"],
        ["img_15.jpg", "Umkleideraum"],
        ["img_24.jpg", "Thing"],
        ["img_14.jpg", "Puzzles Logo"],
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

    const galleryExists = fillSlot(
      `[js-data-slot="gallery"]`,
      galleryColumns.map(galleryColumn).join("")
    );
    if (galleryExists) baguetteBox.run(".gallery");
  }
  window.onload = () => {
    initHeader();
    initFooter();
    initGallery();
  };
})();

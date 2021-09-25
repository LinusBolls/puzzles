let isAtTop = true;
const scrollListener = () => {
  const scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  if (scrollTop > 0 && isAtTop) {
    isAtTop = false;
    document.querySelector(".header").classList.add("header--solid");
  }
  if (scrollTop <= 0 && !isAtTop) {
    isAtTop = true;
    document.querySelector(".header").classList.remove("header--solid");
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
window.addEventListener("load", () => {
  document.querySelector(".header__menuButton").onclick = toggleFlyout;
  document.querySelector(".flyoutShadow").onclick = toggleFlyout;
  document.onscroll = scrollListener;

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
  document.querySelector(".gallery").innerHTML = galleryColumns
    .map(
      (column, index) =>
        `<div class="gallery__column" style="grid-area: c${index}">` +
        column
          .map(
            ([path, desc]) =>
              `<a href="gallery/img/${path}" data-caption="${desc}">
  <img src="gallery/img/${path}" alt="${desc}">
</a>`
          )
          .join("") +
        "</div>"
    )
    .join("");
  baguetteBox.run(".gallery");
});

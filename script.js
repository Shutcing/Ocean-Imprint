const logoWidth = `${document.querySelector(".header__logo").clientWidth}px`;
document.querySelector(".main__explore").style.width = logoWidth;
document.querySelector(".contact__time").style.width = logoWidth;
document.querySelector(".rules__copyright").style.width = logoWidth;
document
  .querySelectorAll(".info__block-title")
  .forEach((item) => (item.style.minWidth = logoWidth));

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu-curtain");

  burgerMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("mobile-menu--active");

    this.classList.toggle("burger--active");
  });
});

function adjustFontSize(element) {
  const containerWidth = element.parentElement.offsetWidth;
  let fontSize = 10;
  element.style.fontSize = fontSize + "px";

  while (
    element.offsetWidth < document.body.clientWidth - 46 &&
    fontSize < 1000
  ) {
    fontSize++;
    element.style.fontSize = fontSize + "px";
  }
}

setInterval(() =>
  adjustFontSize(document.querySelector(".footer__title"), 1500)
);

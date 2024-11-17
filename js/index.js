const navLink = document.querySelectorAll(".promo__header-list li a");

navLink.forEach((item) => {
  item.addEventListener("click", () => {
    navLink.forEach((elem) => {
      elem.classList.remove("active");
      item.classList.add("active");
    });
  });
});

const burgerClick = document.querySelector(".header__burger");
const burgerOpenMobile = document.querySelector(".header__mobile");
const scrollLock = document.querySelector(".body");
const promoMobileMenu = document.querySelector(".mobile-menu");

if (burgerClick) {
  burgerClick.addEventListener("click", () => {
    burgerClick.classList.toggle("active");
    promoMobileMenu.classList.toggle("active");
    scrollLock.classList.toggle("lock");
  });
}

const links = document.querySelectorAll(".services__item-bottom a");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const servicesItem = event.target.closest(".services__item");
    const topParagraph = servicesItem.querySelector(".services__item-top p");
    if (topParagraph) {
      console.log(topParagraph.textContent);
    }
  });
});

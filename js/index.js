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
const scrollLock = document.querySelector(".page");

if (burgerClick) {
  burgerClick.addEventListener("click", () => {
    burgerClick.classList.toggle("active");
    scrollLock.classList.toggle("lock");
  });
}

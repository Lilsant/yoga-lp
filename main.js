const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar--mobile");
const menuOpenButton = document.querySelector(".menu__button");
const menuCloseButton = document.querySelector(".menu__close-btn");

menuOpenButton.addEventListener("click", () => {
  menu.style.display = "block";
  navbar.style.display = "block";
  document.body.style.overflow = "hidden";
  menuOpenButton.style.display = "none";
});

menuCloseButton.addEventListener("click", () => {
  menu.style.display = "none";
  navbar.style.display = "none";
  document.body.style.overflow = "";
  menuOpenButton.style.display = "flex";
});

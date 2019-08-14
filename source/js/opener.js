var button = document.querySelector(".header__wrap");
var menu = document.querySelector(".main-nav");

button.addEventListener("click", function (evt) {
  if (menu.classList.contains("menu-closed")) {
    menu.classList.remove("menu-closed")
    button.classList.add("header__wrap--close");
  }
  else {
    menu.classList.add("menu-closed");
    button.classList.remove("header__wrap--close");
  }
});

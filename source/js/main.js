var button = document.querySelector(".header__wrap");
var menuSite = document.querySelector(".main-nav--site");
var menuUser = document.querySelector(".main-nav--user");
var modal = document.querySelector(".modal");
var cart = document.querySelectorAll(".product__reserve");
var overlay = document.querySelector(".overlay");

menuSite.classList.add("menu-closed");
menuUser.classList.add("menu-closed");

button.addEventListener("click", function (evt) {
  if (menuSite.classList.contains("menu-closed")) {
    menuSite.classList.remove("menu-closed");
    menuUser.classList.remove("menu-closed");
    button.classList.add("header__wrap--close");
  }
  else {
    menuSite.classList.add("menu-closed");
    menuUser.classList.add("menu-closed");
    button.classList.remove("header__wrap--close");
  }
});

for (var i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", function (evt) {
    if (modal.classList.contains("modal--closed")) {
      modal.classList.remove("modal--closed");
      overlay.classList.add("overlay--on");
    }
  });
}

if (overlay) {
  overlay.addEventListener("click", function (evt) {
    if (!modal.classList.contains("modal--closed")) {
      modal.classList.add("modal--closed");
      overlay.classList.remove("overlay--on");
    }
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!modal.classList.contains("modal--closed")) {
      modal.classList.add("modal--closed");
      overlay.classList.remove("overlay--on");
    }
  }
});

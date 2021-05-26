const headerWrapperEl = document.getElementById("header__wrap");
const hamburgarMenuEl = document.getElementById("menu-btn");

hamburgarMenuEl.addEventListener("click", () =>
  headerWrapperEl.classList.toggle("nav-active")
);

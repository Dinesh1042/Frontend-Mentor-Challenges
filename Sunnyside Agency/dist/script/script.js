const headerNav = document.getElementById("header_nav");
const menuBtn = document.getElementById("menu_btn");

const orangeGlassEl = document.getElementById("orangeGlass");

const cardEl = document.querySelector(".card1");

menuBtn.addEventListener("click", () =>
  headerNav.classList.toggle("nav-active")
);

window.addEventListener("scroll", (e) => {
  let scrollY = window.scrollY;
  let height = window.innerHeight;
  let final = (scrollY / height) * 100;
  final = Math.floor(final);
  orangeGlassEl.style.transform = ` translate(-50%) rotate(${final}deg)`;
});

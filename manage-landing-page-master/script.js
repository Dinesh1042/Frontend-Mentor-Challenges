const navContlEl = document.getElementById("navCont");
const hamburgalEl = document.getElementById("hamburgar");
const navLinkslEl = document.getElementById("navLinks");

let isNavOpen = false;

const attr = document.createAttribute("isNavExpaned");
attr.value = isNavOpen;

navContlEl.setAttributeNode(attr);

hamburgalEl.addEventListener("click", toggleNav);

function toggleNav() {
  isNavOpen = !isNavOpen;
  attr.value = isNavOpen;
}

window.addEventListener("click", (e) => {
  if (e.target.closest(".overLay") && !e.target.closest(".hamburgar")) {
    isNavOpen = false;
    attr.value = isNavOpen;
  }
});

window.addEventListener("scroll", (e) => {
  isNavOpen = false;
  attr.value = isNavOpen;
});

// Get Year

(function () {
  const date = new Date().getFullYear();
  const yearEl = document.getElementById("year");
  yearEl.innerHTML = date;
})();

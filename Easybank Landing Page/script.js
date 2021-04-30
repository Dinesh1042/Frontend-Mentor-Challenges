const hamburgarEl = document.getElementById("hamburgar");
const navCenterEl = document.getElementById("navCenter");
const navEl = document.querySelector("nav");

const navLiTag = document.querySelectorAll(".navCenter ul li a");

let isNavOpened = false;
const attr = document.createAttribute("data-isNavOpened");
attr.value = isNavOpened;
navEl.setAttributeNode(attr);

hamburgarEl.addEventListener("click", () => {
  attr.value = navToggle();
});

function navToggle() {
  return (isNavOpened = !isNavOpened);
}

window.addEventListener("click", (e) => {
  if (!e.target.closest(".navCenter") && !e.target.closest(".hamburgar")) {
    return resetNav();
  }
});

function resetNav() {
  return [(isNavOpened = false), (attr.value = false)];
}

navLiTag.forEach((tag) => {
  tag.addEventListener("click", (e) => {
    resetNav();
  });
});

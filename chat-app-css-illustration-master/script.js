const navBtnEl = document.getElementById("navBtn");
const navContEl = document.getElementById("navCont");

let isNavOpen = false;

const navAttr = document.createAttribute("isnavopen");
navAttr.value = isNavOpen;

navContEl.setAttributeNode(navAttr);

navBtnEl.addEventListener("click", showNav);

function navToggle() {
  return (isNavOpen = isNavOpen ? false : true);
}

function showNav() {
  return (navAttr.value = navToggle());
}

window.addEventListener("click", (e) => {
  if (!e.target.closest(".navCont") && !e.target.closest(".topRight")) {
    isNavOpen = false;
    return (navAttr.value = isNavOpen);
  } else {
    return;
  }
});

const titleElement = document.querySelectorAll(
  "nav .navLeft .linksCont .dropDownCont .listCont"
);

titleElement.forEach((title) => {
  title.addEventListener("click", (e) => {
    if (window.innerWidth < 900) {
      if (!e.target.closest(".items")) {
        title.classList.toggle("active");
      }
    }
  });
});

// Hamburgar

const hamburgarEl = document.getElementById("hamburgar");
const navContEl = document.getElementById("navCont");

const attr = document.createAttribute("data-isnavexpanded");
attr.value = false;

navContEl.setAttributeNode(attr);

hamburgarEl.addEventListener("click", (e) => {
  titleElement.forEach((title) => {
    title.classList.remove("active");
  });
  const currentVal = JSON.parse(
    navContEl.getAttributeNode("data-isnavexpanded").value
  );
  attr.value = !currentVal;
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".hamburgar") && !e.target.closest(".linksCont")) {
    attr.value = false;
   
  }
});

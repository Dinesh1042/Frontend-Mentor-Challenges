const bodyEl = document.querySelector("body");
const switchContEl = document.getElementById("switchCont");

console.log(bodyEl);

const attr = document.createAttribute("data-islightMode");
const local = getLocal();

if (local) {
  attr.value = JSON.parse(getLocal().isLightMode);
} else {
  attr.value = false;
}

bodyEl.setAttributeNode(attr);

switchContEl.addEventListener("click", (e) => {
  setAttr();
  setlocal();
});

function setAttr() {
  return (attr.value = JSON.parse(attr.value) ? false : true);
}

function setlocal() {
  const localValue = { isLightMode: attr.value };

  return localStorage.setItem("isLightMode", JSON.stringify(localValue));
}

function getLocal() {
  return localStorage.getItem("isLightMode")
    ? JSON.parse(localStorage.getItem("isLightMode"))
    : "";
}

window.addEventListener("keyup", (e) => {
  if (e.key === "`") {
    setAttr();
    setlocal();
  }
});

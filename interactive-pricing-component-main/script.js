const sliderEl = document.getElementById("slider");

const toggleContEl = document.getElementById("toggleCont");

const priceEl = document.getElementById("price");
const priceEl2 = document.getElementById("price2");

const pageViewsEl = document.getElementById("pageViews");

let isYearlyBilling = false;

let minValue = 3.2;
let minPageView = 20;

const isYearlyAttr = document.createAttribute("data-isyearlybilling");

isYearlyAttr.value = isYearlyBilling;

toggleContEl.setAttributeNode(isYearlyAttr);

sliderEl.addEventListener("input", (e) => {
  moveBg(sliderEl.value);
  console.log(isYearlyBilling);
  price(sliderEl.value, isYearlyBilling);
});

toggleContEl.addEventListener("click", (e) => {
  isYearlyBilling = subscription();
  isYearlyAttr.value = isYearlyBilling;

  price(sliderEl.value, isYearlyBilling);
});

function moveBg(value) {
  return (sliderEl.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%,hsl(174, 77%, 80%) ${value}%,hsl(224, 65%, 95%) 0%,hsl(224, 65%, 95%) 100%)`);
}

function subscription() {
  return (isYearlyBilling = isYearlyBilling ? false : true);
}

function price(value, isYearly) {
  let sliderValue = Math.ceil(value / 10);

  result = Math.floor(minValue * sliderValue);

  let pageView = minPageView * sliderValue;

  pageViewsEl.innerHTML = `${pageView}K PAGEVIEWS`;

  if (isYearly) {
    result = Math.floor(result - (result * 25) / 100);
  }

  priceEl.innerHTML = `$${result}.00 <span>/month</span>`;
  priceEl2.innerHTML = `$${result}.00 <span>/month</span>`;
}

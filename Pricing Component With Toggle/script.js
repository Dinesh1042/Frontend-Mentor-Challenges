const toggleContEl = document.getElementById("toggleCont");
const containerEl = document.getElementById("container");
const annuallyParaEl = document.getElementById("annuallyPara");
const monthlyParaEl = document.getElementById("monthlyPara");

const pricingAttr = document.createAttribute("data-ismonthlyprice");

toggleContEl.addEventListener("click", toggleResult);

// Price Element

const basicEl = document.getElementById("basic");
const professionalEl = document.getElementById("professional");
const MasterEl = document.getElementById("Master");

containerEl.setAttributeNode(pricingAttr);

let isMonthlyPrice = false;
pricingAttr.value = isMonthlyPrice;

function togglePricing() {
  return (isMonthlyPrice = !isMonthlyPrice);
}

function toggleResult() {
  pricingAttr.value = togglePricing();
  return showPrice(isMonthlyPrice);
}

monthlyParaEl.addEventListener("click", (e) => {
  isMonthlyPrice = true;
  showPrice(isMonthlyPrice);
  return (pricingAttr.value = isMonthlyPrice);
});

annuallyParaEl.addEventListener("click", (e) => {
  isMonthlyPrice = false;
  showPrice(isMonthlyPrice);
  return (pricingAttr.value = isMonthlyPrice);
});

function showPrice(isMonthlyPrice) {
  if (isMonthlyPrice) {
    basicEl.innerHTML = 19.99;
    professionalEl.innerHTML = 24.99;
    MasterEl.innerHTML = 39.99;
  } else {
    basicEl.innerHTML = 199.99;
    professionalEl.innerHTML = 249.99;
    MasterEl.innerHTML = 399.99;
  }
}

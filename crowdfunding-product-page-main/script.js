const products = [
  {
    productName: "Bamboo Stand",
    pledge: 25,
    description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`,
    itemLeft: 101,
  },
  {
    productName: "Black Edition Stand",
    pledge: 75,
    description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
    itemLeft: 64,
  },
  {
    productName: "Mahogany Special Edition",
    pledge: 200,
    description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
    itemLeft: 0,
  },
];

function createElement(product) {
  if (product.pledge) {
    const masterCont = document.getElementById("productCont");
    const container = document.createElement("div");
    container.className = `product`;
    const productTop = document.createElement("div");
    productTop.classList.add("productTop");
    container.appendChild(productTop);
    // Header
    const productHeader = document.createElement("header");
    productTop.appendChild(productHeader);
    const productNameEL = document.createElement("h4");
    productNameEL.innerHTML = product.productName;
    productHeader.appendChild(productNameEL);
    // price
    const priceCont = document.createElement("div");
    const priceEl = document.createElement("p");
    priceEl.innerHTML = `Pledge $${product.pledge} or more`;
    priceCont.appendChild(priceEl);
    productTop.appendChild(priceCont);
    // Center Container
    const centerCont = document.createElement("div");
    centerCont.classList.add("centerCont");
    const centerPara = document.createElement("p");
    centerPara.innerHTML = product.description;
    centerCont.appendChild(centerPara);
    container.appendChild(centerCont);

    // bottomCont
    const bottomCont = document.createElement("div");
    bottomCont.classList.add("bottomCont");
    const itemLeftCont = document.createElement("div");
    itemLeftCont.classList.add("itemLeft");
    const itemLeft = document.createElement("h2");
    itemLeft.innerHTML = product.itemLeft;
    const leftPara = document.createElement("span");
    leftPara.innerHTML = "left";

    bottomCont.appendChild(itemLeftCont);
    itemLeftCont.appendChild(itemLeft);
    itemLeftCont.appendChild(leftPara);

    // Bottom right button
    const btnCont = document.createElement("div");
    btnCont.classList.add("btnCont");
    const selectRewardBtn = document.createElement("button");
    selectRewardBtn.innerHTML = `Select Reward`;
    btnCont.appendChild(selectRewardBtn);
    bottomCont.appendChild(btnCont);
    container.appendChild(bottomCont);
    // create Modal
    selectRewardBtn.addEventListener("click", (e) => {
      bodyEl.classList.add("modalOpen");
      createModal();
    });

    if (!product.itemLeft) {
      container.style.opacity = `0.5`;
      selectRewardBtn.innerHTML = `Out of Stock`;
      selectRewardBtn.disabled = true;
    }
    masterCont.appendChild(container);
  }
}

products.forEach((item) => {
  createElement(item);
});

const bookmarkBtnEl = document.getElementById("bookmarkBtn");

let isBookmarked = false;

const attr = document.createAttribute("isBookmarked");
bookmarkBtnEl.setAttributeNode(attr);
attr.value = isBookmarked;
bookmarkBtnEl.addEventListener("click", (e) => {
  isBookmarked = !isBookmarked;
  isBookmarkedLocal(isBookmarked);
});

function isBookmarkedLocal(isBookmarked) {
  const imgEl = bookmarkBtnEl.querySelector("img");
  const para = document.querySelector(".text p");
  attr.value = isBookmarked;
  localStorage.setItem("isBookmarked", isBookmarked);

  if (isBookmarked) {
    imgEl.src = "./images/icon-bookmarked.svg";
    para.innerHTML = `Bookmarked`;
    bookmarkBtnEl.style.background = `hsla(176, 50%, 47%, 0.116)`;
    para.style.color = `#157a74`;
  } else {
    imgEl.src = "./images/icon-bookmark.svg";
    para.innerHTML = `Bookmark`;
    bookmarkBtnEl.style.background = `#f4f4f4`;
    para.style.color = `#000`;
  }
}

function setBookmarkLocal() {
  return localStorage.getItem("isBookmarked")
    ? JSON.parse(localStorage.getItem("isBookmarked"))
    : "";
}

(function setBookMark() {
  let local = setBookmarkLocal();
  isBookmarkedLocal(local);
})();

// Nav
const navContEl = document.getElementById("navCont");
const hamburgarEl = document.getElementById("hamburgar");
const bodyEl = document.querySelector("body");
const navAttr = document.createAttribute("isNavExpanded");
let isNavExpanded = false;
navAttr.value = isNavExpanded;
navContEl.setAttributeNode(navAttr);

hamburgarEl.addEventListener("click", (e) => {
  isNavExpanded = !isNavExpanded;
  navAttr.value = isNavExpanded;
  if (isNavExpanded) bodyEl.classList.add("navOpen");
  else bodyEl.classList.remove("navOpen");
});

// Clicking outside closes nav

window.addEventListener("click", (e) => {
  if (!e.target.closest(".hamburgar") && !e.target.closest(".links")) {
    resetNav();
  }
});
window.addEventListener("scroll", (e) => {
  resetNav();
});

function resetNav() {
  isNavExpanded = false;
  navAttr.value = false;
  bodyEl.classList.remove("navOpen");
}

// modal

let noPledge = [
  {
    productName: "Pledge with no reward",
    description: `Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.`,
    itemLeft: 0,
    pledge: 0,
  },
];

function createModal() {
  const masterModel = document.createElement("div");
  const overlay = document.createElement("div");
  const containerEl = document.querySelector("body");
  masterModel.className = `masterModel`;
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modalContainer");
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modalContainer.appendChild(modal);
  overlay.classList.add("modalOverlay");
  containerEl.appendChild(overlay);
  const modalTop = document.createElement("div");
  modal.appendChild(modalTop);
  const titleEl = document.createElement("h2");
  modalTop.appendChild(titleEl);
  titleEl.innerHTML = `Back this project`;
  const modalPara = document.createElement("p");
  modalPara.innerHTML = `Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?`;
  modalTop.appendChild(modalPara);
  modalTop.classList.add("Modalheader");
  // Close Btn
  const closeModalCont = document.createElement("div");
  closeModalCont.classList.add("modalCloseCont");
  modal.appendChild(closeModalCont);
  //
  const closeModal = document.createElement("div");
  closeModal.classList.add("modalClose");
  closeModalCont.appendChild(closeModal);

  // Product Container
  const productContainer = document.createElement("div");
  productContainer.classList.add("modalProductContainer");
  modal.appendChild(productContainer);

  const pledgeProduct = [
    {
      productName: "Pledge with no reward",
      description: `Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.`,
      itemLeft: 0,
      pledge: 0,
      noReward: true,
    },
    ...products,
  ];
  pledgeProduct.forEach((item) => {
    productContainer.appendChild(createPledgeProducts(item));
  });
  const allProduct = productContainer.querySelectorAll(".productModal");

  // all Product

  allProduct.forEach((item) => {
    item.addEventListener("click", (el) => {
      allProduct.forEach((itemEl) => {
        if (itemEl !== item) {
          itemEl.classList.remove("productSelected");
        }
      });
      item.classList.add("productSelected");
    });
  });
  // close btn
  closeModalCont.addEventListener("click", (e) => {
    masterModel.remove();
    overlay.remove();
    bodyEl.classList.remove("modalOpen");
  });
  masterModel.appendChild(modalContainer);
  containerEl.appendChild(masterModel);

  window.addEventListener("click", (e) => {
    if (e.target.classList.value == `masterModel`) {
      // masterModel.remove();
      // overlay.remove();
      // bodyEl.classList.remove("modalOpen");

      modalContainer.classList.add("shakeCont");

      setTimeout(() => {
        modalContainer.classList.remove("shakeCont");
      }, 1500);
    }
  });
}

function createPledgeProducts(product) {
  const productEl = document.createElement("div");
  productEl.classList.add("productModal");

  // product Top heading

  const productHead = document.createElement("div");
  productHead.classList.add("productTop");
  productEl.appendChild(productHead);
  const productTopLeft = document.createElement("div");
  productTopLeft.classList.add("productTopLeft");
  productHead.appendChild(productTopLeft);
  const checkBoxEl = document.createElement("input");
  checkBoxEl.type = `radio`;
  checkBoxEl.name = `pledge`;
  checkBoxEl.classList.add("checkBox");
  productTopLeft.appendChild(checkBoxEl);
  const customCheckBox = document.createElement("div");
  customCheckBox.classList.add(`customcheckbox`);
  productTopLeft.appendChild(customCheckBox);

  // title

  const titleCont = document.createElement("div");
  const titleEl = document.createElement("h4");
  titleEl.innerHTML = product.productName;
  productTopLeft.appendChild(titleCont);
  titleCont.appendChild(titleEl);
  titleCont.classList.add("titleCont");

  if (product.pledge) {
    const pledgeEL = document.createElement("h4");
    pledgeEL.innerHTML = `pledge $${product.pledge} or more`;
    titleCont.appendChild(pledgeEL);
    pledgeEL.classList.add("pledge");
  }

  if (product.itemLeft) {
    const productTopRight = document.createElement("div");
    productTopRight.classList.add("productTopRight");
    const itemLeftEl = document.createElement("h4");
    itemLeftEl.innerHTML = product.itemLeft;
    productTopRight.appendChild(itemLeftEl);
    const leftSpan = document.createElement("span");
    leftSpan.innerHTML = `left`;
    productTopRight.appendChild(leftSpan);
    productHead.appendChild(productTopRight);
  }

  const productDescription = document.createElement("div");
  productDescription.classList.add("productDescription");
  const productPara = document.createElement("p");
  productPara.innerHTML = product.description;
  productDescription.appendChild(productPara);
  productEl.appendChild(productDescription);

  if (!product.itemLeft && !product.noReward) {
    productEl.style.opacity = `0.5`;
    checkBoxEl.disabled = true;
    productEl.style.pointerEvents = `none`;
  }

  productEl.addEventListener("click", (e) => {
    checkBoxEl.checked = true;
    const productModal = document.querySelector(".masterModel");
    const productOverlay = document.querySelector(".modalOverlay");

    if (!product.pledge) {
      productModal.remove();
      productOverlay.remove();
      bodyEl.classList.remove("modalOpen");
      successPopup();
    }
  });

  if (product.itemLeft && product.pledge) {
    const productModalBottomCont = document.createElement("div");
    productModalBottomCont.classList.add("productModalBottomCont");
    const productModalBottom = document.createElement("div");
    productModalBottom.classList.add("productModalBottom");
    productModalBottomCont.appendChild(productModalBottom);
    const productBottomLeft = document.createElement("div");
    productBottomLeft.classList.add("productBottomLeft");
    productModalBottom.appendChild(productBottomLeft);
    const pledgeInput = document.createElement("input");
    pledgeInput.placeholder = `Enter your pledge`;
    productBottomLeft.appendChild(pledgeInput);
    productEl.appendChild(productModalBottomCont);

    // Bottom Right
    const productBottomRight = document.createElement("form");
    productBottomRight.classList.add("productBottomRight");

    const costPledgeCont = document.createElement("div");
    costPledgeCont.classList.add("costInput");
    productBottomRight.appendChild(costPledgeCont);
    const dollarSignEl = document.createElement("span");
    dollarSignEl.innerHTML = `$`;
    const costInputPlege = document.createElement("input");
    costInputPlege.placeholder = product.pledge + " or more";
    costInputPlege.type = `number`;
    costPledgeCont.appendChild(dollarSignEl);
    costPledgeCont.appendChild(costInputPlege);

    const continueBtn = document.createElement("button");
    continueBtn.type = `submit`;
    continueBtn.innerHTML = `Continue`;
    productBottomRight.appendChild(continueBtn);

    productBottomRight.addEventListener("submit", (e) => {
      e.preventDefault();
      const productModal = document.querySelector(".masterModel");
      const productOverlay = document.querySelector(".modalOverlay");
      if (!costInputPlege.value) {
        return alert("You should enter the value in pledge");
      }

      if (!(JSON.parse(costInputPlege.value) < product.pledge)) {
        productModal.remove();
        productOverlay.remove();
        bodyEl.classList.remove("modalOpen");
        successPopup();
      } else {
        alert(`pledge value should greater than ${product.pledge}`);
      }
    });

    productModalBottom.appendChild(productBottomRight);
  }

  return productEl;
}

const backBtnProjectEL = document.getElementById("backBtnProject");

backBtnProjectEL.addEventListener("click", (e) => {
  createModal();
  bodyEl.classList.add("modalOpen");
});

// Thank You modal

function successPopup() {
  const successOverlay = document.createElement("div");
  successOverlay.classList.add("SuccessOverlay");
  bodyEl.appendChild(successOverlay);
  const successCont = document.createElement("div");

  successCont.classList.add("successCont");

  const thankYoucontainer = document.createElement("div");
  thankYoucontainer.classList.add("thankyouPopup");

  const imgCont = document.createElement("div");
  imgCont.classList.add("imgCont");
  const imgEl = document.createElement("img");
  imgCont.appendChild(imgEl);
  imgEl.src = `./images/icon-check.svg`;
  thankYoucontainer.appendChild(imgCont);
  bodyEl.appendChild(successCont);
  successCont.appendChild(thankYoucontainer);

  const textCont = document.createElement("div");
  textCont.classList.add("textCont");
  const texthead = document.createElement("h2");
  texthead.innerHTML = `Thanks for your support!`;

  const textPara = document.createElement("p");
  textPara.innerHTML = `Thanks for your support! Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.`;

  textCont.appendChild(texthead);
  textCont.appendChild(textPara);
  thankYoucontainer.appendChild(textCont);

  const gotItBtn = document.createElement("button");
  gotItBtn.innerHTML = `Got it!`;
  gotItBtn.addEventListener("click", (e) => {
    successCont.remove();
    successOverlay.remove();
    bodyEl.classList.remove("successModal");
  });

  bodyEl.classList.add("successModal");

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("SuccessOverlay")) {
      successCont.remove();
      successOverlay.remove();
      bodyEl.classList.remove("successModal");
    }
  });

  window.addEventListener("keyup", (e) => {
    console.log(e.key);
    if (e.key === `Enter` || e.key === ` `) {
      gotItBtn.click();
    }
  });

  thankYoucontainer.appendChild(gotItBtn);
}

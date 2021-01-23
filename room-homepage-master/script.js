const homePageDatas = [
  {
    image: "./images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    description: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
  },
  {
    image: "./images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
  },
  {
    image: "./images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`,
  },
];

const headingsEl = document.getElementById("headings");

const leftEl = document.getElementById("left");

const navEl = document.getElementById("navEl");
const hamburgarEl = document.getElementById("hamburgar");

const closeEl = document.getElementById("close");

const attr = document.createAttribute("data-isnavopen");

let isNavOpen = false;

attr.value = isNavOpen;
navEl.setAttributeNode(attr);

hamburgarEl.addEventListener("click", toggleNav);

function toggleNav() {
  isNavOpen = isNavOpen ? false : true;
  return (attr.value = isNavOpen);
}

closeEl.addEventListener("click", resetNav);

function resetNav() {
  return [(isNavOpen = false), (attr.value = isNavOpen)];
}

window.addEventListener("click", (e) => {
  if (!e.target.closest(".nav") && !e.target.closest(".hamburgar")) {
    resetNav();
  }
});

const allBtn = document.querySelectorAll("button");
const imageEl = document.getElementById("imageEl");
const descriptionEl = document.getElementById("description");

allBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    let navDir = button.dataset.navdir;
    let currentEl = e.target.parentElement.dataset.navdir;

    navDirection(currentEl);
  });
});

let count = null;

function navDirection(direction) {
  if (direction === "left") {
    count--;
    if (count < 0) {
      count = homePageDatas.length - 1;
    }
  } else {
    count++;
    if (count > homePageDatas.length - 1) {
      count = 0;
    }
  }
  return setElements(count);
}

let headWord = null;
let para = null;
function setElements(count) {
  descriptionEl.classList.add("scriptText");
  imageEl.classList.add("scriptImage");
  headingsEl.classList.add("scripthead");

  descriptionEl.classList.remove("fade");
  imageEl.classList.remove("fade");
  headingsEl.classList.remove("fade");

  headWord = homePageDatas[count].title;
  para = homePageDatas[count].description;
  imageEl.src = homePageDatas[count].image;

  descriptionEl.innerHTML = para;

  headingsEl.innerHTML = headWord;

  setTimeout(() => {
    descriptionEl.classList.add("fade");
    headingsEl.classList.add("fade");
    imageEl.classList.add("fade");
  }, 500);
}

// Word by word text animation ---

// function headerAnimation() {
//   text = headingsEl.querySelectorAll("span")[char];
//   text.classList.add("fade");
//   char++;
//   if (char === headWord.length) {
//     char = 0;
//     return [clearTimeout(headerAnimation, 75), ""];
//   }
//   setTimeout(headerAnimation, 75);
// }

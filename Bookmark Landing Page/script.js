const tabNotes = [
  {
    id: 1,
    heading: `Bookmark in one click`,
    para: `Organize your bookmarks however you like. Our simple drag-and-drop interface 
  gives you complete control over how you manage your favourite sites.`,
    image: `./images/illustration-features-tab-1.svg`,
  },
  {
    id: 2,
    heading: `Intelligent search`,
    para: `Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.`,
    image: `./images/illustration-features-tab-2.svg`,
  },
  {
    id: 3,
    heading: `Share your bookmarks`,
    para: `Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.`,
    image: `./images/illustration-features-tab-3.svg`,
  },
];
const FAQ = [
  {
    id: 1,
    question: `What is Bookmark?`,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
  },
  {
    id: 2,
    question: `How can I request a new browser?`,
    answer: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`,
  },
  {
    id: 3,
    question: `Is there a mobile app?`,
    answer: `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
  sollicitudin ex et ultricies bibendum.`,
  },
  {
    id: 4,
    question: `What about other Chromium browsers?`,
    answer: `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit.`,
  },
];

const featuresNavEl = [...document.querySelectorAll(`#featuresNav`)];
const formEl = document.getElementById("form");
const hamburgarEl = document.getElementById("hamburgar");
const navContainerEl = document.getElementById("navContainer");

formEl.addEventListener("submit", emailValidation);
hamburgarEl.addEventListener("click", getNav);
window.addEventListener(`resize`, initializeNavPos);
window.addEventListener("scroll", resetNav);
window.addEventListener("load", initializeNavPos);

featuresNavEl.forEach((nav) => {
  nav.addEventListener(`click`, (e) => {
    featuresNavEl.forEach((el) => el.classList.remove(`active`));
    nav.classList.add(`active`);
    setNavPostion(nav);

    const currentNav = nav.dataset.value;

    if (currentNav === `simpleBooking`) setFeatures(0);

    if (currentNav === `speedySearch`) setFeatures(1);

    if (currentNav === `easyShare`) setFeatures(2);
  });
});

function setNavPostion(currentEl) {
  const currentElClient = currentEl.getBoundingClientRect();

  const parentEl = currentEl.parentElement.getBoundingClientRect();

  const navBarEl = document.getElementById(`navBar`);

  const navProperties = {
    bottom: currentElClient.bottom - parentEl.bottom,
    left: currentElClient.left - parentEl.left,
  };

  navBarEl.style.transform = `translate(${navProperties.left}px, ${navProperties.bottom}px)`;
  navBarEl.style.width = `${currentElClient.width}px`;
}

function setFeatures(id) {
  const featureDetailViewEl = document.getElementById(`featureDetailView`);
  const imgEl = featureDetailViewEl.querySelector(`.imgCont img`);
  const headingEl = featureDetailViewEl.querySelector(`.textCont .textArea h1`);
  const paraEl = featureDetailViewEl.querySelector(`.textCont .textArea p`);

  imgEl.src = tabNotes[id].image;
  headingEl.innerHTML = tabNotes[id].heading;
  paraEl.innerHTML = tabNotes[id].para;
}

function initializeNavPos() {
  const currentNavActive = featuresNavEl.filter((item) =>
    item.classList.contains(`active`)
  )[0];
  setNavPostion(currentNavActive);
  navContainerEl.classList.remove("nav-active");
  console.log(`yes`);
}

FAQ.forEach((item) => createFAQQuestions(item));

function createFAQQuestions(faq) {
  const faqMainContainerEl = document.getElementById("faqContainer");
  const faqEl = document.createElement(`div`);
  faqEl.className = `faq faq${faq.id}`;

  const questionCont = document.createElement(`div`);

  questionCont.classList.add("questionContainer");

  const questionEl = document.createElement(`div`);
  questionEl.classList.add(`question`);
  const questionPara = document.createElement(`p`);
  questionEl.appendChild(questionPara);
  questionCont.appendChild(questionEl);
  questionPara.innerHTML = faq.question;
  // Icon
  const iconContainerEl = document.createElement("div");
  iconContainerEl.classList.add(`iconContainer`);
  iconContainerEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>`;

  questionCont.appendChild(iconContainerEl);

  faqEl.appendChild(questionCont);

  // Answer

  const answerCont = document.createElement("div");
  answerCont.classList.add("answerCont");
  const answerEl = document.createElement("div");
  answerEl.classList.add("answer");
  const answerPara = document.createElement("p");
  answerPara.innerHTML = faq.answer;
  answerCont.appendChild(answerEl);
  answerEl.appendChild(answerPara);
  faqEl.appendChild(answerCont);
  faqMainContainerEl.appendChild(faqEl);

  questionCont.addEventListener("click", (e) => {
    const allFaqEl = faqMainContainerEl.querySelectorAll(".faq");

    allFaqEl.forEach((item) => {
      if (item !== faqEl) item.classList.remove("active");
      return;
    });

    faqEl.classList.toggle("active");

    // Ripple Effect
    rippleFaq(e);
  });

  function rippleFaq(e) {
    const spanEl = document.createElement("span");
    questionCont.appendChild(spanEl);

    const left = e.clientX - questionCont.getBoundingClientRect().left;
    const top = e.clientY - questionCont.getBoundingClientRect().top;

    spanEl.style.cssText = `
    position:absolute;
    height:430px;
    width:430px;
    background:hsla(231, 69%, 60%, 0.27);
    top:${top}px;
    left:${left}px;
    transform: translate(-50%, -50%);
    animation: faqRipple 1s ease;
    border-radius:50%;
    `;

    spanEl.addEventListener("animationend", () => spanEl.remove());
  }
}

function emailValidation(e) {
  e.preventDefault();

  let inputEl = this.querySelector(".inputCont input");

  const errorMsg = this.querySelector(".errorMsg p");

  if (inputEl.value) {
    const regex = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

    if (!regex.test(inputEl.value)) {
      this.classList.add("error");
      errorMsg.innerHTML = `Whoops!. make sure it's an email`;
    } else this.classList.remove("error");
  } else {
    this.classList.add("error");
    errorMsg.innerHTML = `Whoops!. email cannot be empty`;
  }
}

function getNav() {
  navContainerEl.classList.toggle("nav-active");
}
function resetNav() {
  navContainerEl.classList.remove("nav-active");
}

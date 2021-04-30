const navBtnEl = document.getElementById("navBtn");
const navContEl = document.getElementById("navCont");

let isNavOpen = false;

const navAttr = document.createAttribute("isnavopen");
navAttr.value = isNavOpen;

navContEl.setAttributeNode(navAttr);

navBtnEl.addEventListener("click", showNav);

function navToggle() {
  return (isNavOpen = !isNavOpen);
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
const formEl = document.getElementById("form");
const inputTextEl = document.getElementById("inputText");
const chatsEl = document.getElementById("chats");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  return createChat();
});

function createChat() {
  let inputValue = inputTextEl.value;

  const chatCont = document.createElement("div");
  chatCont.classList.add("userChat");
  const rightDiv = document.createElement("div");
  rightDiv.classList.add("chatRight");

  const para = document.createElement("p");
  para.innerHTML = inputValue;
  rightDiv.appendChild(para);
  inputTextEl.value = "";
  chatCont.appendChild(rightDiv);
  chatsEl.appendChild(chatCont);
}

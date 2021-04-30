const userData = [
  {
    about: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
    name: `Tanya Sinclair`,
    position: `UX Engineer`,
    profile: `./images/image-tanya.jpg`,
    alt: `image-Tanya`,
  },
  {
    about: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    name: `John Tarkpor`,
    position: `Junior Front-end Developer`,
    profile: `./images/image-john.jpg`,
    alt: `image-john`,
  },
];

let count = 0;

const buttonEl = document.querySelectorAll(".buttonEl");

buttonEl.forEach((button) => {
  button.addEventListener("click", (e) => {
    let id = e.currentTarget.id;
    showEl(id);
  });
});

function viewElement(count) {
  const testimonialsTextEl = document.getElementById("testimonialsText");
  const authourTextEl = document.getElementById("authourText");
  const positionEl = document.getElementById("position");
  const imageEl = document.getElementById("image");
  testimonialsTextEl.innerHTML = userData[count].about;
  authourTextEl.textContent = userData[count].name;
  positionEl.innerHTML = userData[count].position;
  imageEl.src = userData[count].profile;
}

function showEl(id, key) {
  if (id === "leftArrow" || key === "ArrowLeft") {
    count--;
    if (count < 0) {
      count = userData.length - 1;
    }
  } else if (id === "rightArrow" || key === "ArrowRight") {
    count++;

    if (count > userData.length - 1) {
      count = 0;
    }
  }
  return viewElement(count);
}

window.addEventListener("keyup", (e) => {
  showEl(null, e.key);
});

showEl()
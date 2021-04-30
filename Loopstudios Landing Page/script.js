const hamburgarEl = document.getElementById("hamburgar");
const listsEl = document.getElementById("lists");

const ulListEl = document.querySelectorAll("#ulList li");
const dateEl = document.getElementById("year");

hamburgarEl.addEventListener("click", (e) => {
  listsEl.classList.toggle("active");
});

ulListEl.forEach((item) => {
  item.addEventListener("click", (e) => {
    listsEl.classList.toggle("active");
  });
});

window.addEventListener("scroll", (e) => {
  listsEl.classList.remove("active");
});

const date = new Date().getFullYear();
dateEl.innerHTML = date;

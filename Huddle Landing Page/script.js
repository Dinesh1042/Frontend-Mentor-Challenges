const formEl = document.getElementById("form");

formEl.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();
  const inputValue = this.querySelector("input");
  const errorMsg = this.querySelector(".ErrorMsg");
  if (inputValue.value) {
    const isVaildEmail = validateEmail(inputValue.value);
    if (!isVaildEmail) {
      this.classList.add("error");
      errorMsg.innerHTML = `Check your email please`;
    } else if (isVaildEmail) this.classList.remove("error");
  } else {
    this.classList.add("error");
    errorMsg.innerHTML = `User email cannot be empty!`;
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

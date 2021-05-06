const formsEl = document.querySelectorAll(".form");

formsEl.forEach((form) => form.addEventListener("submit", validateForm));

function validateForm(e) {
  e.preventDefault();
  const inputEl = this.querySelector("input");
  const errorMsg = this.querySelector(".errorMsg");
  const inputValue = inputEl.value.trim();

  if (inputValue) {
    const isValidEmail = emailValidation(inputValue);
    if (isValidEmail) {
      this.classList.remove("error");
    } else {
      this.classList.add("error");
      errorMsg.innerHTML = `Please check your email`;
    }
  } else {
    this.classList.add("error");
    errorMsg.innerHTML = `User email cannot be empty`;
  }
}

function emailValidation(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

import { FormControl } from "./formControl.js";

class TipCalculator {
  constructor(form) {
    this.form = form;
    this.billAmount = 0;
    this.tipPercentage = 0;
    this.noOfPerson = 0;
    this.tipPerPerson = 0;
    this.initialize();
  }

  initialize() {
    this.isValid();
    this.listeners();
    this.validation();
  }

  listeners() {
    const billAmountEl = this.form.querySelector("#bill");
    const customTipInput = document.getElementById("customTip");
    const tipRadioButtons = [...this.form.querySelectorAll(".form-check")];
    const noOfPeople = this.form.querySelector("#noOfPeople");
    const resetBtn = this.form.querySelector(".btn-reset");

    billAmountEl.addEventListener("input", () => {
      this.billAmount = billAmountEl.valueAsNumber;
      this.calculateTip();
    });

    tipRadioButtons.forEach((el) =>
      el.addEventListener("input", () => {
        this.tipPercentage = Number(el.value);
        customTipInput.value = null;
        this.calculateTip();
        this.customTipFormControl.reset();
      })
    );

    customTipInput.addEventListener("input", () => {
      this.tipPercentage = customTipInput.valueAsNumber;
      this.unCheckRadio(tipRadioButtons);
      this.calculateTip();
    });

    noOfPeople.addEventListener("input", () => {
      this.noOfPerson = noOfPeople.valueAsNumber;
      this.calculateTip();
    });

    resetBtn.addEventListener("click", this.reset.bind(this));
  }

  calculateTip() {
    const tipAmount = this.billAmount * (this.tipPercentage / 100);

    this.tipPerPerson = tipAmount / this.noOfPerson;

    this.totalTipAmount = (this.billAmount + tipAmount) / this.noOfPerson;
    this.updateDom();
  }

  updateDom() {
    const tipAmountEl = this.form.querySelector("#tipAmount");
    const totalTipAmountEl = this.form.querySelector("#totalTipAmount");

    if (this.isValid()) {
      tipAmountEl.innerHTML = this.tipPerPerson.toFixed(2);
      totalTipAmountEl.innerHTML = this.totalTipAmount.toFixed(2);
    }
  }

  isValid() {
    return (this.valid =
      this.billAmount > 0 && this.tipPercentage > 0 && this.noOfPerson > 0);
  }

  unCheckRadio(radioInputArr) {
    return radioInputArr.forEach((r) => (r.checked = false));
  }

  validation() {
    [...this.form.elements]
      .filter((i) => i.type === "number" && i.id !== "customTip")
      .map((v) => new FormControl(v));
    const customTipInput = document.getElementById("customTip");
    this.customTipFormControl = new FormControl(customTipInput);
  }

  reset() {
    this.billAmount = 0;
    this.tipPercentage = 0;
    this.noOfPerson = 0;
    this.tipPerPerson = 0;
    this.totalTipAmount = 0;
    this.form.reset();
    this.isValid();
    this.resetDom();
  }

  resetDom() {
    const tipAmountEl = this.form.querySelector("#tipAmount");
    const totalTipAmountEl = this.form.querySelector("#totalTipAmount");
    const resetValue = 0;
    tipAmountEl.innerHTML = resetValue.toFixed(2);
    totalTipAmountEl.innerHTML = resetValue.toFixed(2);
  }
}

const formEl = document.getElementById("form");
const tipCalculator = new TipCalculator(formEl);
console.log(tipCalculator);

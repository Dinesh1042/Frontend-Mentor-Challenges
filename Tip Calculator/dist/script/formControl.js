export class FormControl {
  constructor(control) {
    this.control = control;
    this.touched = false;
    this.dirty = false;
    this.errors = {};
    this.errorMsg = null;
    this.errorMsgEl = this.control.nextElementSibling;
    this.valid = true;
    this.listeners();
  }

  listeners() {
    this.control.addEventListener("input", () => {
      this.dirty = true;
      this.errors = this.errorControl();
      this.updateClass();
      this.setErrorMsg();
      this.isValid();
    });
    this.control.addEventListener("blur", () => (this.touched = true));
  }

  errorControl() {
    return {
      ...this.requiredError(),
      ...this.cantBeZero(),
      ...this.minError(),
    };
  }

  requiredError() {
    const { value } = this.control;
    return this.dirty && value.length === 0 ? { required: true } : {};
  }

  cantBeZero() {
    const { valueAsNumber } = this.control;
    return this.dirty && valueAsNumber === 0 ? { zeroerror: true } : {};
  }

  minError() {
    const { min, valueAsNumber } = this.control;
    return this.dirty && valueAsNumber < Number(min) - 1
      ? { minerror: true }
      : {};
  }

  updateClass() {
    const defaultErrorClass = ["required", "min", "max", "error", "zeroerror"];

    this.control.classList.remove(...defaultErrorClass);

    const errorClasses = Object.keys(this.errors);

    if (errorClasses.includes("required"))
      this.control.classList.add("required", "error");
    else if (errorClasses.length)
      this.control.classList.add(...errorClasses, "error");
    else return;
  }

  setErrorMsg() {
    const errorClasses = Object.keys(this.errors);

    const errorMsgObj = {
      zeroerror: `Can't be zero`,
      required: `${this.control.dataset.inputname} is required`,
      min: `Can't be less than zero`,
    };

    const { minerror, required, zeroerror } = this.errors;

    if (required) this.errorMsg = errorMsgObj.required;
    else if (minerror) this.errorMsg = errorMsgObj["min"];
    else if (zeroerror) this.errorMsg = errorMsgObj["zeroerror"];
    else this.errorMsg = null;

    this.errorMsgEl.innerHTML = this.errorMsg;
  }

  isValid() {
    this.valid = Object.keys(this.errors).length === 0;
  }

  reset() {
    this.touched = false;
    this.dirty = false;
    this.errors = {};
    this.errorMsg = null;
    this.updateClass();
  }
}

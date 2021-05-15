class Calculator {
  constructor(
    private historyEl: Element,
    private currentEl: Element,
    private tempEl: Element
  ) {}
  private display1: string = ``;
  private display2: string = ``;
  private tempResult: string;
  private operator: string;
  private isOperatorThere: boolean = false;
  private isEqualToClicked = false;

  appendNumberToCurrentNumber(e) {
    const currentNumber = e.dataset.value;

    if (this.isEqualToClicked) {
      this.reset();
      this.isEqualToClicked = false;
    }

    if (this.display1.includes(".") && currentNumber === ".") return;

    this.display1 += currentNumber;

    this.currentEl.innerHTML = this.display1.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
  }

  addOperation(operator) {
    const currentOperator = operator.dataset.value;
    const operatorText = operator.querySelector("span").innerHTML.trim();

    if (!this.display1 && this.display2 && this.isOperatorThere) {
      this.clearInput(operatorText, true);
      this.operator = currentOperator;
      return;
    }

    if (this.operator && this.display1 && this.tempResult) {
      this.calculate();
    }

    if (!this.display1) return;

    this.tempResult = !this.tempResult ? this.display1 : this.tempResult;

    const tempValue = this.tempResult;

    this.tempEl.innerHTML = tempValue
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    this.operator = currentOperator;
    this.clearInput(operatorText, false);
    this.isOperatorThere = true;
    this.isEqualToClicked = false;
  }

  clearInput(operator: string, isOperatorAdded: boolean) {
    if (!isOperatorAdded) {
      const tempValue = this.display1;
      this.display2 += `${tempValue
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${operator} `;
    } else if (isOperatorAdded) {
      this.display2 = `${this.display2.slice(0, -2)} ${operator} `;
    }

    this.display1 = ``;
    this.currentEl.innerHTML = null;
    this.historyEl.innerHTML = this.display2;
  }

  calculate(): any {
    this.tempResult = eval(
      `${this.tempResult} ${this.operator} ${this.display1}`
    );
  }

  equalTo() {
    if (!this.display1) return;

    if (this.display1 && this.operator && this.tempResult) {
      this.calculate();
      this.display1 = this.tempResult;
      const tempValue = this.display1;

      this.currentEl.innerHTML = tempValue
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.operator = null;
      this.display2 = ``;
      this.historyEl.innerHTML = ``;
      this.tempEl.innerHTML = ``;
    }

    this.isEqualToClicked = true;
  }

  deleteLastEntity() {
    if (this.display1 && !this.isEqualToClicked) {
      this.display1 = this.display1.slice(0, -1);

      const tempValue = this.display1;

      this.currentEl.innerHTML = tempValue.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      );
    }
  }

  reset() {
    this.display1 = ``;
    this.display2 = ``;
    this.operator = null;
    this.historyEl.innerHTML = ``;
    this.currentEl.innerHTML = ``;
    this.tempEl.innerHTML = ``;
    this.tempResult = ``;
  }
}

const historyEl: Element = document.getElementById("history");
const currentEl: Element = document.getElementById("current");
const tempEl: Element = document.getElementById("temp");
const numbersEl: NodeListOf<Element> = document.querySelectorAll(".number");
const operatorsEl: NodeListOf<Element> = document.querySelectorAll(".operator");
const deleteBtn: Element = document.getElementById("deleteBtn");
const equalToBtn: Element = document.getElementById("equalToBtn");
const resetBtn: Element = document.getElementById("resetBtn");

const calc = new Calculator(historyEl, currentEl, tempEl);

numbersEl.forEach((number) =>
  number.addEventListener("click", () =>
    calc.appendNumberToCurrentNumber(number)
  )
);

operatorsEl.forEach((operator) =>
  operator.addEventListener("click", () => calc.addOperation(operator))
);

deleteBtn.addEventListener("click", () => calc.deleteLastEntity());

equalToBtn.addEventListener("click", () => calc.equalTo());

resetBtn.addEventListener("click", () => calc.reset());

// Theme Changer

const switchesEl: NodeListOf<Element> =
  document.querySelectorAll(".themeSwitch input");

const themeSwitchCont: Element = document.querySelector(".themeSwitch");

const themesBg: NodeListOf<Element> = document.querySelectorAll(".themeBg");

const bodyEl = document.querySelector("body");

function themePosition() {
  themesBg.forEach((theme: any) => {
    const { top, left, width, height } =
      themeSwitchCont.getBoundingClientRect();
    theme.style.clipPath = `circle(0% at ${left + width / 2}px ${
      top + height / 2
    }px)`;
  });
}
themePosition();

window.addEventListener("resize", themePosition);

switchesEl.forEach((sw) => {
  sw.addEventListener("input", (e) => {
    themesBg.forEach((theme: any) => {
      let currentSwitch = `${sw.id}Bg`;
      let currentTheme = theme.id;

      if (currentSwitch === currentTheme) {
        let lastActive: Element = null;
        bodyEl.className = `${currentTheme}-active`;

        themesBg.forEach((th: any) => {
          if (th.classList.contains("active")) {
            lastActive = th;
            bodyEl.style.background = window.getComputedStyle(
              th,
              null
            ).background;
          }
          th.classList.remove("active");
          th.style.zIndex = "-5";
        });

        theme.classList.add("active");
        theme.style.zIndex = "-1";
      }
    });
  });
});

window.addEventListener("keyup", (e) => {
  if (
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "0" ||
    e.key === "."
  )
    buttonClick(e.key);
  else if (
    e.key == "/" ||
    e.key == "*" ||
    e.key == "+" ||
    e.key == "-" ||
    e.key == "%"
  )
    operatorBtnClick(e.key);
  else if (e.key === "Enter") equalToBtn.click();
  else if (e.key === "Backspace") calc.deleteLastEntity();
  else if (e.key === "Escape") calc.reset();
});

function buttonClick(key) {
  numbersEl.forEach((btn: any) =>
    key === btn.dataset.value ? btn.click() : null
  );
}

function operatorBtnClick(key: any) {
  operatorsEl.forEach((operator: any) =>
    key === operator.dataset.value ? operator.click() : null
  );
}

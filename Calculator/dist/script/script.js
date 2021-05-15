var Calculator = /** @class */ (function () {
    function Calculator(historyEl, currentEl, tempEl) {
        this.historyEl = historyEl;
        this.currentEl = currentEl;
        this.tempEl = tempEl;
        this.display1 = "";
        this.display2 = "";
        this.isOperatorThere = false;
        this.isEqualToClicked = false;
    }
    Calculator.prototype.appendNumberToCurrentNumber = function (e) {
        var currentNumber = e.dataset.value;
        if (this.isEqualToClicked) {
            this.reset();
            this.isEqualToClicked = false;
        }
        if (this.display1.includes(".") && currentNumber === ".")
            return;
        this.display1 += currentNumber;
        this.currentEl.innerHTML = this.display1.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    Calculator.prototype.addOperation = function (operator) {
        var currentOperator = operator.dataset.value;
        var operatorText = operator.querySelector("span").innerHTML.trim();
        if (!this.display1 && this.display2 && this.isOperatorThere) {
            this.clearInput(operatorText, true);
            this.operator = currentOperator;
            return;
        }
        if (this.operator && this.display1 && this.tempResult) {
            this.calculate();
        }
        if (!this.display1)
            return;
        this.tempResult = !this.tempResult ? this.display1 : this.tempResult;
        var tempValue = this.tempResult;
        this.tempEl.innerHTML = tempValue
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.operator = currentOperator;
        this.clearInput(operatorText, false);
        this.isOperatorThere = true;
        this.isEqualToClicked = false;
    };
    Calculator.prototype.clearInput = function (operator, isOperatorAdded) {
        if (!isOperatorAdded) {
            var tempValue = this.display1;
            this.display2 += tempValue
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + operator + " ";
        }
        else if (isOperatorAdded) {
            this.display2 = this.display2.slice(0, -2) + " " + operator + " ";
        }
        this.display1 = "";
        this.currentEl.innerHTML = null;
        this.historyEl.innerHTML = this.display2;
    };
    Calculator.prototype.calculate = function () {
        this.tempResult = eval(this.tempResult + " " + this.operator + " " + this.display1);
    };
    Calculator.prototype.equalTo = function () {
        if (!this.display1)
            return;
        if (this.display1 && this.operator && this.tempResult) {
            this.calculate();
            this.display1 = this.tempResult;
            var tempValue = this.display1;
            this.currentEl.innerHTML = tempValue
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            this.operator = null;
            this.display2 = "";
            this.historyEl.innerHTML = "";
            this.tempEl.innerHTML = "";
        }
        this.isEqualToClicked = true;
    };
    Calculator.prototype.deleteLastEntity = function () {
        if (this.display1 && !this.isEqualToClicked) {
            this.display1 = this.display1.slice(0, -1);
            var tempValue = this.display1;
            this.currentEl.innerHTML = tempValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    };
    Calculator.prototype.reset = function () {
        this.display1 = "";
        this.display2 = "";
        this.operator = null;
        this.historyEl.innerHTML = "";
        this.currentEl.innerHTML = "";
        this.tempEl.innerHTML = "";
        this.tempResult = "";
    };
    return Calculator;
}());
var historyEl = document.getElementById("history");
var currentEl = document.getElementById("current");
var tempEl = document.getElementById("temp");
var numbersEl = document.querySelectorAll(".number");
var operatorsEl = document.querySelectorAll(".operator");
var deleteBtn = document.getElementById("deleteBtn");
var equalToBtn = document.getElementById("equalToBtn");
var resetBtn = document.getElementById("resetBtn");
var calc = new Calculator(historyEl, currentEl, tempEl);
numbersEl.forEach(function (number) {
    return number.addEventListener("click", function () {
        return calc.appendNumberToCurrentNumber(number);
    });
});
operatorsEl.forEach(function (operator) {
    return operator.addEventListener("click", function () { return calc.addOperation(operator); });
});
deleteBtn.addEventListener("click", function () { return calc.deleteLastEntity(); });
equalToBtn.addEventListener("click", function () { return calc.equalTo(); });
resetBtn.addEventListener("click", function () { return calc.reset(); });
// Theme Changer
var switchesEl = document.querySelectorAll(".themeSwitch input");
var themeSwitchCont = document.querySelector(".themeSwitch");
var themesBg = document.querySelectorAll(".themeBg");
var bodyEl = document.querySelector("body");
function themePosition() {
    themesBg.forEach(function (theme) {
        var _a = themeSwitchCont.getBoundingClientRect(), top = _a.top, left = _a.left, width = _a.width, height = _a.height;
        theme.style.clipPath = "circle(0% at " + (left + width / 2) + "px " + (top + height / 2) + "px)";
    });
}
themePosition();
window.addEventListener("resize", themePosition);
switchesEl.forEach(function (sw) {
    sw.addEventListener("input", function (e) {
        themesBg.forEach(function (theme) {
            var currentSwitch = sw.id + "Bg";
            var currentTheme = theme.id;
            if (currentSwitch === currentTheme) {
                var lastActive_1 = null;
                bodyEl.className = currentTheme + "-active";
                themesBg.forEach(function (th) {
                    if (th.classList.contains("active")) {
                        lastActive_1 = th;
                        bodyEl.style.background = window.getComputedStyle(th, null).background;
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
window.addEventListener("keyup", function (e) {
    if (e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "0" ||
        e.key === ".")
        buttonClick(e.key);
    else if (e.key == "/" ||
        e.key == "*" ||
        e.key == "+" ||
        e.key == "-" ||
        e.key == "%")
        operatorBtnClick(e.key);
    else if (e.key === "Enter")
        equalToBtn.click();
    else if (e.key === "Backspace")
        calc.deleteLastEntity();
    else if (e.key === "Escape")
        calc.reset();
});
function buttonClick(key) {
    numbersEl.forEach(function (btn) {
        return key === btn.dataset.value ? btn.click() : null;
    });
}
function operatorBtnClick(key) {
    operatorsEl.forEach(function (operator) {
        return key === operator.dataset.value ? operator.click() : null;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector("#toggle-mode");
  const toggleButtons = document.querySelectorAll(
    "[data-primary][data-secondary]"
  );
  const toggleInverse = document.querySelector("#toggle-inverse");
  const toggleInverseButtons = document.querySelectorAll(
    "[data-real][data-inverse]"
  );

  let displayBig = document.querySelector(".display-big");
  let displaySmallRight = document.querySelector(".display-small-right");
  let buttons = document.querySelectorAll("#select-btn");
  let calculate = "";
  let istoggle = false;
  let isInverseToggle = false;
  let memory = 0;

  toggleInverse.addEventListener("click", function () {
    isInverseToggle = !isInverseToggle;

    toggleInverseButtons.forEach((button) => {
      button.innerHTML = isInverseToggle
        ? button.dataset.real
        : button.dataset.inverse;
    });
  });

  toggle.addEventListener("click", function () {
    istoggle = !istoggle;

    toggleButtons.forEach((button) => {
      button.innerHTML = istoggle
        ? button.dataset.primary
        : button.dataset.secondary;
    });
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let value = button.textContent.trim();
      console.log(memory);
      if (!isNaN(value) || value === ".") {
        calculate += value;
      } else if (value === "clear") {
        calculate = "";
      } else if (value === "=") {
        try {
          calculate = eval(calculate);
          displaySmallRight.textContent = calculate;
        } catch (error) {
          calculate = "Error";
        }
      } else if (value === "+") {
        calculate += "+";
      } else if (value === "-") {
        calculate += "-";
      } else if (value === "*") {
        calculate += "*";
      } else if (value === "/") {
        calculate += "/";
      } else if (value === "%") {
        calculate += "%";
      } else if (value === "(") {
        calculate += "(";
      } else if (value === ")") {
        calculate += ")";
      } else if (value === "n!") {
        calculate = factorial(parseInt(calculate));
      } else if (value == "1/x") {
        calculate = `1/(${calculate})`;
      } else if (value === "2√x") {
        calculate = `Math.sqrt(${calculate})`;
      } else if (value === "3√x") {
        calculate = `Math.cbrt(${calculate})`;
      } else if (value === "log") {
        calculate = `Math.log10(${calculate})`;
      } else if (value === "ln") {
        calculate = `Math.log(${calculate})`;
      } else if (value === "10x") {
        calculate = `Math.pow(10, ${calculate})`;
      } else if (value === "2x") {
        calculate = `Math.pow(2, ${calculate})`;
      } else if (value === "x2") {
        calculate = `Math.pow(${calculate}, 2)`;
      } else if (value === "x3") {
        calculate = `Math.pow(${calculate}, 3)`;
      } else if (value === "+/-") {
        calculate = -calculate;
      } else if (value === "xy") {
        calculate += "**";
      } else if (value === "exp") {
        calculate = `Math.exp(${calculate})`;
      } else if (value === "ex") {
        calculate = `Math.exp(${calculate})`;
      } else if (value === "pie") {
        calculate += `Math.PI`;
      } else if (value === "y√x") {
      } else if (value === "|x|") {
        calculate = `Math.abs(${calculate})`;
      } else if (value === "floor") {
        calculate = `Math.floor(${calculate})`;
      } else if (value === "ceil") {
        calculate = `Math.ceil(${calculate})`;
      } else if (value === "rand") {
        calculate = `Math.random()*10`;
      } else if (value === "dms") {
        calculate = decimalToDMS(calculate);
      } else if (value === "sin") {
        calculate = `Math.round(Math.sin(${calculate}))`;
      } else if (value === "cos") {
        calculate = `Math.round(Math.cos(${calculate}))`;
      } else if (value === "tan") {
        calculate = `Math.round(Math.tan(${calculate}))`;
      } else if (value === "cosec") {
        calculate = `Math.round(1/Math.sin(${calculate}))`;
      } else if (value === "sec") {
        calculate = `Math.round(1/Math.cos(${calculate}))`;
      } else if (value === "cot") {
        calculate = `Math.round(1/Math.tan(${calculate}))`;
      } else if (value === "sin-1") {
        calculate = `Math.asin(${calculate})`;
      } else if (value === "cos-1") {
        calculate = `Math.acos(${calculate})`;
      } else if (value === "tan-1") {
        calculate = `Math.atan(${calculate})`;
      } else if (value === "cosec-1") {
        calculate = `Math.asin(1/${calculate})`;
      } else if (value === "sec-1") {
        calculate = `Math.acos(1/${calculate})`;
      } else if (value === "cot-1") {
        calculate = `Math.atan(1/${calculate})`;
      } else if (value === "MC") {
        memory = 0;
      } else if (value === "MR") {
        displayBig.innerText = memory;
        calculate = memory.toString();
      } else if (value === "M+") {
        memory += parseFloat(displayBig.innerText) || 0;
      } else if (value === "M-") {
        memory -= parseFloat(displayBig.innerText) || 0;
      } else if (value === "MS") {
        memory = parseFloat(displayBig.innerText) || 0;
      }
      displayBig.textContent = calculate;
    });
  });

  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }

  function decimalToDMS(calculate) {
    let degree = Math.floor(calculate);
    let minutes = Math.floor((calculate - degree) * 60);
    let seconds = Math.round((calculate - degree - minutes / 60) * 3600);

    return `${degree}° ${minutes}' ${seconds}"`;
  }
});

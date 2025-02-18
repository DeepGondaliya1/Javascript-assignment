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
  let currentNumber = ""; // Added to track current number
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
        currentNumber += value;
        displayBig.textContent = currentNumber;
        displaySmallRight.textContent = calculate;
      } else if (value === "clear") {
        calculate = "";
        currentNumber = "";
        displayBig.textContent = "0";
        displaySmallRight.textContent = "";
      } else if (value === "=") {
        try {
          let result = eval(calculate);
          calculate = result.toString();
          currentNumber = result.toString();
          displayBig.textContent = currentNumber;
          displaySmallRight.textContent = calculate;
        } catch (error) {
          calculate = "Error";
          currentNumber = "Error";
          displayBig.textContent = "Error";
          displaySmallRight.textContent = "Error";
        }
      } else if (["+", "-", "*", "/", "%", "(", ")"].includes(value)) {
        calculate += value;
        currentNumber = "";
        displaySmallRight.textContent = calculate;
      } else if (value === "n!") {
        calculate = factorial(parseInt(calculate));
        currentNumber = calculate;
        displayBig.textContent = currentNumber;
        displaySmallRight.textContent = calculate;
      } else if (value == "1/x") {
        calculate = `1/(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "2√x") {
        calculate = `Math.sqrt(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "3√x") {
        calculate = `Math.cbrt(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "log") {
        calculate = `Math.log10(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "ln") {
        calculate = `Math.log(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "10x") {
        calculate = `Math.pow(10, ${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "2x") {
        calculate = `Math.pow(2, ${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "x2") {
        calculate = `Math.pow(${calculate}, 2)`;
        displaySmallRight.textContent = calculate;
      } else if (value === "x3") {
        calculate = `Math.pow(${calculate}, 3)`;
        displaySmallRight.textContent = calculate;
      } else if (value === "+/-") {
        calculate = -calculate;
        currentNumber = calculate.toString();
        displayBig.textContent = currentNumber;
        displaySmallRight.textContent = calculate;
      } else if (value === "xy") {
        calculate += "**";
        displaySmallRight.textContent = calculate;
      } else if (value === "exp") {
        calculate = `Math.exp(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "ex") {
        calculate = `Math.exp(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "pie") {
        calculate += `Math.PI`;
        displaySmallRight.textContent = calculate;
      } else if (value === "y√x") {
        displaySmallRight.textContent = calculate;
      } else if (value === "|x|") {
        calculate = `Math.abs(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "floor") {
        calculate = `Math.floor(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "ceil") {
        calculate = `Math.ceil(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "rand") {
        calculate = `Math.random()*10`;
        displaySmallRight.textContent = calculate;
      } else if (value === "dms") {
        calculate = decimalToDMS(calculate);
        displaySmallRight.textContent = calculate;
      } else if (value === "sin") {
        calculate = `Math.sin(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "cos") {
        calculate = `Math.cos(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "tan") {
        calculate = `Math.tan(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "cosec") {
        calculate = `1/Math.sin(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "sec") {
        calculate = `1/Math.cos(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "cot") {
        calculate = `1/Math.tan(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "sin-1") {
        calculate = `Math.asin(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "cos-1") {
        calculate = `Math.acos(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "tan-1") {
        calculate = `Math.atan(${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "cosec-1") {
        calculate = `Math.asin(1/${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "sec-1") {
        calculate = `Math.acos(1/${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "cot-1") {
        calculate = `Math.atan(1/${calculate})`;
        displaySmallRight.textContent = calculate;
      } else if (value === "MC") {
        memory = 0;
      } else if (value === "MR") {
        displayBig.innerText = memory;
        calculate = memory.toString();
        currentNumber = memory.toString();
        displaySmallRight.textContent = calculate;
      } else if (value === "M+") {
        memory += parseFloat(displayBig.innerText) || 0;
      } else if (value === "M-") {
        memory -= parseFloat(displayBig.innerText) || 0;
      } else if (value === "MS") {
        memory = parseFloat(displayBig.innerText) || 0;
      }

      // After any mathematical operation, evaluate and update displayBig
      if (value !== "=" && ["2√x", "3√x", "log", "ln", "10x", "2x", "x2", "x3", "exp", "ex", "|x|", "floor", "ceil", "sin", "cos", "tan", "cosec", "sec", "cot", "sin-1", "cos-1", "tan-1", "cosec-1", "sec-1", "cot-1"].includes(value)) {
        try {
          let result = eval(calculate);
          currentNumber = result;
          displayBig.textContent = currentNumber;
        } catch (error) {
          displayBig.textContent = "Error";
          currentNumber = "";
        }
      }
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
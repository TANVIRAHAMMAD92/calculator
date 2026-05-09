const display = document.getElementById("display");
const historyList = document.getElementById("historyList");
const themeToggle = document.getElementById("themeToggle");

/* Append Number or Operator */

function appendValue(value) {
  display.value += value;
}

/* Clear Display */

function clearDisplay() {
  display.value = "";
}

/* Delete Last Character */

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

/* Calculate Result */

function calculate() {

  if(display.value === "") return;

  try {

    const expression = display.value;
    const result = eval(expression);

    addToHistory(expression, result);

    display.value = result;

  } catch(error) {

    display.value = "Error";

    setTimeout(() => {
      display.value = "";
    }, 1200);
  }
}

/* Add History */

function addToHistory(expression, result) {

  const li = document.createElement("li");

  li.textContent = `${expression} = ${result}`;

  historyList.prepend(li);
}

/* Keyboard Support */

document.addEventListener("keydown", (e) => {

  const key = e.key;

  if(!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)){
    appendValue(key);
  }

  else if(key === "Enter"){
    calculate();
  }

  else if(key === "Backspace"){
    deleteLast();
  }

  else if(key.toLowerCase() === "c"){
    clearDisplay();
  }
});

/* Theme Toggle */

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){
    themeToggle.textContent = "☀️";
  }
  else{
    themeToggle.textContent = "🌙";
  }
});

/* Button Click Animation */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    button.style.transform = "scale(0.9)";

    setTimeout(() => {
      button.style.transform = "";
    }, 100);
  });
});
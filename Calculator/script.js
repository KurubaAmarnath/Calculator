const display = document.getElementById("display");
const buttons = document.querySelectorAll("[data-value]");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "AC") {
      // Clear all
      currentInput = "";
      display.textContent = "0";
    }

    else if (value === "clear") {
      // Delete last character
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
    }

    else if (value === "=") {
      // Evaluate expression
      try {
        const result = eval(currentInput);

        display.textContent = result;
        currentInput = result.toString();
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
    }

    else {
      // Add pressed value to current input
      if (value === "÷") {
        currentInput += "/";
      } else if (value === "×") {
        currentInput += "*";
      } else {
        currentInput += value;
      }

      display.textContent = currentInput;
    }
  });
});
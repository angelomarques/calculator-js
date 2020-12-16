const displayDigits = document.getElementById("display-digits");
const calculatorButton = document.querySelectorAll(".calculator-button");

//constants that get calculators button
const upArea = document.getElementById("uparea");
const dot = document.getElementById("dotButton");


// The next 4 events is for make the design when pressing or hover a button
calculatorButton.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  });
});

calculatorButton.forEach((button) => {
  button.addEventListener("mouseup", () => {
    button.style.backgroundColor = "#730039";
  });
});

calculatorButton.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  });
});

calculatorButton.forEach((button) => {
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#730039";
  });
});


// the next function prints the button clicked in the display
function printNumber(id) {
  const arrNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  for(let i = 0; i < arrNumbers.length; i++) {
    if(id == arrNumbers[i] & displayDigits.innerHTML.length < 18) {
      displayDigits.innerHTML += id;
    };
  };
  if(id == "dot") {
    displayDigits.innerHTML += ".";
  }
};


// the next function is for the functions backspace and backspaceAll of the calculator:
function backButton(id) {
  if(id == "backspaceAll") {
    displayDigits.innerHTML = "";
    upArea.innerHTML = "";
  };
  if(id == "backspace") {
    displayDigits.innerHTML = displayDigits.innerHTML.slice(0, -1);
  };
};


// the next function is for the operations in the calculator:
function operation(id) {
  if(id == "plus" & upArea.innerHTML != "") {
    upArea.innerHTML = parseFloat(upArea.innerHTML) + parseFloat(displayDigits.innerHTML);
    upArea.innerHTML += " +";
    displayDigits.innerHTML = "";
  };
  if(id == "divide" & upArea.innerHTML != "") {
    upArea.innerHTML = parseFloat(upArea.innerHTML) / parseFloat(displayDigits.innerHTML);
    upArea.innerHTML += " /";
    displayDigits.innerHTML = "";
  };
  if(id == "multiplicate" & upArea.innerHTML != "") {
    upArea.innerHTML = parseFloat(upArea.innerHTML) * parseFloat(displayDigits.innerHTML);
    upArea.innerHTML += " *";
    displayDigits.innerHTML = "";
  };
  if(id == "porcentage" & upArea.innerHTML != "") {
    upArea.innerHTML = parseFloat(upArea.innerHTML) / 100 * parseFloat(displayDigits.innerHTML);
    upArea.innerHTML += " %";
    displayDigits.innerHTML = "";
  };
  if(id == "minus" & upArea.innerHTML != "") {
    upArea.innerHTML = parseFloat(upArea.innerHTML) - parseFloat(displayDigits.innerHTML);
    upArea.innerHTML += " -";
    displayDigits.innerHTML = "";
  };
  if(id == "plus" & upArea.innerHTML == "") {
    upArea.innerHTML = displayDigits.innerHTML;
    upArea.innerHTML += " +";
    displayDigits.innerHTML = "";
  }if(id == "divide" & upArea.innerHTML == "") {
    upArea.innerHTML = displayDigits.innerHTML;
    upArea.innerHTML += " /";
    displayDigits.innerHTML = "";
  };
  if(id == "multiplicate" & upArea.innerHTML == "") {
    upArea.innerHTML = displayDigits.innerHTML;
    upArea.innerHTML += " *";
    displayDigits.innerHTML = "";
  };
  if(id == "porcentage" & upArea.innerHTML == "") {
    upArea.innerHTML = displayDigits.innerHTML;
    upArea.innerHTML += " %";
    displayDigits.innerHTML = "";
  };
  if(id == "minus" & upArea.innerHTML == "") {
    upArea.innerHTML = displayDigits.innerHTML;
    upArea.innerHTML += " -";
    displayDigits.innerHTML = "";
  };
  if(id == "equal") {
    let x = upArea.innerHTML.split(' ')[1];
    if(x == "+") {
      displayDigits.innerHTML = parseFloat(upArea.innerHTML) + parseFloat(displayDigits.innerHTML) || parseFloat(upArea.innerHTML);
    };
    if(x == "/") {
      displayDigits.innerHTML = parseFloat(upArea.innerHTML) / parseFloat(displayDigits.innerHTML) || parseFloat(upArea.innerHTML);
    };
    if(x == "*") {
      displayDigits.innerHTML = parseFloat(upArea.innerHTML) * parseFloat(displayDigits.innerHTML) || parseFloat(upArea.innerHTML);
    };
    if(x == "%") {
      displayDigits.innerHTML = parseFloat(upArea.innerHTML) / 100 * parseFloat(displayDigits.innerHTML);
    };
    if(x == "-") {
      displayDigits.innerHTML = parseFloat(upArea.innerHTML) / parseFloat(displayDigits.innerHTML) || parseFloat(upArea.innerHTML);
    };
    upArea.innerHTML = "";
  }
};
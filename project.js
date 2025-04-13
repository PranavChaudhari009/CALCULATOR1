function add() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let result = Number(a) + Number(b);
    document.getElementById("result").innerText = "Result: " + result;
  }
  
  function subtract() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let result = Number(a) - Number(b);
    document.getElementById("result").innerText = "Result: " + result;
  }
  
  function multiply() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let result = Number(a) * Number(b);
    document.getElementById("result").innerText = "Result: " + result;
  }
  
  function divide() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    if (b == 0) {
      document.getElementById("result").innerText = "Result: Cannot divide by zero";
    } else {
      let result = Number(a) / Number(b);
      document.getElementById("result").innerText = "Result: " + result;
    }
  }
  
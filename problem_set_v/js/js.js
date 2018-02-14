// Return Functions ///////////////////////////////////////////////////////////
function add(x, y) {
  return x + y;
}
function subs(x, y) {
  return x - y;
}
function mult(x, y) {
  return x * y;
}
function divd(x, y) {
  return x / y;
}
function exp(x, y) {
  return Math.pow(x, y);
}
function sin(x) {
  return Math.sin(x);
}
function cos(x) {
  return Math.cos(x);
}
function tan(x) {
  return Math.tan(x);
}
function percent(x) {
  return x / 100;
}
function sign(x) {
  return x * -1;
}
function factorial(x) {
  var output = 1;
  for (var i = x; i > 0; i--){
    output *= i;
  }
  return output;
}
function root(x, y) {
  return Math.pow(x, 1/y);
}
function evale(x) {
  return eval(x);
}
///////////////////////////////////////////////////////////////////////////////

var display = "";
console.log(display);
var log = 0;
var zerodisplay = 0;
var signlog = 0;

// Clear
function clear0() {
  display = "";
  document.getElementById("display").innerHTML = "&nbsp;";
  console.log("Cleared\n" + display);
  signlog = 0;
  console.log("signlog is " + signlog);
}

function display() {
  d.innerHTML = display;
}

// One
function one() {
  if (display == "" || (display == 0 && !(display.includes(".")))) {
    document.getElementById("display").innerHTML = "1";
  } else {
    document.getElementById("display").innerHTML += "1";
  }
  display += "1";
  console.log(display);
}

// Two
function two() {
  if (display == "" || (display == 0 && !(display.includes(".")))) {
    document.getElementById("display").innerHTML = "2";
  } else {
    document.getElementById("display").innerHTML += "2";
  }
  display += "2";
  console.log(display);
}

// Three
function three() {
  if (display == "" || (display == 0 && !(display.includes(".")))) {
    document.getElementById("display").innerHTML = "3";
  } else {
    document.getElementById("display").innerHTML += "3";
  }
  display += "3";
  console.log(display);
}

// Four
function four() {
  if (display == "" || (display == 0 && !(display.includes(".")))) {
    document.getElementById("display").innerHTML = "4";
  } else {
    document.getElementById("display").innerHTML += "4";
  }
  display += "4";
  console.log(display);
}

// Five
function five() {
  if (display == "" || (display == 0 && !(display.includes(".")))) {
    document.getElementById("display").innerHTML = "5";
  } else {
    document.getElementById("display").innerHTML += "5";
  }
  display += "5";
  console.log(display);
}

// Six
function six() {
  if (display == "" || (display == 0 && !(display.includes(".")))) {
    document.getElementById("display").innerHTML = "6";
  } else {
    document.getElementById("display").innerHTML += "6";
  }
  display += "6";
  console.log(display);
}

// Seven
function seven() {
  if (display == "" || (display == 0 && !(display.includes(".")))) {
    document.getElementById("display").innerHTML = "7";
  } else {
    document.getElementById("display").innerHTML += "7";
  }
  display += "7";
  console.log(display);
}

// Eight
function eight() {
  if (display == "" || (display == 0 && !(display.includes(".")))) {
    document.getElementById("display").innerHTML = "8";
  } else {
    document.getElementById("display").innerHTML += "8";
  }
  display += "8";
  console.log(display);
}

// Nine
function nine() {
  if (display == "" || (display == 0 && !(display.includes(".")))) {
    document.getElementById("display").innerHTML = "9";
  } else if (display.includes("(-", display.length-1)) {
    document.getElementById("display").innerHTML += "9)"
  } else {
    document.getElementById("display").innerHTML += "9";
  }

  display += "9";
  console.log(display);
}

// Zero
function zero() {
  if (display == 0 && !(display.includes("."))) {
    document.getElementById("display").innerHTML = "0";
    signlog = 1;
  } else {
    document.getElementById("display").innerHTML += "0";
    display += "0";
  }
  console.log(display);
}

// Add
function addition() {
  document.getElementById("display").innerHTML += " + ";
  display += "+";
  console.log(display);
}

// Substract
function minus() {
  document.getElementById("display").innerHTML += " - ";
  display += "-";
  console.log(display);
}

// Multiply
function multiply() {
  document.getElementById("display").innerHTML += " × ";
  display += "*";
  console.log(display);
}

// Divide
function divide() {
  document.getElementById("display").innerHTML += " <strong>÷</strong> ";
  display += "/";
  console.log(display);
}

// Equals
function equal() {
  console.log(display);
  if (display.includes("(-")){
    display += ")";
    console.log("negative");
    console.log(display);
    var equal = eval(display);
    console.log(display);
    document.getElementById("display").innerHTML = equal.toString();
  } else if (!(isNaN(evale(display)))){
    if (display.includes("/0")){
      var equal = eval(display);
      document.getElementById("display").innerHTML = "ERROR";
      console.log("Infinity");
    } else {
      console.log(display);
      var equal = eval(display);
      console.log(equal);
      console.log(display);
      document.getElementById("display").innerHTML = equal.toString();
    }
  } else if (display = Infinity){ // && (isNaN(evale(display)))
    var equal = eval(display);
    document.getElementById("display").innerHTML = "ERROR";
    console.log("Infinity");
  } else if (display = NaN) {
    var equal = eval(display);
    console.log("Not a number");
    document.getElementById("display").innerHTML = "0";
  } else if (!(isNaN(evale(display)))){
    console.log(display);
    var equal = eval(display);
    console.log(equal);
    console.log(display);
    document.getElementById("display").innerHTML = equal.toString();
  } else {
    var equal = eval(display);
    console.log(equal);
    console.log(display);
    document.getElementById("display").innerHTML = equal.toString();
  }
  display = "";
}

// Decimal
function decimal() {
  console.log(display);
  if (display == 0){
    document.getElementById("display").innerHTML += "0.";
    display += "0.";
  } else if (display == "") {
    document.getElementById("display").innerHTML += "0."
    display += ".";
  } else if (display.includes(".")) {
    alert("Nope");
  } else {
    document.getElementById("display").innerHTML += ".";
    display += ".";
  }
  console.log(display);
}

// Percent
function percnt() {
  console.log("signlog is " + signlog);
  if (signlog = 1 && display == 0) {
    document.getElementById("display").innerHTML = "0";
  } else {
    var equal = eval(display);
    console.log(equal);
    var per = percent(equal);
    document.getElementById("display").innerHTML = per.toString();
    console.log(per);
    display = per;
  }
}

// Sign switch
function signswitch(){
  console.log("signlog is " + signlog);
  if (signlog = 1 && display == 0) {
    document.getElementById("display").innerHTML = "0";
    console.log("zeroed");
  } else if (!(display.includes("*")) && !(display.includes("/")) && !(display.includes("-")) && !(display.includes("+"))){
    var equal = eval(display);
    var switched = sign(equal);
    document.getElementById("display").innerHTML = switched.toString();
    display = switched.toString();
    console.log("Switched single number");
  } else {
    document.getElementById("display").innerHTML += "(-";
    display += "(-";
  }
  console.log(display);
}

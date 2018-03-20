// HOME PAGE TABS
// var caesar = document.getElementById('caeser');
// var vigenere = document.getElementById('vigenere');

// caesar.style.display = 'block';
// vigenere.style.display = 'none';

// function julius() {
//     caesar.style.display = 'block'; alert('hail julius caesar!');
//     vigenere.style.display = 'none'; alert('*snooty voice* french people');
// }

// function dudefrancais() {
//     vigenere.style.display = 'block'; alert('vive la france!');
//     caesar.style.display = 'none'; alert('rome burned');
// }

function descrip(evt, cipher, button, otherbutton, img, otherimg) {
    var description, tab;

    description = document.getElementsByClassName('descrip');
    for (var i = 0; i < description.length; i++){
        description[i].style.display = "none";
    }

    tab = document.getElementsByClassName('tab');
    for (var i = 0; i < tab.length; i++){
        tab[i].className = tab[i].className.replace(" active", "");
    }

    document.getElementById(cipher).style.display = "block";
    evt.currentTarget.className += " active";

    document.getElementById(button).style.backgroundColor = "white";
    document.getElementById(button).style.border = "1px inset black";
    // document.getElementById(button).style.borderBottom = "none";

    document.getElementById(otherbutton).style.backgroundColor = "#c1c1c1";
    document.getElementById(otherbutton).style.border = "none";

    document.getElementById(img).style.display = "block";
    document.getElementById(otherimg).style.display = "none";
}

document.getElementById('caeser-tb').click();

// CIPHER PAGE JS
function button() {
  var type = document.getElementById('select-cipher');
  var typevalue = type.options[type.selectedIndex].value;

  var code = document.getElementById('select-code');
  var codevalue = code.options[code.selectedIndex].value;

  var button = document.getElementById('run-btn');

  if ((typevalue !== "caesar" || typevalue !== "vigenere") || (codevalue !== "encode" || codevalue == "decode")) {
    button.disabled = true;
  }

  if (/*(typevalue == "caesar" || typevalue == "vigenere") && */(codevalue == "encode" || codevalue == "decode")) {
    button.disabled = false;
    if (codevalue == "encode") {
      button.textContent = "Encode!";
    } else if (codevalue == "decode") {
      button.textContent = "Decode!";
    }
  }
  
  
  if (typevalue == "none" || codevalue == "none") {
    button.disabled = true;
    if (codevalue == "none") {
      button.innerHTML = "&nbsp";
    }
  }
}

var alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
                     'H', 'I', 'J', 'K', 'L', 'M', 'N',
                     'O', 'P', 'Q', 'R', 'S', 'T', 'U',
                     'V', 'W', 'X', 'Y', 'Z'];
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function caesar(message, key) {
  message = message.toUpperCase();
  for (var i = 0; i < message.length; i++){
    var char = message.charAt(i);
    var alph = alphabet.indexOf(char);
    var 
  }
}
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
function buttonFunctionality() {
  // console.log(caesarEncrypt('hell', 8));
  // console.log(caesarDecrypt('pmtt', 8));
  // console.log(vigenereEncrypt('hell', 'abc'));
  // console.log(vigenereDecrypt('hfnl', 'abc'));

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

function run() {
  var type = document.getElementById('select-cipher');
  var typevalue = type.options[type.selectedIndex].value;

  var code = document.getElementById('select-code');
  var codevalue = code.options[code.selectedIndex].value;

  var button = document.getElementById('run-btn');
  var message = document.getElementById('input').textContent;
  var output = "";

  if (typevalue == "caesar") {
    if (codevalue == "encode"){
      var key = parseInt(prompt("What is your key?"));
      output = caesarEncrypt(message, key);
    } else if (codevalue == "decode"){
      var key = parseInt(prompt("What is your key?"));
      output = caesarDecrypt(message, key);
    }
  } else if (typevalue == "vigenere") {
    if (codevalue == "encode"){
      var key = (prompt("What is your key?")).toString();
      output = vigenereEncrypt(message, key);
    } else if (codevalue == "decode"){
      var key = (prompt("What is your key?")).toString();
      output = vigenereDecrypt(message, key);
    }
  }
  output = output.toString();
  console.log(output);
  document.getElementsByName('output')[0].value = output;
}

// Caesar Cipher
function caesarEncrypt(message, key) {
  message = message.toUpperCase();
	var result = "";
	var firstCharIdx = 'A'.charCodeAt(0);
	var offset = ('z'.charCodeAt(0) - 'A'.charCodeAt(0)) + 1;
	for (var i = 0; i < message.length; i++) {
		var oldCharIdx = message[i].charCodeAt(0);
		var oldIdxInAlphabet = oldCharIdx - firstCharIdx;
		var newIdxInAlphabet = (oldIdxInAlphabet + key) % offset;
		var newChar = String.fromCharCode( firstCharIdx + newIdxInAlphabet );
		result += newChar;
	}
	return result;
}

function caesarDecrypt(message, key) {
	return caesarEncrypt(message, key * -1);
}

// Vigenère Cipher

function ordA(a) {
  return a.charCodeAt(0) - 65;
}

function vigenereEncrypt(text, key, decode) {
  var i = 0, b;
  key = key.toUpperCase().replace(/[^A-Z]/g, '');
  return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function(a) {
    b = key[i++ % key.length];
    return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
  });
}

function vigenereDecrypt(text, key, decode) {
  decode = true;
  var i = 0, b;
  key = key.toUpperCase().replace(/[^A-Z]/g, '');
  return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function(a) {
    b = key[i++ % key.length];
    return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
  });
}

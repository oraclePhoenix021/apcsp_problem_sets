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
  console.log(caesarEncrypt('hell', 8));
  console.log(caesarDecrypt('pmtt', 8));
  console.log(vigenereEncrypt('hell', 'abc'));
  console.log(vigenereDecrypt('hfnl', 'abc'));

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
      var key = parseInt(prompt("What is you key?"));
      output = caesarEncrypt(message, key);
    } else if (codevalue == "decode"){
      var key = parseInt(prompt("What is you key?"));
      output = caesarDecrypt(message, key);
    } else if (typevalue == "vigenere") {
      if (codevalue == "encode"){
        var key = (prompt("What is you key?")).toString();
        output = vigenereEncrypt(message, key);
      } else if (codevalue == "decode"){
        var key = (prompt("What is you key?")).toString();
        output = vigenereDecrypt(message, key);
      }
    }
  }
  document.getElementById("result").innerHTML = output;
}

// Alphabet
var alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
                     'H', 'I', 'J', 'K', 'L', 'M', 'N',
                     'O', 'P', 'Q', 'R', 'S', 'T', 'U',
                     'V', 'W', 'X', 'Y', 'Z'];
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// function caesar(message, key) {
//   message = message.toUpperCase();
//   var encryptedResult = "";
//   for (var i = 0; i < message.length; i++) {
//     var originalCharacter = message.charAt(i);
//     var alphabeticIndex = alphabet.indexOf(originalCharacter);
//     if (alphabeticIndex >= 0) {
//       var newIndex = alphabeticIndex + key;
//       newIndex = newIndex % alphabet.length;
//       var newCharacter = alphabet.charAt(newIndex);
//       encryptedResult += newCharacter;
//     } else {
//       encryptedResult += originalCharacter;
//     }
//   }
//   return encryptedResult;
// }

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



// function vigenereEncrypt(message, key) {
// 	var result = "";
// 	for (var i = 0, j = 0; i < message.length; i++) {
// 		var originalCharacter = message.charCodeAt(i);
// 		if (65 <= originalCharacter && originalCharacter <= 90) {
// 			result += String.fromCharCode((originalCharacter - 65 + key[j % key.length]) % 26 + 65);
// 			j++;
// 		} else if (97 <= originalCharacter && originalCharacter <= 122) {
// 			result += String.fromCharCode((originalCharacter - 97 + key[j % key.length]) % 26 + 97);
// 			j++;
// 		} else {
// 			result += message.charAt(i);
// 		}
// 	}
// 	return result;
// }
// // hfnl

// Taught from https://dev.to/vincecampanale/using-the-vignere-cipher-to-encrypt-a-message-with-javascript
function encryptAlphabet(start) {
  var alphabet = [];
  //from start index to 26 chars later
  for (var i = start; i < start + 26; i++) {
    //convert the char code into a letter and push it to the alphabet array
    alphabet.push(String.fromCharCode(
      i > 122 ? i - 26 : //if char code > 122, return code - 26, else
      i < 97  ? i + 26 : //if char code < 97, return code + 26, else
      i                  //just return the code
    ));
  }
  return alphabet; //return the alphabet array
}

function decryptAlphabet(start) {
  var alphabet = [];
  //from start index to 26 chars later
  for (var i = start; i < start + 26; i++) {
    //convert the char code into a letter and push it to the alphabet array
    alphabet.push(String.fromCharCode(
      i > 122 ? i - 26 : //if char code > 122, return code - 26, else
      i < 97  ? i + 26 : //if char code < 97, return code + 26, else
      i                  //just return the code
    ));
  }
  return alphabet; //return the alphabet array
}

function encryptTable() {
  var table = {}; //instantiate a temporary object to hold the table
  table.keys = encryptAlphabet(97); //set the keys of the object equal to the standard alphabet (starting at 97)
  table.keys.forEach((key, index) => { table[key] = encryptAlphabet(97 + index) });  //set the value of each key as the alphabet
  return table; //return the table
}

function decryptTable() {
  var table = {}; //instantiate a temporary object to hold the table
  table.keys = encryptAlphabet(122); //set the keys of the object equal to the standard alphabet (starting at 97)
  table.keys.forEach((key, index) => { table[key] = decryptAlphabet(97 + index) });  //set the value of each key as the alphabet
  return table; //return the table
}

function encryptWithTable( message, keywordStr ) {
  var messageArray = message.split(''); //split the message into an array
  var keywordArray = keywordStr.split(''); //split the keyword string into an array
  messageArray.forEach((letter, index) => { //for each letter and index in the message array
    var messageChar = letter; //make a temp variable to hold the letter
    var keywordChar = keywordArray[index]; //get the corresponding letter from the keyword string using the index

    var keywordCharIndex = keywordChar.charCodeAt(0) - 97; //get the index of the keyword by subtracting 97 from the charcode
    var vigenereTable = encryptTable(); //create a vigenere table

    var cipherChar = vigenereTable[messageChar][keywordCharIndex]; //look up the corresponding letter in the table

    messageArray[index] = cipherChar; //replace the letter in the message with the cipher letter
  });
  return messageArray.join(''); //convert the messageArray back to a string and return it
}

function decryptWithTable( message, keywordStr ) {
  var messageArray = message.split(''); //split the message into an array
  var keywordArray = keywordStr.split(''); //split the keyword string into an array
  messageArray.forEach((letter, index) => { //for each letter and index in the message array
    var messageChar = letter; //make a temp variable to hold the letter
    var keywordChar = keywordArray[index]; //get the corresponding letter from the keyword string using the index

    var keywordCharIndex = keywordChar.charCodeAt(0) - 97; //get the index of the keyword by subtracting 97 from the charcode
    var vigenereTable = decryptTable(); //create a vigenere table

    var cipherChar = vigenereTable[messageChar][keywordCharIndex]; //look up the corresponding letter in the table

    messageArray[index] = cipherChar; //replace the letter in the message with the cipher letter
  });
  return messageArray.join(''); //convert the messageArray back to a string and return it
}

function vigenerEncrypt(message, keyword) { //////////////////////////////////////////////////////////////////////////////////////////
  for ( var i = 0; i < message.length; i++ ) {
    keyword += keyword; // repeat the keyword a bunch of times
  }
  var keywordStr = keyword.substr( 0, message.length ); // cut the keyword string so it's the same length as the message
  var ciphertext = encryptWithTable( message, keywordStr ); // encode the string using the vigenere table
  return ciphertext; //return the cipher text!
}

function vigenerDecrypt(message, keyword) {
  // var temp = "";
  // for (var i = keyword.length; i > 0; i--){
  //   var char = keyword.charAt(i);
  //   temp += char;
  // }
  // keyword = temp;
  for ( var i = 0; i < message.length; i++ ) {
    keyword += keyword; // repeat the keyword a bunch of times
  }
  var keywordStr = keyword.substr( 0, message.length ); // cut the keyword string so it's the same length as the message
  var ciphertext = encryptWithTable( message, keywordStr ); // encode the string using the vigenere table
  return ciphertext; //return the cipher text!
}

// Stuff
var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function createKey(keyword) {
  var key = [];
  for (var i = 0; i < keyword.length; i++){
    var char = keyword.charAt(i);
    if (alphabet.indexOf(char) >= 0){
      var char = keyword.charAt(i);
      key.push(alphabet.indexOf(char));
    } else if (ALPHABET.indexOf(char) >= 0){
      var char = keyword.charAt(i);
      key.push(ALPHABET.indexOf(char));
    }
  }
  return key;
}

function vigenerEncrypt(message, key){
  key = createKey(key);
  var result = "";

  for (var i = 0; i < message.length; i++){
    var keyIndex = i % newKey.length;
    var originalCharacter = message.charAt(i);
    if (alphabet.indexOf(originalCharacter) >= 0){
      var encryptIndex = alphabet.indexOf(originalCharacter) + key[keyIndex];
      encryptIndex %= alphabet.length;
      var newChar = alphabet.charAt(encryptIndex);
      result += newChar;
    } else if (ALPHABET.indexOf(originalCharacter) >= 0){
      var encryptIndex = ALPHABET.indexOf(originalCharacter) + key[keyIndex];
      encryptIndex %= ALPHABET.length;
      var newChar = ALPHABET.charAt(encryptIndex);
      result += newChar;
    } else {
      result += originalCharacter;
    }
  }
  return result;
}

function vigenerDecrypt(message, key){
  key = createKey(key);
  var result = "";

  for (var i = 0; i < message.length; i++){
    var keyIndex = i % newKey.length;
    var originalCharacter = message.charAt(i);
    if (alphabet.indexOf(originalCharacter) >= 0){
      var encryptIndex = alphabet.indexOf(originalCharacter) - key[keyIndex];
      encryptIndex %= alphabet.length;
      var newChar = alphabet.charAt(encryptIndex);
      result += newChar;
    } else if (ALPHABET.indexOf(originalCharacter) >= 0){
      var encryptIndex = ALPHABET.indexOf(originalCharacter) - key[keyIndex];
      encryptIndex %= ALPHABET.length;
      var newChar = ALPHABET.charAt(encryptIndex);
      result += newChar;
    } else {
      result += originalCharacter;
    }
  }
  return result;
}

// What I used finally for vigenere: https://rosettacode.org/wiki/Vigen%C3%A8re_cipher

var caesar = document.getElementById('caeser');
var vigenere = document.getElementById('vigenere');

caesar.display.style = 'block';
vigenere.style.display = 'none';

function julius() {
    caesar.style.display = 'block'; alert('hail julius caesar!');
    vigenere.style.display = 'none'; alert('*snooty voice* french people');
}

function dudefrancais() {
    vigenere.style.display = 'block'; alert('vive la france!');
    caesar.style.display = 'none'; alert('rome burned');
}
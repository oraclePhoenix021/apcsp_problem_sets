var game = document.getElementById('game');
var name = "";

function welcomeOnwards(){
    name = String(document.getElementById('name').value);
    name = document.getElementById('name').value;
    alert(name);
    var explain = "<p>"+name+", you are a brave explorer.</p>";
    game.innerHTML = explain;
}
var game = document.getElementById('game');
var name = "";
var answer = "";

// CSS
var gameHeight = game.offsetHeight;
var body = document.body, html = document.documentElement; // Credit: https://stackoverflow.com/a/1147768
var pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight); // Credit: https://stackoverflow.com/a/1147768
console.log(pageHeight);
var marginTop = (pageHeight/2) - (gameHeight-(gameHeight/5));
game.style.paddingTop = marginTop + "px";

// MUSIC
// var sound = document.getElementById('audio');
// var songs = [
//   "east",
//   "fading",
//   "reprieve",
//   "serity",
//   "thru",
//   "young"
//   ];
// var song = 0;
// sound.onended = function(){
//   if (song == songs.length - 1) song = 0;
//   else song++;
//   sound.src = "media/" + songs[song] + ".mp3";
// }

// GAME
function welcomeOnwards() {
  name = String(document.getElementById('name').value);
  contents[0][0] = "<p>"+name+", you are a child of the royal family, loved by all. However, the better a person is in this world, the worse their counterpart down below. Unbeknownst to you, your evil twin plots in the Land Below. One horrible day, you wake to find yourself not in your own bed, warm and comfortable, but in the dark underworld. Your evil counterpart has somehow found a way into the Land Above and replaced you. Ahead of you is a long and arduous journey to make it back to the top.</p><button onclick='onwards()'>Onwards!</button>";
  contents[1][2] = "<p>Sorry "+name+", you tried.</p>";
  contents[2][2] = "<p>Sorry "+name+", you tried.</p>";
  contents[3][2] = "<p>Sorry "+name+", you tried.</p>";
  contents[4][2] = "<p>Sorry "+name+", you tried.</p>";
  contents[5][2] = "<p>Sorry "+name+", you tried.</p>";
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  game.innerHTML = contents[0][0] + restart;
}

function onwards(option){
  if (option == welcome){
    game.innerHTML = welcome;
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    // location.reload();
    ch = 0; pt = 0;
  } else if (pos(0, 0)){
    ch++;
    game.innerHTML = contents[ch][pt] + restart;
  } else if(ch != 0 && pt == 0){
    option == 1 ? pt = 1 : pt = 2;
    game.innerHTML = contents[ch][pt] + restart;
  } else if (pt == 1){
    ch++; pt = 0;
    game.innerHTML = contents[ch][pt] + restart;
  }
  game.style.paddingTop = marginTop + "px";
}

function pos(x, y) {
  if (ch == x && pt == y) return true;
  else return false;
}

function check() {
  var ans;
  answer = String(document.getElementById('answer').value);
  // Answer cases /////////////
  if (pos(1, 0)) ans = "cards";
  /////////////////////////////
  var checkAnswer = answer.includes(ans);
  if (checkAnswer) onwards(1);
  else onwards(2);
}

var ch = 0, pt = 0;
var contents = [
  ['explain'],
  ['ch 1', 'good choice', 'dead choice'],
  ['ch 2', 'good choice', 'dead choice'],
  ['ch 3', 'good choice', 'dead choice'],
  ['ch 4', 'good choice', 'dead choice'],
  ['ch 5', 'good choice', 'dead choice']
]; console.log(contents);

contents[0][0] = "<p>"+name+", you are a child of the royal family, loved by all. However, the better a person is in this world, the worse their counterpart down below. Unbeknownst to you, your evil twin plots in the Land Below. One horrible day, you wake to find yourself not in your own bed, warm and comfortable, but in the dark underworld. Your evil counterpart has somehow found a way into the Land Above and replaced you. Ahead of you is a long and arduous journey to make it back to the top.</p><button onclick='onwards()'>Onwards!</button>";
contents[1][0] = "<p>You trudge along, alone and hungry. You see you're in a forest, so perhaps you can find some berries, nuts, or roots, whatever those are. Suddenly, a tall figure drops down in front of you. 'I am The Riddler. I know that you are not from here. I will appear to you and ask you questions and riddles over the course of your journey. As long as you continue to answer them all correctly, you will continue. If not...' You nod your head. The Riddler begins, 'Here is your first riddle: What has 13 hearts but no other organs?'</p><input text='text' id='answer' placeholder='What is your answer?'/><button onclick='check()'>Answer</button>";
contents[1][1] = "<p>The Riddler bows their head and vanishes. You see, in the abandoned space, lies enough food to last you a week or so, longer if you ration it. You pick it up, and go about your way.</p><button onclick='onwards()'>Onwards!</button>";
contents[2][0] = "<p>You've made your way out of the woods and are on your way to the nearby village. Hopefully, you'll be able to find better food and proper shelter from the elements.</p><button onclick='check()'>Answer</button>"

contents[1][2] = "<p>Sorry "+name+", you tried.</p>"; contents[2][2] = "<p>Sorry "+name+", you tried.</p>";
contents[3][2] = "<p>Sorry "+name+", you tried.</p>"; contents[4][2] = "<p>Sorry "+name+", you tried.</p>";
contents[5][2] = "<p>Sorry "+name+", you tried.</p>";

var restart = "<button onclick='onwards(welcome)'>Restart</button>";
var welcome = "<h1>Welcome!</h1><p>Welcome, player! First, before we begin your adventure, please enter your name:</p><input type='text' id='name' value='Karen'><button onclick='welcomeOnwards()'>Onwards!</button>";

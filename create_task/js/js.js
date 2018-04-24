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

// GAME
function welcomeOnwards() {
  name = String(document.getElementById('name').value);
  contents[0][0] = "<p>"+name+", you are a child of the royal family, loved by all. However, the better a person is in this world, the worse their counterpart down below. Unbeknownst to you, your evil twin plots in the Land Below. One horrible day, you wake to find yourself not in your own bed, warm and comfortable, but in the dark underworld. Your evil counterpart has somehow found a way into the Land Above and replaced you. Ahead of you is a long and arduous journey to make it back to the top.</p><button onclick='onwards()'>Onwards!</button>";
  contents[1][2] = "<p>Sorry "+name+", you tried.</p>"; contents[2][2] = "<p>Sorry "+name+", you tried.</p>";
  contents[3][2] = "<p>Sorry "+name+", you tried.</p>";
  contents[4][2] = "<p>Sorry "+name+", you tried, but your counterpart's underpaid employees got to you.</p>";
  contents[5][2] = "<p>Sorry "+name+", you tried. You were oh so close too. Better luck next time.</p>";
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
  if (pos(2, 0)) ans = "promise";
  if (pos(3, 0)) ans = "joke";
  if (pos(4, 0)) ans = "river";
  if (pos(5, 0)) ans = "key";
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
contents[2][0] = "<p>You've made your way out of the woods and are on your way to the nearby village. Hopefully, you'll be able to find better food and proper shelter from the elements. However, just as you make it to town, you realize that whatever land you may be in, the world still runs on money, and you don't have any. You hear a familiar swoosh behind you and turn to find yourself face to face with The Riddler. 'Answer me this young stranger, what gets broken without being held?</p><input text='text' id='answer' placeholder='What is your answer?'/><button onclick='check()'>Answer</button>"
contents[2][1] = "<p>'Well done.' In their wake, they leave behind a small bag with enough money to get you some hot food and a good night's rest. You're dead tired and fall asleep before your head even hits the pillow, dreaming about the Land Above.</p></p><button onclick='onwards()'>Onwards!</button>";
contents[3][0] = "<p>When you wake up, you find yourself no longer in the room you'd rented the previous night, but rather robbed of what little you had and kicked outside with absolutely no clue where you are. While the town you found may be a kindly place Above, it's a little different Below. As you've come to expect by now, The Riddler appears, with a new challenge for you to prove yourself. 'I can be made and I can be played. I can be cracked and I can be told. What am I?'</p><input text='text' id='answer' placeholder='What is your answer?'/><button onclick='check()'>Answer</button>";
contents[3][1] = "<p>The Riddler vanishes but you see nothing left behind. You look around confused, and then hear a branch snap behind you. You whirl around to find yourself face to face with your childhood nemesis. After all, even the nicest people can't stand everyone. However, it looks like down here your nemesis is actually quite nice and is willing to give you a hand. You explain your situation to him, and he tells you, 'Well, if you're looking to go back, you'll need to make your way to the castle.' He generously offers to guide you there, and so you set off with your new friend.</p><button onclick='onwards()'>Onwards!</button>";
contents[4][0] = "<p>You and your friend make it to the castle, ready to face whatever may come. However, the strange backwards copy of your home is eerily quiet. You delve deeper into the castle, slowly and cautiously. So much for caution though, because as soon are you turn a corner, you're immediately faced with all of the evil twins of your own castle faculty back home. You regret not hiring people who weren't all that nice as you and you companion run away from the mini-army. You turn a sharp corner and hide your friend and yourself as the horde rushes by, though you won't remain hidden for long. The Riddler appears, asking, 'What has a bed but doesn't sleep and has a mouth but doesn't eat?'</p><input text='text' id='answer' placeholder='What is your answer?'/><button onclick='check()'>Answer</button>";
contents[4][1] = "<p>The Riddler snaps their fingers and you and your company find yourselves whisked away, safe, for now, from the rouge underpaid workers.</p><button onclick='onwards()'>Onwards!</button>";
contents[5][0] = "<p>If someone asked you where you were, you wouldn't be able to tell them, but somehow, you feel in your bones that the bright whirling portal in front of you leads home. Across the portal, however, is a magical bar, created, no doubt, by your evil counterpart as one final slap in your face. A math equation. You were never good at math. The Riddler appears. 'You wouldn't be able to just tell me the answer to this, would you?' you ask. 'For a riddle, perhaps. I turn around once. What is out will not get in. I turn around again. What is in will not get out. What am I?' It's your hardest riddle yet.</p><input text='text' id='answer' placeholder='What is your answer?'/><button onclick='check()'>Answer</button>";
contents[5][1] = "<p>'Yes indeed.' The Riddler waves their hand, as the numbers '62442' appear over the bar, and then vanish altogether along with the barrier. You feel a sense of giddy excitement, and don't look back at your friend as you step through the portal, ready to return home.</p><br/><p>The End.</p>"


contents[1][2] = "<p>Sorry "+name+", you tried.</p>"; contents[2][2] = "<p>Sorry "+name+", you tried.</p>";
contents[3][2] = "<p>Sorry "+name+", you tried.</p>";
contents[4][2] = "<p>Sorry "+name+", you tried, but your counterpart's underpaid employees got to you.</p>";
contents[5][2] = "<p>Sorry "+name+", you tried. You were oh so close too. Better luck next time.</p>";

var restart = "<button onclick='onwards(welcome)'>Restart</button>";
var welcome = "<h1>Welcome!</h1><p>Welcome, player! First, before we begin your adventure, please enter your name:</p><input type='text' id='name' value='Karen'><button onclick='welcomeOnwards()'>Onwards!</button>";

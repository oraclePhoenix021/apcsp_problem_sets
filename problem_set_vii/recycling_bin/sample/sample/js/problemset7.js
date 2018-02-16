/*
 * Functions defined in this file can, and probably should, be generic to
 * two or more of your algorithms.
 */

/************ GLOBAL VARIABLES ************/

var list = [];      // list of numbers
var delay = 1000;   // animation speed

/******************************************/

// generate
//
// this generates a random list of numbers, which can be pre-sorted if
// you're working with a binary search.
//
// parameters:
//    algo - the algorithm being used (this only matters for binary)

function generate(algo) {
  var count = parseInt(prompt('How many elements would you like in your list?'));

  if (list.length > 0) {      // clear any existing list values
    list.length = 0;
  }

  if (algo === 'binary') {    // pre-sort list for binary search
    list = populate(true, count);
  } else {
    list = populate(false, count);
  }

  draw(list);                 // display the list
}

// populate
//
// this populates the list with 15 random values between 1 and 50.
//
// parameters:
//    sorted - whether or not the list needs to be pre-sorted
//    count - the number of items to be added to the list (defaults to 15, must be between 1 and 50)

function populate(sorted, count) {
  if (isNaN(count) || count > 50 || count < 1) {
    count = 15;
  }

  var min = 1;    // smallest value allowed in the list
  var max = 50;   // largest value allowed in the list

  // populates the list with 15 random numbers

  for (var i = 0; i < count; i++) {
    list.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  // conditionally sorts the list before returning it
  //
  // essentially, this is asking if 'sorted' is true. if it is, it runs the
  // sort function before returning the list. if it's not, it returns the
  // list as-is.

  return sorted ? list.sort(function(a, b) { return a - b; }) : list;
}

// draw
//
// this draws an array of bars whose heights correspond to the values in an
// array of numbers. assumptions are made about HTML ids and parent div heights,
// all of which are outlined below. modify as needed.
//
// parameters:
//    numbers - the array of numbers from which to generate the bars

function draw(numbers) {
  var div = document.getElementById('bars');    // assumes parent div with id of 'bars'

  // clear the previous drawn bars before re-generating

  if (div.innerHTML !== '') {
    div.innerHTML = '';
  }

  for (var i = 0; i < numbers.length; i++) {
    var d = document.createElement('div');      // create a div element

    // all positioning assumes a parent div ('bars') height of 400px

    d.id = 'bar' + i;                             // set div id to bar + index of i (i.e., bar0, bar1, ...)
    d.style.height = (numbers[i] * 7.5) + 'px';   // scale height of bar according to value in array
    d.style.backgroundColor = 'lightskyblue';     // set initial color

    // padding and positioning allows to insert numeric representation of bar
    // height into the bar itself, without affecting size and spacing.

    d.style.margin = '2.5px';
    d.style.flex = '1';
    d.style.textAlign = 'center';
    d.style.paddingBottom = '15px';

    // add a text element representing the numeric height of the bar

    var text = document.createElement('div');
    text.innerHTML = numbers[i];
    text.style.paddingTop = '3px';
    text.className = 'label';

    d.appendChild(text);    // add text element to child div
    div.appendChild(d);     // add child div to parent div
  }
}

// animate
//
// this is a helper function that kicks off the specific animation function
// needed based on the algorithm being used. right now, only linear is
// implemented. this can be used for the others by creating additional
// else-if clauses.
//
// parameters:
//    algo - the algorithm being used (i.e., 'linear')
//    callback - the function to call when the animation is complete
//    target - the target value for which we're searching

function animate(algo, callback, target) {
  if (algo === 'linear') {
    animateLinearSearch(callback, target);
  }
}

// adjustSpeed
//
// this increases or decreases the speed at which the animation is running.
//
// parameters: none

function adjustSpeed() {
  // TODO
  //
  // HINT: you can use this to modify the value of delay whenever a user
  //       adjusts the value of the slider
}

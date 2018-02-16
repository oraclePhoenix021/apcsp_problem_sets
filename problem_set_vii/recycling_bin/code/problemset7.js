/************ GLOBAL VARIABLES ************/

var list = [];        // list of numbers
var delay = 1000;     // animation speed
var type = '';        // algorithm category

/******************************************/

/*
 * Disables everything except the Generate button, and sets the algorithm
 * category to either SEARCH or SORT.
 */

function startup(category) {
  document.getElementById('generate-btn').disabled = false;   // disable generate button
  document.getElementById('start-btn').disabled = true;       // enable the start button
  document.getElementById('slider').disabled = true;          // enable the slider

  type = category;
}

/*
 * Driver function for populating and drawing the list. Enables the Start
 * button and Slider. Sets the UI status message and animation DELAY.
 */

function generate(algo) {
  var count = parseInt(prompt('How many elements would you like in your list?'));

  if (list.length > 0) {              // clear any existing list values
    list.length = 0;
  }

  if (algo === 'binary') {            // pre-sort list for binary search
    list = populate(true, count);
  } else {
    list = populate(false, count);
  }

  draw(list);       // display the list

  document.getElementById('start-btn').disabled = false;                      // enable the start button
  document.getElementById('slider').disabled = false;                         // and slider action items
  document.getElementById('slider').value = (type === 'search') ? 10 : 500;   // set default slider value

  // reset search/sort results text

  if (document.getElementById('search-results')) {
    document.getElementById('search-results').innerHTML = 'SEARCH RESULTS: ';
  } else if (document.getElementById('sort-results')) {
    document.getElementById('sort-results').innerHTML = 'SORT RESULTS: UNSORTED';
  }

  adjustSpeed();    // make sure DELAY gets reset to default value of 1000ms
}

/*
 * Populates the list with random numbers. This will default to 15, but supports
 * between 1 and 50 values.
 */

function populate(sorted, count) {
  if (isNaN(count) || count > 50 || count < 1) {    // default to 15
    count = 15;
  }

  var min = 1;    // smallest value allowed in the list
  var max = 50;   // largest value allowed in the list

  // populates the list with 15 random numbers

  for (var i = 0; i < count; i++) {
    list.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  // conditionally sorts the list before returning it

  return sorted ? list.sort(function(a, b) { return a - b; }) : list;
}

/*
 * Draws the graph, which serves as a visual representation of the list.
 */

function draw(numbers) {
  var div = document.getElementById('bars');    // assumes parent div with id of 'bars'

  if (div.innerHTML !== '') {   // clear the previous drawn bars before re-generating
    div.innerHTML = '';
  }

  // create a bar for each value in the array
  // the height of the bar will depend on the value

  for (var i = 0; i < numbers.length; i++) {
    var d = document.createElement('div');

    // all positioning assumes a parent div ('bars') height of 400px

    d.id = 'bar' + i;
    d.style.height = (numbers[i] * 7.5) + 'px';
    d.style.backgroundColor = 'lightskyblue';
    d.style.margin = '2.5px';
    d.style.flex = '1';
    d.style.textAlign = 'center';
    d.style.paddingBottom = '15px';

    // add a text element representing the numeric height of the bar

    var text = document.createElement('div');
    text.id = 'bartext' + i;
    text.innerHTML = numbers[i];
    text.style.paddingTop = '3px';
    text.className = 'label';

    d.appendChild(text);    // add text element to child div
    div.appendChild(d);     // add child div to parent div
  }
}

/*
 * Drives the animation depending on the algorithm being used.
 */

function animate(algo, target) {
  if (algo === 'linear') {
    animateLinearSearch(target);
  } else if (algo === 'binary') {
    animateBinarySearch(target);
  } else if (algo === 'bubble') {
    animateBubbleSort();
  } else if (algo === 'selection') {
    animateSelectionSort();
  } else if (algo === 'insertion') {
    animateInsertionSort();
  }
}

/*
 * Adjusts the speed of the animation. This is done differently depending on
 * whether we're working with a searching or a sorting algorithm.
 */

 function adjustSpeed() {
   var slider = document.getElementById('slider').value;
   if (type === 'search') {
     slider *= 100;
     slider -= 2100;
     slider *= -1;
   } else {
     if (type === 'sort') {
       slider = 1000 - slider + 1;
     }
   }
   delay = slider;
 };

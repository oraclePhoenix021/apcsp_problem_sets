/*
 * Functions defined in this file are specific to the linear search algorithm
 * and its associated animations.
 */

// search
//
// this kicks of searching and animation, tasked only with prompting the user
// for a target value and passing that information on to the animate function.
//
// parameters: none

function search() {

  // calls the animate function with the following parameters:
  //    the algorithm to use - linear
  //    the function to call after the animation is finished - linearSearch
  //    the value for which we're searching - the result of a user prompt

  animate('linear', linearSearch, parseInt(prompt('Enter an integer value.')));
}

// animateLinearSearch
//
// this represents the animated version of the linear search algorithm. it
// provides the target value and the callback funtion to call on completion.
// individual steps are left the inner animateSearch function.
//
// parameters:
//    callback - the function to call when the animation is complete
//    target - the target value for which we're searching

function animateLinearSearch(callback, target) {

  // animateSearch
  //
  // this represents a single step in the animated linear search algorithm. it
  // compares a single value to the target, then requests that that bar be
  // highlighted in a specifc color to visualize this action. this function
  // is re-called until the target is found or the end of the list is reached.
  //
  // parameters:
  //    found - whether or not the target value was found (true or false)
  //    i - the index at which we're currently searching

  function animateSearch(found, i) {

    // we set up an interval so that this function, which executes a single
    // step in the linear search algorithm, will be called at an interval of
    // exactly DELAY milliseconds

    var search = setInterval(function() {
      if (list[i] === target) {
        highlight(true, i);         // the target is found, highlight in green
        found = true;
      } else {
        highlight(false, i);        // the target is not found highlight in gold
      }

      // this cancels the interval, allowing us to update the value of DELAY
      // if we want to speed up or slow down the animation

      clearInterval(search);

      // if we've reached the end of the list or found the target, we execute
      // our callback function. this is not strictly necessary, but gives us
      // the ability to run any code we want to occur after the animation
      // finishes (see NOTE below).

      if (++i == list.length || found) {
        callback(target);                   // this finds the index of the found target
      } else {
        animateSearch(found, i);            // if the target hasn't been found, we continue
                                            // the animation for the next index
      }
    }, delay);  // DELAY - how long to wait between each step of the algorithm

    // NOTE:
    // we use the callback function because any code here will begin running
    // before the interval (i.e., animation) finishes. this is called asychronous,
    // which is a powerful feature of JavaScript. sometimes, though, we actually
    // need our code to "wait" until another function is done.
  }

  // we kickoff our inner function, animateSearch, from within animateLinearSearch

  animateSearch(false, 0);
}

// highlight
//
// this highlights a bar in either a shade of green or gold, depending on
// whether that bar represents the target value or not.
//
// parameters:
//    found - whether or not the target was found (true or false)
//    i - the current index

function highlight(found, i) {
  if (i > 0) {
    unhighlight(i - 1);   // unhighlight the previous bar
  }

  // if the current bar is the target, highlight it in a shade of green. otherwise,
  // highlight it in gold.

  if (found) {
    document.getElementById('bar' + i).style.backgroundColor = 'chartreuse';
  } else {
    document.getElementById('bar' + i).style.backgroundColor = 'gold';
  }
}

function unhighlight(i) {
  document.getElementById('bar' + i).style.backgroundColor = 'lightskyblue';
}

// linearSearch
//
// this is the raw linear search algorith, without any of the niceties of
// animation. it makes a single pass through a list, comparing each value to
// a provided target value. it returns the index at which the target value was
// found, or -1 if it was not found.
//
// parameters:
//    target - the target for which we are searching

function linearSearch(target) {
  for (var i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
  }

  return -1;
}

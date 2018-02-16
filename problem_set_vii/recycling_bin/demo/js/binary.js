/*
 * Kicks off the search.
 */

function search() {

  reset();   // clear any previously highlighted bars and search results text

  document.getElementById('generate-btn').disabled = true;  // disable the generate and
  document.getElementById('start-btn').disabled = true;     // start buttons until finished

  animate('binary', parseInt(prompt('Enter an integer value.')));
}

/*
 * Animate the binary search. This will use elements of a traditional binary
 * search algorith, but will look different because of the animation.
 */

function animateBinarySearch(target) {
  var found = false;
  var left = 0;
  var prevLeft = left;
  var right = list.length - 1;
  var prevRight = right;
  var mid = Math.floor((left + right) / 2);
  var prevMid = mid;

  /*
   * Performs a single step of the binary search. This function will execute
   * every DELAY milliseconds (see setInterval) until TARGET is found or
   * the end of LIST is reached.
   */

  function animateSearch(found, left, prevLeft, right, prevRight, mid, prevMid) {
    document.getElementById('search-results').innerHTML = 'SEARCH RESULTS: IN PROGRESS...';

    var search = setInterval(function() {
      // recalculate midpoint index and update previous reference

      // unhighlight previous left, right, and midpoint indexes if they've changed

      // highlight new left and right indexes

      // if we find the target, highlight it (in green?) and set found to true
      // otherwise, highlight it (in yellow?)
      //    if target < midpoint value ==> move right endpoint back to midpoint - 1
      //    if target > midpoint value ++> move left endpoint up to midpoint + 1
      // always update previous left and previous right variables

      clearInterval(search);    // clear interval allowing for changes in speed

      // conditionally re-call animateSearch
      //    - if we haven't found the target and the left index is not greater than the right index
      // otherwise display the index at which the target was found or a message that it wasn't
      
    }, delay);    // DELAY - how long to wait between each step of the algorithm
  }

  animateSearch(found, left, prevLeft, right, prevRight, mid, prevMid);   // kickoff the first step of the animation
}

/*
 * Highlights a single bar in the graph.
 */

function highlight(found, i, endpoint) {
  if (endpoint) {
    document.getElementById('bar' + i).style.backgroundColor = 'blueviolet';
  }

  if (found) {
    document.getElementById('bar' + i).style.backgroundColor = 'chartreuse';
  } else if (!found && !endpoint) {
    document.getElementById('bar' + i).style.backgroundColor = 'gold';
  }
}

/*
 * Unhighlight a single bar in the graph.
 */

function unhighlight(i) {
  document.getElementById('bar' + i).style.backgroundColor = 'lightskyblue';
}

/*
 * Reset the state of the application.
 */

function reset() {
  unhighlightAll();
  document.getElementById('search-results').innerHTML = 'SEARCH RESULTS: ';
}

/*
 * Unhighlight all bars in the graph, reverting to LIGHTSKYBLUE.
 */

function unhighlightAll() {
  for (var i = 0; i < list.length; i++) {
    unhighlight(i);
  }
}

/*
 * Binary search algorithm, absent any animation. This function is unused, as
 * its logic is replicated in the animation functions. It is here for you to
 * review and understand the underlying logic.
 */

function binarySearch(target) {
  var left = 0;
  var right = list.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);

    if (list[mid] === target) {
      return mid;
    } else if (list[mid] > target) {
      right = mid - 1;
    } else if (list[mid] < target) {
      left = mid + 1;
    }
  }

  return -1;
}

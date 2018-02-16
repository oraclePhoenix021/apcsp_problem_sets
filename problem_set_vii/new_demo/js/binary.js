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
  var found = false;                            // whether or not we've found the target
  var left = 0;                                 // current left endpoint index
  var prevLeft = left;                          // previous left endpoint index
  var right = list.length - 1;                  // current right endpoint index
  var prevRight = right;                        // previous right endpoint index
  var mid = Math.floor((left + right) / 2);     // current midpoint index
  var prevMid = mid;                            // previous midpoint index

  /*
   * Performs a single step of the binary search. This function will execute
   * every DELAY milliseconds (see setInterval) until TARGET is found or
   * the end of LIST is reached.
   */

  function animateSearch(found, left, prevLeft, right, prevRight, mid, prevMid) {
    document.getElementById('search-results').innerHTML = 'SEARCH RESULTS: IN PROGRESS...';

    var search = setInterval(function() {
      // prevMid <-- mid
      // mid <-- (left + right) / 2 (make sure to floor this)

      // if left not equal to prevLeft: unhighlight prevLeft
      // if right not equal to prevRight: unhighlight prevRight
      // if mid not equal to prevMid: unhighlight prevMid

      // highlight left index (false, left, true)
      // highlight right index (false, right, true)

      // if value at mid = target
      //    found <-- true
      //    highlight mid as correct guess (true, mid, false)
      // else
      //    highlight mid as incorrect guess (false, mid, false)
      //
      //    if value at mid > target
      //        prevRight <-- right
      //        right <-- mid - 1
      //    else
      //        prevLeft <-- left
      //        left <-- mid + 1

      clearInterval(search);    // clear interval allowing for changes in speed

      // if found = false and left <= right
      //    re-call animateSearch
      // else
      //    enable start and generate buttons
      //
      //    if found = true
      //        update search results text with index at which it was found
      //    else if left > right
      //        unhighlight mid
      //        update search results text with message indicating it was not found
    }, delay);
  }

  animateSearch(found, left, prevLeft, right, prevRight, mid, prevMid);   // kickoff the first step of the animation
}

/*
 * Highlights a single bar in the graph.
 */

function highlight(found, i, endpoint) {
  if (endpoint) {
    document.getElementById('bar' + i).style.backgroundColor = 'blueviolet';    // endpoints
  }

  if (found) {
    document.getElementById('bar' + i).style.backgroundColor = 'chartreuse';    // correct guesses
  } else if (!found && !endpoint) {
    document.getElementById('bar' + i).style.backgroundColor = 'gold';          // incorrect guesses
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

/*
 * Kicks off the search.
 */

function sort() {
  document.getElementById('sort-results').innerHTML = 'SORT RESULTS: UNSORTED.';  // reset status message

  document.getElementById('generate-btn').disabled = true;  // disable the generate and
  document.getElementById('start-btn').disabled = true;     // start buttons until finished

  animate('bubble');
}

/*
 * Animate the bubble sort. This will use elements of a traditional bubble
 * sort algorith, but will look different because of the animation.
 */

function animateBubbleSort() {
  var i = 0;
  var end = list.length - 1;
  var swaps = 0;

  /*
   * Performs a single step of the bubble sort. This function will execute
   * every DELAY milliseconds (see setInterval) until LIST is sorted.
   */

  function animateSort(i, end, swaps) {
    document.getElementById('sort-results').innerHTML = 'SORT RESULTS: IN PROGRESS...';

    var sort = setInterval(function() {
      // if we haven't reached the end of the list
      //    and the left value is greater than the right
      //      increase swaps and swap the values in the array

      clearInterval(sort);    // clear interval allowing for changes in speed

      // conditionally re-call animateSearch
      //    - if we have reached the end of the list and made at least 1 swap
      //        + reset i and swaps to 0, decrease end by 1
      //    - if we haven't reached the end of the list
      // otherwise display a message indicating that the list has been sorted

    }, delay);  // DELAY - how long to wait between each step of the algorithm
  }

  animateSort(i, end, swaps);     // kickoff the first step of the animation
}

/*
 * Swaps two elements in the array and redraws it.
 */

function swap(left, right) {
  // remember how to swap two values in an array?
  // that's all we need to do here

  // then re-draw the list by calling the draw method defined in problemset7.js
}

/*
 * Bubble sort algorithm, absent any animation. This function is unused, as
 * its logic is replicated in the animation functions. It is here for you to
 * review and understand the underlying logic.
 */

function bubbleSort() {
  do {
    for (var i = 0; i < list.length - 1; i++) {
      if (list[i] > list[i + 1]) {
        var temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;

        swaps++;
      }
    }
  } while (swaps > 0);
}

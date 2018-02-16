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
  // additional variables
  var left = 0;
  var right = left++;

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
      if (i < end && list[left] < list[right]){
        swaps++;
        swap(left, right);
        right++; left++; i++;
      } else {
        right++; left++; i++;
      }
      clearInterval(sort);    // clear interval allowing for changes in speed

      // conditionally re-call animateSearch
      //    - if we have reached the end of the list and made at least 1 swap
      //        + reset i and swaps to 0, decrease end by 1
      //    - if we haven't reached the end of the list
      // otherwise display a message indicating that the list has been sorted
      if (i === end && swaps >= 1){
        i = 0;
        swaps = 0;
        end--;
        left = 0;
        right = left++;
        animateSort(i, end, swaps);
      } else if (i < end){
        animateSort(i, end, swaps);
      } else {
        document.getElementById('sort-results').innerHTML = "The list has been sorted.";
        document.getElementById('generate-btn').disabled = false; // enables buttons?
        document.getElementById('start-btn').disabled = false;
      }
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
  var temp = list[left];
  list[left] = list[right];
  list[right] = temp;
  // then re-draw the list by calling the draw method defined in problemset7.js
  draw(list);
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

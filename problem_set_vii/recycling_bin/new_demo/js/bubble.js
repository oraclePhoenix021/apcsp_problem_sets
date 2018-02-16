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
  var i = 0;                          // current index of list
  var end = list.length - 1;          // end of list (this will move left with each value we sort)
  var swaps = 0;                      // number of swaps we've made in a given pass

  /*
   * Performs a single step of the bubble sort. This function will execute
   * every DELAY milliseconds (see setInterval) until LIST is sorted.
   */

  function animateSort(i, end, swaps) {
    document.getElementById('sort-results').innerHTML = 'SORT RESULTS: IN PROGRESS...';

    var sort = setInterval(function() {
      // if i < end
      //    if value at index i > value at index i + 1
      //        swaps <-- swaps + 1
      //        call swap function (i, i + 1)

      clearInterval(sort);    // clear interval allowing for changes in speed

      // i <-- i + 1
      // if i >= end
      //    if swaps > 0
      //        i <-- 0
      //        end <-- end - 1
      //        swaps <-- 0
      //        re-call animateSort
      //    else
      //        enable generate button
      //        enable start button
      //        update sort results text as sorted
      // else
      //    re-call animateSort
    }, delay);
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

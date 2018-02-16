/*
 * Kicks off the search.
 */

function sort() {
  document.getElementById('sort-results').innerHTML = 'SORT RESULTS: UNSORTED.';  // reset status message

  document.getElementById('generate-btn').disabled = true;  // disable the generate and
  document.getElementById('start-btn').disabled = true;     // start buttons until finished

  animate('selection');
}

/*
 * Animate the bubble sort. This will use elements of a traditional bubble
 * sort algorith, but will look different because of the animation.
 */

function animateSelectionSort() {
  var i = 0;
  var min = 0;
  var start = 0;
  var swapped = false;

  /*
   * Performs a single step of the bubble sort. This function will execute
   * every DELAY milliseconds (see setInterval) until LIST is sorted.
   */

  function animateSort(i, min, start, swapped) {
    document.getElementById('sort-results').innerHTML = 'SORT RESULTS: IN PROGRESS...';

    var sort = setInterval(function() {
      // if we haven't reached the end of the list
      //    highlight this bar in the list (this is not the minimum and we know the i and start values,
      //    since they're passed in as parameters)

      //    if list[i] is smaller than list[min]
      //      unhighlight the current min
      //      update min (i.e., min = i)

      //    highlight whatever the mininum is right now (this time isMinimum should be true)
      // otherwise...
      //    unhighlight the previous index (i - 1)

      clearInterval(sort);    // clear interval allowing for changes in speed

      // conditionally re-call animateSearch
      //    - if we haven't reached the end of the list
      //    - if we have reached the end of the list and i !== min
      //    - if after doing the following i is less than the length of the list
      //        + swap the minimum with the start of the unsorted portion of the list (i.e., start)
      //        + highlight the sorted portion (from 0 to start)
      //        + increase start by 1 and set i = start and min = start
      // otherwise display a message indicating that the list has been sorted

    }, delay);  // DELAY - how long to wait between each step of the algorithm
  }

  animateSort(i, min, start, swapped);     // kickoff the first step of the animation
}

/*
 * Highlights a single bar in the graph.
 */

function highlight(isMinimum, i, start) {
  if (i > start) {
    unhighlight(i - 1);   // unhighlight the previous bar
  }

  if (isMinimum) {
    document.getElementById('bar' + i).style.backgroundColor = 'red';
  } else {
    document.getElementById('bar' + i).style.backgroundColor = 'gold';
  }
}

/*
 * Highlight sorted portion of list.
 */

function highlightSorted(start, end) {
  for (var i = start; i <= end; i++) {
    document.getElementById('bar' + i).style.backgroundColor = 'chartreuse';
  }
}

/*
 * Unhighlight a single bar in the graph.
 */

function unhighlight(i) {
  document.getElementById('bar' + i).style.backgroundColor = 'lightskyblue';
}

/*
 * Swaps two elements in the array and redraws it.
 */

function swap(left, right) {
  // again, how can we swap values in an array?

  // re-draw the list...you have the method to do this already.
}

/*
 * Selection sort algorithm, absent any animation. This function is unused, as
 * its logic is replicated in the animation functions. It is here for you to
 * review and understand the underlying logic.
 */

function selectionSort() {
  var min;

  for (var i = 0; i < list.length; i++) {
    min = i;

    for (var j = i + 1; j < list.length; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }

    if (i !== min) {
      var temp = list[i];
      list[i] = list[min];
      list[min] = temp;
    }
  }
}

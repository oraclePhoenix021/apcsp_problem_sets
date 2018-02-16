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
 * Animate the selection sort. This will use elements of a traditional selection
 * sort algorith, but will look different because of the animation.
 */

function animateSelectionSort() {
  var i = 0;                          // current index of list
  var min = 0;                        // index of current minimum value in unsorted portion of list
  var start = 0;                      // index of start of unsorted portion of list

  /*
   * Performs a single step of the bubble sort. This function will execute
   * every DELAY milliseconds (see setInterval) until LIST is sorted.
   */

  function animateSort(i, min, start) {
    document.getElementById('sort-results').innerHTML = 'SORT RESULTS: IN PROGRESS...';

    var sort = setInterval(function() {
      // if i < length of list
      //    highlight index i (false, i, start)
      //
      //    if value at index i < value at index min
      //        unhighlight index min
      //        min <-- i
      //
      //    highlight index min (true, min, start)
      // else
      //    unhighlight index i - 1
      if (i < list.length){
        console.log("i = "+i);
        highlight(false, i, start);
        if (list[i] < list[min]){
          console.log("min = "+min); console.log("Wanna update new min");
          unhighlight(min); console.log("Successful call of function unhighlight");
          min = i;
        }
        highlight(true, min, start);
        console.log("min = "+min);
      } else {
        unhighlight(i - 1);
        console.log("Moving on");
      }

      clearInterval(sort);    // clear interval allowing for changes in speed

      // i <-- i + 1
      // if i >= length of list
      //    if i = length of list and i != min
      //        re-call animateSort
      //    else
      //        if start != min
      //            call swap for start and min
      //
      //        call highlightSorted for 0 and start
      //        start <-- start + 1
      //        i <-- start
      //        min <-- start
      //
      //        if i < length of list
      //            re-call animateSort
      //        else
      //            enable generate button
      //            enable start button
      //            update sort results text as sorted
      // else
      //    re-call animateSort
      i++;
      if (i < list.length){
        animateSort(i, min, start); console.log("Not at the end");
      } else if (i === list.length && i !== min){
          animateSort(i, min, start); console.log("Not done sorting yet");
      } else {
        swap(start, min);
        console.log("Swapped "+start+" and "+min);
        highlightSorted(0, start);
        start++; i = start; min = start;
        if (i < list.length){
          animateSort(i, min, start); console.log("Not done sorting yet after swap");
        } else {
          document.getElementById('generate-btn').disabled = false;
          document.getElementById('start-btn').disabled = false;
          document.getElementById('sort-results').innerHTML = "The list has been sorted.";
          for (var j = 0; j < list.length; j++){
            unhighlight(i);
          }
        }
      }
    }, delay);
  }

  animateSort(i, min, start);     // kickoff the first step of the animation
}

/*
 * Highlights a single bar in the graph.
 */

function highlight(isMinimum, i, start) {
  if (i > start) {
    unhighlight(i - 1);   // unhighlight the previous bar, ignoring sorted portion of list
  }

  if (isMinimum) {
    document.getElementById('bar' + i).style.backgroundColor = 'red';     // minimums
  } else {
    document.getElementById('bar' + i).style.backgroundColor = 'gold';    // non-minimums
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
  console.log("Starting function unhightlight");
  document.getElementById('bar' + i).style.backgroundColor = 'lightskyblue';
  console.log("Ending function unhightlight");
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
 * Selection sort algorithm, absent any animation. This function is unused, as
 * its logic is replicated in the animation functions. It is here for you to
 * review and understand the underlying logic.
 */

function selectionSort() {
  var min = -1;

  for (var i = 0; i < list.length; i++) {
    min = i;

    for (var j = i + 1; j < list.length; j++) {   // find the smallest value
      if (list[j] < list[min]) {
        min = j;
      }
    }

    if (i != min) {           // swap it with the beginning of the
      var temp = list[i];     // unsorted portion of the list
      list[i] = list[min];
      list[min] = temp;
    }
  }
}

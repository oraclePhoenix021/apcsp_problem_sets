/*
 * Kicks off the search.
 */

function sort() {
  document.getElementById('sort-results').innerHTML = 'SORT RESULTS: UNSORTED.';  // reset status message

  document.getElementById('generate-btn').disabled = true;  // disable the generate and
  document.getElementById('start-btn').disabled = true;     // start buttons until finished

  animate('insertion');
}

  /*
   * Performs a single step of the bubble sort. This function will execute
   * every DELAY milliseconds (see setInterval) until LIST is sorted.
   */

function animateInsertionSort() {
  var i = 1;
  var start = 0;
  var end = list.length - 1;
  var insertPoint = 0;
  var swap = false;
  var swaps = 0;
  var runs = 0;

  function animateSort(i, start, end, insertPoint, swap) {
    document.getElementById('sort-results').innerHTML = 'SORT RESULTS: IN PROGRESS...';
    runs++; console.log("Run #"+runs);
    highlight(true, i);
    var sort = setInterval(function() {
      // draw(list);
      // if (i < list.length){
      //   highlight(true, i);
      //   highlight(false, left);
      //   console.log("i = "+i);
      //   console.log("left = "+left);
      //   if (list[i] < list[left]){
      //     swap(i, left); console.log(swap);
      //     draw(list);
      //     highlight(true, left);
      //     highlight(false, i);
      //   }
      if (i <= end){
        unhighlightAll();
        if (list[i] < list[start]){
          highlight(1, i);
          insertPoint = i;
          // swap(i, start);
          swap = true;
          swaps++;
        }  // i = element; start = i;
        start--;
        if (start < 0 || list[start] < list[i]){
          if (swap){
            insert(i, insertPoint);
          }
          start = i; i++; insertPoint = 0; swap = false;
        }
        // highlightSorted(start, i);
      }


      // mark first element as sorted
      // for each unsorted element X
      // 'extract' the element X
      // for j = lastSortedIndex down to 0
      // if current element j > X
      // move sorted element to the right by 1
      // break loop and insert X here

      clearInterval(sort);    // clear interval allowing for changes in speed
      animateSort(i, start, end, insertPoint, swap);

      // conditionally re-call animateSearch
      //    - if we have reached the end of the list and made at least 1 swap
      //        + reset i and swaps to 0, decrease end by 1
      //    - if we haven't reached the end of the list
      // otherwise display a message indicating that the list has been sorted
      // if (i === end && swaps >= 1){
      //   i = 0;
      //   swaps = 0;
      //   end--;
      //   left = 0;
      //   right = left++;
      //   animateInsertionSort();
      // } else if (i < end){
      //   animateInsertionSort();
      // } else {
      //   document.getElementById('sort-results').innerHTML = "The list has been sorted.";
      //   document.getElementById('generate-btn').disabled = false; // enables buttons?
      //   document.getElementById('start-btn').disabled = false;
      // }

      // if (runs < list.length){
      //   i++; left++; right++;
      //   animateSort();
      // }

      // if (i < list.length-1 && start == i){
      //   i++; start = 0;
      //   animateSort(i, start);
      // } else if (start < i){
      //   start++; animateSort(i, start);
      // } else {
      //   document.getElementById('generate-btn').disabled = false;
      //   document.getElementById('start-btn').disabled = false;
      //   document.getElementById('sort-results').innerHTML = "The list has been sorted.";
      // }

    }, delay);  // DELAY - how long to wait between each step of the algorithm
  }
  animateSort(i, start, end, insertPoint, swap);     // kickoff the first step of the animation
}

function insert(i, insertPoint) {
  var temp = list[i];
  for(var j = i; j > insertPoint; j--){
    list[j] = list[j-1];
  }
  list[insertPoint] = temp;
  draw(list);
}

/*
 * Highlights a single bar in the graph.
 */

function highlight(isCurrent, i) {
  // if (i > start) {
  //   unhighlight(i - 1);   // unhighlight the previous bar, ignoring sorted portion of list
  // }
  try {
    if (isCurrent) {
      document.getElementById('bar' + i).style.backgroundColor = 'red';     // current
    } else if (isCurrent == 1) {
      document.getElementById('bar' + i).style.backgroundColor = 'chartreuse'; // yes
    } else {
      document.getElementById('bar' + i).style.backgroundColor = 'gold';    // comparison
    }
  } catch (error) {
    document.getElementById('sort-results').innerHTML = 'SORT RESULTS: SORTED.';
    document.getElementById('generate-btn').disabled = false;
    document.getElementById('start-btn').disabled = false;
    document.getElementById('slider').disabled = false;
    return;
  }
}

/*
 * Highlight sorted portion of list.
 */

function highlightSorted(start, end) {
  // for (var i = start; i <= end; i++) {
  //   document.getElementById('bar' + i).style.backgroundColor = 'chartreuse';
  // }
  resetColors();
  document.getElementById('bar' + end).style.backgroundColor = 'red';
  document.getElementById('bar' + start).style.backgroundColor = 'gold';
}

function resetColors(start, end) {
  unhighlightAll();
  for (var i = start; i <= end; i++) {
    document.getElementById('bar' + i).style.backgroundColor = 'lightskyblue';
    // green = chartreuse
  }
}

/*
 * Unhighlight a single bar in the graph.
 */

 // function wait(ms){
 //    var start = new Date().getTime();
 //    var end = start;
 //    while(end < start + ms) {
 //      end = new Date().getTime();
 //   }
 // }

 // function unhighlightAll(){
 //   for (var i = list.length; i > 0; i--){
 //     unhighlight(i);
 //   }
 // }
 //
 // function unhighlight(i) {
 //  document.getElementById('bar' + i).style.backgroundColor = 'lightskyblue';
 // }

// function findLess(){
//   if (list[right] > list[i]){
//     swap(right, i);
//   }
// }

/*
 * Swaps two elements in the array and redraws it.
 */

// function swap(left, right) {
//   // remember how to swap two values in an array?
//   // that's all we need to do here
//   var temp = list[left];
//   list[left] = list[right];
//   list[right] = temp;
//   // then re-draw the list by calling the draw method defined in problemset7.js
//   draw(list);
// }

function unhighlightAll() {
  for (var i = 0; i < list.length; i++) {
    unhighlight(i);
  }
}
function unhighlight(i) {
  document.getElementById('bar' + i).style.backgroundColor = 'lightskyblue';
}

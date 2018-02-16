/*
 * Kicks off the search.
 */

function sort() {
  document.getElementById('sort-results').innerHTML = 'SORT RESULTS: UNSORTED.'; // reset status message

  document.getElementById('generate-btn').disabled = true;  // disable the generate and
  document.getElementById('start-btn').disabled = true;     // start buttons until finished

  animate('insertion');
}
/*
 * Performs a single step of the insertion sort. This function will execute
 * every DELAY milliseconds (see setInterval) until LIST is sorted.
 */
function animateInsertionSort() {
  var start = 0;
  var end = list.length - 1;
  var i = 1;
  var insertPoint = 0;
  var swap = false;
  var swaps = 0;

  function animateSort(start, i, insertPoint, end, swap) {
    document.getElementById('sort-results').innerHTML = 'SORT RESULTS: IN PROGRESS...';
    highlight(i, true);
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
      if (i <= end)  {
        console.log("highlight");
        unhighlightAll();
        if (list[start] > list[i]) {
          highlight(start); console.log("highlight i");
          insertPoint = start;
          // swap(i, start);
          swap = true;
          // delay = 0;
          swaps++;
        } // start = i;
        start--;
        if(start < 0 || list[start] < list[i]){
          if (swap){
            console.log("inserting "+i+" --> "+insertPoint);
            insert(i, insertPoint);
          }
          i++; start = i - 1; insertPoint = 0; swap = false;
        }
        // highlightSorted(start, i);

        // mark first element as sorted
        // for each unsorted element X
        // 'extract' the element X
        // for j = lastSortedIndex down to 0
        // if current element j > X
        // move sorted element to the right by 1
        // break loop and insert X here

        // clearInterval(sort);    // clear interval allowing for changes in speed
        // animateSort(start, i, insertPoint, end, swap);

        if (swaps == 0) {
          clearInterval(sort);    // clear interval allowing for changes in speed
          animateSort(start, i, insertPoint, end, swap);
        } else {
          clearInterval(sort);    // clear interval allowing for changes in speed
          animateSort(start, i, insertPoint, end, swap);
        }
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
      }
    }, delay);  // DELAY - how long to wait between each step of the algorithm
  }
  animateSort(start, i, insertPoint, end, swap);     // kickoff the first step of the animation
}

function insert(i, insertPoint) {
  var temp = list[i];
  for(var j = i; j > insertPoint; j--){
    list[j] = list[j-1];
  }
  list[insertPoint] = temp;
  // then re-draw the list by calling the draw method defined in problemset7.js
  draw(list);
}


/*
 * Highlight a single bar in the graph.
 */

function highlight(i, x, y) {
  try {
    if (!x && !y) {
      document.getElementById('bar' + i).style.backgroundColor = 'chartreuse';
    } else if (x) {
      document.getElementById('bar' + i).style.backgroundColor = 'red';
    } else if (y) {
      document.getElementById('bar' + i).style.backgroundColor = 'gold';
    }
  } catch (error) {
    document.getElementById('sort-results').innerHTML = 'SORT RESULTS: SORTED.';
    document.getElementById('generate-btn').disabled = false;
    document.getElementById('start-btn').disabled = false;
    document.getElementById('slider').disabled = false;
    return;
  }
}

// function highlightElement(i) {
//   document.getElementById('bar' + i).style.backgroundColor = 'red';
// }

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
/*
 * Unhighlight a single bar in the graph.
 */

function unhighlight(i) {
  document.getElementById('bar' + i).style.backgroundColor = 'lightskyblue';
}

// function reset() {
//   unhighlightAll();
//   document.getElementById('search-results').innerHTML = 'SEARCH RESULTS: ';
// }

/*
 * Unhighlight all bars in the graph
 */

function unhighlightAll() {
  for (var i = 0; i < list.length; i++) {
    unhighlight(i);
  }
}

/*
 * Kicks off the search.
 */

function search() {

  reset();   // clear any previously highlighted bars and search results text

  document.getElementById('generate-btn').disabled = true;  // disable the generate and
  document.getElementById('start-btn').disabled = true;     // start buttons until finished

  animate('linear', parseInt(prompt('Enter an integer value.')));
}

/*
 * Animate the linear search. This will use elements of a traditional linear
 * search algorith, but will look different because of the animation.
 */

function animateLinearSearch(target) {
  var found = false;
  var i = 0;

  /*
   * Performs a single step of the linear search. This function will execute
   * every DELAY milliseconds (see setInterval) until the target is found or
   * the end of LIST is reached.
   */

  function animateSearch(found, i) {
    document.getElementById('search-results').innerHTML = 'SEARCH RESULTS: IN PROGRESS...';

    var search = setInterval(function() {
      if (i === list.length && !found) {    // this ensures that the last value doesn't
        unhighlight(i - 1);                 // remain highlighted unless it is the target
      } else {
        if (list[i] === target) {
          highlight(true, i);         // the target is found, highlight in green
          found = true;
        } else {
          highlight(false, i);        // the target is not found highlight in gold
        }
      }
      clearInterval(search);    // clear interval allowing for changes in speed

      // conditionally re-call animateSearch
      //    - if we're at the last element in the last and haven't found the target
      //    - if we haven't reached the end of the list nor have have we found the target
      // otherwise display the index at which the target was found or a message that it wasn't

      if (++i >= list.length || found) {
        if (i === list.length && !found) {
          animateSearch(found, i);
        } else {
          document.getElementById('generate-btn').disabled = false;   // enable generate and
          document.getElementById('start-btn').disabled = false;      // start buttons now

          if (!found) {
            document.getElementById('search-results').innerHTML += target + ' was not found.';
          } else {
            document.getElementById('search-results').innerHTML += target + ' was found at index ' + i + '.';
          }
        }
      } else {
        animateSearch(found, i);    // target not found, continue animation
      }
    }, delay);  // DELAY - how long to wait between each step of the algorithm
  }

  animateSearch(found, i);  // kickoff the first step of the animation
}

/*
 * Highlights a single bar in the graph.
 */

function highlight(found, i) {
  if (i > 0) {
    unhighlight(i - 1);   // unhighlight the previous bar
  }

  if (found) {
    document.getElementById('bar' + i).style.backgroundColor = 'chartreuse';
  } else {
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
 * Linear search algorithm, absent any animation. This function is unused, as
 * its logic is replicated in the animation functions. It is here for you to
 * review and understand the underlying logic.
 */

function linearSearch(target) {
  for (var i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
  }

  return -1;
}

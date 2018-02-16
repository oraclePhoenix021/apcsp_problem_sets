
function sort(){
  reset();

  document.getElementById('gen-btn').disabled = true;
  document.getElementById('start-btn').disabled = true;

  animate("insertion");
}

function animateInsertionSort(){
    var i = 1;
    var j = 0;
    var toSwap = false;

    function animateSort(i, j, toSwap){
        var sort = setInterval(function(){

            /*for(p = 0; p < i; p++){
              highlightSorted(j, i);
              if(randNums[j] <= randNums[i]){
                change = p;
              }
            */
              if(randNums[j] > randNums[i]){
                //if(toSwap){
                  swap(j, i);
                //}
              }

            //}

            highlightSorted(j, i);

            clearInterval(sort);

            /*if j < i {
            j++
            re-call
            should it be re-called for the inner loop or the outer loop variables
            }*/


            if(i < 14 && j == i){
              i++;
              j = 0;
              animateSort(i, j);
            }else if(j < i){
              j++;
              animateSort(i, j);
            }else{
              var modal = document.getElementById('myModal');
              var modalText = document.getElementById("modalText");
              modalText.innerHTML = "This list has been sorted.";
              modal.style.display = "block";
              document.getElementById('gen-btn').disabled = false;
            }

            /*
            if(i < 14 && j == 0){
              i++;
              j = i;
              console.log("first i: " + i + " j: " + j);
              animateSort(i, j, toSwap);
            }else if(j > 0){
              if(randNums[j-1] > randNums[i]){
                toSwap = false;
              }else{
                toSwap = true;
              }
              j--;
              console.log("second i: " + i + " j: " + j);
              animateSort(i, j, toSwap);
            }else{
              var modal = document.getElementById('myModal');
              var modalText = document.getElementById("modalText");
              modalText.innerHTML = "This list has been sorted.";
              modal.style.display = "block";
              document.getElementById('gen-btn').disabled = false;
            }
            */

        }, delay);
    }
    animateSort(i, j, toSwap);
}

function highlightSorted(start, end) {
  unhighlightAll();
  for (var i = start; i <= end; i++) {
    document.getElementById('bar' + i).style.backgroundColor = "#ff93bb"; //lightpink
  }
  document.getElementById('bar' + end).style.backgroundColor = "#00e6e6"; //blue
  document.getElementById('bar' + start).style.backgroundColor = "#b300b3";//purple
}

function swap(left, right){
  temp = randNums[left];
  randNums[left] = randNums[right];
  randNums[right] = temp;
  draw(randNums);
}

function reset() {
  unhighlightAll();
  hideModal();
}

function unhighlightAll() {
  for (var i = 0; i < 15; i++) {
    unhighlight(i);
  }
}

function unhighlight(i) {
  document.getElementById('bar' + i).style.backgroundColor = '#ff478d';   //normal color (pink)
}

function highlight(isEnd, i){
    if(!isEnd){
      document.getElementById('bar' + i).style.backgroundColor = "#00e6e6"; //blue
    }else{
      document.getElementById('bar' + i).style.backgroundColor = "#b300b3"; //purple
    }
}

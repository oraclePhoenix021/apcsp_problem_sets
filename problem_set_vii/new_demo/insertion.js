
function sort(){
  reset();

  document.getElementById('generate-btn').disabled = true;
  document.getElementById('start-btn').disabled = true;

  animate("insertion");
}

function animateInsertionSort(){
    var i = 1;
    var j = 0;

    function animateSort(i, j){
        var sort = setInterval(function(){

            if(list[j] > list[i]){
                swap(j, i);
            }

            highlightSorted(j, i);

            clearInterval(sort);

            if(i < 14 && j == i){
              i++;
              j = 0;
              animateSort(i, j);
            }else if(j < i){
              j++;
              animateSort(i, j);
            }else{
              // var modal = document.getElementById('myModal');
              // var modalText = document.getElementById("modalText");
              // modalText.innerHTML = "This list has been sorted.";
              // modal.style.display = "block";
              alert("This list has been sorted.");
              document.getElementById('generate-btn').disabled = false;
            }

        }, delay);
    }
    animateSort(i, j);
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
  temp = list[left];
  list[left] = list[right];
  list[right] = temp;
  draw(list);
}

function reset() {
  unhighlightAll();
  // hideModal();
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

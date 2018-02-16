// Linear search
function generateList() {
  var randomNumbers = [];
  for (var i = 15; i > 0; i--){
    var number = Math.floor(Math.random() * (51 - 1) + 1);
    randomNumbers.push(number);
  }
  console.log(randomNumbers);
  return randomNumbers;
}

function linearSearch() {
  var list = generateList();
  console.log(list);
  var target = parseInt(prompt("Enter search value:"));
  var condition = false;
  var indexFound = [];
  for (var i = list.length-1; i > -1; i--){
    if (list[i] == target){
      indexFound.push(i);
      condition = true;
    }
  }
  if (condition){
    var print = "Search value found at index " + indexFound[0];
    if (indexFound.length > 1){
      print = "Search value found at indexes " + indexFound[0];
      for (var i = indexFound.length-1; i > 0; i--){
        print += " and " + indexFound[i];
      }
    }
    console.log(print);
  }
  if(!condition){
    console.log("Search value not found");
  }
}

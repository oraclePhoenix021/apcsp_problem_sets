/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario()
{
  ////////////// DO NOT MODIFY
  var height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE
  while (!(height >= 1 && height <= 23)){
    var height = parseInt(prompt("Height:"));
  }
  var octothorpe = "#";
  var spaces = "&nbsp;";
  var print = "<code>";

  for (var i = 0; i < height; i++) {
    for (var x = 0; x < height - (i + 1); x++) {
       print += spaces;
    }
    for (var y = 0; y < i + 2; y++) {
       print += octothorpe;
    }
    print += "<br/>";
  }
  print += "</code>";
  var div = document.getElementById('mario-easy-output');
  div.innerHTML = print;

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain()
{
  ////////////// DO NOT MODIFY
  var height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE
  while (!(height >= 1 && height <= 23)){
    var height = parseInt(prompt("Height:"));
  }
  var octothorpe = "#";
  var spaces = "&nbsp;";
  var print = "<code>";

  for (var i = 0; i < height; i++) {
    for (var x = 0; x < height - (i + 1); x++) {
       print += spaces;
    }
    for (var y = 0; y < i + 2; y++) {
       print += octothorpe;
    }
    print += spaces + spaces;
    for (var y = 0; y < i + 2; y++) {
       print += octothorpe;
    }
    print += "<br/>";
  }
  print += "</code>";
  var div = document.getElementById('mario-hard-output');
  div.innerHTML = print;

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
* Credit. 10 points.
*
* Write a function that prompts the user for a credit card number (valid
* and invalid examples will be provided), and displays either:
*   - an invalid image (provided)
*   - an American Express image (provided)
*   - a Mastercard image (provided)
*   - a Visa image (provided)
*
* We'll use Luhn's algorithm to determine the validity of a credit card
* number. Review the steps of the algorithm below.
*
*   0. Multiply every other digit by 2, starting with the number’s
*      second-to-last digit, and then add those products' digits together.
*   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
*   2. If the total’s last digit is 0 (or, put more formally, if the total
*      modulo 10 is congruent to 0), the number is valid!
*
* American Express uses 15-digit numbers, starting with 34 or 37.
* Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
* or 55. Visa uses 13- or 16-digit numbers, starting with 4.
*
* 378282246310005 should verify as American Express.
* 371449635398431 should verify as American Express.
* 5555555555554444 should verify as Mastercard.
* 5105105105105100 should verify as Mastercard.
* 4111111111111111 should verify as Visa.
* 4012888888881881 should verify as Visa.
*
* Credit card numbers must be integers. Users should be continuously
* re-prompted until they comply with this restriction.
*
* As always, certain portions of the starter code are critical to the
* the feedback script. Please do not modify these sections. They are
* clearly marked.
*
* All output should be displayed on the page, not printed to the console.
*/

function credit()
{
  //////////// DO NOT MODIFY
  var card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE
  card = prompt("Credit card number:");
  var save = card;
  var output = true;
  var numCard = parseInt(save);
  var condition = true;

  while (condition) {
    if (save == null) {
      return;
  }
  if (parseInt(save) != parseInt(save)) {
    alert("Your number must be an integer.");
    save = prompt("Credit card number:");
    continue;
  }
  var cardLength = String(save).match(/\d/g).length;
  if (cardLength != 13 && cardLength != 15 && cardLength != 16) {
    save = prompt("The credit card number must be integers and of appropriate length. Try again:");
    cardLength = String(save).match(/\d/g).length;
    continue;
  }
  condition = false;
  }

  var copy = save;
  var copy2 = save;
  var odds = [];
  var evens = [];
  var digit;

  while (save > 0) {
    digit = save % 10;
    save = Math.floor(save / 10);
    save = Math.floor(save / 10);
    odds.push(digit);
  }
  while (copy > 0) {
    digit = copy % 10;
    copy = Math.floor(copy / 10);
    digit = 2 * (copy % 10);
    if (digit < 9) {
      evens.push(digit);
    } else {
      evens.push(digit - 9);
    }
    copy = Math.floor(copy / 10);
  }

  var oddSum = odds.reduce((a, b) => a + b, 0);
  var evenSum = evens.reduce((a, b) => a + b, 0);
  var verify = oddSum + evenSum;

  var credit = document.getElementById('credit-output');
  if ((verify % 10) == 0) {
    if (copy2.substring(0, 2) == "34" || copy2.substring(0, 2) == "37") {
      credit.innerHTML = "<img src=\'images/amex.png\' width = 100px>";
    } else if (copy2.substring(0, 2) == "51" || copy2.substring(0, 2) == "52" || copy2.substring(0, 2) == "53" || copy2.substring(0, 2) == "54" || copy2.substring(0, 2) == "55") {
      credit.innerHTML = "<img src=\'images/mastercard.png\' width = 100px>";
    } else if (copy2.substring(0, 1) == "4") {
      credit.innerHTML = "<img src=\'images/visa.png\' width = 100px>";
    }
  } else {
    credit.innerHTML = "Invalid.";
  }

  /*
  * NOTE: After reading in the card number and storing it in the 'card'
  *       variable, do not modify it. If you find it necessary to manipulate
  *       this value, you will need to create a second variable to serve
  *       as a copy of the 'card' variable.
  */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess()
{
  // WRITE YOUR EXERCISE 4 CODE HERE
  var number = Math.floor((Math.random() * 1000) + 1);
  console.log(number);
  var guess;
  var attempts = 0;
  while (guess != number){
    guess = parseInt(prompt("Guess:"));
    if (!(guess >= 1 && guess <= 1000)){
      alert("That is not a valid number. Your number must be between 1 and 1000. Try again.");
    }
    if (guess > number){
      alert("Your number is higher than the correct number.");
    }
    if (guess < number){
      alert("Your number is lower than the correct number.");
    }
    if (guess >= 1 && guess <= 1000){
      attempts++;
      console.log(attempts);
    }
  }
  var guess = document.getElementById('guess-output');
  guess.innerHTML = "Number: " + number + "<br/>" + "Attempts: " + attempts;

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane()
{
  ///////////////// DO NOT MODIFY
  var windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 5 CODE HERE
  var hurricane = document.getElementById('hurricane-output');
  windspeed = parseFloat(prompt("Windspeed:"));
  while (windspeed < 0 || windspeed % windspeed != 0){
    windspeed = parseFloat(prompt("Try again:"));
  }
  // switch (windspeed) {
  //   case (39 <= windspeed && windspeed <= 73):
  //     hurricane.innerHTML = "Tropical Storm";
  //     break;
  //   case (74 <= windspeed && windspeed <= 95):
  //     hurricane.innerHTML = "Category 1";
  //     break;
  //   case (96 <= windspeed && windspeed <= 110):
  //     hurricane.innerHTML = "Category 2";
  //     break;
  //   case (111 <= windspeed && windspeed <= 129):
  //     hurricane.innerHTML = "Category 3";
  //     break;
  //   case (130 <= windspeed && windspeed <= 156):
  //     hurricane.innerHTML = "Category 4";
  //     break;
  //   case (windspeed >= 157):
  //     hurricane.innerHTML = "Category 5";
  //     break;
  //   default:
  //     hurricane.innerHTML = "The skies are calm...";
  // }
  if (39 <= windspeed && windspeed <= 73){
    hurricane.innerHTML = "Tropical Storm.";
  } else if (74 <= windspeed && windspeed <= 95){
    hurricane.innerHTML = "Category 1 Hurricane.";
  } else if (96 <= windspeed && windspeed <= 110){
    hurricane.innerHTML = "Category 2 Hurricane.";
  } else if (111 <= windspeed && windspeed <= 129){
    hurricane.innerHTML = "Category 3 Hurricane.";
  } else if (130 <= windspeed && windspeed <= 156){
    hurricane.innerHTML = "Category 4 Hurricane.";
  } else if (windspeed >= 157){
    hurricane.innerHTML = "Category 5 Hurricane.";
  } else {
    hurricane.innerHTML = "The skies are calm..."
  }

  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics()
{
  /////////////////// DO NOT MODIFY
  var total = 0; //// DO NOT MODIFY
  var scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: For each score that you receive, valid or not, you need to Add
   *       it to the 'scores' variable. To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

   // WRITE YOUR EXERCISE 6 CODE HERE
  // var score;
  // var fourScores = [];
  // var sixScores = [];
  // while (sixScores.length < 6){
  //   score = parseFloat(prompt("Enter scores:"));
  //   scores.push(score);
  //   if (score > 0.0 && score < 10.0){
  //     total += scores;
  //     fourScores.push(score);
  //     sixScores.push(score);
  //   }
  // }
  // console.log(scores);
  // console.log(sixScores);
  // console.log(fourScores);
  // // var max = scores.reduce(function(a, b) {
  // //   return Math.max(a, b);
  // // });
  // var max = Math.max.apply(null, sixScores);
  // var min = Math.min.apply(null, sixScores);
  // fourScores.sort();
  // fourScores.shift();
  // fourScores.pop();
  // sixScores.sort();
   
  // console.log(scores);
  // console.log(sixScores);
  // console.log(fourScores);

  // var average = ((fourScores[0] + fourScores[1] + fourScores[2] + fourScores[3]) / 4).toFixed(2);

  // var gym = document.getElementById('gymnastics-output');
  // gym.innerHTML = "Discarded: " + min + ", " + max + "<br/>" + "Score: " + average;
  
  ////////////////////////////////////////////////////////////////////////////////
  
  var score;
  var fourScores = [];
  var sixScores = [];
  while (scores.length < 6){
   score = parseFloat(prompt("Enter scores:"));
   if (score > 0.0 && score < 10.0){
     total += scores;
     scores.push(score);
     fourScores.push(score);
     sixScores.push(score);
   }
  }
  console.log(scores);
  console.log(sixScores);
  console.log(fourScores);
  // var max = scores.reduce(function(a, b) {
  //   return Math.max(a, b);
  // });
  var max = Math.max.apply(null, sixScores);
  var min = Math.min.apply(null, sixScores);
  fourScores.sort();
  fourScores.shift();
  fourScores.pop();
  sixScores.sort();
  
  console.log(scores);
  console.log(sixScores);
  console.log(fourScores);
  
  var average = ((fourScores[0] + fourScores[1] + fourScores[2] + fourScores[3]) / 4).toFixed(2);
  
  var gym = document.getElementById('gymnastics-output');
  gym.innerHTML = "Discarded: " + min + ", " + max + "<br/>" + "Score: " + average;

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard()
{
  ///////////////////////// DO NOT MODIFY
  var testTotal = 0; ////// DO NOT MODIFY
  var quizTotal = 0; ////// DO NOT MODIFY
  var homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  var tests = 0; ////// DO NOT MODIFY
  var quizzes = 0; //// DO NOT MODIFY
  var homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  // WRITE YOUR EXERCISE 7 CODE HERE
  var test = 0;
  var quiz = 0;
  var hw = 0;

  while (test != -1){
    test = parseFloat(prompt("Tests:"));
    if (test >= 0.0 && test <= 100.0){
      testTotal += tests;
      tests ++;
    }
  }
  while (quiz != -1){
    quiz = parseFloat(prompt("Quizzes:"));
    if (quiz >= 0.0 && quiz <= 100.0){
      quizTotal += quizzes;
      quizzes ++;
    }
  }
  while (hw != -1){
    hw = parseFloat(prompt("Homeworks:"));
    if (hw >= 0.0 && hw <= 100.0){
      homeworkTotal += homeworks;
      homeworks ++;
    }
  }

  var tav = (testTotal / tests).toFixed(2);
  var qav = (quizTotal / quizzes).toFixed(2);
  var hav = (homeworkTotal / homeworks).toFixed(2);
  var finalGrade = (0.6*(tav) + 0.3*(qav) + 0.1*(hav)).toFixed(2);

  var grade = document.getElementById('report-card-output');
  grade.innerHTML = "Tests: " + tav + "<br/>" + "Quizzes: " + qav + "<br/>" + "Homework: " + hav + "<br/>" + "Grade: " + finalGrade;

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}

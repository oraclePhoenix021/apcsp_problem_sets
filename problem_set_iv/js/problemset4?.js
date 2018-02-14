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
  height = parseInt(prompt("Height:"));
  var octothorpe = "##";
  var spaces = "a";

  var indent;
  var print = octothorpe;
  for (var i = height; i > 0; i--){
    for (var j = i; j > 0; j--){
      indent += spaces;
    }
    octothorpe += "#";
    print += indent + octothorpe + "<br/>";
  }
  if (height == 0 || height != true){
    return 0;
  }
  var mario = document.getElementById('mario-easy-output');
  mario.innerHTML = print;

  ////////////////////////// DO NOT MODIFY
  check("mario", height); // DO NOT MODIFY
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
  height = parseInt(prompt("Height:"));
  var indent = (height - 1);
  var spaces = "a";
  var initialSpaces = "a";
  for (var i = indent; i > 1; i--){
    initialSpaces += "a";
  }
  var octothorpe = "##";

  var print = initialSpaces + octothorpe + "  " + octothorpe + "<br/>";

  var p = document.getElementById('mario-hard-output');

  for (var i = height; i > 1; i--){
    for (var i = indent; i > 2; i--){
      spaces += "a";
    }
    octothorpe += "#";
    print += spaces + octothorpe + "  " + octothorpe + "<br>";
  }
  p.innerHTML = print;

  //////////////////////////////// DO NOT MODIFY
  check("mario-again", height); // DO NOT MODIFY
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

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check("credit", card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number.

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
// function isNumber (parameter) {
//   return typeof parameter === 'number' && isFinite(parameter);
// }

function guess()
{
  // WRITE YOUR EXERCISE 4 CODE HERE
  var number = Math.floor((Math.random() * 1000) + 1);
  var guess = parseInt(prompt("Guess:"));
  var attempts = 0;
  // while (guess != number){
  //   guess = parseInt(prompt("Guess:"));
  // }

  var p = document.getElementById('guess-output');
  p.innerHTML = number;

  ////////////////// DO NOT MODIFY
  check("guess"); // DO NOT MODIFY
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
  check("hurricane", windspeed); // DO NOT MODIFY
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
  ///////////////// DO NOT MODIFY
  var total = 0; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  // WRITE YOUR EXERCISE 6 CODE HERE

  ////////////////////////////// DO NOT MODIFY
  check("gymnastics", total); // DO NOT MODIFY
  ////////////////////////////// DO NOT MODIFY
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
  check("report-card", // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}

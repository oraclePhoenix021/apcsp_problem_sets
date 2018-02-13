/*
 * Write a function to display "Hello, AP Computer Science Principles!" in the
 * paragraph provided in the HTML template file. There should be no user input
 * for this exercise. Test your code by clicking the "Say Hello" button.
 *
 * Certain portions of the starter code are important to the feedback script
 * used when testing your code (i.e., by clicking the "Say Hello" button).
 * Please do not modify these in any way. They are clearly marked.
 */

function hello()
{
  // WRITE YOUR EXERCISE 1 CODE HERE
  var div = document.getElementById("output1");
  div.innerHTML = "Hello, AP Computer Science Principles!";

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Write a function to ask the user to enter his or her name, and display a
 * a message in the paragraph provided in the HTML template file. The message
 * should read "Hello, <NAME>!", where <NAME> is the name the user entered.
 * Test your code by clicking the "Say Hello, Again" button.
 *
 * Certain portions of the starter code are important to the feedback script
 * used when testing your code (i.e., by clicking the "Say Hello" button).
 * Please do not modify these in any way. They are clearly marked.
 */

function helloAgain()
{
  //////////// DO NOT MODIFY      Use the 'name' variable to store
  var name; // DO NOT MODIFY      the value that the user enters
  //////////// DO NOT MODIFY      in response to your prompt.

  // WRITE YOUR EXERCISE 2 CODE HERE
  name = prompt("What is your name?");
  var div = document.getElementById("output2");
  div.innerHTML = "Hello, " + name + "!";

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Write a function to convert a randomly generated Celsius temperature to an
 * equivalent Fahrenheit temperature. The Celsius temperature will be within
 * the range [-100, 1000], and will be rounded to 2 decimals. Your converted
 * Fahrenheit temperature should also be rounded to 2 decimals. Test your code
 * by clicking the "Celsius" button.
 *
 * Certain portions of the starter code are important to the feedback script
 * used when testing your code (i.e., by clicking the "Say Hello" button).
 * Please do not modify these in any way. They are clearly marked.
 */

function celsius()
{
  //////////////////////////////////////////////////////// DO NOT MODIFY
  var cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 3 CODE HERE
  var toFahr = (((9 / 5) * cels) + 32).toFixed(2);
  var div = document.getElementById("output3");
  div.innerHTML = cels + " degrees Celsius equals " + toFahr + " degrees Fahrenheit.";

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Write a function to convert a randomly generated Fahrenheit temperature to
 * an equivalent Celsius temperature. The Fahrenheit temperature will be within
 * the range [-100, 1000], and will be rounded to 2 decimals. Your converted
 * Celsius temperature should also be rounded to 2 decimals. Test your code
 * by clicking the "Fahrenheit" button.
 *
 * Certain portions of the starter code are important to the feedback script
 * used when testing your code (i.e., by clicking the "Say Hello" button).
 * Please do not modify these in any way. They are clearly marked.
 */

function fahrenheit()
{
  //////////////////////////////////////////////////////// DO NOT MODIFY
  var fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 4 CODE HERE
  var toCels = ((fahr - 32) * (5/9)).toFixed(2);
  var div = document.getElementById("output4");
  div.innerHTML = fahr + " degrees Fahrenheit equals " + toCels + " degrees Celsius.";

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Write a function to convert a number of inches into an equivalent number
 * of miles, yards, feet, and inches. Use a greedy algorithm, meaning you
 * should use as many of the larger units of distance as you can (i.e., miles,
 * yards, feet, and inches, in that order). Report each unit's value on its
 * own line.
 *
 * Certain portions of the starter code are important to the feedback script
 * used when testing your code (i.e., by clicking the "Say Hello" button).
 * Please do not modify these in any way. They are clearly marked.
 */

function inches()
{
  ///////////// DO NOT MODIFY    Use the 'input' variable to
  var input; // DO NOT MODIFY    store the value the user enters
  ///////////// DO NOT MODIFY    in response to the prompt.

  /////////////////////////////////////////////////// DO NOT MODIFY
  input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////// DO NOT MODIFY

  // Your are free to modify the value of 'inches', which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  var inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 5 CODE HERE
  var miles = Math.floor(inches / 63360);
  var yards = Math.floor((inches % 63360) / 36);
  var feet = Math.floor(((inches % 63360) - (yards * 36)) / 12);
  var inches = inches % 12;
  
  var div = document.getElementById("output5");
  div.innerHTML = "Miles: " + miles + "<br/>" + "Yards: " + yards + "<br/>" + "Feet: " + feet + "<br/>" + "Inches: " + inches;
  
  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Write a function to convert a number of centimeters into an equivalent
 * number of kilometers, meters, and centimeters. Use a greedy algorithm,
 * meaning you should use as many of the larger units of distance as you can
 * (i.e., kilometers, meters, and centimeters, in that order). Report each
 * unit's value on its own line.
 *
 * Certain portions of the starter code are important to the feedback script
 * used when testing your code (i.e., by clicking the "Say Hello" button).
 * Please do not modify these in any way. They are clearly marked.
 */

function centimeters()
{
  ///////////// DO NOT MODIFY    Use the 'input' variable to
  var input; // DO NOT MODIFY    store the value the user enters
  ///////////// DO NOT MODIFY    in response to the prompt.

  /////////////////////////////////////////////////// DO NOT MODIFY
  input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////// DO NOT MODIFY

  // Your are free to modify the value of 'centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  var centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 6 CODE HERE
  var kilometers = Math.floor(centimeters / 100000);
  var meters = Math.floor((centimeters % 100000) / 100);
  var centimeters = centimeters % 100;
  
  var div = document.getElementById("output6");
  div.innerHTML = "Kilometers: " + kilometers + "<br/>" + "Meters: " + meters + "<br/>" + "Centimeters: " + centimeters;

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Write a function to convert a number of fluid ounces into an equivalent
 * number of gallons, quarts, pints, cups, and fluid ounces. Use a greedy
 * algorithm, meaning you should use as many of the larger units of volume
 * as you can (i.e., gallons, quarts, pints, cup, and fluid ounces, in that
 * order). Report each unit's value on its own line.
 *
 * Certain portions of the starter code are important to the feedback script
 * used when testing your code (i.e., by clicking the "Say Hello" button).
 * Please do not modify these in any way. They are clearly marked.
 */

function fluidOunces()
{
  ///////////// DO NOT MODIFY    Use the 'input' variable to
  var input; // DO NOT MODIFY    store the value the user enters
  ///////////// DO NOT MODIFY    in response to the prompt.

  /////////////////////////////////////////////////// DO NOT MODIFY
  input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////// DO NOT MODIFY

  // Your are free to modify the value of 'fluidOunces', which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  var fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 7 CODE HERE
  var gallons = Math.floor(fluidOunces / 128);
  var quarts = Math.floor((fluidOunces % 128) / 32);
  var pints = Math.floor((fluidOunces - ((gallons * 128) + (quarts * 32))) / 16);
  var cups = Math.floor((fluidOunces - ((gallons * 128) + (quarts * 32) + (pints * 16))) / 8);
  var fluidOunces = fluidOunces % 8;
  
  var div = document.getElementById("output7");
  div.innerHTML = "Gallons: " + gallons + "<br/>" + "Quarts: " + quarts + "<br/>" + "Pints: " + pints + "<br/>" + "Cups: " + cups + "<br/>" + "Fluid Ounces: " + fluidOunces;

  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Write a function to convert a number of ounces into an equivalent number
 * of tons, pounds, and ounces. Use a greedy algorithm, meaning you should
 * use as many of the larger units of weight as you can (i.e., tons, pounds,
 * and ounces, in that order). Report each unit's value on its own line.
 *
 * Certain portions of the starter code are important to the feedback script
 * used when testing your code (i.e., by clicking the "Say Hello" button).
 * Please do not modify these in any way. They are clearly marked.
 */

function ounces()
{
  ///////////// DO NOT MODIFY    Use the 'input' variable to
  var input; // DO NOT MODIFY    store the value the user enters
  ///////////// DO NOT MODIFY    in response to the prompt.

  /////////////////////////////////////////////////// DO NOT MODIFY
  input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////// DO NOT MODIFY

  // Your are free to modify the value of 'ounces', which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  var ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 8 CODE HERE
  var tons = Math.floor(ounces / 32000);
  var pounds = Math.floor((ounces % 32000) / 16);
  var ounces = ounces % 16;
  
  var div = document.getElementById("output8");
  div.innerHTML = "Tons: " + tons + "<br/>" + "Pounds: " + pounds + "<br/>" + "Ounces: " + ounces;

  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Write a function to convert a number of ounces into an equivalent number
 * of tons, pounds, and ounces. Use a greedy algorithm, meaning you should
 * use as many of the larger units of weight as you can (i.e., tons, pounds,
 * and ounces, in that order). Report each unit's value on its own line.
 *
 * Certain portions of the starter code are important to the feedback script
 * used when testing your code (i.e., by clicking the "Say Hello" button).
 * Please do not modify these in any way. They are clearly marked.
 */

function money()
{
  ///////////// DO NOT MODIFY    Use the 'input' variable to
  var input; // DO NOT MODIFY    store the value the user enters
  ///////////// DO NOT MODIFY    in response to the prompt.

  /////////////////////////////////////////////////// DO NOT MODIFY
  input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////// DO NOT MODIFY

  // Your are free to modify the value of 'pennies', which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  var pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 9 CODE HERE
  var dollars = Math.floor(pennies / 100);
  var quarters = Math.floor((pennies % 100) / 25);
  var dimes = Math.floor(((pennies % 100) % 25) / 10);
  var nickels = Math.floor((((pennies % 100) % 25) % 10) / 5);
  var pennies = pennies % 5;
  
  var div = document.getElementById("output9");
  div.innerHTML = "Dollars: " + dollars + "<br/>" + "Quarters: " + quarters + "<br/>" + "Dimes: " + dimes + "<br/>" + "Nickels: " + nickels + "<br/>" + "Pennies: " + pennies;

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Write a function to ask the user for a dollar amount less 1.00 (leading
 * zeroes are required, but dollar signs should be omitted). Display the
 * fewest number of coins (quarters, dimes, nicks, and pennies) with which
 * the change can be made.
 *
 * Certain portions of the starter code are important to the feedback script
 * used when testing your code (i.e., by clicking the "Say Hello" button).
 * Please do not modify these in any way. They are clearly marked.
 */

function change()
{
  ///////////// DO NOT MODIFY    Use the 'input' variable to
  var input; // DO NOT MODIFY    store the value the user enters
  ///////////// DO NOT MODIFY    in response to the prompt.

  /////////////////////////////////////////////////// DO NOT MODIFY
  input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  /////////////////////////////////////////////////// DO NOT MODIFY

  // Your are free to modify the value of 'amount', which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  var amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 10 CODE HERE
  var quarters = Math.floor(amount / 0.25);
  amount = (amount % 0.25).toFixed(2);
  var dimes = Math.floor(amount / 0.1);
  amount = (amount % 0.1).toFixed(2);
  var nickels = Math.floor(amount / 0.05);
  amount = (amount % 0.05).toFixed(2);
  var pennies = Math.floor(amount / 0.01);
  var coins = quarters + dimes + nickels + pennies

  var div = document.getElementById("output10");
  div.innerHTML = coins + " coin(s).";


  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

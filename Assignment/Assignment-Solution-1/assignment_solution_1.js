/**
	This file contains the solution to the assignment problems for chapter 1
**/

/** Problem 1 **/
function is_integer(n) {
  return typeof(n) == "number" && Math.floor(n) == n;
}

/** Problem 2 **/
function add_all(arr) {
  var sum = 0;
  arr.forEach(function(e) {sum += e;});
  return sum;
}

/** Problem 3 **/
function temp_converter(from, reading) {
  if (from === "celsius") {
	return (reading * 9/5) + 32 + " degree F";
  } else {
	return (reading -32) * 5 / 9 + " degree celsius";
  }
}

/** Problem 4 - Using iteration **/
function factorial(n) {
  var fact = 1;
  for (var i=1; i <= n; i++) {
	fact = fact * i;
  }
  return fact;
}

/** Problem 4 - Using recursion, in case you know **/
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n-1);
}

/** Problem 5 **/
function convert_to_coins(amount) {
  var denominations = [25, 10, 5, 2, 1];
  var curr_denom_index = 0;
  while (amount > 0) {
    while (amount < denominations[curr_denom_index]) {
      curr_denom_index++;
    }
    amount = amount - denominations[curr_denom_index];
    console.log(denominations[curr_denom_index]);
  }
}
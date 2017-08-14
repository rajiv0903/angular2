/**
	This file contains the solution to the assignment problems for chapter 3
**/

/** Problem 1 **/
function max_str(arr) {
  return arr.reduce(function(prev, curr) {
    if (curr.length > prev.length) {
      return curr;
    } else {
      return prev;
    }
  }, "");
}


/** Problem 2 **/
function sum_of_squares(arr) {
  return arr.map(function(elem) {return elem * elem}).reduce(function(prev, curr) {return prev + curr}, 0);
}

/** Problem 3 **/
function filter_even(arr) {
  return arr.filter(function(elem) {return elem % 2 == 0});
}

/** Problem 4 **/
function arr_complement(arr, criteria_fn) {
  return arr.filter(function(i) {return !criteria_fn(i)});
}
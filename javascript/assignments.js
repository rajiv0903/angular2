/**
 * ==============================================================================================
 * ############################### Introduction to Javascript ###################################
 * ==============================================================================================
 */
/**
 * Write a javascript function named is_integer which checks
 * if the passed argument is an integer.
 * You can use any mathematical operator or functions defined in the Math object.
 */

function is_integer(n) {
    return typeof (n) == "number" && Math.floor(n) == n;
}

/**
 * Using the forEach function defined for an array, find the sum of the array of numbers.
 * [function add_all(arr) {...}]
 */

function add_all(arr) {
    var sum = 0;
    arr.forEach(function (e) {
        sum += e;
    });
    return sum;
}

/**
 * Write a JavaScript program to convert temperatures to and from celsius,
 * fahrenheit. [ Use the formula : c/5 = (f-32)/9, where c = temperature in celsius and f = temperature in fahrenheit]
 */

function temp_converter(from, reading) {
    if (from === 'celcius') {
        return (reading * 9 / 5) + 32 + ' degree F';
    } else {
        return (reading - 32) * 5 / 9 + ' degree celcius';
    }
}

/**
 * Write a factorial function that returns the factorial
 * of a given number, n. Make sure you return the calculated value
 * and not just print it. [function factorial(n){...}]
 */
/** Using For loop */
function factorial(n) {
    var fact = 1;
    for (var i = 1; i <= n; i++) {
        fact = i * fact;
    }
    return fact;
}
/** Using Recurssion */
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

/**
 * Write a javascript function that converts a given amount of money into
 * coins of denominations (1, 2, 5, 10 and 25). [function convert_to_coins(amount) {...}].
 * You may choose to print the coin denominations used on the console.
 * E.g. convert_to_coins(87) should print 25 25 25 10 2.
 */
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

/**
 * ================================================================================================
 * ###################################### Objects and Array #######################################
 * ================================================================================================
 */

/**
 * Write a javascript function named reverse which takes a string argument and returns the reversed string.
 */
function reverse(str) {
    return str.split('').reverse().join('');
}

/**
 * Given a javascript array of objects having a radius property as shown [{radius: 5}, {radius: 9}, {radius: 2}],
 *  write a comparator function to sort it.
 */
function circle_comparator(c1, c2) {
    return c1.radius - c2.radius;
}

/**
 * Write a javascript function named length_of_array, which takes an array as argument
 * and returns the number of elements in that array (as opposed to what is given by the length property of the array).
 * Remember undefined can also be an element if it is explicitly set at some index, e.g. x[5] = undefined;.
 * This undefined should be counted, but elements which are not present in the array (as arrays can be sparse), 
 * should not be counted.
 */
function length_of_array(arr) {
    var counter = 0;
    arr.forEach(function () {
        counter++;
    });
    return counter;
}

/**
 * ================================================================================================
 * ############################# Functional Programming with Javascript ##########################
 * ================================================================================================
 */
/**
 * Write a function to find the largest string in an array of strings making use of the reduce function.
 * You can, of course, do it using a loop, but see how short your code can be if
 * you make use of the filter function.
 */
function max_str(arr) {
    return arr.reduce(function (prev, curr, index, arr) {
        if (typeof (prev) == 'undefined') {
            prev = '';
        }
        if (typeof (curr) == 'undefined') {
            curr = '';
        }
        if (prev.length < curr.length) {
            return curr;
        } else {
            return prev;
        }
    }, '');
};


/**
 * Write a function that takes an array of numbers and returns the sum of squares of those numbers.
 * E.g. if the array passed is [1, 2, 3] then the function should return 14.
 */
function sum_of_squares(arr) {
    return arr.map(function (elem, index, arr) {
        return elem * elem;
    }).reduce(function (prev, curr, index) {
        return prev + curr;
    }, 0);
}

/**
 * Write a function that takes an array of numbers as an argument and filters and returns
 * the even numbers in them.
 */
function filter_even(arr) {
    return arr.filter(function name(elem, index, arr) {
        return elem % 2 == 0;
    })
}

/**
 * Write a function that takes an array and a criteria function(for filtering) and returns
 * the array of those elements which do not fulfill the criteria.
 * The criteria function should take any element as argument and return a boolean value.
 */
function arr_complement(arr, criteria_fn) {
    return arr.filter(function (elem, index, arr) {
        return !criteria_fn(elem);
    })
}

/**
 * ================================================================================================
 * ######################### Object Oriented Programming with Javascript ##########################
 * ================================================================================================
 */
/**
 * Write a constructor function to represent a Rectangle, which can calculate its area and perimeter.
 */
function Rectangle(height, width) {
    this.area = function () { return height * width };
    this.perimeter = function () { return 2 * (height + width) };
}

/**
 * Write a Point function which takes x and y coordinates as arguments to define it. 
 * It should also be able to evaluate the distance from another point. We may 
 * make use of this exercise in a later assignment problem when dealing with the Document Object Model.
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
    this.distanceFrom = function (another) {
        return Math.sqrt( Math.pow((another.x-this.x), 2)+ Math.pow((another.y-this.y), 2) )
    }
}


/**
 * Write javascript code so that we can check if a string object is a palindrome. 
 * E.g. "xyx".isPalindrome() should return true.
 */
String.prototype.isPalindrome = function () {
    return this.split('').reverse().join('').valueOf() === this.valueOf();
}


/**
 * ================================================================================================
 * ######################### Self-Executing Anonymous Functions ##########################
 * ================================================================================================
 */
(function(mark, loves, drinking, coffee){
  mark.open('http://www.google.com'); //window
  loves.getElementById('menu'); //document
  //drinking('#menu').hide(); //jQuery
  var foo;
  console.log(foo === coffee); //undefined
})(window, document, jQuery);

/**
 * One of the major benefits of this pattern, as seen on the last two lines of the previous example,
 *  is that you can limit access to variables and functions within your closure, essentially making 
 * them private and only choosing to expose an API of your choice to the global scope.
 */
(function(window){
  var foo = 'Hello';
  var bar = 'World!'
  
  function baz(){
      return foo + ' ' + bar;
  }

  //In this context, 'window' refers to the parameter
  window.baz = baz;
})(window);

console.log(baz()); //...and now this works.
//It's important to note that these  won't work: 
console.log(foo);
console.log(bar);
/**
	This file contains the solution to the assignment problems for chapter 4
**/

/** Problem 1 **/
function Rectangle(height, width) {
  this.area = function() {return height * width};
  this.perimeter = function() {return 2 * (height + width)};
}

/** Problem 2 **/
/** Think about why we need to have this.x = x and this.y = y statements, which was not required in the Rectangle function above **/
function Point(x, y) {
  this.x = x;
  this.y = y;
  this.distanceFrom = function(another) {
    return Math.sqrt((this.x - another.x) * (this.x - another.x) + (this.y - another.y) * (this.y - another.y));
  }
}

/** Problem 3 **/
/** Don't add methods like this in a real project unless you are sure what you are doing. I mean don't mess with inbuilt JS code **/
String.prototype.isPalindrome = function() {
  return this.split('').reverse().join('').valueOf() === this.valueOf();
}

/** Problem 3: Alternatively we can also do this **/
String.prototype.isPalindrome = function() {
  return this.split('').reverse().join('') == this; // with a == operator we don't need to use the valueOf method. WHY?? Check the type of this.split('').reverse().join('')
}
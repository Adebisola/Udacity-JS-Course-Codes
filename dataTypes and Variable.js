/*  for a modulo operation x%y, for any number of y, the value of the operation x % y is always lesser than y itself*/
console.log(5 > 10);
console.log(5 == 10);
console.log(2 != 10);
var a = 2;
var b = 6;
var c = a + b;
console.log(c);
let dinner = "tacos";
dinner = dinner + " tamales" + " and," + " fries";
console.log(dinner);
var name = "Oluwafunmilayo";
console.log(name.charAt(6));
console.log("\"Don't go to the market\",Sade said to me.");
const text = "Up up\n\tDown Down";
console.log(text);
console.log("yes" == "Yes"); // false
/* In Javascript, strings are compared character-by-character in alphabetical order. Each character has a specific numeric value, coming from ASCII value of Printable characters. For example, the character 'A' has a value 65, and 'a' has a value 97. You can notice that a lowercase letter has a higher ASCII value than the uppercase character.*/
// hot to print a string's character's ASCII
const myString = "funny";
const ASCII_value = myString.charCodeAt(1);
console.log(ASCII_value);

// print the ASCII of each character of a string.
const textString = "Memorable";
for (let i = 0; i < textString.length; i++) {
    const ASCIIValue = textString.charCodeAt(i);
    console.log(ASCIIValue);
}
/*The ASCII values of [A-Z] fall in the range [65-90], whereas, the ASCII values of [a-z] fall in the range [97-122]. Therefore, when we compare strings, the comparison happens character-by-character for the ASCII values. */

console.log("green" > "blue");
/* When checking if a string is "greater than" or "less than" another string, JavaScript compares individual characters using a numerical value. Each character is assigned a numerical value that essentially corresponds to the character's location in an ASCII table: http://www.ascii-code.com/ */

const joke = "\"Why couldn\'t the sky come out to play? \n They were all \"tied\" up.";
console.log(joke);
const haiku = "Blowing from the west" + "\nFallen leaves gather" + "\nIn the east.";
console.log(haiku);


const studentName = "Bisola";
const hasEnrolledInCourse = true;
const hasNotEnrolledInCourse = false;

if (hasEnrolledInCourse) {
    console.log("Hi " + studentName + " Welcome to Udacity!"); // wiil only run if hasEnrolledIsTrue is true.
};

/* In general cases (regular equality check), a true corresponds to number 1, whereas false represents a number 0. For example:

if (1) {
    console.log("This statement will always execute because conditional is set to 1 i.e., true");
}

if (0) {
    console.log("This statement will NEVER execute because conditional is set to 0 i.e., false");
} */



/* null is a data type that has no value, empty var x = null  null will be returned if you purposely assign the value to nothing
undefined is the absence of value i.e does not have a value yet but it exists. undefined will be returned to you if you do not assign a value to a variable
*/
var x = null;
var y;
console.log(x);
console.log(y);

console.log(0 == false) // retunns true because JS sees 0 and false as the same.
console.log(' ' == false) // returns true because both sides of the operands are first converted into zero before comparison.
    /* In the case of regular comparison, the operands on either side of the == operator are first converted to numbers, before comparison. Therefore, a ' ', false, and 0 are all considered equal.
    
    plicit Type Coercion
JavaScript is known as a loosely typed language.

Basically, this means that when you’re writing JavaScript code, you do not need to specify data types. Instead, when your code is interpreted by the JavaScript engine it will automatically be converted into the "appropriate" data type. This is called implicit type coercion and you’ve already seen examples like this before when you tried to concatenate strings with numbers.

"julia" + 1
Returns: "julia1" */

console.log("1" == true) // returns true because "1" is converted into true.


/* When you use the == or != operators, JavaScript first converts each value to the same type (if they’re not already the same type); this is why it's called "type coercion"! This is often not the behavior you want, and it’s actually considered bad practice to use the == and != operators when comparing values for equality.

Instead, in JavaScript it’s better to use strict equality to see if numbers, strings, or booleans, etc. are identical in type and value without doing the type conversion first. To perform a strict comparison, simply add an additional equals sign = to the end of the == and != operators*/
console.log("hello" % 10);
console.log(Number("hello"));
/* When testing for equality both Type Conversion and Strict Equality can influence the result of the expression.
"3" > 1 is true because 3 is greater than 1 (implicit type coercion)
true >= 0 is true because 1 greater than or equal to 0 (implicit type coercion)
1 !== false is true because 1 does not equal false (strict equality)
3 === 3 is true because 3 equals 3 (strict equality) */
let thingOne = "Funmi";
let thingTwo = "Adeniyi";
console.log(thingOne + " " + thingTwo);
let fullName = "Oluwafunmilayo Adeniyi";
console.log(fullName);
let bill = 10.25 + 3.99 + 7.15;
let tip = bill * 0.15;
let total = bill + tip;
total = total.toFixed(2);
total = "$" + total;

console.log(total);
var sum = 24.9087;
sum = sum.toFixed(2);
console.log(sum);
const adjective1 = "amazing";
const adjective2 = "fun";
const adjective3 = "entertaining";
const madLib = "The Intro to JavaScript course is " + adjective1 + ".James and Julia are so " + adjective2 + ".I cannot wait to work through the rest of this " + adjective3 + " content!";
console.log(madLib);
/* practice more madLibs */
/* Hi, my name is Julia.  In my spare time, I like to play video games.
Hi, my name is James. I love baseball. In my spare time, I like to read.*/
const firstName = "Julia.";
const interests = "cats.";
const hobby = "I like to play video games.";
const awesomeMessage = "Hi, my name is " + firstName + " I love " + interests + " In my spare time, " + hobby;
console.log(awesomeMessage);
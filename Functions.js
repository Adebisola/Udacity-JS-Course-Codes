function reverseString(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString("Abimbola"));

function doubleGreetings(name, otherName) {
    if (name.length < 6) {
        console.log("Hello " + name);
    } else {
        console.log("Hi " + otherName);
    }
}
console.log(doubleGreetings("Bayonle", "Bose"));

function sayHello() {
    const message = "Hello!";
    return message;
}
console.log(sayHello() + " Daniele.");
/* undefined is the default return value on the console when nothing is explicitly returned using the special return keyword.*/

/* undefined is the default return value on the console when nothing is explicitly returned using the special return keyword. return statements make your function return a value*/
function sayHello1() {
    const message1 = "Hi!";
    console.log(message1); // undefined
}

/* A parameter is always going to be a variable name and appears in the function declaration. On the other hand, an argument is always going to be a value (i.e. any of the JavaScript data types - a number, a string, a boolean, etc.) and will always appear in the code when the function is called or invoked.*/
function laugh() {
    const sound = "hahahahahahahahahaha!";
    return sound;
}
console.log(laugh());

function laughing(num) {
    let printOut = "";
    for (let i = 0; i < num; i++) {
        let laughMessage = "ha";
        printOut = printOut + laughMessage;

    }
    printOut = printOut + "!";
    return printOut;
}
console.log(laughing(0));

function whatHappens() {
    console.log("I am printing to the console");
    return "I am returning a value";
}

whatHappens(); // will print "I am printing to the console"
// console.log(whatHappens); will print "I am returning a value" and "I am printing to the console"
/* 
    console.log is used to print a value to the JavaScript console.
    The return keyword is used to stop execution of a function and *return the value back to the caller.

Returning is different from printing
Printing a value to the JavaScript console only displays the value but the value can't be used anwywhere else.

Printing is great for debugging code
Using console.log to test your code in the JavaScript console or to print out values as your code runs can be extremely helpful in pinpointing where something has gone wrong in your code.

All function calls return something
If a return value is not specified, the function will return undefined.

The return keyword will stop the execution of a function
Any code after a return statement will be ignored    */


//A prime number is an integer that is not a product of two smaller integers.
function isPrime(integer) {
    for (x = 2; x < integer; x++) {
        if (integer % x === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(1900));

function isThisWorking(input) {
    //console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
    return "Returning: I am returning this string!";
}
isThisWorking(3);


function square(x) {
    return x * x;
}

function subtractFour(x) {
    return square(x) - 4;
}

console.log(subtractFour(5)); // logs 21

function test() {
    return 1;
    return 2;
}

test();
/* However, it is possible to have multiple return statements in a function.

For instance, you could use a conditional to specify when each of the return statements is evaluated. You could, for example, only return the value of 1 if the string "one" was passed into the test() function. Else, you could return the value of 2.*/



/* A function's return value can be stored in a variable or reused throughout your program as a function argument.*/

function add(a, b) {
    return a + b;
}
const sum = add(12, 16);

function divideByTwo(num) {
    return num / 2;
}
const average = divideByTwo(sum);
console.log(average);

function addTen(x) {
    return x + 10;
}
const total = addTen(5)

function divideByThree(y) {
    return y / 3;
}
const result = divideByThree(total);
console.log(result);


const bookSeeker = "James"; // global scope
const book = "Great Expectations"; // global scope
function library() {
    const librarian = "Julia"; // function scope
    console.log(bookSeeker + " asked " + librarian + " for " + book);

    function classicLiterature() {
        const shelf = "Dickens"; // function scope
        console.log(bookSeeker + " found " + book + " on the " + shelf + " shelf!");
    }
    classicLiterature();
}
library(); // returns the two console.log statements
console.log(bookSeeker + " is looking for " + book); // prints James is looking for Great Expectations because the variables are globally scoped.
//console.log(librarian);
// console.log(shelf); // Uncaught ReferenceError: librarian and shelf is not defined because librarian can only be accessed in the function.



/*const a = 1;

function x() {
    const b = 2;

    function y() {
        const c = 3;

        function z() {
            const d = 4;
        }
        z();
    }
    y();
}

x();
a is available in all the scopes
a and b is available in x()
a,b and c is available in y() */

/* How Does Javascript Find a Variable? It Uses the Scope Chain

When the JavaScript engine is looking for a variable, it starts from the current scope and moves outward:

    The JavaScript engine will start looking in the scope where the variable is requested.
    If it can't find it in the current scope, it moves out one level and checks again.
    It keeps moving to the outer scope until it has reached the global scope.
    If the JavaScript engine checks all of the outer functions and global scope, and it still can't find the identifier then it will return a Reference error*/

// <-- 4. JavaScript engine looks here last
const globalVar = "I am in the global scope";

function outerOuterFunction() {
    // <-- 3. JavaScript engine looks here third
    const outerOuterVar = 'I am in the outerOuterFunction scope';

    function outerFunction() {
        // <-- 2. JavaScript engine looks here second
        const outerVar = 'I am in the outerFunction scope';

        function innerFunction() {
            // <-- 1. JavaScript engine looks here first
            const innerVar = 'I am in the innerFunction scope';
            console.log(globarVar);
        }
    }
}

/* block scope which limits the scope of a variable to the block of code where it is declared. a block is set of code between curly braces*/
// this is a block in conditional statements
const num = 5;
if (num < 6) {
    const double = num * 2;
    console.log(double);
} else {
    const half = num / 2;
    console.log(half);
}
// this is a block in loops
for (number = 0; number < 5; number++) {
    let triple = number * 3;
    console.log(triple);
}
// double, half, triple are only available in the block they are declared



let fruit = "apple";

if (fruit !== "banana") {
    let fruit = "banana";
    console.log(fruit);
}
console.log(fruit); // prints banana and apple in that order
// Block Scope Only Works with let And const, if you declare a variable with var, it will be available both in the block and outside the block. if there is a variable with the exact variable name, it will reassign that variable to the value declared in the block.
var money = 6;
if (true) {
    var money = 5;
    console.log(money);
}
console.log(money);

/* if (true) {
    var x = "x is accessible";
    let y = 'y is accessible'; 
    const z = 'z is accessible'; 
    console.log("Inside the if block scope:");
    console.log(x);
    console.log(y);
    console.log(z);
}
console.log("Outside the if block scope:")
console.log(x);
console.log(y);
console.log(z);  returns ";
    "Inside the if block scope:"
    "x is accessible";
    'y is accessible'; 
    'z is accessible'; 
    "Outside the if block scope:"
    "x is accesssible"
    Uncaught Reference error: y is defined. 
*/

/* You can only access variables declared in the function scope inside the function, even when you declare them with var. That is the big difference between how block scope and function scope work
function whereAmIAssessible(a) {
  if (a) {
    var x = "x is accessible";
    let y = 'y is accessible';
    const z = 'z is accessible';
    console.log("Inside the if block scope:");
    console.log(x);
    console.log(y);
    console.log(z);
  }
}

whereAmIAssessible(true);
console.log("Outside the function scope:")
console.log(x);
console.log(y);
console.log(z);
Inside the if block scope:
x is accessible
y is accessible
z is accessible
Outside the function scope:
 uncaught Reference error. x is defined*/

/* Shadowing occurs when variables in different scopes have the same name. When this happens the variable in the inner scope overrides the variable in the outer scope*/
let bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish() {
    bookTitle = 'The Little Prince'; // let bookTitle = "The Little Prince" prevents scope shadowing.
    console.log(bookTitle);
}

displayBookEnglish()
console.log(bookTitle);
/*  always declare a new variable in your scope to prevent shadowing*/


/* let x = 1;

function addTwo() {
    x = x + 2; (var x = x+2 // 2)
}

addTwo();
x = x + 1;
console.log(x); // 4 */


/* 
    If an identifier is declared in global scope, it's available everywhere.
    If an identifier is declared in function scope, it's available in the function it was declared in (even in functions declared inside the function).
    If an identifier is declared in block scope with var, it is available in the block and in the outer scope of the block it was declared in.
    If an identifier is declared in block scope with let or const, it is only available in the block it was declared in.
    When trying to access an identifier, the JavaScript Engine will first look in the current function. If it doesn't find anything, it will continue to the next outer function to see if it can find the identifier there. It will keep doing this until it reaches the global scope.
    Global identifiers are a bad idea. They can lead to bad variable names, conflicting variable names, and messy code.
*/

/* Function Expression:When a function is stored inside a variable it's called a function expression. the function keyword no longer uses a name*/
/*const catSays = function(max) { // this is an anonymous function because it is a function with no name and i stored it in the catSays variable
    let catMessage = "";
    for (let i = 0; i < max; i++) {
        catMessage += "meow ";
    }
    return catMessage;
};
catSays; */


/* Hoisting is a result of how JavaScript is interpreted by your browser. Essentially, before any JavaScript code is executed, all function declarations and variables declared with var are hoisted, which means they're raised to the top of the function scope.*/
// this code works because of hoisting
findAverage(5, 9);

function findAverage(x, y) {
    var answer = (x + y) / 2;
    return answer;
}

function makeLine(length) {
    var line = "";
    for (let j = 1; j <= length; j++) {
        line += "* "
    }
    return line + "\n";
}
console.log(makeLine(10));

function buildTriangle(length) {

    var triangle = "";
    for (let triLength = 1; triLength <= length; triLength++) {
        triangle = triangle += makeLine(triLength);
    }
    return triangle;
}
console.log(buildTriangle(20));
// functions as parameters i.e callback functions
const catSays = function(max) {
    let catMessage = "";
    for (let i = 0; i < max; i++) {
        catMessage += "meow ";
    }
    return catMessage;
};
catSays;

function helloCat(catSays) {
    return "Hello " + catSays(3);
}
console.log(helloCat(catSays));

// Named function expression
const favouriteMovie = function movie() {
    return "BridesMaids";
};
console.log(favouriteMovie());

//inline function expression a function expression is when a variable is passed a function
const favoriteMovie = function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
console.log(movies(favoriteMovie, "Finding Nemo")); //My favorite movie is Finding Nemo


/* inline function expression method
// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
}, "Finding Nemo"); 



Anonymous inline function expressions are often used with function callbacks that are unlikely to be reused elsewhere. Yes, you could store the function in a variable, give it a name, and pass it in like you saw in the examples above. However, when you know the function is not going to be reused, it could save you many lines of code to just define it inline.

For example, we can make the callback function in movies an anonymous inline function like this:

function movies(messageFunction, name) {
    messageFunction(name);
}

movies(function (movieName) {
    console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

*/

/* Function Expression: When a function is assigned to a variable. The function can be named, or anonymous. Use the variable name to call a function defined in a function expression.

// anonymous function expression
const doSomething = function(y) {
  return y + 1;
};

// named function expression
const doSomething = function addOne(y) {
  return y + 1;
};

// for either of the definitions above, call the function like this:
doSomething(5);
*/

//Quiz
const laughter = function(numOfHa) {
    let haStr = "ha";
    for (let j = 1; j < numOfHa; j++) {
        haStr = haStr += "ha";
    }
    return haStr + "!";

}
console.log(laughter(1));
console.log(laughter(5))
console.log(laughter(10))

//Quiz
const cry = function crySound() {
    let noise = "boohoo!";
    return noise;
}
console.log(cry());

function emotions(emotion, msgFunction) {
    console.log("I am " + emotion + ", " + msgFunction)
}

emotions("happy", laughter(2));


/* another method 
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here


emotions("happy", function(numOfHa) {
    let haStr = "ha";
    for (let j = 1; j < numOfHa; j++) {
        haStr = haStr += "ha";
    }
    return haStr + "!";
});*/
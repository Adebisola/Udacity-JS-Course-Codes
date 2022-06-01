/* runtime scope. When a function is run, it creates a new runtime scope. This scope represents the context of the function, or more specifically, the set of variables available for the function to use. 
A function's runtime scope describes the variables available for use inside a given function. The code inside a function has access to:

    The function's arguments.
    Local variables declared within the function.
    Variables from its parent function's scope.
    Global variables.
*/
const a = ""; // global variable

function parent() {
    const b = ""; // local variable declared in parent function

    function child() { // nested child function has access to all the vriables a,b,c, so they ar available in its scope
        const c = ""; // local variable declared in child()
    }
}
const myName = "Funmi";

function introduceMyself() {
    const you = "student";

    function introduce() {
        console.log(`Hello ${you}, I am ${myName}!`)
    }
    return introduce();
}
console.log(introduceMyself());




const num1 = 5;

function functionOne() {
    const num2 = 10;

    function functionTwo(num3) {
        const num4 = 35;

        return num1 + num2 + num3 + num4;
    }

    return functionTwo(0); // this function has access to all the variables
}

/* variables in JavaScript are traditionally defined in the scope of a function, rather than in the scope of a block. Since entering a function will change scope, any variables defined inside that function are not available outside of that function. On the other hand, if there are any variables defined inside a block (e.g., within an if statement), those variables are available outside of that block.*/

var globalNumber = 5;

function globalIncrementer() {
    const localNumber = 10;

    globalNumber += 1;
    return globalNumber;
}
console.log(globalIncrementer());
// 6

console.log(globalIncrementer());
// 7

console.log(globalIncrementer());
// 8
//console.log(localNumber); // reference error of localNumber undefined because it is not availabale outside the function


//Scope chain
/* Whenever your code attempts to access a variable during a function call, the JavaScript interpreter will always start off by looking within its own local variables. If the variable isn't found, the search will continue looking up what is called the scope chain*/

function one() {
    two();

    function two() {
        three();

        function three() {
            // function three's code here
        }
    }
}
one();
/*In the above example, when one() is called, all the other nested functions will be called as well (all the way to three()).

You can visualize the scope chain moving outwards starting at the innermost level: from three(), to two(), to one(), and finally to window (i.e., the global/window object). This way, the function three() will not only have access to the variables and functions "above" it (i.e., those of two() and one()) -- three() will also have access to any global variables defined outside one().
Any global variables declared are accessed as properties of the window object, which represents the outermost level of the scope chain. */



/*Variable Shadowing

What happens when you create a variable with the same name as another variable somewhere in the scope chain?

JavaScript won't throw an error or otherwise prevent you from creating that extra variable. In fact, the variable with local scope will just temporarily "shadow" the variable in the outer scope. This is called variable shadowing. */


const symbol = '¥'; // global variable

function displayPrice(price) {
    const symbol = '$'; // local variable
    console.log(symbol + price);
}

displayPrice('80'); // '$80'
// if there are variables with the same name, the inner scope takes precedence, since scope moves from the innermost to the outermost

let n = 2;

function myFunction() {
    let n = 8;
    console.log(n);
}

myFunction(); // 8



let x = 8;

function functionOne() {
    let x = 9;

    function functionTwo() {
        let x = 10;
        console.log(x); // First log // 10
    }

    functionTwo();

    console.log(x); // Second log // 9
}

functionOne();

console.log(x); // Third log // 8
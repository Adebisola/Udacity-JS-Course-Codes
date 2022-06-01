/* A function declaration defines a function and does not require a variable to be assigned to it. It simply declares a function, and doesn't itself return a value*/
function returnHello() {
    return 'Hello!';
}
/* On the other hand, a function expression does return a value.*/
// anonymous
const myFunction = function() {
    return 'Hello!';
};

// named
const myFunctionz = function returnHello() {
    return 'Hello!';
};


/*IIFE is a function that is called immediately after it is defined */
/* (function sayHi(){
    alert('Hi there!');
  }
)();

// alerts 'Hi there!'*/
/* The syntax might seem a bit odd, but all we're doing is wrapping a function in parentheses, then adding a pair of parentheses at the end of that to invoke it!*/
(function(name) {
    alert(`Hi, ${name}`);
})('Andrew');

// alerts 'Hi, Andrew'

/*The second pair of parentheses not only immediately executes the function preceding it -- it's also the place to put any arguments that the function may need! We pass in the string 'Andrew', which is stored in the function expression's name variable. It is then immediately invoked, alerting the message 'Hi, Andrew' onto the screen */


(function(x, y) {
    console.log(x * y);
})(2, 3);

// 6

/*IIFE and private scope 
One of the primary uses for IIFE's is to create private scope (i.e., private state). Recall that variables in JavaScript are traditionally scoped to a function. Knowing this, we can leverage the behavior of closures to protect variables or methods from being accessed! Consider the following example of a simple closure within an IIFE, referenced by myFunctionTest:*/


const myFunctionTest = (
    function() {
        const hi = 'Hi!';
        return function() {
            console.log(hi);
        }
    }
)();

/**Note that the function that is being returned closes over (i.e., captures) the hi variable. This allows myFunction to maintain a private, mutable state that cannot be accessed outside the function! What's more: because the function expressed is called immediately, the IIFE wraps up the code nicely so that we don't pollute the global scope. */
//Alternate syntax for IIFE
(function sayHi() {
    alert('Hi there!');
}());

// alerts 'Hi there!'
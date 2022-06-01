function greet() {
    console.log("Hello!, Javascript is a great language.")
}
/* JS functions are first-class functions (objects) they can be stored in  variable, passed as an argument, returned from another function. Function objects can be called, unlike regular objects.
 */
const myFunction = function(n1, n2) /*anonymous function*/ {
    return n1 + n2;
};
console.log(myFunction(6, 8));

const average = function(n1, n2, n3) {
    return n1 + n2 + n3 / 3;
}
console.log(average.length); // function is an object
console.log(average.name);



//functions can return functions
/* Recall that a function must always return a value. Whether the value is explicitly specified in a return statement (e.g., returning a string, boolean, array, etc.), or the function implicitly returns undefined (e.g., a function that simply logs something to the console), a function will always return just one value.
Since we know that functions are first-class functions, we can treat a function as a value and just as easily return a function from another function! A function that returns another function is known as higher-order function*/

/*function alertThenReturn() { // browser capacity // alerts message 1
    alert('Message 1!');

    return function() {
        alert('Message 2!');
    };
}
/*If alertThenReturn() is invoked in a browser, we'll first see an alert message that says 'Message 1!', followed by the alertThenReturn() function returning an anonymous function. However, we don't actually see an alert that says 'Message 2!', since none of the code from the inner function is executed. How do we go about executing the returned function?
Since alertThenReturn() returns that inner function, we can assign a variable to that return value: */
/*const innerMessage = alertThenReturn(); // alerts message 2
//so we can use the innerMessage variable like any function
console.log(innerMessage());
alertThenReturn()(); // alert message 1 with the 1st pair of (), then the return value of this invocation is a function, which then gets invoked by the second pair of parentheses! */
const returnAsFunction = function() {
    return function() {
        console.log("Hello from inside a function!");
    }
}
const newFunction = returnAsFunction();
console.log(newFunction());
console.log(returnAsFunction()());


const higherOrderFunction = function() {
    return function() {
        return 8;
    }
}
const newFunctionz = higherOrderFunction();
console.log(newFunctionz());
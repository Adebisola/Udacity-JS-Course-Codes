/* dentifier lookup and the scope chain are really powerful tools for a function to access identifiers in the code. In fact, this lets you do something really interesting: create a function now, package it up with some variables, and save it to run later. If you have five buttons on the screen, you could write five different click handler functions, or you could use the same code five times with different saved values.

Let's check out an example of a function retaining access to its scope. Consider the remember() function below:*/

function remember(number) {
    return function() {
        return number;
    }
}

const returnedFunction = remember(5);

console.log(returnedFunction());
// 5

/* When the Javascript engine enters remember(), it creates a new execution scope that points back to the prior execution scope. This new scope includes a reference to the number parameter (an immutable Number with the value 5). When the engine reaches the inner function (a function expression), it attaches a link to the current execution scope.

This process of a function retaining access to its scope is called a closure. In this example, the inner function "closes over" number.
What's really interesting about a function, though, is that it will retain this scope chain -- even if it is invoked in a location other than where it was declared. This is all due to the closure!
we'll investigate how closures allow us to store a snapshot of state at the time the function object is created
Every time a function is defined, closure is created for that function. Strictly speaking, then, every function has closure! This is because functions close over at least one other context along the scope chain: the global scope. However, the capabilities of closures really shine when working with a nested function (i.e., a function defined within another function).

Recall that a nested function has access to variables outside of it. From what we have learned about the scope chain, this includes the variables from the outer, enclosing function itself (i.e., the parent function)! These nested functions close over (i.e., capture) variables that aren't passed in as arguments nor defined locally, otherwise known as free variables.

As we saw with the remember() function earlier, it is important to note that a function maintains a reference to its parent's scope. If the reference to the function is still accessible, the scope persists!*/

const myName = 'Andrew';

function introduceMyself() {
    const you = 'student';

    function introduce() {
        console.log(`Hello, ${you}, I'm ${myName}!`);
    }

    return introduce();
}

introduceMyself();
// 'Hello, student, I'm Andrew!'

/* To recap: myName is a variable defined outside a function, hence it's a global variable in the global scope. In other words, myName is available for all functions to use.

But let's look closely at the other variable: you. you is referenced by introduce(), even though it wasn't declared within introduce()! This is possible because a nested function's scope includes variables declared in the scope where the function is nested (i.e., variables from its parent function's scope, where the function is defined).

As it turns out, the introduce() function and its lexical environment form a closure. This way, introduce() has access to not only the global variable myName, but also the variable you, which was declared in the scope of its parent function, introduceMyself(). */

const number = 3;

function myHigherFunc() {
    const otherNumber = 1;

    function logger() {
        console.log(otherNumber);
    }
    return logger();
}
const result = myHigherFunc();

console.log(result);
// even after parent function, myHigherFunc has returned, logger still maintain acess to its parent function's scope. if a reference to the parent function is still accessible, the scope still persists

function outerFunction() {
    let num1 = 5;

    return function(num2) {
        console.log(num1 + num2);
    };
}
let resultz = outerFunction(); // outerFunction returns function(num2)

resultz(10);
/*After outerFunction() is returned, it may seem that all of its local variables would be allocated back to available memory. As it turns out, however, the nested innerFunction() still has access to the num1 variable!

Let's take a closer look: outerFunction() returns a reference to the inner, nested function. The return value of this invocation is saved in result. When this function is called, it maintains access to its scope; that is, all the variables it was able to access back when it was originally defined. This includes the num1 variable in its parent scope. The nested function closes over these variables, and those variables persist as long as the reference to the function itself exists.

When result(10); is executed, then, the function is still able to access num1's value of 5. As a result, 15 is logged to the console.
 */


function mycounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    }
}
let counter = mycounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter.count); // undefined cos the function encloses over count to create a private state
// console.log(count); // error



function expandArray() {
    let myArray = [1, 1, 1];
    return function() {
        myArray.push(1);
        return myArray;
    }
}
let newExpandArray = expandArray();
console.log(newExpandArray());


/* Garbage Collection

JavaScript manages memory with automatic garbage collection. This means that when data is no longer referable (i.e., there are no remaining references to that data available for executable code), it is "garbage collected" and will be destroyed at some later point in time. This frees up the resources (i.e., computer memory) that the data had once consumed, making those resources available for re-use.

Let's look at garbage collection in the context of closures. We know that the variables of a parent function are accessible to the nested, inner function. If the nested function captures and uses its parent's variables (or variables along the scope chain, such as its parent's parent's variables), those variables will stay in memory as long as the functions that utilize them can still be referenced.

As such, referenceable variables in JavaScript are not garbage collected! Let's quickly look back at the myCounter function from the previous video: 
The existence of the nested function keeps the count variable from being available for garbage collection, therefore count remains available for future access. After all, a given function (and its scope) does not end when the function is returned. Remember that functions in JavaScript retain access to the scope that they were created in!
A closure refers to the combination of a function and the lexical environment in which that function was declared. Every time a function is defined, closure is created for that function. This is especially powerful in situations where a function is defined within another function, allowing the nested function to access variables outside of it. Functions also keep a link to its parent's scope even if the parent has returned. This prevents data in its parents from being garbage collected.*/

(function(n) {
    delete n;
    return n;
})(2); // returns 2 because delete only works on objects

/* Benefits of Immediately-Invoked Function Expressions

We've seen how using an immediately-invoked function expression creates a private scope that protects variables or methods from being accessed. IIFE's ultimately use the returned functions to access private data within the closure. This works out very well: while these returned functions are publicly-accessible, they still maintain privacy for the variables defined within them!

Another great opportunity to use an IFFE is when you want to execute some code without creating extra global variables. However, note that an IIFE is only intended to be invoked once, to create a unique execution context. If you have some code that is expected to be re-used (e.g., a function meant to be executed more than once in the application), declaring the function and then invoking it might be a better option.

All in all, if you simply have a one-time task (e.g., initializing an application), an IIFE is a great way to get something done without polluting your the global environment with extra variables. Cleaning up the global namespace decreases the chance of collisions with duplicate variable names, after all.
Summary

An immediately-invoked function expression (IIFE) is a function that is called immediately after it is defined. Utilizing an IIFE alongside closures allows for a private scope, which maintains privacy for variables defined within them. And since less variables are created, an IIFE will help to minimize pollution of the global environment, hindering the chances of variable name collisions.
*/
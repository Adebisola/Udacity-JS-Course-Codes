// button.js

const button = document.getElementById('button');

/* we'll add an event listener to button, and listen for a 'click' event. Then, we'll pass in an IIFE as the second argument:*/
button.addEventListener('click', (function() {
    let count = 0;

    return function() {
        count += 1;

        if (count === 2) {
            alert('This alert appears every other press!');
            count = 0;
        }
    };
})());

/*Quite a bit is going on in the IIFE, so let's break it down!

First, we declare a local variable, count, which is initially set to 0. We then return a function from that function. The returned function increments count, but alerts the user and resets the count back to 0 if the count reaches 2.

What is important to note is that the returned function closes over the count variable. That is, because a function maintains a reference to its parent's scope, count is available for the returned function to use! As a result, we immediately invoke a function that returns that function. And since the returned function has access to the internal variable, count, a private scope is created -- effectively protecting the data!

Containing count in a closure allows us to retain the data from each click. Now, let's see this all in action */
// while loops.
let x = 1;
while (x <= 10) {
    console.log(x + " Mississippi");
    x++;
}

let start = 0; // when to start
while (start < 10) { // when to stop
    console.log(start);
    start = start + 2; // how to get to the next item
}
let i = 10;
while (i <= 25) {
    console.log("Print out i = " + i);
    i += 2;
}

/* "Fizzbuzz" is a famous interview question used in programming interviews. It goes something like this:

    Loop through the numbers 1 to 100
    If the number is divisible by 3, print "Fizz"
    If the number is divisible by 5, print "Buzz"
    If the number is divisible by both 3 and 5, print "FizzBuzz"
    If the number is not divisible by 3 or 5, print the number

    TIP: A number x is divisible by a number y if the answer to x / y has a remainder of 0. For example, 10 is divisible by 2 because 10 / 2 = 5 with no remainder. You can check if a number is divisible by another number by checking if x % y === 0.
*/

let y = 0;
while (y < 100) {
    //console.log(y);
    y++;
    if (y % 3 === 0) {
        console.log("Fizz");
    } else if (y % 5 === 0) {
        console.log("Buzz");
    } else if ((y % 3 === 0) && (y % 5 === 0)) {
        console.log("FizzBuzz");
    } else {
        console.log(y);
    }
    //y++; y will be initialized at 1.
}

let a = 1;
while (a <= 20) {

    if (a % 3 === 0) {
        console.log("Julia");
    } else if (a % 5 === 0) {
        console.log("James");
    } else if ((a % 3 === 0) && (a % 5 === 0)) {
        console.log("JuliaJames");
    } else {
        console.log(a);
    }
    a++;
}

newFunction();

function newFunction() {
    let b = 99;
    while (b >= 1) {
        // console.log(b);
        if (b > 2) {
            console.log(b + " bottles of juice on the wall! " + b + " bottles of juice! Take one down, pass it around... " + (b - 1) + " bottles of juice on the wall!");
        } else if (b === 2) {
            console.log(b + " bottles of juice on the wall! " + b + " bottles of juice! Take one down, pass it around... " + (b - 1) + " bottle of juice on the wall!");
        } else {
            console.log(b + " bottle of juice on the wall! " + b + " bottle of juice! Take one down, pass it around... " + (b - 1) + " bottle of juice on the wall!");
        }
        b--;
    };
}
newFunction();

/* alternate solution */
let num = 99;

while (num >= 1) {
    // Last iteration. Note occurances of bottle, bottle, bottleS
    if (num === 1) {
        console.log(num + " bottle of juice on the wall! " +
            num + " bottle of juice! Take one down, pass it around... " +
            (num - 1) + " bottles of juice on the wall!");
    }
    // Second-last iteration. Note occurances of bottleS, bottleS, bottle
    else if (num === 2) {
        console.log(num + " bottles of juice on the wall! " +
            num + " bottles of juice! Take one down, pass it around... " +
            (num - 1) + " bottle of juice on the wall!");
    }
    // All other iterations. Note occurances of bottleS, bottleS, bottleS
    else {
        console.log(num + " bottles of juice on the wall! " +
            num + " bottles of juice! Take one down, pass it around... " +
            (num - 1) + " bottles of juice on the wall!");
    }
    num = num - 1;
}


/* NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

    Orbiter transfers from ground to internal power (T-50 seconds)
    Ground launch sequencer is go for auto sequence start (T-31 seconds)
    Activate launch pad sound suppression system (T-16 seconds)
    Activate main engine hydrogen burnoff system (T-10 seconds)
    Main engine start (T-6 seconds)
    Solid rocket booster ignition and liftoff! (T-0 seconds)

    NOTE: "T-50 seconds" read as "T-minus 50 seconds".

Directions:

Write a while loop that counts down from 60 seconds and:

    If there's a task being completed, it prints out the task
    If there is no task being completed, it prints out the time as T-x seconds
*/
let startSec = 60;
while (startSec >= 1) {
    startSec--;
    if (startSec === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (startSec === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (startSec === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (startSec === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (startSec === 6) {
        console.log("Main engine start");

    } else if (startSec === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    } else {
        console.log("T-" + startSec + " seconds");
    }
}

for (let j = 0; j < 3; j = j + 1) {
    for (let k = 0; k < 2; k = k + 1) {
        console.log(j + ", " + k);
    }
}
for (let q = 0; q < 5; q = q + 1) {
    for (let p = 0; p < 3; p = p + 1) {
        console.log(q + "," + p);
    }
}
/* For each value of x in the outer loop, the inner for loop executes completely. The outer loop starts with x = 0, and then the inner loop completes its cycle with all values of y:

x = 0 and y = 0, 1, 2 // corresponds to (0, 0), (0, 1), and (0, 2)
*/
/* he increment operator ++ adds one a to variable, returns a value and assigns the incremented value to the variable.

x++ is the postfix operator, which means that it returns the value before incrementing it*/

let xd = 2;
++xd // returns 3 straight up.
console.log(xd);
let cd = 2;
cd++; // returns 2 then assigns 3 as the value of x
console.log(cd);

/* Rewrite as a for loop let x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}*/
for (let startX = 9; startX >= 1; startX--) {
    console.log("hello " + startX);
}
let product = 1;
for (var m = 1; m <= 12; m++) {
    product *= m;

    console.log(product);
}
let rows = 0;
let seats = 0;
for (rows = 0; rows < 26; rows++) {
    for (seats = 0; seats < 100; seats++) {
        console.log(rows + "-" + seats);
    }
}
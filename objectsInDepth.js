/* While elements in arrays are referenced by a numeric index, keys in an object must be named explicitly, like color or year.Objects are unordered collections */
const car = {
    color: 'red',
    year: 1992,
    isPreOwned: true
};
// if you change the order of the properties, it does not affect a thing
/*const course = { courseId: 711 }; // ← no quotes around the courseId key
const course = { 'courseId': 711 }; // ← single quotes around the courseId key
const course = { "courseId": 711 }; // ← double quotes around the courseId key */

/* Certain situations require quatation marks to be included, especially if the property name:

    Is a reserved word (e.g., for, if, let, true, etc.).
    Contains spaces or special characters that cannot appear in a variable name (i.e., punctuation other than $, and _ -- most accented characters).
*/
const menu = {
    name: "Salted Caramel Ice Cream",
    price: 2.95,
    ingredients: ["butter", "ice cream", "salt", "sugar"]
};
console.log(menu);

const bicycle = {
    color: 'blue',
    type: 'mountain bike',
    wheels: {
        diameter: 18,
        width: 8
    }
};
bicycle.color;
console.log(bicycle["color"]);
bicycle.wheels.width;
console.log(bicycle["wheels"]["width"]);

//Dot Notation Limitations
// if the key is a number, it will throw an error, use the bracket notation
// when variables are assigned to property names
const myVariable = 'color';
bicycle[myVariable] // blue
bicycle.myVariable // undefined
    /* It may seem odd, but recall that all property keys in a JavaScript object are strings, even if the quotation marks are omitted. With dot notation, the JavaScript interpreter looks for a key within bicycle whose value is 'myVariable'. Since there isn't such a key defined in the object, the expression returns undefined.*/

const populations = {
    china: 1379000000,
    brazil: 207700000,
    india: 1324000000,
    unitedStates: 323100000
}
console.log(populations.brazil);

// write an expression that outputs how to say hello in portuguese
const greetings = {
    hello: {
        english: 'hi',
        french: 'bonjour',
        portuguese: 'oi'
    },
    goodbye: {
        english: 'bye',
        french: 'au revoir',
        portuguese: 'tchau'
    }
};
console.log(greetings["hello"]["portuguese"]);

//modifying objects


const cat = {
    age: 2,
    name: 'Bailey',
    meow: function() {
        console.log('Meow!');
    },
    greet: function(name) {
        console.log(`Hello ${name}`);
    }
};
cat.age += 2;
cat.name = "Bambi";
console.log(cat);
console.log(cat.greet(cat.name));

//adding properties
const printer = {};

printer.on = true;
printer.mode = 'black and white';
printer["remainingSheets"] = 170;

printer.print = function() {
    console.log('The printer is printing!');
};
printer.model = "HP";

console.log(printer.print());

// removing properties
console.log(delete printer.model); // true
console.log(printer);


let house = {
    color: 'green',
    numRooms: 4,
    numWindows: 8,
    forSale: false
};
delete house.numWindows;
house.hasGarage = true;

//passing arguments
/* Passing a Primitive

In JavaScript, a primitive (e.g., a string, number, boolean, etc.) is immutable. In other words, any changes made to an argument inside a function effectively creates a copy local to that function, and does not affect the primitive outside of that function. Check out the following example: Example*/
function changeToEight(n) {
    n = 8; // whatever n was, it is now 8... but only in this function!
}

let n = 7;

console.log(changeToEight(n));

console.log(n);
// 7
/* changeToEight() takes in a single argument, n, and changes it to 8. However, this change only exists inside the function itself. We then pass the global variable n (which is assigned the value 7) into the function. After invoking it, n is still equal to 7.*/

//passing an object
/* objects in JavaScript are mutable. If you pass an object into a function, Javascript passes a reference to that object. Let's see what happens if we pass an object into a function and then modify a property:*/
let originalObject = {
    favoriteColor: 'red'
};

function setToBlue(object) {
    object.favoriteColor = 'blue';
}

setToBlue(originalObject);

originalObject.favoriteColor;
// 'blue'
/* In the above example, originalObject contains a single property, favoriteColor, which has a value of 'red'. We pass originalObject into the setToBlue() function and invoke it. After accessing originalObject's favoriteColor property, we see that the value is now 'blue'!

How did this happen? Well, since objects in JavaScript are passed by reference, if we make changes to that reference, we're actually directly modifying the original object itself!


What's more: the same rule applies when re-assigning an object to a new variable, and then changing that copy. Again, since objects are passed by reference, the original object is changed as well. Let's take a look at this more closely with another example.*/

const iceCreamOriginal = {
    Andrew: 3,
    Richard: 15
};
const iceCreamCopy = iceCreamOriginal;

iceCreamCopy.Richard;
// 15
iceCreamCopy.Richard = 99; // making a change to the Richard property affects both objects cos objects are mutable

iceCreamCopy.Richard;
// 99

iceCreamOriginal.Richard;
// 99

//Comparing an Object with Another Object
const parrot = {
    group: 'bird',
    feathers: true,
    chirp: function() {
        console.log('Chirp chirp!');
    }
};

const pigeon = {
    group: 'bird',
    feathers: true,
    chirp: function() {
        console.log('Chirp chirp!');
    }
};
console.log(pigeon === parrot); // false

/*What's going on here? As it turns out, the expression will only return true when comparing two references to exactly the same object. Using what we now know about passing objects, let's confirm this. To start off, let's create a new variable, myBird, and assign it to one of the objects above: */

const myBird = parrot;

/*As we've just learned, myBird not only refers to the same object as parrot -- they are the same object! If we make any updates to myBird's properties, parrot's properties will be updated with exactly the same changes as well. Now, the comparison will return true: */

myBird === parrot; // true
//So since pigeon is not the same object as myBird or parrot, any comparisons between myBird and pigeon will return false:

let string = 'orange';

function changeToApple(string) {
    string = 'apple';
}

changeToApple(string);

console.log(string); // orange


const oven = {
    type: 'clay',
    temperature: 400
};
const newOven = oven;

newOven.temperature += 50;

//object methods have access to the properties of their parent object



// Functions vs Methods
// some properties of objects behave more like attributes i.e name and color, they don't do anything, methods add functionalities
const developer = {
    name: 'Andrew'
};
developer.sayHello = function() {
    console.log("Hi there!")
};
// calling the functions. functions in objects are called methods
console.log(developer.sayHello()); // developer["sayHello"()];


//passing arguements to methods
const favDeveloper = {
    name: 'Andrew',
    sayHello: function() {
        console.log('Hi there!');
    },
    favoriteLanguage: function(language) {
        console.log(`My favorite programming language is ${language}`);
    }
};


console.log(favDeveloper.favoriteLanguage('JavaScript')); // My favorite programming language is JavaScript

const myArray = [function alerter() { alert('Hello!'); }];
//console.log(myArray[0]());

const bell = {
    color: 'gold',
    ring: function() {
        console.log('Ring ring ring!');
    }
};
console.log(bell.ring());



//calling methods by property names
// we can also use named functions in objects apart from anonymous functions
const greeter = {
    greet: function sayHello() {
        console.log('Hello!');
    }
};
greeter.greet(); // it is invoked the same way as the anonymous method




/* A Method Can Access the Object it was Called On

But just how can an object reference its own properties, much less manipulate some of those properties itself? This is all possible with the this keyword!

Using this, methods can directly access the object that it is called on. Consider the following object, triangle:*/
const triangle = {
    type: 'scalene',
    identify: function() {
        console.log(`This is a ${this.type} triangle.`);
    }
};
console.log(triangle.identify());
// this refers to the object at hand,"this object"
//Note that this is a reserved word in JavaScript, and cannot be used as an identifier (e.g. variable names, function names, etc.)


const dog = {
    name: "Ben",
    age: 6,
    WhatIsThis: function() {
        console.log(this);
    },
    woof: function() {
        console.log(this.name + " says woof!");
    },
    ageOneYear: function() {
        this.age += 1;
        console.log("Current age is " + this.age);
    }
}

const tree = {
    type: 'redwood',
    leaves: 'green',
    height: 80,
    age: 15,
    growOneFoot: function() {
        this.height += 1;
    }
};


const chameleon = {
    color: "green",
    changeColor: function() {
        if (this.color === "pink") {
            console.log(this.color = "green");
        } else {
            console.log(this.color = "pink");
        }
    }

};

console.log(chameleon.changeColor());
//Depending on how a function is called, this can be set to different values!



//beware of globals
const chameleonz = {
    eyes: 2,
    lookAround: function() {
        console.log(`I see you with my ${this.eyes} eyes!`);
    }
};

chameleonz.lookAround();
// 'I see you with my 2 eyes!'


function whoThis() {
    this.trickyish = true
}



/* The window Object

If you haven't worked with the window object yet, this object is provided by the browser environment and is globally accessible to your JavaScript code using the identifier, window. This object is not part of the JavaScript specification (i.e., ECMAScript); instead, it is developed by the W3C.

This window object has access to a ton of information about the page itself, including:

    The page's URL (window.location;)
    The vertical scroll position of the page (window.scrollY')
    Scrolling to a new location (window.scroll(0, window.scrollY + 200); to scroll 200 pixels down from the current location)
    Opening a new web page (window.open("https://www.udacity.com/");*/

const myCar = {
    numberOfDoors: 4,
    drive: function() {
        console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
    }
};

const letsRoll = car.drive;

//letsRoll(); // refers to the window object


/* */

console.log(whoThis());

// this and function invocation

/*
comparing chameleonz.lookAround(); and this.trickyish = true
both of them have the format this.<some-identifier>. For our purposes of discovering the value of this, it does not matter that in the chameleon code, we're using this to retrieve a property, while in the whoThis() code, we're using this to set a property.

So, in both of these cases, the use of this is virtually identical.*/

/* The lookAround() code is a method because it belongs to an object. Since it's a method, it's invoked as a property on the chameleon object:

chameleon.lookAround();

Now compare that with the whoThis() code. whoThis() is not a method; it's a plain, old, regular function. And look at how the whoThis() function is invoked:

whoThis();

Just like every normal function is invoked; it's just the name of the function and the parentheses (there's no object and no dot in front of it)*/
/*this and Invocation

How the function is invoked determines the value of this inside the function. ← That sentence is really important, so read that two more times...we'll wait!

Because .lookAround() is invoked as a method, the value of this inside of .lookAround() is whatever is left of the dot at invocation. Since the invocation looks like:

chameleon.lookAround();

The chameleon object is left of the dot. Therefore, inside the .lookAround() method, this will refer to the chameleon object!

Now let's compare that with the whoThis() function. Since it is called as a regular function (i.e., not called as an method on an object), its invocation looks like:

whoThis();

Well, there is no dot. And there is no object left of the dot. So what is the value of this inside the whoThis() function? This is an interesting part of the JavaScript language.

When a regular function is invoked, the value of this is the global window object. */



/* Global Variables are Properties on window

Since the window object is at the highest (i.e., global) level, an interesting thing happens with global variable declarations. Every variable declaration that is made at the global level (outside of a function) automatically becomes a property on the window object!

Here we can see that the currentlyEating variable is set to 'ice cream'. Then, we immediately see that the window now has a currentlyEating property! Checking this property against the currentlyEating variable shows us that they are identical*/
var currentlyEating = 'ice cream';

//console.log(window.currentlyEating === currentlyEating); // true

/* Only declaring variables with the var keyword will add them to the window object. If you declare a variable outside of a function with either let or const, it will not be added as a property to the window object.

let currentlyEating = 'ice cream';

window.currentlyEating === currentlyEating  // false!
*/

/*Global Functions are Methods on window

Similarly to how global variables are accessible as properties on the window object, any global function declarations are accessible on the window object as methods:

function learnSomethingNew() {
  window.open('https://www.udacity.com/');
}

window.learnSomethingNew === learnSomethingNew
// true

Declaring the learnSomethingNew() function as a global function declaration (i.e., it's globally accessible and not written inside another function) makes it accessible to your code as either learnSomethingNew() or window.learnSomethingNew() */

var iceCreamEaten = 1; // global on window

function consume(numberOfGallons) /*global on window*/ {
    var result = iceCreamEaten + numberOfGallons;

    function updateTotals(newTotal) {
        iceCreamEaten = result;
    }

    updateTotals();
}

consume(3);


/*Tight Coupling

Tight coupling is a phrase that developers use to indicate code that is too dependent on the details of each other. The word "coupling" means the "pairing of two items together." In tight coupling, pieces of code are joined together in a way where changing one unintentionally alters the functioning of some other code:

var instructor = 'Richard'; // if var instructor is changed to var teacher, it will break the richardSaysHi function

function richardSaysHi() {
  console.log(`${instructor} says 'hi!'`);
}

In the code above, note that the instructor variable is declared globally. The richardSaysHi() function does not have a local variable that it uses to store the instructor's name. Instead, it reaches out to the global variable and uses that. If we refactored this code by changing the variable from instructor to teacher, this would break the richardSaysHi() function (or we'd have to update it there, too!). This is a (simple) example of tightly-coupled code. */

/* Name Collisions

A name collision occurs when two (or more) functions depend on a variable with the same name. A major problem with this is that both functions will try to update the variable and or set the variable, but these changes are overridden by each other!

Let's look at an example of name collision with this DOM manipulation code:

let counter = 1;

function addDivToHeader () {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'div number ' + counter;

  counter = counter + 1;

  const headerSection = document.querySelector('header');
  headerSection.appendChild(newDiv)
}

function addDivToFooter() {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'div number ' + counter;

  counter = counter + 1;

  const headerSection = document.querySelector('footer');
  headerSection.appendChild(newDiv)
}

In this code, we have an addDivToHeader() function and a addDivToFooter() function. Both of these functions create a <div> element and increment a counter variable.

This code looks fine, but if you try running this code and adding a few <div>s to the <header> and <footer> elements, you'll find that the numbering will get off! Both addDivToHeader() and addDivToFooter() expect a global counter variable to be accessible to them -- not change out from under them!

Since both functions increment the counter variable, if the code alternates between calling addDivToHeader() and addDivToFooter(), then their respective <div>s will not have numerically ascending numbers. For example, if we had the following calls:

addDivToHeader();
addDivToHeader();

addDivToFooter();

addDivToHeader();

The developer probably wanted the <header> to have three <div> elements with the numbers 1, 2, and 3 and the <footer> element to have a single <div> with the number 1. However, what this code will produce is a <header> element with three <div> but with the numbers 1, 2, and 4 (not 3) and a <footer> element with the number 3...these are very different results. But it's happening because both functions depend on the counter variable and both update it.*/



//Object Methods
const myNewFancyObject = new Object();
// object methods

//Object.keys()
//Object.values()
console.log(Object.keys(bicycle));
console.log(Object.values(bicycle));
let result = [];
for (let name in bicycle) {

    result.push(name);
}
console.log(result);
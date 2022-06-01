//classes are categories of objects
const puppy = {
        age: 2,
        name: "Dicken",
        breed: "cheagle",
        shake: function() {
            console.log(this.name + " shakes hand!");
        }
    }
    /*objects in JavaScript can represent real-life things. That is, objects can have properties to represent attributes or characteristics, as well as methods to represent actions that can be performed. Using the analogy of spoken language, you can think of objects as nouns, such as a "dog" or a "car." Values of properties are adjectives, such as "blue." Methods, then, are the verbs, such as "bark" or "drive." */

//To instantiate (i.e., create) a new object, we use the new operator to invoke the function:
new SoftwareDeveloper() // naming format distinguishes it from a regular function

function SoftwareDeveloper(name) { // constructor function
    this.favoriteLanguage = 'JavaScript';
    this.name = name;
}
//Constructor functions in JavaScript should not have an explicit return value (i.e., there should not be return statement).
let developer = new SoftwareDeveloper();
console.log(developer);

let engineer = new SoftwareDeveloper();
let programmer = new SoftwareDeveloper();
console.log(engineer);
console.log(programmer);
let instructor = new SoftwareDeveloper("Julia");
console.log(instructor);
let teacher = new SoftwareDeveloper('Richard');

console.log(teacher);

function Hero(name, role) {
    this.name = name;
    this.role = role;
    this.introduce = function() {
        console.log(`My name is ${this.name} and I am ${this.role}`)
    }
}
const Taylor = new Hero("Taylor", "Mother");
const Jackie = new Hero("Riley", "Coach");
console.log(Taylor.name);
console.log(Jackie.role);


/*Declare a
`Sandwich` constructor function that takes three parameters:

1. `bread` (string) - the type of bread for the sandwich (e.g. "Wheat")
2. `meat` (array) - the meats to put on the sandwich
   (e.g. `[]` for a vegetarian sandwich!)
3. `vegetables` (array) - the vegetables to include in the sandwich

*/
new Sandwich();

function Sandwich(bread, meat, vegetables) {
    this.bread = bread;
    this.meat = meat;
    this.vegetables = vegetables;

}

function Developer(name) {
    this.name = name;
}
const dev = new Developer("Veronika");
console.log(typeof dev);
console.log(dev instanceof Developer);

/**Many times, however, it's a bit more complex: the instanceof operator actually tests whether or not that constructor appears in the prototype chain of an object. This means that we can't always check exactly which constructor created that object, but it does give us insight as to what other properties and methods an object may have access to. */

function Finch(name) {
    this.kingdom = 'Animalia';
    this.name = name;
}

function Sparrow(name) {
    this.kingdom = 'Animalia';
    this.name = name;
}

const atticus = new Finch('Atticus');
const jack = new Sparrow('Jack');


function Cat(name) {
    this.name = name;
    this.sayName = function() {
        console.log(`Meow! My name is ${this.name}`);
    };
}

const bailey = new Cat('Bailey');

/**As it turns out, when invoking a constructor function with the new operator, this gets set to the newly-created object! Let's check out what the new bailey object looks like: */

/* {
    name: 'Bailey',
    sayName: function() {
        console.log(`Meow! My name is ${this.name}`);
    }
} */

/**In the snippet above, notice that this is outside a constructor function (i.e., in a method). As we saw in Lesson 1, when you say this in a method, what you're really saying is "this object" or "the object at hand." As a result, the sayName() method can use this to access the name property of that object! This makes the following method call possible */

bailey.sayName();

// 'Meow! My name is Bailey'

/*When is this Assigned?

A common misconception is that this refers to the object where it is defined. This is not the case!

The value of this is actually not assigned to anything until an object calls the method where this is used. In other words, the value assigned to this is based on the object that invokes the method where this is defined. Let's look at an example: */

const dog = {
    bark: function() {
        console.log('Woof!');
    },
    barkTwice: function() {
        this.bark();
        this.bark();
    }
};
dog.bark();
// Woof!

dog.barkTwice();
// Woof!
// Woof!

/**We know that when we call dog.bark(); (or dog.barkTwice();) a variable this gets set. Since this can access the object it was called on, barkTwice can use this to access the dog object, which contains the bark method.

But what if we just wrote bark(); instead of this.bark(); in barkTwice? The function would have first looked for a local variable named bark in the scope of barkTwice. If bark isn't found, it would have looked further up the scope chain.

To tie things all together: this.bark(); tells barkTwice to look at dog -- the object that the method was called on -- to find bark. */


function City(name, population) {
    this.name = name;
    this.population = population;

    this.identify = function() {
        console.log(`${this.name}'s population is ${this.population}.`);
    };
}
const sanFrancisco = new City('San Francisco', 870000); // the value of this is this newly created sanFrancisco object



/*What Does this Get Set To?

At this point, we've seen this in many different contexts, such as within a method, or referenced by a constructor function. Let's now organize our thoughts and bring it all together!

There are four ways to call functions, and each way sets this differently.

First, calling a constructor function with the new keyword sets this to a newly-created object. Recall that creating an instance of Cat earlier had set this to the new bailey object.

On the other hand, calling a function that belongs to an object (i.e., a method) sets this to the object itself. Recall that earlier, the dog object's barkTwice() method was able to access properties of dog itself.

Third, calling a function on its own (i.e., simply invoking a regular function) will set this to window, which is the global object if the host environment is the browser */

function funFunction() {
    return this;
}

funFunction(); // (returns the global object, `window`)


const building = {
    floors: 5,
    addFloor: function() {
        this.floors += 1;
    }
};

building.addFloor(); // this is set to building





//Setting your this
/**call() is a method directly invoked onto a function. We first pass into it a single value to set as the value of this; then we pass in any of the receiving function's arguments one-by-one, separated by commas.

Consider the following function, multiply(), which simply returns the product of its two arguments: */
function multiply(n1, n2) {
    return n1 * n2;
}
console.log(multiply(6, 5));

//multiply.call(window, 6, 5);// 30 console

/**We first invoke the call() method directly onto the multiply() function. Note that the multiply preceding .call(window, 3, 4) is not followed by any parentheses. call() will be handling the invocation and the multiply() function's arguments itself!

After writing that part, it's time to pass in the arguments! For the first argument of the call() method, we pass in the value to be set as this, which is window. We then finish up by passing in the multiply() function's arguments individually, separated by commas.

Once multiply.call(window, 3, 4); executes, the function will be invoked with the given value of this, and the result that we see is 12. Outside of strict mode, both ways of invoking multiply() above are equivalent.
Along with invoking regular functions, how do we go upon invoking functions attached to objects (i.e., methods)? This is where the power of call() really shines. Using call() to invoke a method allows us to "borrow" a method from one object -- then use it for another object! Check out the following object, mockingbird: */

const mockingbird = {
    title: 'To Kill a Mockingbird',
    describe: function() {
        console.log(`${this.title} is a classic novel`);
    }
};
console.log(mockingbird.describe()); // To kill a Mockingbird is a classic novel

//Using call(), however, the following pride object can utilize mockingbird's describe() method:

const pride = {
    title: 'Pride and Prejudice'
};

mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'

/**Let's break down what happened when mockingbird.describe.call(pride); is executed!

First, the call() method is invoked onto mockingbird.describe (which points to a function). Then, the value of this is passed into the call() method: pride.

Since mockingbird's describe() method references this.title, we need to access the title property of the object that this refers to. But since we've set our own value of this, the value of this.title will be accessed from the pride object! As a result, mockingbird.describe.call(pride); is executed, and we see 'Pride and Prejudice is a classic novel' in the console.

call() is very effective if you're looking to invoke a function in the scope of the first argument passed into it. Likewise, we can leverage the apply() method to do the same, albeit with differences in how arguments are passed into it. Let's take a closer look! */



/**apply()

Just like call(), the apply() method is called on a function to not only invoke that function, but also to associate with it a specific value of this. However, rather than passing arguments one-by-one, separated by commas -- apply() takes the function's arguments in an array. Recall the multiply() function from earlier: */

function division(a1, a2) {
    return a1 / a2;
}
console.log(division(15, 5));
//division.apply(window, [20, 4]);
//mockingbird.describe.apply(pride);

/**Both call() and apply() invoke a function in the scope of the first argument passed in them (i.e., the object to be the value of this). So when would you choose call() over apply(), or vice versa?

call() may be limited if you don't know ahead of time the number of arguments that the function needs. In this case, apply() would be a better option, since it simply takes an array of arguments, then unpacks them to pass along to the function. Keep in mind that the unpacking comes at a minor performance cost, but it shouldn't be much of an issue. */


const cat = {
    name: "barkley",

}

function sayHi(message) {
    console.log(`${message},${this.name}`);
}


console.log(sayHi.call(cat, "Nice to see you"));

const dave = {
    name: 'Dave'
};

function sayHello(message) {
    console.log(`${message}, ${this.name}. You're looking well today.`); // invoking this function, object is set to the window object
}

const Andrew = {
    name: 'Andrew',
    introduce: function() {
        console.log(`Hi, my name is ${this.name}!`);
    }
};

const Richard = {
    name: 'Richard',
    introduce: function() {
        console.log(`Hello there! I'm ${this.name}.`);
    }
};
Richard.introduce.call(Andrew); //  "Hello there, I am Andrew"




const andrew = {
    name: 'Andrew'
};

function introduce(language) {
    console.log(`I'm ${this.name} and my favorite programming language is ${language}.`);
}
console.log(introduce.apply(andrew, ["JavaScript"]));


/**Callbacks and this

The value of this has some potential scope issues when callback functions are involved, and things can get a bit tricky. Let's check it out below */

function invokeTwice(cb) {
    cb();
    cb();
}
const doggie = {
    age: 5,
    growOneYear: function() {
        this.age += 1;
    }

}
doggie.growOneYear();
console.log(doggie.age);

invokeTwice(doggie.growOneYear); // does not work bcos invokeTwice calls doggie.growOneYear as a function, so this is set to the global object rather than the doggie object

/*hence, we need to save this so that,invokeTwice(doggie.growOneYear); works *Saving this with an Anonymous Closure.As it turns out, invokeTwice() does indeed invoke growOneYear -- but it is invoked as a function rather than a method! Let's revisit the this grid from earlier:

Let's recap the issue at hand. Here's the invoiceTwice() function from the previous video, as well as the dog object: */
/**One way to resolve this issue is to use an anonymous closure to close over the dog object:

invokeTwice(function () { 
  dog.growOneYear(); 
});

dog.age;
// 7
Using this approach, invoking invokeTwice() still sets the value of this to window. However, this has no effect on the closure; within the anonymous function, the growOneYear() method will still be directly called onto the dog object! As a result, the value of dog's age property increases from 5 to 7.

Saving this with bind()

Similar to call() and apply(), the bind() method allows us to directly define a value for this. bind() is a method that is also called _on_ a function, but unlike call() or apply(), which both invoke the function right away -- bind() returns a new function that, when called, has this set to the value we give it.

Let's see it in action!
*/
const myGrow = doggie.growOneYear.bind(doggie);
invokeTwice(myGrow);
console.log(doggie.age);
/**Under the hood, bind() returns a new function that can be called like a normal function (e.g., myFunction()), but inside of it, a method will be invoked method-style (e.g., myObject.myMethod()). This has helps us when we see potential scope issues with this when passing callback functions. */



const driver = {
    name: 'Danica',
    displayName: function() {
        console.log(`Name: ${this.name}`);
    }
};

const car = {
    name: 'Fusion'
};
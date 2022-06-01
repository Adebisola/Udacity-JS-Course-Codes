/**Adding Methods to the Prototype

Recall that objects contain data (i.e., properties), as well as the means to manipulate that data (i.e., methods). Earlier in this Lesson, we simply added methods directly into the constructor function itself:

This way, a sayName method gets added to all Cat objects by saving a function to the sayName attribute of newly-created Cat objects.

This works just fine, but what if we want to instantiate more and more Cat objects with this constructor? You'll create a new function every single time for that Cat object's sayName! What's more: if you ever want to make changes to the method, you'll have to update all objects individually. In this situation, it makes sense to have all objects created by the same Cat constructor function just share a single sayName method.

To save memory and keep things DRY, we can add methods to the constructor function's prototype property. The prototype is just an object, and all objects created by a constructor function keep a reference to the prototype. Those objects can even use the prototype's properties as their own!

JavaScript leverages this secret link -- between an object and its prototype -- to implement inheritance. */

function Cat(name) {
    this.lives = 9;
    this.name = name;

    this.sayName = function() {
        console.log(`Meow! My name is ${this.name}`);
    };
}

/**Recall that each function has a prototype property, which is really just an object. When this function is invoked as a constructor using the new operator, it creates and returns a new object. This object is secretly linked to its constructor's prototype, and this secret link allows the object to access the prototype's properties and methods as if it were its own!

Since we know that the prototype property just points to a regular object, that object itself also has a secret link to its prototype. And that prototype object also has reference to its own prototype -- and so on. This is how the prototype chain is formed */
/**Whether you're accessing a property (e.g., bailey.lives;) or invoking a method (e.g., bailey.meow();), the JavaScript interpreter looks for them along the prototype chain in a very particular order:

    First, the JavaScript engine will look at the object's own properties. This means that any properties and methods defined directly in the object itself will take precedence over any properties and methods elsewhere if their names are the same (similar to variable shadowing in the scope chain).
    If it doesn't find the property in question, it will then search the object's constructor's prototype for a match.
    If the property doesn't exist in the prototype, the JavaScript engine will continue looking up the chain.
    At the very end of the chain is the Object() object, or the top-level parent. If the property still cannot be found, the property is undefined.

Previously, we simply defined methods directly in a constructor function itself. Let's see how things look if we defined methods in the constructor's prototype instead! */
function Dog(age, weight, name) {
    this.age = age;
    this.weight = weight;
    this.name = name;

}

Dog.prototype.bark = function() {
    console.log(`${this.name} says woof!`);
}


dog = new Dog(2, 60, "Java");
console.log(dog.bark());

var attempts = 30;
while (attempts > 10) {
    console.log("print");
    attempts--;
    break;
}


function Train() {
    this.sound = "cho";
}
let Magnum = new Train();
Train.prototype = {
    speed: 350
}

function incre(train) {
    return train.speed + 50;
}
console.log(incre(Magnum));

function Item(name, amount, price) {
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.buy = function() {
        this.amount = amount - 1;
    }
}
let biscuit = new Item("cabin", 100, 1.99);
for (let i = 0; i < 10; i++) {
    biscuit.buy();
}
console.log(biscuit.amount);

class tree {
    constructor(leaves = 5, size) {
        this.leaves = leaves;
        this.size = size;
    }
}
class maple extends tree {
    constructor(leafColor, leaves, size) {
        super(leaves, size);
        this.leafColor = leafColor;
    }

}
let sage = new maple("green", undefined, 10);
console.log(sage);

console.log("5" == 5);


var donut = [
    { type: "mad", cost: 1 },
    { type: "ma", cost: 1 },
    { type: "madi", cost: 1 },
    { type: "madL", cost: 1 }
]
donut.forEach(function(elem) {
    return elem.type;
    //console.log(elem.type);
});
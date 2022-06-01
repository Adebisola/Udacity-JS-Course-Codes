typeof "hello" // returns "string"  
typeof true // returns "boolean"  
typeof [1, 2, 3] // returns "object" (Arrays are a type of object)  
typeof

function hello() {}

const umbrella = {
        color: "pink",
        isOpen: false,
        open: function() {
            if (umbrella.isOpen === true) {
                return "The umbrella is already opened!";
            } else {
                umbrella.isOpen = true;
                return "Julia opens the umbrella!";
            }
        },
        close: function() {
            if (umbrella.isOpen === false) {
                return "Julia opens the umbrella!"
            } else {
                umbrella.isOpen = false;
                return "Julia closes the umbrella!"
            }

        }
    }
    /*console.log(umbrella.isOpen); // returns false
    console.log(umbrella.open()); // returns 'Julia opens the umbrella!'
    console.log(umbrella.isOpen); // returns true because the value of isOpen has now been changed for "Julia opens the umbrella" */
console.log(umbrella.open());
console.log(umbrella.close());


/*  close: function() {
    if (umbrella.isOpen === true) {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    } else {
      return "The umbrella is already closed!";
    }
  }*/


//chunky code
/* const sisterName = "Sarah";
const sisterAge = 23;
const sisterParents = ["Alice", "Andy"];
const sisterSiblings = ["Julia"];
const sisterFavoriteColor = "purple";
const sisterPets = true; */
const sister = {
    name: "Sarah",
    age: 23,
    parents: ["Alice", "Andy"],
    siblings: "Julia",
    favoriteColor: "purple",
    pets: true,
    paintPicture: () => {
        return "Sarah is a painter!"
    }
};
console.log(sister.paintPicture());




/* Problem 1: Using a number as the first character in a property name

const person = {
  "name": "John",
  "age": 55,
  "1stChild": "James",  // USes a number as the first character in a property name
  "2ndChild": "Jarrod",
  "3rdChild": "Alexis"
};

person["1stChild"]; // returns "James"
person.1stChild; // returns Uncaught SyntaxError: Invalid or unexpected token

It would be even better to store the children in an array: */

const person = {
    name: "John",
    age: 55,
    children: ["James", "Jarrod", "Alexis"]
};
/* Don't use a number as the first character in a property name
Don't use quotes around key names unless absolutely necessary
Use camelCase when you need a multi-word variable name */



/* Problem 2: Using spaces or hyphens in a property name

const garage = {
  "fire truck": {
    "color": "red",
    "wheels": 4,
    "operational": true
  },
   "race-car": {
    "color": "blue",
    "wheels": 4,
    "operational": false
  }, 
};

garage.fire truck; // returns Uncaught SyntaxError: Unexpected identifier
garage.race-car; // returns Uncaught ReferenceError: car is not defined

You can avoid these issues by using camelCase when you want a multi-word variable name: */

const garage = {
    "fireTruck": {
        "color": "red",
        "wheels": 4,
        "operational": true
    },
    "raceCar": {
        "color": "blue",
        "wheels": 4,
        "operational": false
    },
};

const breakfast = {
    name: "The Lumberjack",
    price: "$9.95",
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};
console.log(breakfast);


var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function() {
        return "Welcome!\n" + "Your balance is currently " + "$" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%";
    }
};
console.log(savingsAccount.printAccountSummary());



const facebookProfile = {
    name: "Funmi",
    friends: 250,
    messages: ["Hello,how are you?", "What's up?", "Let's plan lunch for monday", "I love football"],
    postMessage: function(message) {
        facebookProfile.messages.push(message);
        return this.messages;
    },
    deleteMessage: function(index) {
        facebookProfile.messages.splice(index, 1);
        return this.messages;
    },
    addFriend: function(num) {
        this.friends = facebookProfile.friends + num;
        return this.friends;
    },
    removeFriend: function(num) {
        if (facebookProfile.friends > 0) {
            this.friends = facebookProfile.friends - num;
        }

        return this.friends;

    }

}
console.log("name: ", facebookProfile.name);
console.log("messages: ", facebookProfile.messages);
facebookProfile.postMessage("Hey");
console.log("messages: ", facebookProfile.messages);
facebookProfile.deleteMessage(2);
console.log("messages: ", facebookProfile.messages);
console.log("friends: ", facebookProfile.friends);
facebookProfile.addFriend(1);
console.log("friends: ", facebookProfile.friends);
facebookProfile.removeFriend(1);
console.log("friends: ", facebookProfile.friends);


const donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];
donuts.forEach(function(donut) {
    //console.log(donut);
    console.log(donut.type + " donuts costs " + "$" + donut.cost + " each.");
});
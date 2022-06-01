const costOfHammer = 20.00;
const moneyIHave = 50.00;
if (moneyIHave >= costOfHammer) {
    console.log("Buy the hammer");
} else {
    console.log("Don't buy the hammer");
}
/* The code in the curly braces after the if statement will run if the statement evaluates to true and the code in the curly braces after the else statement will run if it evaluates to false.
The value inside the if statement is always converted to true or false. Depending on the value, the code inside the if statement is run or the code inside the else statement is run, but not both*/

let a = 1;
let b = 2;
if (a > b) {
    console.log("a is greater than b");
} // a = a + 2; adding this will throw a syntax error of unexpected token else.
else {
    console.log("a is less than or equal to b");
}


const weather = "sunny";
if (weather === "snowy") {
    console.log("Wear extra jacket.");
} else if (weather === "rain") {
    console.log("Wear rain coat.");
} else {
    console.log("Wear what you have on.");
};
// the esle statement is a default condition in case all the if statements return false.
const money = 100.30;
const priceOfGood = 100.30;
if (money > priceOfGood) {
    console.log("You have extra, here's your change.");
} else if (money === priceOfGood) {
    console.log("You have the exact money, have a nice day.");
} else {
    console.log("Please, you have to balance me up.");
};

const runner = "Tooke";
const position = 1;
let medal;

if (position === 1) {
    medal = "Gold";
} else if (position === 2) {
    medal = "Silver";
} else if (position === 3) {
    medal = "Bronze";
} else {
    medal = "pat on the back";
};
console.log(runner + " received a " + medal + " medal");


function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
console.log(evenOrOdd(2039));
let musician = 40;
if (musician === 0) {
    console.log("not a group");
} else if (musician === 1) {
    console.log("solo");
} else if (musician === 2) {
    console.log("duet");
} else if (musician === 3) {
    console.log("trio");
} else if (musician === 4) {
    console.log(quartet);
} else if (musician >= 5) {
    console.log("this is a large group");
};


var marie = "not busy";
var weatherNow = "it is sunny";
if (marie === "not busy" && weatherNow === "it is sunny") {
    console.log("Let's go to the park");
}




const room = "billiards room";
const suspect = "Mrs. Sparr";
let weapon = "";
let solved = true;
if (room === "ballroom" && suspect === "Mr. Parkes") {
    weapon = "poison";
    solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "a trophy";
    solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "a pool stick";
    solved = true;
} else {
    weapon = "a knife";
    if (suspect === "Mr. Kalehoff") {
        solved = true;
    }
}


if (solved) {
    console.log(suspect + " did it in the " + room + " with " + weapon + "!");
} else {
    console.log("The case was not solved.");
}





const balance = 325.00;
const checkBalance = false;
const isActive = false;

if (checkBalance === true) {
    if (isActive === true && balance > 0) {
        console.log("Your account balance is $" + balance.toFixed(2) + ".");
    } else if (isActive === true && balance === 0) {
        console.log("Your account is empty.");
    } else if (isActive === true && balance < 0) {
        console.log("Your balance is negative, Please contact bank.");
    } else if (isActive === false) {
        console.log("Your account is no longer active.");
    }
} else {
    console.log("Thank you. Have a nice day!");
}



/* 
    Flavors: vanilla or chocolate
    Topping: sprinkles or peanuts
    Vessel: wafer cone or sugar cone
*/
const flavors = "chocolate";
const topping = "bannana";
const vessel = "sugar cone";
/*if ((flavors === "vanilla" || flavors === "chocolate") && (topping === "sprinkles" || topping === "peanuts") && (vessel === "wafer cone" || vessel === "sugar cone")) {
    console.log("Great choice! Your ice cream is at the next window.");
} else {
    console.log("Please check our menu and try again.");
} */
/* alternate method */
var flavorKK = flavors === "vanilla" || flavors === "chocolate";
var toppingsKK = topping === "sprinkles" || topping === "peanuts";
var vesselKK = vessel === "wafer cone" || vessel === "sugar cone";
if (flavorKK && toppingsKK && vesselKK) {
    console.log("Great choice! Your ice cream is at the next window.");
} else {
    console.log("Please check our menu and try again.");
}




/* Size 	Width 	Length 	Sleeve
    S 	    18" 	  28" 	8.13"
    M 	    20" 	  29" 	8.38"
    L 	    22" 	  30" 	8.63"
    XL 	    24" 	  31" 	8.88"
    2XL     26" 	  33" 	9.63"
    3XL     28" 	  34" 	10.13"*/

const shirtWidth = 18;
const shirtLength = 28.2;
const shirtSleeve = 8.16;
let size = "N/A";

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    size = "L";
} else if ((shirtWidth <= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    size = "M";
} else if ((shirtWidth <= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    size = "L";
} else if ((shirtWidth <= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    size = "XL";
} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    size = "2XL";
} else if ((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)) {
    size = "3XL";
} else {
    size = "N/A";
}
console.log(size);

const isGoing = true;
let color;
if (isGoing) {
    color = "green";
} else {
    color = "red";
}
console.log(color);
const colorPick = isGoing ? "blue" : "red";
console.log(colorPick);
/*  Using if(isGoing) is the same as using if(isGoing === true). Alternatively, using if(!isGoing) is the same as using if(isGoing === false).
conditional ? (if condition is true) : (if condition is false)

To use the ternary operator, first provide a conditional statement on the left-side of the ?. Then, between the ? and : write the code that would run if the condition is true and on the right-hand side of the : write the code that would run if the condition is false. For example, you can rewrite the example code above as*/


const adult = true;
const preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");

console.log("false" ? true : false); // true
console.log(false ? "false" : "true");
console.log("true" ? "false" : true);
console.log(false ? false : true); // true
console.log(false ? true : false);
console.log("false" ? false : true);


const eatsPlants = false;
const eatsAnimals = true;
let category;

category = eatsPlants ? (eatsAnimals ? "omnivores" : "herbivores") : (eatsAnimals ? "carnivores" : undefined);
console.log(category);

/*If you find yourself repeating else if statements in your code, where each condition is based on the same value, like this:
if (option === 1) {
  console.log("You selected option 1.");
} else if (option === 2) {
  console.log("You selected option 2.");
} else if (option === 3) {
  console.log("You selected option 3.");
} else if (option === 4) {
  console.log("You selected option 4.");
} else if (option === 5) {
  console.log("You selected option 5.");
} else if (option === 6) {
  console.log("You selected option 6.");
} Use switch statements */
const favoriteFood = "soup";
let restaurant = undefined;

switch (favoriteFood) {
    case "pizza":
        restaurant = "pizzeria";
        break;
    default: // it does not ma
        restaurant = "diner";
        break;
    case "tacos":
        restaurant = "taqueria";
        break;
    case "sushi":
        restaurant = "sushi bar";
        break;
    case "pancakes":
        restaurant = "pancake house";
        break;

}

console.log("Go to the " + restaurant);

const month = 7;
let days;

switch (month) {
    case 1:
    case 2:
        days = 28;
        break;
    case 3:
    case 4:
        days = 30;
        break;
    case 5:
    case 6:
        days = 30;
        break;
    case 7:
    case 8:
    case 9:
        days = 30;
        break;
    case 10:
    case 11:
        days = 30;
        break;
    case 12:
    default:
        days = 31;
}

console.log("There are " + days + " days in this month.");


/*In some situations, you might want to leverage the "falling-through" behavior of switch statements to your advantage.

For example, when your code follows a hierarchical-type structure */
const tier = "nsfw deck";
let output = "You’ll receive "

switch (tier) {
    case "deck of legends":
        output += "a custom card, ";
    case "collector's deck":
        output += "a signed version of the Exploding Kittens deck, ";
    case "nsfw deck":
        output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
    default:
        output += "one copy of the Exploding Kittens card game.";
}

console.log(output); /* You’ll receive one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and one copy of the Exploding Kittens card game. */


const tierOne = "none";
let outputMsg = "You’ll get "

switch (tierOne) {
    //... 
    default: outputMsg = outputMsg + "one copy of the Maze and Checkers card game.";
}

console.log(outputMsg);

let prize = "";
winner = 3;
switch (winner) {
    case 1:
        prize += "a trip for two to the Bahamas and ";
    case 2:
        prize += "a four piece furniture set.";
        break;
    case 3:
        prize += "a smartwatch and ";
    default:
        prize += "tickets to the circus.";
}

console.log("You've won " + prize);




const education = "no high school diploma";
// set the value of this based on a person's education
let salary = 0;

switch (education) {

    case "high school diploma":
        salary = 35256;
        break;
    case "Associate's degree":
        salary = 41496
        break;
    case "Bachelor's degree":
        salary = 59124;
        break;
    case "Master's degree":
        salary = 69732;
        break;
    case "Professional degree":
        salary = 89960;
        break;
    case "Doctoral degree":
        salary = 84396;
    default:
        salary = 25636;
}
console.log("In 2015, a person with " + education + " earned an average of " + "$" + salary.toLocaleString("en-US") + "/year.")
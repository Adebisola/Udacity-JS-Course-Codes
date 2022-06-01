const donuts = [ // start of the array
    "glazed", // each element separated by a comma
    "chocolate frosted",
    "cinnamon",
    "sprinkled",
    "powdered",
    "cinnamon sugar",
    "glazed cruller",
    "chocolate cruller",
    "cookies",
    "Boston creme",
    "powdered jelly filled",
    "creme de leche",
    "glazed donut holes",
    "blueberry donut holes",
    "cake donut holes",
    "chocolate donut holes"
]; // end of the array



// Array constructor
// creates a new empty array
const emptyArray = new Array();

// creates a `donuts` array with three strings
const doughnuts = new Array("glazed", "powdered", "jelly");

/* A simple way to think about the difference between let and const is that we use let when we anticipate that the value of a variable will change and const when we think it will be constant -- but that shorthand doesn't tell the whole story. The difference between let and const is not so much about change but about reassignment

    let allows you to reassign the variable
    const doesn't allow you to reassign the variable

when you assign a primitive value to a variable, JavaScript actually assigns that value.
Arrays are objects types, so when you assign them to a variable,JavaScript simply assigns a reference to where to find the values in the array. Even if the values inside the object change, the reference address doesn't.*/
// We use const to declare arrays because JavaScript is assigning a reference that points to that array. We can change whatever we want inside the array, but we cannot change which array the variable points to.

const captain = "Mal";
const second = "Zoe";
const pilot = "Wash";
const companion = "Inara";
const mercenary = "Jayne";
const mechanic = "Kaylee";
const crew = [captain, second, pilot, companion, mercenary, mechanic];
const doctor = "Simon";
const sister = "River";
const shepherd = "Book";
crew.push(doctor, sister, shepherd);
console.log(crew);

const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
/*prices[0] = prices[0] * 2;
prices[2] = prices[2] * 2;
prices[6] = prices[6] * 2; */

for (let index = 0; index < prices.length; index++) {
    if (index === 0) {
        prices[index] = prices[index] * 2;
    } else if (index === 2) {
        prices[index] = prices[index] * 2;
    } else if (index === 6) {
        prices[index] = prices[index] * 2;
    } else {
        prices[index] = prices[index];
    }
}

prices.push(54.25);
console.log(prices);
const testArr = [1, 2.3, 3, 4];
console.log(testArr.push(9.8)); // returns the array length
console.log(testArr);

const food = ["meat", "fish", "snail", "rice"];
console.log(food.pop()); // returns the popped element.

/* Following is the syntax of **splice()** method: arrayName.splice(arg1, arg2, item1, ....., itemX); where,

    arg1 = Mandatory argument. Specifies the starting index position to add/remove items. You can use a negative value to specify the position from the end of the array e.g., -1 specifies the last element.
    arg2 = Optional argument. Specifies the count of elements to be removed. If set to 0, no items will be removed.
    item1, ....., itemX are the items to be added at index position arg1

splice() method returns the item(s) that were removed*/

const sweetDonuts = ["cookies", "cinnamon sugar", "creme de leche"];

sweetDonuts.splice(-2, 0, "chocolate frosted", "glazed");
console.log(sweetDonuts);

//const rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]
const rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2, 1, "Yellow", "Green");
rainbow.push("Purple");
console.log(rainbow);


const team1 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
const team2 = ["George Weasley", "Fred Weasley", "Harry Potter"];
const team3 = [];
const team4 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Longbottom"];


function hasEnoughPlayers(arr) {
    if (arr.length >= 7) {
        return true;
    } else {
        return false;
    }

}
console.log(hasEnoughPlayers(team1));
console.log(hasEnoughPlayers(team2));
console.log(hasEnoughPlayers(team3));
console.log(hasEnoughPlayers(team4));

const reverseMe = ["h", "e", "l", "l", "o"];
console.log(reverseMe.reverse());

const sortMe = [2, 1, 10, 7, 6];
console.log(sortMe.sort()); // 10 comes before 2 in the Unicode.
const turnMeToString = ["A", "r", "r", "a", "y"];
console.log(turnMeToString.join(""));

/* const donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (let i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}*/
const footballers = ["kerr", "ebere", "ajibade", "oshoala"];
for (let p = 0; p < footballers.length; p++) {
    footballers[p] = footballers[p].charAt(0).toUpperCase() + footballers[p].slice(1);
    console.log(footballers[p]);
}

const cars = ["Volvo", "Mercedes", "Tesla", "Toyota"];
cars.forEach(car => { // car.forEach(function(car) {});
    car = "Red " + car;
    console.log(car);
});

// forEach can take three parameters element, index, array
const myArray = ["A", "B", "C", "D"];

function myAwesomeFunction(element, index, array) {
    console.log("Element: ", element);
    console.log("Index: ", index);
    console.log("Array: ", array);
}

myArray.forEach(myAwesomeFunction);
//The array parameter will get a reference to the whole array, which is handy if you want to modify the elements.
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
    console.log("Word " + num + " in " + all.toString() + " is " + word);
});



const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];



test.forEach(function(elem, testIndex) {
    if (elem % 3 === 0) {
        console.log("Element at index " + testIndex + " is divisible by 3");
        test[testIndex] = test[testIndex] + 100;
    } else {
        console.log("Element " + elem + " is not divisible by 3");
    }
    console.log(test);
});


//map

const ourArray = [1, 2, 3, 4, 5];

for (let i = 0; i < ourArray.length; i = i + 2) {
    console.log(ourArray[i]);
    if (i === 2) {
        break;
    }
}


/* forEach gives you a concise way of looping over an array if you know you're going to be loopingover every element from start to finish. You have less versatility than with a regular for loop, but you can access each element directly, without using an index. but using forEach() will not be useful if you want to permanently modify the original array. forEach() always returns undefined.*/

const myArrayz = [1, 2, 3, 4, 5];

myArrayz.forEach(function(elem) {
    console.log(elem);
});



/* Creating a new array from an existing array is simple with the powerful map() method.

With the map() method, you can take an array, perform some operation on each element of the array, and return a new array.

const newArray = myArray.map(function (elem) {
  elem = elem + 100;
  return elem;
});

console.log(newArray); //[101, 102, 103, 104, 105]
*/

const doughnutts = ["jelly donut", "chocolate donut", "glazed donut"];

const improvedDougnutts = doughnutts.map(function(doughnutt) {
    doughnutt += " hole";
    doughnutt = doughnutt.toUpperCase();
    return doughnutt;
});
console.log(improvedDougnutts);


/* The map() method accepts one argument, a function that will be used to manipulate each element in the array. In the above example, we used a function expression to pass that function into map(). This function is taking in one argument, donut which corresponds to each element in the donuts array. You no longer need to iterate over the indices anymore. map() does all that work for you.*/


/* Note, that the method returns a string to maintain the "fixed" format of the number. So, if you want to convert the string back to a number, you can cast it or convert it back to a number: */

const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
const totals = bills.map(function(bill) {
    bill += bill * 0.15;
    Number(bill);
    bill = bill.toFixed(2); //return Number(element.toFixed(2));
    return bill;
});
console.log(totals);





/* Think of an Array in an Array as a Grid

An array of arrays can be represented as a grid-like structure, where each element of the array corresponds to a row of cells.

    each row of the grid is an array
    each of those arrays is an element of the larger array
*/

const grid = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
];
for (let r = 0; r < grid.length; r++) { // each row
    for (let c = 0; c < grid[r].length; c++) { // each element
        console.log(grid[r][c]);
    }
}



var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];
for (let row = 0; row < numbers.length; row++) {
    for (let column = 0; column < numbers[row].length; column++) {
        if (numbers[row][column] % 2 === 0) {
            numbers[row][column] = "Even";
        } else {
            numbers[row][column] = "Odd";
        }
    }

}
console.log(numbers);
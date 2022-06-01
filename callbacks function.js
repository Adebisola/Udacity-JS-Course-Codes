/* callback functions are functions passed into another function as an argument and the receiving function can execute the callback after running its own code.Callback functions are great because they can delegate calling functions to other functions*/
function callAndAdd(n, callbackFunction) {
    return n + callbackFunction;
}

function returnsThree() {
    return 3;
}
console.log(callAndAdd(4, returnsThree()));
/*code execution moves into the callAndAdd function, the end variable stored the number 2 we passed in and also the return function that we passed in. callAndAdd then invokes the returnsThree function which retuns 3*/

function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            console.log(array[i]);
        }
    }
}

function isPositive(n) {
    return n > 0;
};

console.log(each([-2, 7, 11, -4, -10], isPositive)); // 7,11


//Array Methods
/*forEach()

Array's forEach() method takes in a callback function and invokes that function for each element in the array. In other words, forEach() allows you to iterate (i.e., loop) through an array, similar to using a for loop Syntax:
array.forEach(function callback(currentValue, index, array) {
    // function code here
}); 
The callback function itself receives the arguments: the current array element, its index, and the entire array itself.*/
function logIfOdd(n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
}

logIfOdd(2); // (nothing is logged)

logIfOdd(3); // 3

[1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
});

// 1
// 5
// 3
/* In the above array, only the numbers that are odd numbers are printed to the console. Let's recap what happened: logIfOdd() is a function and is passed in as an argument to forEach(). forEach() then invokes logIfOdd() for each element in the array (i.e., [1, 5, 2, 4, 6, 3]), which outputs 1, 5, and 3*/
/* this will work
[1, 5, 2, 4, 6, 3].forEach(function (n) {
  if (n % 2 !== 0) {
    console.log(n);
  }
});
[1,2,3,4,5].forEach(logIfOdd) if function is already defined*/
const favouriteFlavour = ["cookie dough", "salted caramel", "toffee"]
favouriteFlavour.forEach(function(flavour) {
    console.log("I enjoy " + flavour + " ice cream");
});


/*map()

Array's map() method is similar to forEach() in that it invokes a callback function for each element in an array. However, map() returns a new array based on what's returned from the callback function. Check out the following */
const names = ['David', 'Richard', 'Veronika'];

const nameLengths = names.map(function(name) {
    return name.length;
});
//Remember that the key difference between forEach() and map() is that forEach() doesn't return anything, while map() returns a new array with the values that are returned from the function. map does  not modify the orignal array.
console.log(nameLengths);



/*Using the musicData array and map():
    *
    -Return a string for each item in the array in the following format:
    *
    < album - name > by < artist > sold < sales > copies *
    -Store the returned data in a new albumSalesStrings variable *
    *
    Note:
    *
    -Do not delete the musicData variable *
    -Do not alter any of the musicData content *
    -Do not format the sales number; leave it as a long string of digits
    */

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    {
        artist: 'Original Broadway Cast Recording',
        name: 'Hamilton: An American Musical',
        sales: 820000
    },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(function(album) {
    return album.name + " by " + album.artist + " sold " + album.sales + " copies";
});

console.log(albumSalesStrings);


/* filter()

Array's filter() method is similar to the map() method:

    It is called on an array
    It takes a function as an argument
    It returns a new array

The difference is that the function passed to filter() is used as a test, and only items in the array that pass the test are included in the new array.*/

const NAMES = ['David', 'Richard', 'Veronika'];

const shortNames = NAMES.filter(function(name) {
    return name.length < 6;
});
console.log(shortNames);
const results = musicData.filter(function(filteredObject) {
    return filteredObject.name.length >= 10 && filteredObject.name.length <= 25;

});
console.log(results);
/* the function that's passed to filter() gets called for each item in the names array. The first item (i.e., 'David') is stored in the name variable. Then the test is performed -- and this is what's doing the actual filtering. First, it checks the length of the name. If it's 6 or greater, then it's skipped (and not included in the new array!). But, if the length of the name is less than 6, then name.length < 6 returns true and the name _is_ included in the new array!
the filter() method returns a new array instead of modifying the original array*/
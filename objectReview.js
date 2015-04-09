//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. 
//Have the values to those keys be your favorite thing in that category. 

var favoriteThings = {
  band: 'The Band',
  food: 'digg mat',
  person: 'the person',
  book: 'the book',
  movie: 'the movie',
  holiday: 'the holyday'
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' 
//with the value being your favorite brand.

favoriteThings.car = 'the car';
favoriteThings.brand = 'the brand';

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be 
//'50 Shades of Gray'. 

favoriteThings.food = 'Lettuce';

//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThings.person);
alert(favoriteThings.book);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, 
//remove it from the object. hint: 'delete'.

var isTrue = function() {
  for (key in user) {
    console.log(user[key]);
    if (!user[key]) {
      delete user[key];
    }
  }
}

isTrue();
console.log(user);
//Once you get your truthy object, Change the remaining values in the object to be specific to you 
//(name: 'your name', username: 'your username'), rather than my information.

user.name = 'Dag',
user.username = 'snoop dag';

//Now console.log your object and make sure it looks right.
console.log();



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 
var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

methodCollection.alertHello = function() {
  alert('Hello!');
};
methodCollection.logHello = function() {
  console.log('hello');
}

//Now call your alertHello and logHello methods. 

methodCollection.alertHello();
methodCollection.logHello();



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, 
//and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};



var VowelConstr = function(a, e, i, o, u) {
  this.a = a;
  this.e = e;
  this.i = i;
  this.o = o;
  this.u = u;
};

var vowCount = new VowelConstr(0, 0, 0, 0, 0);


var vowelArr = ['a', 'e', 'i', 'o', 'u'];

var voweler = function(str) {
  var splitStr = str.split('');
  console.log(splitStr);
  for (var i = 0; i < splitStr.length; i++) {
    for (var j = 0; j < vowelArr.length; j++) {
      if (splitStr[i] === vowelArr[j]) {
          vowCount[splitStr[i]]++;
        }
    }
  }
}


voweler("This is a test");

console.log(vowCount);





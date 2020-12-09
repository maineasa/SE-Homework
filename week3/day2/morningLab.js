// problem 1

var integerArr = [];

for(i = 0; i <50; i++){
	integerArr.push(i);
	console.log(integerArr[i]);
}

console.log("----------");


// problem 2

var shoppingList = [

  "cool ranch doritos",

  "kings hawaiian sweet bread",

  "peanut butter oreos",

  "fruit loops cereal"

];

shoppingList.push("Hendricks gin");

console.log(shoppingList);

console.log("----------");


// problem 3

var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];

console.log(yoda);

console.log(yoda.reverse());

console.log("----------");


// problem 4

var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing = "";
var waitListInitLength = waitList.length;

console.log(waitList);

for (let i = 0; i < waitListInitLength; i++) {
	nowServing = waitList.shift();
	console.log(`Now serving: ${nowServing}`);
}

console.log("----------");

// problem 5

var shoe = ["just", "do", "it"];

var shoeString = shoe.join(" ");
console.log(shoeString);
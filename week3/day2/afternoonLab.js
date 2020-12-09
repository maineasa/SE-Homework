// problem 1 

var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];
var notHof = hof.pop();

console.log(notHof);

console.log("--------");


//problem 2

var testMenu = [
"McPizza Burger",
"McFly Burger",
"McLinguine",
"McChar-Siu Bau",
"McChop-Chae",
"McPancit"
];
itemsToRemove = ["McLinguine","McChar-Siu Bau"];

console.log(testMenu);

console.log("Removed:");
for(let i = 0; i < itemsToRemove.length; i++){
	console.log(testMenu.splice(testMenu.indexOf(itemsToRemove[i]),1).toString());
}

console.log("New menu:");

console.log(testMenu);

console.log("--------");


//problem 3

var westSide = ["Dre", "2Pac", "Snoop"];
var eastSide = ["Biggie", "Diddy", "Craig Mack"];
var oneLove = westSide.concat(eastSide);

console.log(oneLove);

console.log("--------");


//problem 4

var fbFriends = [
"Khalid",
"Yeezy",
"Kimmy K",
"Lamar Odom",
"Lebron",
"Warren Buffet"
];

var listToUnfriend = [
"Yeezy",
"Kimmy K",
"Lamar Odom"
];

var unFriend = "";
for(let i  = 0; i < listToUnfriend.length; i++){
	unFriend = fbFriends.splice(fbFriends.indexOf(listToUnfriend[i]),1).toString();
	console.log(unFriend);
}

console.log("--------");


// problem 5

user1 = {

first_name: "jorgen",

last_name: "last-name",

company: "money laundering inc.",

department: "if i tell you ill have to end your lineage"

};

console.log(user1);


//problem 6

const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

const objToArray = [];

for (const property in checkObj){
  let tempVar = checkObj[property];
  if (checkObj[property] >= 2)
  	objToArray.push(tempVar);
}

console.log(objToArray);


//problem 7

const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let divBy6 = false;
var objToArray = Object.values(checkObj);

objToArray.forEach(value => !(value % 6) ? divBy6 = true : null);
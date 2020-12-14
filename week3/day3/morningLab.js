class Snack {
	constructor (name, price) {
		this.name = name;
		this.price = price;
	}
}

class VendingMachine {
	constructor (snacks)	{
		this.snacks = snacks;
	}
	vend (snackIndex)	{
		return this.snacks[snackIndex];
	}
}

function boundedRandNum(max,numDecimal,min) { //gives a random number bounded by an inclusive min and potentially exclusive max at large values. also allows for decimal place control.
	if ( isNaN(min)) { min = 0; console.log("Warning: Non-number value for min"); }
	if ( isNaN(max)) { max = 0; console.log("Warning: Non-number value for max"); }
	if ( isNaN(numDecimal)) { numDecimal = 0; console.log("Warning: Non-number value for numDecimal"); }//this and the above two are just handling unexpected arguments

	if ( max <= min ) { console.log("Warning: max is less than min in boundedRandNum()!!")} //checking max vs min, unintended behavior if min is not less than max

	return Number(((Math.random() * (max-min)) + min).toFixed(numDecimal)); //returns a number of decimal length numDecimal, minimum value min, and maximum (potentially exclusive) value max
}

var arrSnackName = ["Snickers", "Reese's", "100 Grand Bar"]; //trying to simulate input for different names, and making it easy to change later
var arrSnacks =[]; //an array to contain the snacks, will be passed to vendingMachine

const maxSnacks = arrSnackName.length; //these three const's are to simulate an input for the different snack prices and names
const minPrice = 1;
const maxPrice = 2;



for (let i = 0; i <= maxSnacks - 1; i++){ //randomly generating snack prices for arrSnackPrices, again to simulate
	arrSnacks.push(new Snack(arrSnackName[i],boundedRandNum(maxPrice,2,minPrice)));
}
const indexForOutput = boundedRandNum(maxSnacks - 1, 0, 0); //random output, for testing


const myVend = new VendingMachine(arrSnacks);

console.log(`Hi! Outputting Snack at random index ${indexForOutput}: `, myVend.vend(indexForOutput));// i can't include myVend.vend() as a string literal. maybe it's because of the function?
console.log("Total vending list: ");
console.log(myVend);


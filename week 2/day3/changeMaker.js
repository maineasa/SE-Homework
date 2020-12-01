/*
I'm not using anonymous functions, as my idea here is to make this
scaleable and modular. I... don't really like the idea of anonymous
functions. It's nice to just have a place to find everything. I 
also don't understand the benefits of doing the function in-line
as compared to in its own little function nest.
*/
initializeArray = (arrLength,arrValDefault) =>{
	let arr = [];
	for (let i =0; i <= (arrLength - 1);i++){
		arr.push(arrValDefault);
	}
	return arr;
}

function minValDecrement(startVal,minimum,decrement){
	let counter = 0;
	while ((startVal - decrement) >= minimum) {
		startVal -= decrement;
		counter++;
	}
	return counter;
}

outputDenomCount = (countArray,denomNameArray) =>{
	console.log('Change received! Denominations and count below')
	console.log('--------------------------------------------------------------')
	for (let i = 0; i <= (countArray.length - 1); i++){
			console.log(`${denomNameArray[i]}: ${countArray[i]}`);
	}
}



var payment = 105243.23;
var price = 3499.84;
var changeTotal = payment - price;

const denomName = ['Hundreds', 'Fifties','Twenties','Tens','Fives','Ones','Half-dollars','Quarters','Dimes','Nickels','Pennies'];
let denomValue = [100,50,20,10,5,1,.5,.25,.1,.5,.01];
var denomCount = initializeArray(denomValue.length,0);

var counter = 0;

for(let arrayIndex of denomValue){
	denomCount[counter] = minValDecrement(changeTotal,0,arrayIndex);
	changeTotal -= denomCount[counter] * arrayIndex;
	counter++;
}

outputDenomCount(denomCount,denomName);
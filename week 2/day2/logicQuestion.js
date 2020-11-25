var numDollars = 6; //10 dollar bill, 4 dollar cookie, 6 dollars in change
var numQuarters = numDollars * 4;
var counter = numQuarters;

while (counter > 0) {
	console.log('Nando got a quarter.');
	counter--;
}

console.log(`Nando got ${numQuarters} quarters total.`);
function isPrime(num){
	let lowestPossDenom = Math.floor(num/2);
	let remainder;
	let checkPrime = true; 
	for (let l = 2; l <= lowestPossDenom; l++){
		remainder = num % l;
		if (remainder === 0) { 
			checkPrime = false;
			break; 
		}
	}
	return checkPrime;
}

function isEven(num){
	if (!(num % 2) && num != 0)
		console.log(num);
}

var sum = 0;
 
var i = 0;
var j = 0;
var n = 0;

console.log('Primes:');

while (i <= 20) {
	if (isPrime(i))
		console.log(i);
	i++;
}
console.log('===========')


console.log('Sum:');

while (j <= 20) {
	sum += j;
	j++;
}

console.log(sum);
console.log('===========');


while (n <= 20) {
	isEven(n);
	n++;
}

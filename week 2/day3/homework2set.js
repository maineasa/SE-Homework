/* 
1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (num1, num2) => {
  return num1 > num2 ? num1 : num2; //ternary operator is beautiful
};

console.log(maxOfTwoNumbers(1,7));

/*
2. Define a function  maxOfThree  that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (num1,num2,num3) => {
  return maxOfTwoNumbers(num1,num2) > num3 ? maxOfTwoNumbers(num1,num2) : num3; //ternary operator is still beautiful
};

console.log(maxOfThree(5,4,3));
/*
3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (char) => {
	//it's possible to just do a bunch of if tests, but that seems inefficient. and a lot of typing. i'm not sure if it's the same for doing a loop, but the below is less typing for me, so.
  if (char.length == 1){
  	arrVowels = ['a','A','e','E','i','I','o','O','u','U']; //in hindsight i could've just made char lower or upper case
  	//it would be kind of interesting to make this more modular by having arrVowels be arrSearchVal or something, and have it fill the array from a text file.
  	//kinda neat because you wouldn't have to comb through code to find the specific function, but would be an issue if the text file got lost.
  	return arrVowels.indexOf(char) !== -1; //.indexOf() returns -1 if the argument isn't in arrVowels
  } else {
  	return 'Give me a /single/ character, please.';
  }
};
console.log(isCharacterAVowel('A'));

/*
4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
*/

sumArray = (arr) => {
	let sum =  0;
	arr.forEach(value => sum += value); //i was looking at array iteration on w3 schools and was looking into forEach(). i'm not entirely sure how this works, but this is just an anonymous function using forEach()?
	//also, an if statment to vet the argument would really be best, but that doesn't seem to be required. isNaN() is a good bet here, and i guess what you might do is arr.forEach(value => value.isNaN() ? badArray = true : null;).
	//not sure if the above is syntactically correct.
	/*
		so, here is essentially what that forEach() loop does:
		for (var i = (arr.length -1); i>=0; i--){
			sum += arr[i];
		}

		it's super neat because .forEach() is wayyy more legible. the anonymous function let's you do stuff in line instead of having to declare a second function just to do sum+=.
	*/
	return sum;
};



multiplyArray = (arr) => {
	let product = 1;
	arr.forEach(element => product *= element);
	return product; //essentially the same as sumArray
};

const arrayTest = [1,2,3,4];
console.log(sumArray(arrayTest));
console.log(multiplyArray(arrayTest));
/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

countArguments = (...args) => { //this is called spread syntax, via https://stackoverflow.com/questions/1959040/is-it-possible-to-send-a-variable-number-of-arguments-to-a-javascript-function
	//spread syntax stores arguments that are passed through the... spreaded syntax (?) in an array. i don't recall how they're stored, but they are definitely stored.

	/*var numArgs = 0;
	args.forEach(() => numArgs++);
	return numArgs;*/ //this is just me doing forEach() again. anonymous functions are pretty freakin cool man.
	
	return args.length;
}
console.log(countArguments(arrayTest, 1 ,1)); //im using the array from another problem sorry

/*
6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (str) => {
	str = str.split('').reverse().join(''); //default .join() separator is a comma
	return str;
};
	/*the above does the following, in order:
	1. makes the string an array by splitting each individual character
	2. reverse said array
	3. rejoins said array with a separator of '' - essentially meeting no separator. try running the above code as str = str.split('').reverse.join(); to see what i mean.
	*/

console.log(reverseString('jag testar'));

/*
7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (arr) => {
  arr = arr.sort(function(str1,str2) {return str1.length - str2.length}); //this is inefficient. it's faster to just do a forEach(), i'm pretty sure.
  return arr[(arr.length - 1)];
};

const wordArr = ['hello','goodbye','yes','toodles'];
console.log(findLongestWord(wordArr));
/*
8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.
*/
filterLongWords = (arr,minLength) => {
	var arrMinLengthWords = []; //an empty array to add viable words to
	arr.forEach(value => value.length > minLength ? arrMinLengthWords.push(value) : null); //god i love ternary operators. beautiful and simple. above is a forEach() with an anonymous function that evaluates whether or not the array value is rad enough to be in the arrMinLengthWords
	return arrMinLengthWords;
};

/*
the forEach loop above is essentially this:
for(var i = (arr.length -1); i >= 0; i--){
	if (arr[i].length > minLength){
		arrMinLengthWords.push(arr[i]);
	}
}
*/
console.log(filterLongWords(wordArr,6));

//anonymous functions and forEach() loops are beautiful

String.prototype.reverseString = function() { //the instructions call for this method to be called reverseString
	var arrThis = [];//i dont want to change the actual string object
	var countArr = []; //an array to hold characters and their count 
	var i = -1; //with the way my if statement is working in the forEach, the else will always run first, so i will be at least 0 and a valid index for further iterations
	var currentChar = ''; //value of current character being counted in this

	arrThis = this.toLowerCase().split('').sort();//do i even need this here? ex: this.toLowerCase().split('').sort().forEach(...);
	arrThis.forEach(value => {

		if (currentChar === value){
			countArr[i][1]++;
		} else {
			if (value !== ' '){ // this part of the if-else is where a character is counted
				i++; //i++ must happen in this else because this part of the if-else indexs countArr. there is no other place in this code that could index here.
				currentChar = value; 
				countArr.push([currentChar,1]); //multidimensional array, to make template literal output easy. [i][0] is the character value, [i][1] is the count
			}
		}

	});
	/*for (var i = (countArr.length -1); i >= 0; i--) {
		console.log(`${countArr[i][0]}: ${countArr[i][1]}`);
	}*/ //this is just to output it to console, i don't think the bonus question was asking for this
	return countArr;
};
console.log("PerScholas is what this is for".reverseString());
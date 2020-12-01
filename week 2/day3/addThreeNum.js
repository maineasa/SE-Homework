function addThreeNum(num1,num2,num3){
	let result = (num1 + num2 + num3)/3;
	return result;
}

console.log(addThreeNum(1,2,3));

const addThreeNumArrow = (num1,num2,num3) => (num1+num2+num3)/3

console.log(addThreeNumArrow(1,2,3));
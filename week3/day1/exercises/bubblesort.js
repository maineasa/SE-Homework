var arrBubble = [];
var numRandElements = Math.round(Math.random()*10)+10;
var done = false;


for (var i = 0; i <= numRandElements; i++) {
	arrBubble[i] = Math.round(Math.random()*100);
}
console.log(arrBubble);
while (!done){
	done = true;
	arrBubble.forEach(function (element,index)  {
		if (element > arrBubble[index+1]) {
			var swapVar = element;
			arrBubble[index] = arrBubble[index + 1];
			arrBubble[index + 1] = swapVar;
			done = false;
		}
	})
}
console.log(arrBubble);
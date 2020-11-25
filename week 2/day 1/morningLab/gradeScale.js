var grade = Math.round(Math.random()*100);

console.log('Generated Number (grade): ' + grade);

if (grade >= 90) {

	console.log('A');

} else if (grade >=80) {

	console.log('B');

} else if (grade >=70) {

	console.log('C');

} else if (grade >=55) {

	console.log('D');

} else {

	console.log('F');
}
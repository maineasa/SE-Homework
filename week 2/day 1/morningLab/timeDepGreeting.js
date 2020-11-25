var currentHour = Math.round(Math.random() * 23);
//int currentMin = Math.round(Math.random() * 60); have this here in case 16:00 is considered "Good Afternoon"

console.log('Generated Number (currentHour): ' + currentHour);

if (currentHour >= 5 && currentHour < 12) {

	console.log('Good Morning');

} else if (currentHour >= 12 && currentHour < 16){

	console.log('Good Afternoon');

} else {

	console.log('Hey there');

}
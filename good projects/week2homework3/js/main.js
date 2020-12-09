/*

General function:

This script is used to run a timer in html, and also contains the code used for the controlling buttons. It also
adjusts all the colors of the surrounding circles, to make it real pretty and meet homework requirements. The 
functons expect there to be ID's with which they can identify what they are interacting with on the html document.

*/

var gradientArr = [["#0459b5","#b493ba"],["#00b7bd","#cef3f5"],["#62078a","#21078a"],["#24036b","#134870"]]; //array of background-image gradients
var currItemColor = 3;// initial index of gradientArr
var seconds;
var minutes;
var intervalID; //stores the return value of setInterval()
var isPaused = false; //is it paused? no? then this is false

/****************************************************************************/
/*

	Order:

		1. background-image changes 

		2. timer pause/reset/initialize

		3. timer input/output

		4. main function


*/

/****************************************************************************/
// 1. background-image changes 

function itemColorOnClick(name){ //changes the gradients of documents with class "name" based on a counter, using an array for the hexadecimal color.
	var arrDocItems = document.getElementsByClassName(name);

	currItemColor++;

	if (currItemColor > gradientArr.length - 1)
		currItemColor = 0;

	for(let i = 0; i < arrDocItems.length; i++){ //had to use a loop here, can't used forEach with an HTMLCollection. dunno what that is, but i definitely can't do it the way i want
		//console.log(gradientArr[currItemColor]);
		arrDocItems[i].style.backgroundImage = `linear-gradient(to top left, ${gradientArr[currItemColor][0]}, ${gradientArr[currItemColor][1]})`; //template literal makes changing the gradient easy
	}

} 

function revertColorChange(name){//keeps the class from the above function from changing color by quickly reverting it after a click. applying this to #timer and .buttonContainer so they're not annoying to interact with
	var arrDocItems = document.getElementsByClassName(name);

	currItemColor--;

	if (currItemColor < 0)
		currItemColor = gradientArr.length - 1;

	for(let i = 0; i < arrDocItems.length; i++){
		arrDocItems[i].style.backgroundImage = `linear-gradient(to top left, ${gradientArr[currItemColor][0]}, ${gradientArr[currItemColor][1]})`;	
	}

}

/****************************************************************************/

/****************************************************************************/
// 2. timer pause/reset/initialize

function pauseTimer(){ //clears the interval ID, and keeps timerInitialize from running on the next call of timerStart();
	clearInterval(intervalID);
	isPaused = true;
} //isPaused is a bool that identifies whether timerStart should initialize the timer

function resetTimer(secondsId,minutesId) { //just initializes and pauses the timer. combines functions
	timerInitialize(secondsId,minutesId);
	pauseTimer();
}//resets the timer

function timerInitialize(secondsId,minutesId,){ //sets minutes and seconds to zero, then outputs via an output function


	/*if( !(isNaN(document.getElementById(initialValId).value)) ){
		let userTimeVal = parseInt(document.getElementById(initialValId).value);
		seconds = userTimeVal % 60;
		minutes = parseInt(userTimeVal/60);
	} else {
		seconds = 0;
		minutes = 0;
	}*/ //some good code that quickly became archaic :/
	minutes = 0;
	seconds = 0;

	outputString(secondsId,"seconds");
	outputString(minutesId,"minutes");
}

/****************************************************************************/

/****************************************************************************/
// 3. timer input/output

function inputOnTimer(inputId,boolSwitchFocus,otherId){// handles input from timer input fields. expected arguments: current ID, boolean, other ID
/*
booSwitchFocus serves two purposes: to identify if the enter key should switch focus from one tag to another, and to identify if the user is 
currently typing in the #minutes or #seconds field. there are only two cases, which only have specific outcomes:
1. [boolSwitchFocus = true]: the user inputs into the minutes field, which will then switch focus to the seconds field.
2. [boolSwitchFocus = false]: the user inputs into the seconds field, which will start the timer.

inputId and otherId are used to identify what field is currently taking input, and which is the other field. how this is handled makes identifying
where user input should go easy.
*/
	if (event.key === 'Enter') { //function executes when the enter key is pressed
		if ( !(isNaN(document.getElementById(inputId).value)) ) { // takes input into function if it is a number
			let userTimeVal = parseInt(document.getElementById(inputId).value);
			boolSwitchFocus ? minutes = userTimeVal : seconds = userTimeVal;
		} else { // default values for minutes/seconds, if improper input
			boolSwitchFocus ? minutes = 0 : seconds = 0;                           
		}
		if (boolSwitchFocus) { 
			document.getElementById(otherId).focus(); 
		}
		else {
			if ( !(isNaN(document.getElementById(otherId).value)) ) 
				minutes = parseInt(document.getElementById(otherId).value);
			timerStart(inputId,otherId);
			
		}
	}
}



function outputString(inputId,inputIdentifier){// handles output. takes in an ID, and an identifier to identify what variable will be output to that ID. independent of html
	if (inputIdentifier === "seconds"){
		if (seconds < 10){
			document.getElementById(inputId).value = `0${seconds}`;//simple formatting, so there is always another zero if minutes or seconds is a single digit.
		} else {
			document.getElementById(inputId).value = seconds;
		}
	} else if (inputIdentifier === "minutes"){
		if (minutes < 10){
			document.getElementById(inputId).value = `0${minutes}`;
		} else {
			document.getElementById(inputId).value = minutes;
		}
	}

}

function timerInterval(secondsId,minutesId){// function responsible for how the timer increments. the extra math in the if handles user input greater than 60 seconds on the next tick of setInterval()

	seconds++;
	if (seconds > 59){
		minutes += Math.floor(seconds / 60); // finds amount of minutes, less the remainder
		seconds -= (Math.floor(seconds / 60) * 60); // really just takes out multiples of 60 from seconds
	}
	outputString(secondsId, "seconds");
	outputString(minutesId, "minutes");

}//function handling what happens during the main setInterval(). seconds is complex in order to handle user input of over 1 minute in #seconds

/****************************************************************************/

/****************************************************************************/
// 4.  main function. most everything else is kind of a helper

function timerStart(secondsId,minutesId){//checks whether it should initialize the timer, clears the interval ID if there already is one, then calls setInterval(...) to start the timer
	if (!isPaused) {
		timerInitialize(secondsId,minutesId);
	}

	isPaused = false;

	if (intervalID) //initial intervalID is undefined
		clearInterval(intervalID);

	intervalID = setInterval( () => {timerInterval(secondsId,minutesId)}, 1000);
}






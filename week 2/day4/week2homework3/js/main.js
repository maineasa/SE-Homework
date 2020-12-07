var gradientArr = [["#0459b5","#b493ba"],["#00b7bd","#cef3f5"],["#62078a","#21078a"],["#24036b","#134870"]] //array of background-image gradients
var currItemColor = 3;
var seconds;
var minutes;
var intervalID; //stores the return value of setInterval()
var isPaused = false; //is it paused? no? then this is false


function itemColorOnClick(name){
	var arrDocItems = document.getElementsByClassName(name);

	currItemColor++;

	if (currItemColor > gradientArr.length - 1)
		currItemColor = 0;

	for(let i = 0; i < arrDocItems.length; i++){ //had to use a loop here, can't used forEach with an HTMLCollection. dunno what that is, but i definitely can't do it that way
		//console.log(gradientArr[currItemColor]);
		arrDocItems[i].style.backgroundImage = `linear-gradient(to top left, ${gradientArr[currItemColor][0]}, ${gradientArr[currItemColor][1]})`; //template literal makes changing the gradient easy
	}

	//Array.from(arrDocItems).forEach(value => value.style.backgroundColor = arrColor[currItemColor]);
	//[document.getElementsByClassName(name)].forEach( () => console.log(3));
}

function revertColorChange(name){//keeps gridItem from changing color by quickly reverting it after a click. applying this to #timer and #timerInputContainer so they're not annoying to interact with
	var arrDocItems = document.getElementsByClassName(name);

	currItemColor--;

	if (currItemColor < 0)
		currItemColor = gradientArr.length - 1;

	for(let i = 0; i < arrDocItems.length; i++){
		arrDocItems[i].style.backgroundImage = `linear-gradient(to top left, ${gradientArr[currItemColor][0]}, ${gradientArr[currItemColor][1]})`;	
	}

}

function timerInitialize(secondsId,minutesId,){


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

	outputString(secondsId);
	outputString(minutesId);
} //just initializes the timer when isPaused is false. see timerStart()

function timerInterval(secondsId,minutesId){

	seconds++;
	if (seconds > 59){
		seconds -= (Math.floor(seconds / 60) * 60);
		minutes++;		
	}
	outputString(secondsId, "seconds");
	outputString(minutesId, "minutes");

}//function handling what happens during the main setInterval(). seconds is complex in order to handle user input of over 1 minute in #seconds

function timerStart(secondsId,minutesId){
	if (!isPaused) {
		timerInitialize(secondsId,minutesId);
	}

	isPaused = false;

	if (intervalID)
		clearInterval(intervalID);

	intervalID = setInterval( () => {timerInterval(secondsId,minutesId)}, 1000);
}//starts the timer, will initialize minutes and seconds to 0 if isPaused is false.

function pauseTimer(){
	clearInterval(intervalID);
	isPaused = true;
} //isPaused is a bool that identifies whether timerStart should initialize the timer

function outputString(inputId,inputIdentifier){
	if (inputIdentifier === "seconds"){
		if (seconds < 10){
			document.getElementById(inputId).value = `0${seconds}`;
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

}//the idea here is that this function could be scaled to add hours, years, etc, or repurposed elsewhere. also used as a general output thing

function inputOnTimer(inputId,boolSwitchFocus,otherId,keypress){//not sure if keypress is necessary here?
	if (event.key === 'Enter') {
		if ( !(isNaN(document.getElementById(inputId).value)) ) {
			let userTimeVal = Number(document.getElementById(inputId).value);
			boolSwitchFocus ? minutes = userTimeVal : seconds = userTimeVal;
		} else {
			boolSwitchFocus ? minutes = 0 : seconds = 0;
		}
		console.log(minutes,seconds);
		if (boolSwitchFocus) { 
			document.getElementById(otherId).focus(); 
		}
		else {
			timerStart(inputId,otherId);
			window.focus();
		}
	}
}//boolSwitchFocus serves to purposes: to identify if the enter key should switch focus, and to identify that the user is currently typing in the #minutes field. it allows the function to have seconds or minutes as the first parameter

function resetTimer(secondsId,minutesId) {
	minutes = 0;
	seconds = 0;
	outputString(secondsId,"seconds");
	outputString(minutesId,"minutes");
	pauseTimer();
}//resets the timer
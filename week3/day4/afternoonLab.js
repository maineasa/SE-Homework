//numba 1

class Animal {

	constructor (name, age, color, legs, superPower) {
		this.name = name;
		this.age = age;
		this.color = color;
		this.legs = legs;
		this.superPower = superPower;
	}

	// addLegs() {
	// 	this.legs = true;
	// }

	// removeLegs() { //tentacles used for land transportation do not count as legs
	// 	this.legs = false;
	// }

	// userSuperPower() {
	// 	return this.superPower;
	// }
}

//a bit confused on the instructions: create the methods in or outside the class?


var jeff = new Animal("jeff", 35, "lime green", true, "being boring"); //jeff is pretty uninteresting, even regarding the fact he is now lime green.
var alien = new Animal("Conqueror of Earth", 1000000, "kinda gray, transluscent ish", false, "spits acid and absolute flame lyrics");

console.log(jeff.userSuperPower());

Animal.prototype.addLegs = function() { this.legs = true; };
Animal.prototype.removeLegs = function() { this.legs = false; };
Animal.prototype.userSuperPower = function() { return this.superPower; };


var jeffrey = new Animal("jeffrey", 35, "lime green", true, "being jeffs brother");
var donny = new Animal("donny", 35, "grayscale", true, "hot dog eating champ");

console.log(jeff.userSuperPower());


//task numba 2. i cannot create instances here, at least according to some thing at some point in the slides

class User{

	constructor (firstName, lastName, department) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.department = department;
	}

	changeDepartment (newDepartment) {
		this.department = newDepartment;
	}
}

var newEmployee = new User("Josh","Dunerigot","Social Media Outreach");
var oldTimer = new User("Daniella","Eskunirotupt","Sales");
var wasteOfMoney = new User("James","Should-be-Fired","Who Even Knows?");

newEmployee.changeDepartment("Junior Socila Media Outreach");
oldTimer.changeDepartment("Senior Sales");
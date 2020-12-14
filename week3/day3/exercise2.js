class Dog{
	//age expected to be in months
	constructor	(name,color,breed,age) { //after some debating, everything but age could be a number, depending on the use of the class
		this.name = name;
		if (typeof age == "number") { this.age = age; }
		else { this.age = 6; }
		this.color = color;
		this.breed = breed;
		this.isBarking = false;
		this.isHungry = false;
	}

	barking	(boolBarking) {
		if (boolBarking === true) { this.isBarking = true; }
		else if (boolBarking === false) { this.isBarking = false; }
	}

	hungry	(boolHungry) {
		if (boolHungry === true) { this.isHungry = true; }
		else if (boolHungry === false) { this.isHungry = false; }
	}

	setAge (age) {
		if ( !(isNaN(age))) {
			this.age = age;
		}
	}
}

const myDog = new Dog("Harley", "Tri-Color", "Hound mix");
const otherDog = new Dog("Langley", "Black","Labrador");
const otherOtherDog = new Dog(1234, "Calico", "A Cat?", "test");

myDog.barking(true);
myDog.setAge(130);
otherDog.barking("test");
otherOtherDog.hungry(true);

console.log(myDog);
console.log(otherDog);
console.log(otherOtherDog);
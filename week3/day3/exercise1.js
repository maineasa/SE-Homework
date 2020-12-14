class Person{ //just following along with an exercise here
	constructor	(){ //default constructor practice
		this.firstName = "Yorick";
		this.lastName = "Dearest";
	}
	/*constructor(firstName, lastName, country, city){ //constuctor input practice
		this.firstName = firstName;
		this.lastName = lastName;
		this.country = country;
		this.city = city;
	}*/

	greet	(otherPerson)	{
		console.log('hi '+ otherPerson +'!');
	}

	walk	()	{
		console.log('I am walking');
	}
}

const me = new Person("me","the guy","USA","cinci");
const you = new Person("you","a different guy","USA","cinci");
console.log(me);
console.log(you);
console.log(typeof me, typeof you);

me.greet("you");
me.walk();
you.greet("me");
you.walk();
class Fish{
	constructor() {
		this.canSwim = true;
	}

	swim () {
		return this.canSwim;
	}
}

class Neemo extends Fish{
	constructor() {
		super();

		this.color = "Orange, White, Black";
	}
}

/*

answers to the questions:

2. Abstract classes allow you to define abstract and non-abstract methods and deal more
concretely with the class's functionality, while interfaces only allow you to abstractly
define a method. Abstract classes can only be used once in a heirarchy, while interfaces
can be used multiple times. I don't entirely understand the point of interfaces, but it
seems as though they server an important organizational purpose. Also, interfaces can
only extend interfaces, while abstraact class can extend classes and interfaces.

3. If I understand the question correctly, only abstract classes allow you to
concretely define a method. Thus, abstract classes. 

*/
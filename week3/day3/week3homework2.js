/*

the objective of this homework was to make classes for Circle, Rectangle, and Square, and write area functions/a total sides function for these classes.
i added a parent class called shape these classes extend, just so i didn't have to rewrite the same function over and over. i glanced over the wiki article on 
the liskov substitution principle, and i think this follows that? don't know, it was easier though. i've been debating whether or not this could apply to 
Rectangle vs. Square, and i've decided it can't, specifically because the homework states that the area functions must be of a specific name. otherwise,
i'm still hesitant, as a square would not have both length and width. you could just have rectangle extend square (if the naming requirements weren't
present), which is an interesting thought. the parent-child relationship would be opposite of what it might conceptually be. or, you could just write a class
called parallelogram, and not worry about it. if things need to be lightweight though, i guess i could see have classes like square, where the prototype is
much simpler.

*/



class Shape {// since all classes need to use the total_sides() function, i thought it best to just make a parent class that has that function there. unsure if this was the best implementation.
	total_sides(){
		return this.sides;
	}
}

class Circle extends Shape {// a simple circle class
	sides = 1;
	constructor	(radius) {
		super();

		if (isNaN(radius) || radius < 0) { radius = 1; }// handles improper input, though i'm starting to think that i should just leave it alone and expect the programmer enters the proper data type

		this.radius = radius;
	}

	circle_area() {
		return Math.PI * Math.pow(this.radius,2);
	}
}

class Rectangle extends Shape{// a simple rectangle class
	sides = 4;
	constructor (length, width){
		super();

		if (isNaN(length) || length < 0) { length = 1; }
		if (isNaN(width) || width < 0) { width = 1; }

		this.length = length;
		this.width = width;
	}
	rectangle_area() {
		return this.length * this.width;
	}
}

class Square extends Shape { //weird, you could almost make rectangle extend square
	sides = 4;
	constructor (length) {
		super();

		if (isNaN(length) || length < 0) { length = 1; }

		this.length = length;
	}
	square_area(){
		return length * length;
	}
}

const myCircleOne = new Circle(1);
const myCircleTwo = new Circle(2);
const myCircleThree = new Circle(3);

const myRectangleOne = new Rectangle(1,1);
const myRectangleTwo = new Rectangle(2,2);
const myRectangleThree = new Rectangle(3,3);

const mySquareOne = new Square(1);
const mySquareTwo = new Square(2);
const mySquareThree = new Square(3);
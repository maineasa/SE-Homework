class ParClass {
	constructor(name,age) {
		this.name = name;
		this.age = age;
	}

	myMethod() {
		console.log(this.name,this.age);
	}
}
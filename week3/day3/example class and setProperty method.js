class Person {
  constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || true;
  }
  greet (otherPerson) {
    console.log('hi ' + otherPerson + '!');
  }
  setHair (hairColor) {
    this.hair = hairColor;
  }
  walk () {
    console.log('I hate when my Segway is in the shop.');
  }
}

const you = new Person('Matt', 36, 'blue', 'blonde');
console.log(you);
you.setHair('red');
console.log(you);

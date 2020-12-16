function MyProto1(name){
	this.name = name || "tester";
}

MyProto1.prototype.outputName = function() { console.log(this.name) };

function MyProto2(num){
	this.num = num || 11;
}

MyProto2.prototype.outputNum = function() { console.log(this.num) };

const myObj1 = new MyProto1("tester bot");
const myObj2 = new MyProto2(2);

myObj1.outputName();
myObj2.outputNum();

function myCombinedProto(){}

myCombinedProto.prototype = new MyProto1;

myCombinedObj = new myCombinedProto;

console.log(myObj1,myCombinedObj);
console.log("myCombinedObj.outputName:");
myCombinedObj.outputName;

function Employee(name, dept) {
  this.name = name || '';
  this.dept = dept || 'general';
}

function WorkerBee(projs) {
  this.projects = projs || [];
}
WorkerBee.prototype = new Employee;

var jane = new WorkerBee(["testProj"]);
WorkerBee.prototype.projs = ["no"];
console.log("WorkerBee jane testing: ");
console.log(jane);
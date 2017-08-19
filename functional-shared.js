var Button = function() {
	var obj = {};

	obj.count = 0;
	obj.press = buttonMethods.press;
	obj.pressCount = buttonMethods.pressCount;

	return obj;
};

var buttonMethods = {};

buttonMethods.press = function() {
	this.count++;
};

buttonMethods.pressCount = function() {
	return this.count;
};


var myButton = Button();
console.log('Button Obj:', myButton);

myButton.press();
myButton.press();

//WILL NOT overwrite method..
buttonMethods.press = function() {
	this.count += 5;
};

myButton.press();
console.log('Button Press Count:', myButton.pressCount());



//Create a new class to overwrite method..
var newButton = function(){
	var obj = Object.create(Button());

	obj.press = function() {
		this.count += 5;
	}

	return obj;
};

myNewButton = newButton();
myNewButton.press();

console.log('New Button Press Count:', myNewButton.pressCount());

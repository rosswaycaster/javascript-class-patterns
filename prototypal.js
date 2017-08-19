var Button = function() {
	var obj = Object.create(buttonMethods);

	obj.count = 0;

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

//WILL overwrite method..
buttonMethods.press = function() {
	this.count += 5;
};

myButton.press();
console.log('Button Press Count:', myButton.pressCount());

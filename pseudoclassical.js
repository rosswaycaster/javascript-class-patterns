var Button = function() {
	this.count = 0;
};

Button.prototype.press = function() {
	this.count++;
};

Button.prototype.pressCount = function() {
	return this.count;
};



var myButton = new Button();
console.log('Button Obj:', myButton);

myButton.press();
myButton.press();

//WILL overwrite method..
Button.prototype.press = function() {
	this.count += 5;
};

myButton.press();
console.log('Button Press Count:', myButton.pressCount());

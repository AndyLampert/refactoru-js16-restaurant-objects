// create Fooditem object
var Fooditem = function(name,calories,vegan,glutenFree,citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree; // instance variables or member variables
	this.citrusFree = citrusFree; // also just called 'properties'
};

// Fooditem.prototype.toString = function() {
// 	// var foodItemInfo = new String();
// 	// no calories var so we can just say this.calories directly
// 	return this.name + " has " + this.calories + " calories";
// 	// add other dietary info
// 	// when it uses type coercion tries to convert it to a string, it runs toString method internally
// };




var Food = function(name,calories,vegan,glutenFree,citrusFree) {
	// calls the superclass's constructor within the context of the current instance
	// ([first argument is the value of 'this'], arguments passed to function calling...)
	Fooditem.call(this,name,calories,vegan,glutenFree,citrusFree); // inheritance step 1
};

Food.prototype = new Fooditem(); // inheritance step 2
Food.prototype.constructor = Fooditem; // inheritance step 3

var veggieWrap = new Food('Vegetable Wrap', 200, true, false, true);
var pancakes = new Food('Pancakes', 300, false, false, true);
var orange = new Food('Orange', 50, true, true, false);

// current objective
// Define a toString method on the constructor's prototype. 
// It should return a string description of the food including its name, calories, and dietary information, formatted as you choose. toString should not have any side effects.
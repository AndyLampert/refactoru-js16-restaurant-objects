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

// part 2 of exercise
// creating constructors
var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
};
Plate.prototype.toString = function() {
	
	var plateItem = new String();
	return this.name;

		// var foodItemInfo = new String();
		// return this.name + " has " + this.calories + " calories." + "\n" + 
		// this.name + " is vegan? " + this.checkIfVegan() + "\n" + 

};

var Order =  function(arrayOfPlates) {
	this.arrayOfPlates = arrayOfPlates;
};

Order.prototype.toString = function() {
};

// current objective
// Define a toString method on the constructor's prototype. 
// It should return a string description of the food including its name, calories, and dietary information, formatted as you choose. toString should not have any side effects.

var Menu = function(arrayOfPlates) {
	this.arrayOfPlates = arrayOfPlates;
};
Menu.prototype.toString = function() {

};

var Restaurant = function(name, description, Menu) {
	this.name = name;
	this.description = description;
	this.Menu = Menu;
};
Restaurant.prototype.toString = function() {

};

var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
};
Customer.prototype.toString = function() {

};

Fooditem.prototype.toString = function() {
	var foodItemInfo = new String();
	return this.name + " has " + this.calories + " calories." + "\n" + 
		this.name + " is vegan? " + this.checkIfVegan() + "\n" + 
		this.name + " is gluten free? " + this.checkIfGlutenFree() + "\n" + 
		this.name + " is citrus free? " + this.checkIfCitrusFree() + "\n"; 
};

Fooditem.prototype.checkIfVegan = function(){
	if(this.vegan){
		return "Yes!";
	}
	else {
		return "No!";
	}
};

Fooditem.prototype.checkIfGlutenFree = function(){
	if(this.glutenFree){
		return "Yes!";
	}
	else {
		return "No!";
	}
};

Fooditem.prototype.checkIfCitrusFree = function(){
	if(this.citrusFree){
		return "Yes!";
	}
	else {
		return "No!";
	}
};

var steak = new Fooditem('Steak', 400, false, true, true);
var bread = new Fooditem('Bread', 80, true, false, true);
var orange = new Fooditem('Orange', 45, true, true, false);

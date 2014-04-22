// create Fooditem object
var Fooditem = function(name,calories,vegan,glutenFree,citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
};

// part 2 of exercise
// creating constructors
var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
};

var Order =  function(arrayOfPlates) {
	this.arrayOfPlates = arrayOfPlates;
};

var Menu = function(arrayOfPlates) {
	this.arrayOfPlates = arrayOfPlates;
};

var Restaurant = function(name, description, Menu) {
	this.name = name;
	this.description = description;
	this.Menu = Menu;
};

var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
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
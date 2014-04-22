// create Fooditem object
var Fooditem = function(name,calories,vegan,glutenFree,citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
};

Fooditem.prototype.toString = function() {
	var foodItemInfo = new String();
	return this.name + " has " + this.calories + " calories." + "\n" + 
		this.name + " is vegan? " + this.checkIfVegan() + "\n" + 
		this.name + " is gluten free? " + this.checkIfGlutenFree() + "\n" + 
		this.name + " is citrus free? " + this.checkIfCitrusFree() + "\n"; 


	// console.log("Is " + this.name + " vegan?: " + checkIfVegan);
	// this.name + " is " + glutenFree + " glutenFree" + "\n";
	// this.name + " is " + citrusFree + " citrusFree" + "\n";

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



// current objective
// Define a toString method on the constructor's prototype. 
// It should return a string description of the food including its name, calories, and dietary information, formatted as you choose. toString should not have any side effects.
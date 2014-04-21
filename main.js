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
	this.name + " has " + calories + " calories";
	return foodItemInfo;
};

var Food = function() {
	
};

Food.prototype = new Fooditem();
Food.prototype.constructor = Fooditem;

var veggieWrap = new Food('Vegetable Wrap', 200, true, false, true);
var pancakes = new Food('Pancakes', 300, false, false, true);
var orange = new Food('Orange', 50, true, true, false);



// current objective
// Define a toString method on the constructor's prototype. 
// It should return a string description of the food including its name, calories, and dietary information, formatted as you choose. toString should not have any side effects.
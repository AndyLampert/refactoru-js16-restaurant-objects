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
	this.name + " has " + calories + " calories" + "\n";

	"Is " + this.name + " vegan?" + checkIfVegan;
	this.name + " is " + glutenFree + " glutenFree" + "\n";
	this.name + " is " + citrusFree + " citrusFree" + "\n";


	return foodItemInfo;
};

Fooditem.prototype.checkIfVegan = function(){
	if(this.vegan){
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
// create Fooditem object
var Fooditem = function(name,calories,vegan,glutenFree,citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree; // instance variables or member variables
	this.citrusFree = citrusFree; // also just called 'properties'
};

var Food = function(name,calories,vegan,glutenFree,citrusFree) {
	// calls the superclass's constructor within the context of the current instance
	// ([first argument is the value of 'this'], arguments passed to function calling...)
	Fooditem.call(this,name,calories,vegan,glutenFree,citrusFree); // inheritance step 1
};

Food.prototype = new Fooditem(); // inheritance step 2
Food.prototype.constructor = Fooditem; // inheritance step 3

// part 2 of exercise
// creating constructors, setting properties of plate item
var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	// our list of food items. we want to loop through this.
	this.ingredients = ingredients;

	// go through each item that we're passing and create the missing data
	this.calories = 0;
	this.glutenFree = true;

	// item = whatever we're looping over. Arbitrary param name.
	ingredients.forEach(function(ingredientParam){
		this.calories += ingredientParam.calories;
		
		// if input param is NOT glutenfree
		// if one of ANY of the items is not gluten free, then the whole plate is NOT gluten free
		if (!ingredientParam.glutenFree) {
			this.glutenFree = false; // if the ingredientParam IS NOT glutenfree, make the Plate also not GlutenFree
		}
		if (!ingredientParam.vegan) {
			this.vegan = false;
		}
		if (!ingredientParam.citrusFree){
			this.citrusFree = false;
		}
	});
};

// to make it readable, turning obj to a string?
// turning our constructors to strings
Fooditem.prototype.toString = function() {
	var foodItemInfo = new String();
	return this.name + " has " + this.calories + " calories." + "\n" + 
	this.name + " is vegan? " + this.checkIfVegan() + "\n" + 
	this.name + " is gluten free? " + this.checkIfGlutenFree() + "\n" + 
	this.name + " is citrus free? " + this.checkIfCitrusFree() + "\n"; 
};

Plate.prototype.toString = function() {
	var plateItem = new String();
	return this.name;
	// var foodItemInfo = new String();
	// return this.name + " has " + this.calories + " calories." + "\n" + 
	this.name + " is vegan? " + this.checkIfVegan() + "\n";

};

var Order = function(arrayOfPlates) {
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

// creating food items. will pass in as ingredients for plates
// params are ('name', calories, vegan, glutenFree, CitrusFree)
var steak = new Fooditem('Steak', 400, false, true, true);
var bread = new Fooditem('Bread', 80, true, false, true);
var orange = new Fooditem('Orange', 45, true, true, false);
var tortilla = new Fooditem('Tortilla', 100, true, false, true);
var lettuce = new Fooditem('Lettuce', 20, true, true, true);
var radish = new Fooditem('Radish', 30, true, true, true);
var garlic = new Fooditem('Garlic', 1, true, true, true);
var avocado = new Fooditem('Avocado', 80, true, true, true);
var apple = new Fooditem('Apple', 35, true, true, false);
var cheese = new Fooditem('Cheese', 150, false, true, true);
var beans = new Fooditem('Black beans', 80, true, true, true);
var lime = new Fooditem('lime', 10, true, true, false);
var tomato = new Fooditem('sliced tomato', 15, true, true, true);

// creating plates. these will make up our menu
var veggieBurrito = new Plate('non-meaty burrito', 'burrito with no meat', [tortilla, lettuce, garlic, avocado, cheese, lime]);
var steakBurrito = new Plate('Burrito', 'Who doesn\'t love burritos?', 10.00, [steak, tortilla, lettuce, garlic, avocado, cheese, lime]);
var burritoBowl = new Plate('Burrito Bowl', 'Burrito without the gluten bs', 8.00, [steak, lettuce, garlic, avocado, cheese]);
var salad = new Plate('Simple Salad', 'just veggies', 6.00, [lettuce, radish, cheese]);
var steakSalad = new Plate('Steaky Salad', 'Meaty salad', 12.00, [steak, lettuce, garlic, cheese, radish]);
var fruitSalad = new Plate('Fruit Salad' [lettuce, radish, orange, apple]);


















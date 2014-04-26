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

	var dietaryInfo = function(){
	// need to create variables that will be returned
	// calories, vegan, GF, CF
	var calories = 0;
	var vegan = true;
	var glutenFree = true;
	var citrusFree = true;

	// ingredientParam = whatever we're looping over. Arbitrary param name.
		ingredients.forEach(function(ingredientParam){
			calories += ingredientParam.calories;
			console.log(ingredientParam.calories);
			// if input param is NOT glutenfree
			// if one of ANY of the items is not gluten free, then the whole plate is NOT gluten free
			if (!ingredientParam.vegan) {
				vegan = false;
			}
			if (!ingredientParam.glutenFree) {
				glutenFree = false; // if the ingredientParam IS NOT glutenfree, make the Plate also not GlutenFree
			}
			if (!ingredientParam.citrusFree){
				citrusFree = false;
			}
		});
		// we're going to want to return values here
		// create an object, return object of values (4 things)
		// calories, vegan, GF, CTs
		return {
			calories: calories,
			vegan: vegan,
			glutenFree: glutenFree,
			citrusFree: citrusFree
		}


	};

	// console.log(dietaryInfo());
	//code below saves the return value object in dietCall
		//steakBurrito.calories();  
		//logs 761
	var dietCall = dietaryInfo();
	this.calories = dietCall.calories;
	this.vegan = dietCall.vegan;
	this.glutenFree = dietCall.glutenFree;
	this.citrusFree = dietCall.citrusFree;
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
	return 
		// report name
		
		// report description
		
		// report calories
		this.name + " has " + this.calories + " calories." + "\n" + 
		// report vegan status
		this.name + " is vegan? " + this.checkIfVegan() + "\n";
		// report 
		// this.name + 

};

//setting up constructors for part 2
// var Drink = new Fooditem

// setting up the order for part 2
var Order = function(arrayOfPlates) {
	this.arrayOfPlates = arrayOfPlates;
};

Order.prototype.toString = function() {

};

// setting up menu for part 2
var Menu = function(arrayOfPlates) {
	this.arrayOfPlates = arrayOfPlates;
};
Menu.prototype.toString = function() {

};

// setting up restaurant for part 2
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
var beans = new Fooditem('Black Beans', 80, true, true, true);
var lime = new Fooditem('Lime', 10, true, true, false);
var tomato = new Fooditem('Sliced Tomato', 15, true, true, true);
var onion = new Fooditem('Onion', 25, true, true, true);
var salt = new Fooditem('Salt', 0, true, true, true);
// var tequila


// creating plates. these will make up our menu
var veggieBurrito = new Plate('non-meaty burrito', 'burrito with no meat', 7.00, [tortilla, lettuce, garlic, avocado, cheese, lime]);
var steakBurrito = new Plate('Burrito', 'Who doesn\'t love burritos?', 10.00, [steak, tortilla, lettuce, garlic, avocado, cheese, lime]);
var burritoSteakBowl = new Plate('Burrito Bowl', 'Burrito without the gluten bs', 8.00, [steak, lettuce, garlic, avocado, cheese]);
var salad = new Plate('Simple Salad', 'just veggies', 6.00, [lettuce, radish, cheese]);
var steakSalad = new Plate('Steaky Salad', 'Meaty salad', 12.00, [steak, lettuce, garlic, cheese, radish]);
var fruitSalad = new Plate('Fruit Salad','a fruity salad', 8.00, [lettuce, radish, orange, apple]);
var guacamole = new Plate('Guacamole', 'the best guac in the world', 8.00, [avocado, tomato, salt, onion, garlic, lime]);
// constructor definition
// var Fooditem = function(name,calories,vegan,glutenFree,citrusFree)
// var Plate = function(name, description, price, ingredients)















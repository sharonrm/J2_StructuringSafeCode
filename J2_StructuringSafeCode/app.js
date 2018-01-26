//var g points to the Greeter function
//gets a new object
var g = G$('John','Doe')
console.log(g);

//use chainable methods
g.greet().setLang('es').greet(true).log();


$('#login').click(function(){


	// Create a new Greetr object - we're pretending that we know the login information
	var giveGreeting = G$('John', 'Doe');

	//hiding the interface, don't need to do this.
	$('#logindiv').hide();

	//check the language chosen in the select box, chain the methed, updates the h1, true will
	//give a formal greeting and then it will log to the console.
	giveGreeting.setLang($('#lang').val()).HTMLgreeting('#greeting', true).log();

	//EXTRA PRACTIVE - add support for another language, add some alternative greetings, add some 
	//hew methods


})


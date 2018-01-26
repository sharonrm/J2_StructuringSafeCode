//IIFE ESTABLISHES SAFE CODE
(function(global, $){

//'new' an object
var Greetr = function(firstName, lastName, language) {
	return new Greetr.init(firstName, lastName, language);
}

//hidden within the scope of the IIFE and never accessible
var supportedLang = ['en', 'es'];

greetings = {

	en: 'Hello',
	es: 'Hola'
};

formalGreetings ={

	en: 'Greetings',
	es: 'Saludos'
};

var logMessage = {
	en: 'Logged in',
	es: 'Inicio sesion'
}


Greetr.prototype = {

	fullName: function(){
		return this.firstName + ' ' + this.lastName; 
	},

	validate: function(){

		//this.language will point to the object it's calling.
		if (supportedLang.indexOf(this.language) === -1) {
			throw 'invalid Language';
		}
	},

	greeting: function(){
		return greetings[this.language]+ ' ' + this.firstName + '!';
	},

	formalGreetings: function(){
		return formalGreetings[this.language] + ', ' + this.fullName();
	},

	greet: function(formal){
			var msg;
			//if undefined or null this will coerce to 'false'
			if(formal) {
				msg = this.formalGreetings()
			} else {
				msg = this.greeting();

				//outputs to the console 
			} if (console) {
				console.log(msg)
			}

		//refers to the calling ofject at execution time
		//makes the method chainable
		return this;
	},

	log: function(){
		if(console){
			console.log(logMessage[this.language] + ': ' + this.fullName());
		}

		return this;
	},

	setLang: function(lang){
		this.language = lang;

		this.validate();

		return this;

	},

	HTMLgreeting: function(selector, formal){
		if(!$) {
			throw 'jQuery not loaded'; 
		}

		if(!selector){
			throw 'Missing jQuery selector';
		}

		var msg;
		if (formal) {
			msg = this.formalGreetings();
		} else {
			msg = this.greetings();
		}

		//updates the value
		$(selector).html(msg);

		//making it chainable
		return this;
	}

};  


//the actual object is created here, allowing us to 'new' an object
//without calling new.
Greetr.init = function(firstName, lastName, language) {

	//
	var self = this;
	self.firstName = firstName || '';
	self.lastName = lastName || '';
	self.language = language || 'en'

	self.validate();
};

//trick from jquery so we dont need to call 'new keyword'
Greetr.init.prototype = Greetr.prototype;


//These 2 names point to the Greetr object attaching it to the global object
global.Greetr = global.G$ = Greetr;

}(window, $))
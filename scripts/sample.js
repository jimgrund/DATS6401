//document.write("Tea time");

/*
var x=9, y=10;

document.write("<h1> Sum of x and y is: " + (x+y) + "</h1>");

var a=9, b-0;

document.write("<h1> a/b is: " + (a/b) + "</h1>");
*/

/*
var collection = [9,10,'Bugs Bunny',"Daffy Duck"];

document.write(collection[2]);
*/

/*
//functions and conditionals
function max(a,b) {
	if (a > b) {
		document.write("a is greater than b");
	} else {
		document.write("b is greater than or equal to a");
	}
} // max function

max(21,38);
*/

// anonymous function; these are assigned to variables
/*
var product=(function() {
	var x=3, y=4;
	alert(x*y);
}
);

product();
*/

// for-loops
/*
document.write("<h2>Products</h2>");
for (i=1; i<=10; i++) {
	document.write("<p>" + i + " " + (i*i) + "</p>");
}
*/


// Objects

/*
// Method 1 creation

var player1 = new Object();
player1.name = "Bugs Bunny";
player1.email = "bbunny@gwu.edu";

var player2 = new Object();
player2.name = "Daffy Duck";
player2.email = "dduck@gwu.edu";

document.write(player1.name + " " + player1.email);

function showPlayerInfo() {
	document.write(this.name + " " + this.email);
} // showPlayerInfo

player1.showInfo = showPlayerInfo;
player2.showInfo = showPlayerInfo;

player1.showInfo();



// Method 2 creation

player3 =  { name:"Porky Pig", email:"ppig@gwu.edu"};
player3.showInfo = showPlayerInfo;

player3.showInfo();
*/


// Reading the Document Object Model (DOM) elements

//grab a single element and analyze italics
/*
var myLogo = document.getElementById("logo");
document.write("<p>Node type is " + myLogo.nodeType + "</p>");
document.write(myLogo.innerHTML);  // html version of data in tag
document.write(myLogo.innerText);  // text-only, no html tags
document.write("<p> Number of children is " + myLogo.childNodes.length + "</p>");
*/

// how many link tags on the page?
/*
var navItems = document.getElementsByTagName("a");
document.write("<o> Total links are: " +navItems.length + "</p>");

for (i=0; i<navItems.length; i++) {
	document.write("<p> " + navItems[i].innerHTML + "</p>");
}
*/

//changing DOM elements 
/*
//array of all h1s
var main = document.getElementById("main");
var arrayOfH1s = main.getEGNam("h1");
arrayOfH1s[0].innerHTML = "Creative | Design";
arrayOfH1s[1].innerHTML = "Play Here";
*/

//creating DOM elements
/*
var newHeading = document.createEelement("h1");
var newParagraph = document.createElement("p");

//to add content, either use innerHTML...
newHeading.innerHTML = "Did you know?";
newParagraph.innerHTML = "Javascript has nothing to do with Java?";

//...OR create childnodes manually...
var h1Text = document.createTextNode("Did you know?");
var paraText = document.createTextNode("JavaScript has nothing to do with Java?");
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);


//...and then attachit to the document
document.getElementById("attach_here").appendChild(newHeading);
document.getElementById("attach_here").appendChild(newParagraph);
*/



//click and load events
/*
document.onclick = function() {
	alert("You clicked");
}
*/

/*
function prepareEventHandlers() {
	var myLogo = document.getElementById("logo");
	myLogo.onclick = function() {
		alert("You clicked the logo");
	}
}

window.onload = function() {
	prepareEventHandlers();
}
*/


// Focus and Blur events
/*
var emailField = document.getElementById("your_email");

emailField.onfocus = function() {
	if (emailField.value == "Your Email") {
		emailField.value = "";
	}
}

emailField.onblur = function() {
	if (emailField.value == "") {
		emailField.value = "Your Email";
	}
}
*/


//Timers

//setTimeout and setInterval; (single/repeating)

function simpleMessage() {
	alert("It really is coffee time");
}

setTimeout(simpleMessage, 5000); // in milliseconds


//Slideshow
var myImage = document.getElementById("mainImage");
var imageArray = ['style/images/image01.jpg', 'style/images/image02.jpg',
				  'style/images/image03.jpg', 'style/images/image04.jpg'];


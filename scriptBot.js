//Check if user is on a mobile device
var mobile = isMobileDevice();
if (mobile) {
	window.addEventListener("ontouchstart", clickClack);
//do something here
}



//initializations
var userInput;
var libraryDiv = document.getElementById("libraryDiv");
libraryDiv.style.display = "none";
window.addEventListener("keypress", returnKeyListener);
let cycle = 0;

main();

async function main(){
fancyPrint("William's TweetBot^^Enter your name: ");

takeInput().then(function () { 
	//document.getElementById("paragraph").textContent += "entered .then";
	createLibrary(userInput); 
	fancyPrint("Welcome " + userInput);

} );

}// end of main

function createLibrary(name) {
	//document.getElementById("paragraph").textContent += "entered CreateLibrary";
	document.getElementById("libraryDiv").style.display = "block";
	document.getElementById("library").textContent = "User: " + name;

}



//read in files
var textFiles = ["adjectives.txt", "Beginning.txt", "cycleprompts.txt", "endings.txt", "opening.txt", "people.txt", "t2endings.txt", "t3endings.txt"];
var adjectives = [];
var Beginning = [];
var cycleprompts = [];
var endings = [];
var opening = [];
var people = [];
var t2endings = [];
var t3endings = [];

var counter = 0;
for(var i = 0; i < textFiles.length; i++){
	var path = textFiles[i];


readFiles("/textFiles/" + path).then(function(data) { 
	switch(counter){
		case 0:
			adjectives = data.split("\n");
			//document.getElementById("paragraph").textContent += "adjectives: " + adjectives;
			counter = counter +1;
			break;
		case 1:
			Beginning = data.split("\n");
			//document.getElementById("paragraph").textContent += "Beginning: " + Beginning;
			counter = counter +1;
			break;
		case 2:
			cycleprompts = data.split("\n");
			//document.getElementById("paragraph").textContent += "cycleprompts: " + cycleprompts;
			counter = counter +1;
			break;
		case 3:
			endings = data.split("\n");
			//document.getElementById("paragraph").textContent += "endings: " + endings;
			counter = counter +1;
			break;
		case 4:
			opening = data.split("\n");
			//document.getElementById("paragraph").textContent += "opening: " + opening;
			counter = counter +1;
			break;
		case 5:
			people = data.split("\n");
			//document.getElementById("paragraph").textContent += "people: " + people;
			counter = counter +1;
			break;
		case 6:
			t2endings = data.split("\n");
			//document.getElementById("paragraph").textContent += "t2endings: " + t2endings;
			counter = counter +1;
			break;
		case 7:
			t3endings = data.split("\n");
			//document.getElementById("paragraph").textContent += "t3endings: " + t3endings;
			counter = counter +1;
			break;
		default:
			document.getElementById("paragraph").textContent += ("hit default in switch, counter = " + counter);
	}
	
	

})
.catch(function(people){
	console.log("error");
})

}//end of for loop

function readFiles(path, callback){
	return new Promise(function(resolve, reject, counter) {
		var  people = new XMLHttpRequest();
		people.open("GET", path);
		people.onreadystatechange = function(){
    
			if (people.readyState == 4) {
				if (people.status == 200){
					resolve(people.responseText);
				}else {
        document.getElementById("paragraph").textContent += "rejected promise with status " + people.status;
					reject(people);
				}
			}
			
		};
		people.open("GET", path);
		people.send();
	});//end of promise function
	
}
	




//echo the typed input
function echo(rawCharacter) {
	document.getElementById("paragraph").textContent += rawCharacter;
	
}






//print with delay
var letter = a;
function fancyPrint(string) { 
	var i;
	for(i = 0; i < string.length; i++){
		letter = string.charAt(i);
		print(letter, i);

	}

}
function print(letter, i){
	var delay = i*110;
	if(letter == "^"){
		setTimeout(function () {document.getElementById("paragraph").innerHTML += "\n";}, delay);
	}
	else {
		setTimeout(function () { document.getElementById("paragraph").innerHTML += letter; }, delay);
	}
	}


function deluxePrint(tweet){

	let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',' ', ',', "'", ';'];
	
	var realText = tweet.toLowerCase().split("");
	//document.getElementById("paragraph").textContent += "tweet: " + realText;
	var length = tweet.length;
	
	var filler = new Array(length);
	
	filler.fill("*");
	//document.getElementById("paragraph").textContent += "filler = " + filler.toString();
	var correctLetter;
	var currentVersion = filler;

	

		for(x = 0; x < realText.length; x ++){
			
				for(y = 0; y < alphabet.length; y++){
					
						currentLetter = alphabet[y];
						letter = realText[x];
						if(currentLetter == letter){
							
							correctLetter = currentLetter;
							filler[x] = correctLetter;
							currentVersion = filler.join("");
							//document.getElementById("paragraph").textContent += currentVersion;
							flipflip(currentVersion, x, y);
							break;
						} else if(y < 27) {
							filler[x] = currentLetter;
							currentVersion = filler.join("");
							//document.getElementById("paragraph").textContent += currentVersion;
							flipflip(currentVersion, x, y);
							
						} else {
							filler[x] = letter;
							currentVersion = filler.join("");
							flipflip(currentVersion, x, y);
						}
				
				}
			 
		}

}

function flipflip(toPrint, x , y) {
			setTimeout(function () {
					document.getElementById("tweetSpace").textContent = toPrint;

			}, y*20 + x*100);

}




	function preGenerate(callback) {
		let thinkPromise = new Promise(function(resolve, reject) {
				let i = 2000;
				fancyPrint("Thinking...");
				setTimeout(function () { document.getElementById("paragraph").textContent = "";}, i);
				i = 2500;
				setTimeout(function () { fancyPrint("^^Thinking...");}, i);
				i = 4500;
				setTimeout(function () { document.getElementById("paragraph").textContent = "";}, i);
				i = 5000;
				setTimeout(function () { fancyPrint("^^^^Praying to God...");}, i)
				i = 8000;
				setTimeout( function () {document.getElementById("paragraph").textContent = ""; }, i);
				i = 9000;
				setTimeout(function () { resolve("done");}, i);
		});
		thinkPromise.then(function(result){ generate(userInput, cycles);});
	}


//generate the string
function generate(){
	userInput = "";
	cycle ++;
	
	
	var type = Math.floor((Math.random() * 3) + 1);
	//document.getElementById("paragraph").textContent += "^ type = " + type;
	
	switch(type){
	case 0:
		type1();
		break;
	case 1:
		type2();
		//document.getElementById("paragraph").textContent += "switched on type " + type;
		break;
	case 2:
		type3();
		//document.getElementById("paragraph").textContent += "switched on type " + type;
		break;
	case 3:
		type4();
		//document.getElementById("paragraph").textContent += "switched on type " + type;
		break;
	default:
		document.getElementById("paragraph").textContent += ("hit default in type switch, type = " + type);
}
	
}

function postGenerate(){
		fancyPrint("^^Would you care for another? (Y/n)");
		takeInput().then(function () {
			if(userInput == "Y"||"y"){
					if(cycle == 3){
						fancyPrint("My, what an appetite you have");
						generate();
					} else{
						generate();
					}

			}else {
				fancyPrint("bye");
			}


		});

		

}


function type1(){
	
	var pt1 = people[Math.floor(Math.random() * people.length)];
	var pt2 = endings[Math.floor(Math.random() * endings.length)];
	

	var final = "The " + pt1 + "of " + pt2;
	deluxePrint(final);
	postGenerate();
}

function type2(){
	var pt1 = adjectives[Math.floor(Math.random() * adjectives.length)];
	var pt2 = adjectives[Math.floor(Math.random() * adjectives.length)];
	var pt3 = t2endings[Math.floor(Math.random() * t2endings.length)];

	var final = pt1 + ", " + pt2 + " " + pt3;
	deluxePrint(final);
	postGenerate();
}

function type3(){
	var pt1 = Beginning[Math.floor(Math.random() * Beginning.length)];
	var pt2 = t3endings[Math.floor(Math.random() * t3endings.length)];

	var final = pt1 + pt2;
	deluxePrint(final);
	postGenerate();
}

function type4(){
	
	//var godname = 
	//var final = "Are you there God? It's me, " + godname;
	deluxePrint(final);
	postGenerate();
}


//Processing keyboard input
function returnKeyListener(event){
	//var userInput = "";
		 
	    	if(event.keyCode != 13) { // 13 is the numerical key code for "enter"
		  			var rawCharacter = String.fromCharCode(event.keyCode);
	
	      		if(event.shiftKey) {
	        		userInput += rawCharacter.toUpperCase();
	        		echo(rawCharacter);
	      		}
	      		else {
	        		userInput += rawCharacter.toLowerCase();
	        		echo(rawCharacter);
	      		}
	    	}
			else {    // The user has hit enter, instead of another key
				document.getElementById("paragraph").textContent = "";
				preGenerate();
				userInput = "";
			}
	
}

async function takeInput(){
	var captureInput = new Promise(function (resolve) {
		userInput = "";
		//document.getElementById("paragraph").textContent += "entered promise";
		window.removeEventListener("keypress", returnKeyListener);
		window.addEventListener("keypress", function input(event) {
			
				//document.getElementById("paragraph").textContent += "entered promise while loop";
			if(event.keyCode != 13){
				var rawCharacter = String.fromCharCode(event.keyCode);
					
					if(event.shiftKey) {
						userInput += rawCharacter.toUpperCase();
						echo(rawCharacter);
						
					}
					else {
						userInput += rawCharacter.toLowerCase();
						echo(rawCharacter);
					}
			}
			
			if (event.keyCode == 13) {
				window.removeEventListener("keypress", input);
				// document.getElementById("paragraph").textContent += "leaving promise";
				window.addEventListener("keypress", returnKeyListener);
				resolve();
			}
		 
		},);//end of keylistener
	
	});//end of promise
	
	return captureInput;
	}// end of takeInput

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function clickClack(event){
	document.getElementById("paragraph").textContent += "entered clickClack";
	document.getElementById("paragraph").focus();
}
var guesses = 0;
var wins = 0;
var losses = 0;
var planets = ["earth", "mars", "saturn", "uranus", "mercury", "neptune", "jupiter", "venus"]
var dashes = [];
var compRandom = [];
var guessCompare = "";

function main () {
	keyPress = [];
	guesses = 8
	compRandom = planets[Math.floor(Math.random() * planets.length)]; //randomize the planets array
	//console.log (compRandom);
	dashes = compRandom.replace (/ /g,"9").replace(/\D/g, "_").replace(/9/g, '-');  //hide word with dashes
	document.getElementById("hidden").innerHTML = dashes; //write the word on html page
	splitWord = compRandom.split("");

	}

main();

document.onkeyup = function(event) {
	var keyPress = event.key
	document.getElementById("guess").innerHTML = keyPress
}

function compare () {
	for (var i=0; 1< splitWord.length; i++) {
		if (compRandom[i] === keyPress) {
			document.getElementById("hidden").innerHTML =keyPress.join (" ");
		}
	}
	

	console.log (keyPress)

}

		// guessCorrect = "";
  // 			for(var i=0; i < movieTitleArray.length; ++i){
  //     			guessCorrect = (guessCorrect + movieTitleArray[i] + " ");
 	// 		};
  // 		/*console.log("outside: " + guessCorrect);*/
  // 		document.getElementById("movie").innerHTML = guessCorrect;

	//guessCompare = ""
	//	for (var i=0; 1< compRandom.length; i++){
	//		guessCompare = (guessCorrect + compRandom[i] + " ");
	//	}
	//console.log (guessCompare);
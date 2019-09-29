var numSquare = 6;
var colors = getRandomColors(numSquare);			//["rgb(0, 0, 255)", rgb(255, 0, 0), rgb(0, 255, 0)];
var squares = document.querySelectorAll(".square");
var pickedColor = pickColorRandom();		//colors[3]; manually selected
var colorDisplay = document.getElementById("colorDisplay");
var display = document.querySelector("#display"); 
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial color to squares
 squares[i].style.backgroundColor = colors[i];
 	// add click listener to squares
 	squares[i].addEventListener("click", function() {
 		// grab color of clicked square
 		var clikedColor = this.style.backgroundColor;
 		// Compare color to pickedColor
 		if(clikedColor === pickedColor){
 			display.textContent = "Correct!";
 			resetbutton.textContent = "Play Again";
 			colorChange(clikedColor);
 			h1.style.backgroundColor = pickedColor
 		} else {
 			this.style.backgroundColor = "#232323";
 			display.textContent = "Try Again!";
 		}
 	});
}

function colorChange(color) {
	// loop through all the squres
	for (var i = 0; i < squares.length; i++) {
				// chnage each color to match given color 
 				squares[i].style.backgroundColor = pickedColor;
 			}
}

function pickColorRandom() {
	  // pick within the colors array
	  var random = Math.floor(Math.random() * colors.length);
	  return colors[random];
}

function getRandomColors(num) {
	// make an array
	var arr = [];
	// repeat num times
	for (var i = 0; i < num; i++) {
	// get randomColor and push it to array
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor() {
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256)
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256)
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256)
	// return to getRandomColors
	return "rgb(" + r + ", " + g + ", " + b + ")";	// "rgb(0, 56, 255);"
}

resetbutton.addEventListener("click", function() {
	// generate all new colors
		//numSquare = 6; //when easy mode its 3 so we use numSquare 
		colors = getRandomColors(numSquare);
	// pick a new random color from array
		pickedColor = pickColorRandom();
	// change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
	// change colors of squares
		for (var i = 0; i < squares.length; i++) {
 			squares[i].style.backgroundColor = colors[i];
 		}

 		h1.style.backgroundColor = "steelblue";
		resetbutton.textContent = "New Colors";
 		display.textContent = "";

});


easyBtn.addEventListener("click", function() {
		easyBtn.classList.add("selected");
		hardBtn.classList.remove("selected");
		//hide last 3 squares
		numSquare = 3;
		colors = getRandomColors(numSquare);
		pickedColor = pickColorRandom();
		colorDisplay.textContent = pickedColor;
		for (var i = 0; i < squares.length; i++) {
			if(colors[i]){
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
			}

		}
		h1.style.backgroundColor = "steelblue";
		resetbutton.textContent = "New Colors";
 		display.textContent = "";
});

hardBtn.addEventListener("click", function() {
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
		numSquare = 6;
		colors = getRandomColors(numSquare);
		pickedColor = pickColorRandom();
		colorDisplay.textContent = pickedColor;
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		h1.style.backgroundColor = "steelblue";
		resetbutton.textContent = "New Colors";
 		display.textContent = "";
});
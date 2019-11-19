var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var resetbutton = document.getElementById("reset");
var p1display = document.getElementById("p1display");
var p2display = document.getElementById("p2display");
var numInput = document.querySelector("input");
// var numInput = document.querySelector("input[type='number']")
var winningScoreDisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningScore = 5;

p1button.addEventListener("click",function() {
	if (!gameover) {
  	 p1score++;
  	 if (p1score === winningScore) {
  	 	gameover=true;
  	 	console.log("GAME OVER!!");
  	 	console.log("Player 1 WON!!");
  	 	p1display.classList.add("winner"); //winner is a class name of CSS style
  	 	// p1display.style.color = "green";
  	 }
  	 p1display.textContent = p1score;
	}
});

p2button.addEventListener("click",function() {
	if(!gameover){
		p2score++;
		if(p2score == winningScore){
			gameover = true;
			console.log("GAME OVER!!");
  	 		console.log("Player 2 WON!!");
  	 		p2display.classList.add("winner"); //winner is a class name of CSS style
  	 		// p2display.style.color = "green";
		}
	p2display.textContent = p2score; 
	}
});

resetbutton.addEventListener("click", function() {
	location.reload();	//to reload the current page
	// reset();
});

function reset() {
	p1score=0;
	p2score=0;
	gameover=false;
  	p1display.textContent = p1score;
  	p2display.textContent = p2score;
  	p1display.classList.remove("winner"); //winner is a class name of CSS style
  	p2display.classList.remove("winner"); //winner is a class name of CSS style
}

numInput.addEventListener("change", function() {

	winningScoreDisplay.textContent = this.value;
	winningScore=Number(this.value);
	// winningScoreDisplay.textContent = numInput.value;
	// winningScore=Number(numInput.value);
	
	 reset();
	
});
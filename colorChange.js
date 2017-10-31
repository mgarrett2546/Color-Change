var numSquares=6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newGame = document.querySelector("#newGame");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard")


colorDisplay.textContent = pickedColor;



for(var i= 0; i<squares.length; i++){
	//add colors to squares 
	squares[i].style.backgroundColor = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color of clicked square to picked color
		if(clickedColor === pickedColor){
			message.textContent = "Correct!";
			h1.style.backgroundColor = clickedColor;
			newGame.textContent = "Play Again";
			changeColors(clickedColor);
			}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}
	});
}
newGame.addEventListener("click",function(){
 	//generate new colors
 	colors = generateRandomColors(numSquares);
 	//pick new color from array
 	pickedColor = pickColor();
 	//display new color
 	colorDisplay.textContent = pickedColor;
 	//change button back to new game
 	newGame.textContent = "New Colors";
 	message.textContent = "";
 	//change color display
 	for(var i= 0; i<squares.length; i++){
	//add colors to squares 
	squares[i].style.backgroundColor = colors[i];
}
	h1.style.backgroundColor = "steelblue";
});

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
 	//pick new color from array
 	pickedColor = pickColor();
 	message.textContent = "";
 	//display new color
 	colorDisplay.textContent = pickedColor;
 	//change color display
 	for(var i= 0; i<squares.length; i++){
	//add colors to squares 
	if(colors[i]){
	squares[i].style.backgroundColor = colors[i];
	}else {
		squares[i].style.display = "none";
	}
}
	h1.style.backgroundColor = "steelblue";
});

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
 	//pick new color from array
 	pickedColor = pickColor();
 	//display new color
 	colorDisplay.textContent = pickedColor;
 	message.textContent = "";
 	//change color display
 	for(var i= 0; i<squares.length; i++){
	//add colors to squares 
	squares[i].style.backgroundColor = colors[i];
	squares[i].style.display = "block";
	}

	h1.style.backgroundColor = "steelblue";
});

function changeColors(color){
	
			for(var i= 0; i<squares.length; i++){
				//add colors to squares 
				squares[i].style.backgroundColor = color;
			}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors array
	for(var i =0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a red
	var r = Math.floor(Math.random()*256);
	//pick a green
	var g = Math.floor(Math.random()*256);
	//pick a blue
	var b = Math.floor(Math.random()*256);

	return rgb = "rgb("+ r +", "+ g +", "+ b +")";
}
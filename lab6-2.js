//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX
//alert("test");//COMMENT OUT AS SOON AS YOU KNOW YOU ARE CONNECTED!!!!

//LISTEN FOR load EVENT

window.onload = pageLoaded;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageLoaded(){
	//GET DOM ELEMENTS WE'LL NEED
	var mysteryBox = document.getElementById("mysteryBox");
	var buttonBox = document.getElementById("buttonBox");

	//SETUP LISTENERS
	mysteryBox.onmouseover = dubiousQuestion;
	buttonBox.onclick = buttonBoxClicked;

	//====CREATE THE FUNCTIONS WE'LL NEED====

	//FUNCTION TO ASK USER
	function dubiousQuestion(){
		var userInput = confirm("Do you want to see something?");

		if(userInput === true){
			mysteryBox.style.display = "none";
			buttonBox.style.display = "block";
		}
	}
	//FUNCTION TO CHANGE buttonBox
	function buttonBoxClicked(){
		buttonBox.style.width = "600px";
		buttonBox.innerHTML = "<h2>SURPRISE!!</h2>";
		buttonBox.style.backgroundColor = "orange";
	}
}










//END onload FUNCTION
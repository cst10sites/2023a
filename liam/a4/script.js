var clicks = 0;
var StartTime = new Date();

function Clicked (){
	if (clicks == 0){
		clicks++;
		document.getElementById("ClicksM").innerHTML = clicks;

	} else {
		clicks++;
		var currentTime = new Date();
		var timeElapsed = currentTime - StartTime;
		var CPS = (clicks * 1000) / timeElapsed;
		document.getElementById("ClicksM").innerHTML = clicks;
		document.getElementById("ClicksP").innerHTML = CPS;
	}

}


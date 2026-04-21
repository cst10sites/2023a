var startTime = new Date();
var nClicks = 0; 

function resetWatch() {
	window.location.reload(); // oops sorry to anyone's data
}

function updateCPS() {
	if (nClicks == 0) {
		startTime = new Date();
		nClicks = nClicks + 1;
		
		document.getElementById('display').innerHTML = nClicks;

		document.getElementById('timeElapsed').innerHTML = timeElapsed / 1000;
		
	}	

	
	else {
		var currentTime = new Date();
		var timeElapsed = currentTime - startTime;
		document.getElementById('timeElapsed').innerHTML = timeElapsed / 1000;
		var CPS = nClicks / (timeElapsed / 1000);
		document.getElementById('CPS').innerHTML = CPS;
		document.getElementById('display').innerHTML = nClicks;
		nClicks = nClicks + 1;
	}
}

setInterval(updateTime, 100);

function updateTime() {
	if (nClicks > 0) {
	var currentTime = new Date();
	var timeElapsed = currentTime - startTime;
	document.getElementById("timeElapsed").innerHTML = timeElapsed / 1000;
	}
}

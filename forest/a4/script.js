var startTime = new Date();
var nClicks = 0; 
setInterval(myTimer, 111);

function resetWatch() {
	window.location.reload(); //
}

function updateCPS() {
	if (nClicks == 0) {
		startTime = new Date();
	}
	else {
		var currentTime = new Date();
		var timeElapsed = currentTime - startTime;
		var CPS = nClicks / (timeElapsed / 1000);

		document.getElementById('display').innerHTML = nClicks;
		document.getElementById('CPS').innerHTML = CPS;
		document.getElementById('timeElapsed').innerHTML = timeElapsed / 1000;
	}	
	
		nClicks = nClicks +1;
		
	
	if (nClicks == 100) {
		alert("You're still here?")
	}
	
		if (nClicks == 200) {
		alert("Chill bro")
	}
	
		if (nClicks == 1000) {
		alert("Procrastinating is fun isn't it?")
	}
	
	if (nClicks == 10000000000000000000000000000000000000000000) {
		alert("You either hacked it or spent the rest of your life on this didn't you T-T")
	}
}
function myTimer(){
	if (nClicks == 0) {
		startTime = new Date();
	}
	else {
	    var currentTime = new Date();
	    var timeElapsed = currentTime - startTime;
	document.getElementById('timeElapsed').innerHTML = timeElapsed / 1000;
    }
}
	

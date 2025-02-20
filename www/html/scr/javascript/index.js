
function FData() {
	document.getElementById("au").innerHTML = 'Author: Otprotee';
	document.getElementById("con").innerHTML = 'Contributers: Me, Myself and I';
	document.getElementById("hi").innerHTML = '<button onclick="hide()">Hide Data</button>';
	console.log('1');
	
}

function hide() { 
	document.getElementById("au").innerHTML = 'Author: ';
	document.getElementById("hi").innerHTML = '<button onclick="FData()">View Data</button>';
	document.getElementById("con").innerHTML = 'Contributers:';
	console.log('2');
}

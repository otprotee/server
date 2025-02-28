function FData() {
    document.getElementById("au").innerHTML = 'Author: Otprotee';
    document.getElementById("con").innerHTML = 'Contributors: Me, Myself and I';
    document.getElementById("hi").innerHTML = '<button onclick="hide()">Hide Data</button>';
}

function hide() { 
    document.getElementById("au").innerHTML = 'Author: ';
    document.getElementById("hi").innerHTML = '<button onclick="FData()">View Data</button>';
    document.getElementById("con").innerHTML = 'Contributors:';
}

function pictures() {
	document.getElementById("pics").innerHTML = "<p style='background-image: url('../doc/background/ffdp.jpg'); background-size: 100% 100%; background-repeat: no-repeat; padding: 100%; background-attachment: fixed;'>"
	setInterval(pictures, 2000)
	document.getElementById("pics").innerHTML = "<p style='background-image: url('../doc/background/korn.jpg'); background-size: 100% 100%; background-repeat: no-repeat; padding: 100%; background-attachment: fixed;'>"
	setInterval(pictures, 2000)
}
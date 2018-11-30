document.addEventListener("DOMContentLoaded", function() {
	var plyr = window.player;
	console.log(plyr);
});

document.addEventListener("qualitychange", function(evt) {
	console.log(window.player);
	console.log(evt);
});


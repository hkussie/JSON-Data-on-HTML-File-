var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		data = JSON.parse(this.responseText);
		document.getElementById("content").innerHTML = data.interests[1];
	}
};

xmlhttp.open("GET", "people.json", true);
xmlhttp.send();

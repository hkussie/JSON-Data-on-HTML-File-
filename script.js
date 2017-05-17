//var xmlhttp = new XMLHttpRequest();

//xmlhttp.onreadystatechange = function() {
//	if (this.readyState == 4 && this.status == 200) {
//		data = JSON.parse(this.responseText);
//		document.getElementById("content").innerHTML = data.interests[1];
//	}
//};

//xmlhttp.open("GET", "people.json", true);
//xmlhttp.send();

//!-->

//Use JQuery to get data from json file when user clicks button 
$("button").click( function() {
 $.getJSON( "people.json", function(obj) {
  $.each(obj, function(key, value) {
         $("ul").append("<li>"+value.name+"'s age is : "+value.age+"</li>");
  });
 });
});



window.onload = function() {
    var html = 'Gallery of User<table border="border">';
	var i=0;

	while(i<15){
		html+= '<tr><td><a href="photo.html">Photo' + i + '</a></td><td><img src="Koala.jpg"></td></tr>';
		i++;
	}
	 

	html += '</table>';
	document.getElementById('photolist').innerHTML = html;
}
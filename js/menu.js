$(document).ready(function() {
	$('.three-lines-menu').on('click', function() {	
		$('#menu ul').toggleClass('menu-responsive');
	});
});

var quadimages = document.querySelectorAll("#quad figure");
for(i=0; i<quadimages.length; i++) {
  quadimages[i].addEventListener('click', function(){ this.classList.toggle("expanded"); quad.classList.toggle("full") }); 
}
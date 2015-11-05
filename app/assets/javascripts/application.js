// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require farbtastic

$(document).ready(function(){
	
	var currentColor;

	$('#colorpicker').farbtastic(function(color){
		currentColor = color;
	});

	$('#image').load(function(){
		// unused for now
	});
	// 'https://openclipart.org/download/231386/Artist.svg', 
	//https://s3-us-west-2.amazonaws.com/s.cdpn.io/40041/cheshire.svg

	$('#image').on('click', 'path', function(event){ // any path inside the image div will call this function when clicked
		$(event.target).attr({ fill: currentColor });
		var data = $('#image').html()
		$('#svg-data').val(data)
	});


	// $('#save').click(function(){
		
	// });







});

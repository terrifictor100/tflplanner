
  		

$( "#search-bethnal-tube" ).on( "click", function() {
  // api request to be sent on button click

  	var URL = 'https://api.tfl.gov.uk/Line/central/Arrivals/940GZZLUBLG?direction=inbound&app_id=&app_key=';


  	$.getJSON(URL, function(data){

  	var items = data.sort(function(a, b){return a.timeToStation - b.timeToStation});

	  	items.forEach(function(item){

	  		var times = moment().add(item.timeToStation, 'seconds').fromNow()

	  		$("<p/>", {
				  	"class": "destinations",
				  	html: item.destinationName + " will arrive in " + times}).appendTo("html");

	  	});

	}); 

});

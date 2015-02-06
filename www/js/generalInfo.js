$(function() {
	
	$.ajax({
			type: "GET",
			url: 'http://www.sjcourts.org/sjcApp/server.php', 
			data: {
				handler: 'Current Listings'
			},
			success: function(resp){
				console.log(resp);
				$("div#currentListings").html(resp);
				// alert("good");
			},
			error: function(resp){
				$("div#currentListings").html("<h4>Error: Can not access external data, please connect to the internet to see external data</h4>");
			}
		});
});
	
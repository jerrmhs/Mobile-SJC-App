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
				console.log(resp);
				alert("bad");
			}
		});
});
	
$(function() {

	$.ajax({
			type: "GET",
			url: 'http://www.sjcourts.org/sjcApp/server.php', 
			data: {
				handler: 'Public Feed'
			},
			success: function(resp){
				console.log(resp);
				$("div#newsFeed").html(resp);
			},
			error: function(resp){
				$("div#newsFeed").html("<h4>Connect to the internet to see current listings.</h4>");
			}
		});
		
});
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
				console.log(resp);
			}
		});
		
});
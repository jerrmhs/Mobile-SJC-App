$(function() {
	
	$.ajax({
			type: "GET",
			url: 'http://www.sjcourts.org/sjcApp/server.php', 
			data: {
				handler: 'Jury Status'
			},
			success: function(resp){
				console.log(resp);
				resp = resp.replace('<tr><td><center></center></td><td></td></tr>', ''); //<tr><td><center></center></td><td></td></tr>
				resp = resp.replace('<tr><td></td><td></td></tr>', '');
				resp = resp.replace('<tr><td></center></center></td><td></td></tr>', '');
				$("div#juryinfo").html(resp);
				// alert("good");
			},
			error: function(resp){
				console.log(resp);
				alert("bad");
			}
		});
	
	$("form[name='testForm']").submit(function(){
		var postData = $(this).serialize();
		var handler = 'Test Form';
		// console.log(postData);
		// firstName=asd&lastName=asd&startDate=2015-05-01
		// var data = [];
		// data['first_name'] = $('#first_name').val();
		// handler: 'Test Form',
		$.ajax({
			type: 'POST',
			data: postData+'&handler='+handler,
			url: 'http://www.sjcourts.org/sjcApp/server.php', 
			success: function(resp){
				console.log(postData);
				alert('Your comment was successfully added');
				console.log(resp);
			},
			error: function(resp){
				alert('There was an error adding your comment');
				console.log(resp);
			}
		});
		return false;
	});
	
	$("form[name='juryForm']").submit(function(){
		var postData = $(this).serialize();
		var handler = 'Jury Opt';
		// console.log(postData);
		// firstName=asd&lastName=asd&startDate=2015-05-01
		// var data = [];
		// data['first_name'] = $('#first_name').val();
		// handler: 'Test Form',
		$.ajax({
			type: 'POST',
			data: postData+'&handler='+handler,
			url: 'http://www.sjcourts.org/sjcApp/server.php', 
			success: function(resp){
				console.log(postData);
				alert(resp);
				console.log(resp);
				$("#reqForm")[0].reset();
			},
			error: function(resp){
				alert('bad');
				console.log(resp);
			}
		});
		return false;
	});
	
});
function n(data) {
	$("html,body").animate({scrollTop:0},"slow");
	$('div#notify').html(data);
	setTimeout(function() {
		$('#notify').html('&nbsp;');
	}, 3000);
}

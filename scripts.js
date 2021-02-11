$(function(){
	
	var rowIdx = 1;
	var addname;

	$("#addbutton").click(function(){
		
		addname = $('#addplayer').val();
		
		$('#tbody').append(`<tr id="R${rowIdx}"> 
								<td class="row-index text-center"> 
									<p>${addname}</p>
								</td> 
								<td class="text-center"> 
									<p class="votes">0</p>
								</td>
								<td class="text-center"> 
									<div class="container-fluid">
										<div class="row">
											<div class="col-6">
												<button class="btn btn-success addvote" type="button">+</button>
												<button class="btn btn-danger subvote" type="button">-</button>
											</div>
											<div class="col-6">
												<button class="btn btn-warning erase" type="button">Erase</button>
												<button class="btn btn-outline-danger remove" type="button">Remove</button> 
											</div>
										</div>
									</div>
								</td> 
							</tr>`);
							
		$('#addplayer').val("");
							
	});
	
	$('#tbody').on('click', '.addvote', function () {
		
		var voteselement = $(this).closest('tr').find('p').last();
		var votesnumber = parseInt(voteselement.text(), 10);
		votesnumber++;
		var votesstring = votesnumber.toString();
		voteselement.text(votesstring);
		
	});
	
	$('#tbody').on('click', '.subvote', function () {
		
		var voteselement = $(this).closest('tr').find('p').last();
		var votesnumber = parseInt(voteselement.text(), 10);
		votesnumber--;
		var votesstring = votesnumber.toString();
		voteselement.text(votesstring);
		
	});
	
	$('#tbody').on('click', '.remove', function () {
		
		$(this).closest('tr').remove();
		rowIdx--;
		
	});
	
	$('#tbody').on('click', '.erase', function () {
		
		$(this).closest('tr').find('p').first().css({"text-decoration": "line-through", "color": "red"});
		
		$(this).closest('td').find('button').attr("disabled", true);
		$(this).closest('td').find('button').last().attr("disabled", false);
		
		$(this).closest('tr').find('p').last().text("0");
		
	});
	
	$("#resetbutton").click(function(){
		
		$('#tbody').find('.votes').text("0");
		
	});

});
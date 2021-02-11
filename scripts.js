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
									<p id="VR${rowIdx++}">0</p>
								</td>
								<td class="text-center"> 
									<div class="container-fluid">
										<div class="row">
											<div class="col-6">
												<button class="btn btn-success" type="button">+</button>
												<button class="btn btn-danger" type="button">-</button>
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
	
	$("#addvote").click(function(){
		
		//add id to buttons and make add a vote to the corresponding player
		
	});
	
	$("#subvote").click(function(){
		
		//add id to buttons and make subtract a vote to the corresponding player
		
	});
	
	$('#tbody').on('click', '.remove', function () {
		
		
		
	});
	
	$('#tbody').on('click', '.erase', function () {
		
		//line over the corresponding player's name
		
	});
	
	$("#resetbutton").click(function(){
		
		//reset all votes to 0
		
	});

});
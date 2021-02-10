$(function(){
	
	var rowIdx = 1;

	$("#addbutton").click(function(){
		
		$('#tbody').append(`<tr id="R${rowIdx}"> 
								<td class="row-index text-center"> 
									<p>Row ${rowIdx} insert name</p>
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
												<button class="btn btn-warning" type="button">Erase</button>
												<button class="btn btn-outline-danger" type="button">Remove</button> 
											</div>
										</div>
									</div>
								</td> 
							</tr>`);
	});
	
	//erase overlines name and disables votes

});
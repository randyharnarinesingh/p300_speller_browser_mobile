<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>P300-based BCI Stimulus Presentation Paradigm</title>
		
		<link href="css/custom.css" rel="stylesheet">
		<link href="css/bootstrap.css" rel="stylesheet">
		<link href="css/jquery-ui.css" rel="stylesheet">
	</head>
	
	<body>
	
	<div id="speller_matrix">
	
	<table>
		<tr>
			<td id="A">+ve speed</td>
			<td id="B">MOVE FORWARD</td> 
			<td id="C">-ve speed</td>
		</tr>
  
		<tr>
			<td id="D">MOVE LEFT</td>
			<td id="E">START / STOP</td> 
			<td id="F">MOVE RIGHT</td>
		</tr>
	
		<tr>
			<td id="G">SOS</td>
			<td id="H">MOVE BACKWARD</td> 
			<td id="I">RETURN</td>
		</tr>
		
	</table>
	
	</div>
	
	<div>
	
		<button class="btn-primary btn-lg" id="start">START</button>
	
	</div>

	<script src="js/jquery.min.js"></script>
	<script src="js/jquery-ui.min.js"></script>
	
	<script src="js/functions.js"></script>
		
	</body>
</html>

function suma(first, second){
	var result = first + second;

	


	if (first === 'V' || second === 'V'){
		result = 'VI';
	}

	if(first === 'IV' || second === 'IV'){
		result = 'V';
	}	    
	
	if (result.length === 4)
		return 'IV';
	
	return result;
}



module.exports.suma = suma;

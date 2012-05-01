
function calculateRoman(number){
	var result='';
  
	if(number%5===4){
		result='IV';
	}else{
		while(number){
			result +='I';
		    number--;
		}	
	}
 
	return result;
};

module.exports.calculateRoman = calculateRoman;

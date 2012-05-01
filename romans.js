
function calculateRoman(number){
	
	var result='';

	// array with romanCharacters 0   1   2
	var romanNumbers=            ['','I','V'];

	var moduleFive=number%5;              // 1, 2, 3, 4, 0, 1, 2, 3, 4, 0
	var divisorFive=Math.floor(number/5); // 0, 0, 0, 0, 1, 1, 1, 1, 1, 2

	if(moduleFive===0){
		result += romanNumbers[divisorFive+1];
	}
	else if(moduleFive===4){
		result += romanNumbers[divisorFive+1];
		result += romanNumbers[divisorFive+2];
	}else{
		result +=oneToThreeSameKind(romanNumbers[divisorFive+1],moduleFive);
	}

	return result;
};

function oneToThreeSameKind(string, times){
	var result='';

	while(times){
		result += string;
	    times--;
	}

	return result;
}

module.exports.calculateRoman = calculateRoman;

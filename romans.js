
function calculateRoman(number){
	
	var result='';
	var romanNumbers=            ['','V'];

	var moduleFive=number%5;              // 1, 2, 3, 4, 0, 1, 2, 3, 4, 0
	var divisorFive=Math.floor(number/5); // 0, 0, 0, 0, 1, 1, 1, 1, 1, 2

	if(moduleFive===4){
		result += singles(1);
		result += romanNumbers[divisorFive+1];
	}else{
		result += romanNumbers[divisorFive];
		result += singles(moduleFive);
	}
	return result;
};

function singles(times){
	var result='';

	while(times){
		result += 'I';
	    times--;
	}

	return result;
}

module.exports.calculateRoman = calculateRoman;

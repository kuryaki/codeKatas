
function calculateRoman(number){
	
	var result='';
	var romanNumbers=['','V', 'X'];

	var moduleFive=number%5;
	var divisorFive=Math.floor(number/5);
    var divisorTen=Math.floor(number/10);
    var moduleTen=number%10;

    if(divisorTen>0){
    	result +=singles(divisorTen, 'X')+calculateRoman(moduleTen);
    }else{
    	if(moduleFive===4){
		result += singles(1);
		result += romanNumbers[divisorFive+1];
		}else{
			result += romanNumbers[divisorFive];
			result += singles(moduleFive);
		}
    }


	return result;
};

function singles(times, value){
	if(times<1){
		return '';
	}else{
		return (value ? value : 'I')+singles(times-1, value);
	}
}

module.exports.calculateRoman = calculateRoman;

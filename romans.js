
function calculateRoman(number){
  var result='';
  
  while(number){
    result +='I';
    number--;
  }
 
  return result;
};

module.exports.calculateRoman = calculateRoman;

var assert = require('assert');
var calculateRoman = require('./../romans').calculateRoman;

suite('romans', function(){
  
  test('number 1 should return I', function(){
    assert.equal('I', calculateRoman(1));
  });
  
  test('number 2 should return II', function(){
    assert.equal('II', calculateRoman(2));
  });
  
  test('number 3 should return III', function(){
    assert.equal('III', calculateRoman(3));
  });
  
  test('number 4 should return IV', function(){
    assert.equal('IV', calculateRoman(4));
  });
  
  test('number 5 should return V', function(){
    assert.equal('V', calculateRoman(5));
  });
  
  test('number 6 should return VI', function(){
    assert.equal('VI', calculateRoman(6));
  });
  
  test('number 7 should return VII', function(){
    assert.equal('VII', calculateRoman(7));
  });

  test('number 9 should return IX', function(){
    assert.equal('IX', calculateRoman(9));
  });

  test('number 10 should return X', function(){
    assert.equal('X', calculateRoman(10));
  });  

  test('number 13 should return XIII', function(){
    assert.equal('XIII', calculateRoman(13));
  });

  test('number 14 should return XIV', function(){
    assert.equal('XIV', calculateRoman(14));
  });

});

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

  test('number 15 should return XIV', function(){
    assert.equal('XV', calculateRoman(15));
  });

  test('number 19 should return XIX', function(){
    assert.equal('XIX', calculateRoman(19));
  });

  test('number 20 should return XX', function(){
    assert.equal('XX', calculateRoman(20));
  });

  test('number 23 should return XXIII', function(){
    assert.equal('XXIII', calculateRoman(23));
  });

  test('number 24 should return XXIV', function(){
    assert.equal('XXIV', calculateRoman(24));
  });

  test('number 29 should return XXIX', function(){
    assert.equal('XXIX', calculateRoman(29));
  });

  test('number 39 should return XXXIX', function(){
    assert.equal('XXXIX', calculateRoman(39));
  });

  test('number 40 should return XL', function(){
    assert.equal('XL', calculateRoman(40));
  });

});

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
});

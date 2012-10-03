var assert = require('assert');
var suma = require('./../kataMay').suma;

suite('suma', function(){
  
	test('I mas I deberia devolver II', function(){
		assert.equal('II', suma('I','I'));
	});

	test('I mas II deberia devolver III', function(){
		assert.equal('III', suma('I','II'));
	});

	test('I mas III deberia devolver IV', function(){
		assert.equal('IV', suma('I','III'));
	});

	test('I mas IV deberia devolver V', function(){
	    assert.equal('V', suma('I','IV'));
	});

	test('III mas I deberia devolver IV', function(){
	    assert.equal('IV', suma('III','I'));
	});

	test('I mas V deberia devolver VI', function(){
	    assert.equal('VI', suma('I','V'));
	});

	test('XXVI mas XXIX deberia devolver LV', function(){
	    assert.equal('LV', suma('XXVI','XXIX'));
	});
});

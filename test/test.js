QUnit.test('Testing calculate function with several sets of inputs', function (assert) {
    assert.equal(calculate(500,10), 50, 'Tested with two relatively small positive numbers');
    assert.throws(function () {calculate(-1,-5); }, /Value shouldn't be 0 or negative value!/, 'Passing in netagive value correctly raises an Error');    
    assert.throws(function () {calculate(null,null); }, /Value shouldn't be 0 or negative value!/, 'Passing in null correctly raises an Error');
    assert.throws(function () {calculate("Test","5"); }, /Value should be a number!/, 'Passing in a string correctly raises an Error');    
});

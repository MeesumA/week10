// test/test.js
const assert = require('assert');
const linearPoint = require('../linearPoint');  // Import the function

describe('linearPoint', function() {
  it('should return 6 when m=2, x=1, c=4', function() {
    assert.strictEqual(linearPoint(2, 1, 4), 6);
  });

  it('should return 4 when m=2, x=0, c=4', function() {
    assert.strictEqual(linearPoint(2, 0, 4), 4);
  });

  it('should return 2 when m=2, x=-1, c=4', function() {
    assert.strictEqual(linearPoint(2, -1, 4), 2);
  });
});

var assert = require('assert');
var afor = require('..');

describe('afor()', function() {
  it('Should increment index to 10', function(done) {
    var index = 0;

    afor(0, 10, function(n) {
      index++;
    }, function() {
      assert.equal(index, 10);
      done();
    });
  });

  it('Should increment index to 100', function(done) {
    var index = 0;

    afor(0, 100, function(n) {
      index++;
    }, function() {
      assert.equal(index, 100);
      done();
    });
  });

  it('Should increment index to 1000', function(done) {
    var index = 0;

    afor(0, 1000, function(n) {
      index++;
    }, function() {
      assert.equal(index, 1000);
      done();
    });
  });

});


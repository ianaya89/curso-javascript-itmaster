function afor(from, to, callback, done) {
  var job = null;
  var current = from;

  function iterator() {
    if (current >= to) {
      clearInterval(job);
      done && done();
    }
    else {
      callback(current++);
    }
  }

  job = setInterval(iterator, 0);
}

module.exports = afor;

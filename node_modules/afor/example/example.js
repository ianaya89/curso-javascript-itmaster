var afor = require('..');

afor(0, 100000, function(n) {
  console.log("N: ", n);
});

/* The above code is equivalent to do this:

for (var i = 0; i < 10000000; i++) {
  console.log("We're on:", i);
}

But this code will consume all your RAM and your PC will crash
*/
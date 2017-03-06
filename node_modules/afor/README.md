# afor

Simple npm module to make async iterators in Node.js

### Installation
```
npm install afor --save
```

### Usage
```
var afor = require('afor');

afor(0, 10000000, function(i) {
  console.log('I: ' + i);
});

// You can also add a done fuction.
afor(0, 10000000, function(i) {
  console.log('I: ' + i);
}, function() {
  console.log('The End!');
});
```



### Why an async iterator?
Try this code in your Node.js console and check it yourself:
```
for (var i = 0; i < 10000000; i++) {
  console.log('I: ', i);
}
```


const EventEmitter = require('events').EventEmitter;

class MyEmitter extends EventEmitter {
  constructor(){
    super();
    let count = 5;

    let timer = setInterval(() => {
      this.emit('hi', 'Hello Server!');
      count--;

      if(!count) {
        this.emit('bye', 'I am done here.');
        clearInterval(timer);
      }
    }, 1000);
  }
}


let myEmitter = new MyEmitter();

myEmitter.on('hi', function(msg) {
  console.log(msg);
});

myEmitter.on('bye', function(msg) {
  console.log(msg, 'bye!');
});

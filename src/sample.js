var Sample = {
  say: function() {
    return 'Hello world';
  },  
  set: function(elem) {
    elem.innerHTML = this.say();
  }
};

function PrototypeOne() {
  this.number = 1;
  this.name = 'SamplePlus';
};

function PrototypeTwo() {
  this.age = 35;
  this.caption = 'prototype';
}
PrototypeTwo.prototype = new PrototypeOne();

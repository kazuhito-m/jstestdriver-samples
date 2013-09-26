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
// メソッドの実装。
PrototypeOne.prototype.sumText = function(num1 , num2) {
  return num1 + ' + ' + num2 + ' = ' + (num1 + num2);
}


function PrototypeTwo() {
  this.age = 35;
  this.caption = 'prototype';
}
PrototypeTwo.prototype = new PrototypeOne();

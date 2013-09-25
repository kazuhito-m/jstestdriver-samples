TestCase('SampleTest', {
  
  setUp: function() {
    this.sample = Object.create(Sample);
  }
    
  ,'test should return greeting': function() {
    assertEquals('Hello world', this.sample.say());
  }
  
  ,'test should check innerHtml of DOMElement': function() {
    /*:DOC += <div id="sample"></div> */
    var elem = document.getElementById('sample');
    this.sample.set(elem);
    assertEquals('Hello world', elem.innerHTML);
  }
  
  ,'test three.' : function() {
    assertEquals(5 , 2 + 3);
  }
  
  ,'test String add last' : function() {
    assertEquals('String add' , 'String' + ' ' + 'add');
  }
  
  ,'testが日本語に対応しているか否か。' : function() {
    assertEquals('日本語' , '日本' + '語');
  }
  
  ,'test prototype sample.' : function() {
    var actual = new PrototypeTwo();
    assertEquals(35 , actual.age);
    assertEquals('prototype' , actual.caption);
    // super class property
    assertEquals(1 , actual.number);
    assertEquals('SamplePlus' , actual.name);
  }
  
});
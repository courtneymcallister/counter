var counter = {

  count: 0,

  init: function(){
    counter.cacheDom();
    counter.addEventListeners();
    counter.render();
  },

  cacheDom: function(){
    counter.addButton = document.querySelector('#add');
    counter.subtractButton = document.querySelector('#subtract');
    counter.totalCount = document.querySelector('#total-count');
    counter.resetButton = document.querySelector('#reset');
  },

  render: function(){
    console.log(counter.count);
    var displayCount = `<h1>${counter.count}</h1>`
    counter.totalCount.innerHTML = displayCount;
    return displayCount
  },

  addEventListeners: function(){
    counter.addButton.addEventListener('click', counter.addOne);
    counter.subtractButton.addEventListener('click', counter.subtractOne);
    counter.resetButton.addEventListener('click', counter.resetCount);
  },

  resetCount: function(){
    counter.count = 0;
    counter.render();
  },

  addOne: function(){
    counter.count += 1;
    counter.render();
  },

  subtractOne: function() {
    if (counter.count > 0){
      counter.count -= 1;
    }
    // counter.count -= 1;
    counter.render();
  }

}

counter.init();

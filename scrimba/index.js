Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>This is a todo</li>'
})

var app = new Vue({
  el: '#app'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

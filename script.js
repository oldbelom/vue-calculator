let vue = new Vue ({
  el: '#app',
  data: {
    result: '',
    numbers: [1,2,3,4,5,6,7,8,9,0],
    operations: ['+','-','*','/']
  },
  methods: {
    input: function(symbol) {
      this.result = this.result.toString(); 
      this.result += symbol;
    },
    reset: function() {
      this.result = '';
    },
    calc: function() {
      this.result = eval(this.result);
    }
  }
})
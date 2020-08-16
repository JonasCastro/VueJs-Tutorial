new Vue({
  el:'#vue-app',
  data: {
      age:20,
      a: 0,
      b: 0,
      c: 0,
    },
  computed:{
    addToA: function(){
      console.log('addToA' + this.c);
      return this.a + this.age;
    },
    addToB: function(){
      console.log('addToB');
      return this.b + this.age;
    }
  }
})
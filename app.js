new Vue({
    el:'#vue-app',
    data: {
        name: 'Jonas',
        job:"Dev"
      },
      methods:{
        greet:function(time){
          return 'Good ' + time + ' ' + this.name
        }
      }
})
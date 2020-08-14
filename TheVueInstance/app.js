new Vue({
    el:'#vue-app',
    data: {
        name: 'Jonas',
        job:"Dev",
        website:'https://vuejs.org/',
        websiteTag:'<a href="https://vuejs.org/">vuejs</a>',
        seen:false
      },
      methods:{
        greet:function(time){
          return 'Good ' + time + ' ' + this.name
        }
      }
})
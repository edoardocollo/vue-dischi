



  let app = new Vue({
    el: '#main_wrap',
    data: {
      dischi: null,
      generi: [],
    },
    methods: {

    },
    mounted() {
      var config = {
        method: 'get',
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        headers: {}
      };
      const self = this;
      axios(config)
        .then(function(response) {
          self.dischi = response.data.response;
        })
        .catch(function(error) {
          console.log(error);
        });
        setTimeout(function () {
        console.log(app.dischi);
          app.dischi.forEach(function(item){
            console.log(item.genre);
            if (!(app.generi.includes(item.genre))) {

              app.generi.push(item.genre);
            }
          });
        }, 1000);
    },
  });

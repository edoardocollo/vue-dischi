$(document).ready(function() {



  let app = new Vue({
    el: '.cds-container',
    data: {
      dischi: null,
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

    },
  });







});

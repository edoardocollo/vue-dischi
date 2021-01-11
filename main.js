let app = new Vue({
  el: '#app',
  data: {
    discs: [],
    genres: ['Tutti']
  },
  methods: {
    hideInactive: function(genre) {
      console.log(genre);
      if (genre != 'Tutti') {

        this.discs.forEach(function(item) {
          if (item.genre == genre) {
            item.visible = true;
          } else {
            item.visible = false;
          }


        });

      } else {
        this.discs.forEach(function(item) {
          item.visible = true;


        });
      }

    },
  },
  mounted() {
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(function(resp) {
        console.log(resp.data.response);
        resp.data.response.forEach(function(item) {
          item.visible = true;
          app.discs.push(item);
          if (!(app.genres.includes(item.genre))) {
            app.genres.push(item.genre);
          }
        });
      });
  },
});

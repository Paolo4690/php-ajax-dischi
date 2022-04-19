const app = new Vue({
  el: "#app",
  data: {
    arrAlbum: [],
    arrGenere: [],
    genreSelect: '',
  },
  created() {
    axios.get("./db/data2.php").then((res) => {
      this.arrAlbum = res.data;
      this.arrGenere = [...new Set(this.arrAlbum.map(elemento => elemento.genre))]
    });
  },
  methods: {
    filterByGenre(event) {
      axios.get(`./db/data2.php/?genre=${event.target.value}`).then((res) => {
        this.arrAlbum = res.data;
      });
    },
  }
});
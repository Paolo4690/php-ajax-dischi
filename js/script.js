const app = new Vue({
    el: "#app",
    data: {
      arrAlbum: [],
      arrGenere: [],
      arrAuthor: [],
      genreSelect: '',
      authorSelect: '',
    },
    created() {
      axios.get("./db/data2.php").then((res) => {
        this.arrAlbum = res.data;
        this.arrGenere = [...new Set(this.arrAlbum.map(elemento => elemento.genre))]
        this.arrAuthor = [...new Set(this.arrAlbum.map(elemento => elemento.author))]
      });
    },
    computed: {
      filterArray () {
        return this.arrAlbum.filter(obj => obj.genre.includes(this.genreSelect) && obj.author.includes(this.authorSelect))
      }
    }
  });
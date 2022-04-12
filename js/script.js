const app = new Vue({
    el: "#app",
    data: {
      arrAlbum: [],
    },
    created() {
      axios.get("./db/data.php").then((res) => {
        this.arrAlbum = res.data;
      });
    },
  });
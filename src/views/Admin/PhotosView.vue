<template>
  <div id="AdminPhotosView">
    <PhotosByCategories
      v-for="category in categories"
      :key="category.id"
      :cat="category"
      :categories="categories"
    />
  </div>
  <AdminNavBar />
</template>

<script>
import AdminNavBar from "@/components/Admin/NavBar.vue";
import axios from "axios";
import PhotosByCategories from "@/components/Admin/PhotosByCategories.vue";
export default {
  name: "AdminPhotosView",
  components: {
    AdminNavBar,
    PhotosByCategories,
  },
  beforeMount() {
    this.redirectIfNotLoggedIn();
  },
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.getPhotos();
  },
  methods: {
    getPhotos() {
      axios
        .get(this.url + "categories")
        .then((response) => {
          this.categories = response.data;
          //console.log("CAT", this.categories);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
#AdminPhotosView {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>

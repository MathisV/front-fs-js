<template>
  <div class="PhotosByCategories">
    <h2>{{ cat.name }}</h2>
    <PhotosAddForms :categories="cat.id" />
    <PhotosForms
      v-for="photo in photos"
      :photo="photo"
      :key="photo.id"
      :categories="categories"
    />
  </div>
</template>

<script>
import PhotosForms from "@/components/Admin/PhotosForms.vue";
import PhotosAddForms from "@/components/Admin/PhotosAddForms.vue";
import axios from "axios";

export default {
  name: "PhotosByCategories",
  components: {
    PhotosForms,
    PhotosAddForms,
  },
  props: {
    cat: {
      type: Object,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      photos: [],
    };
  },
  beforeMount() {
    this.redirectIfNotLoggedIn();
  },
  mounted() {
    this.getPhotos();
  },
  methods: {
    getPhotos() {
      axios
        .get(this.url + "photos/" + this.cat.id)
        .then((response) => {
          //console.log("PHOTOS", response);
          this.photos = response.data;
          console.log("PHOTOS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
.PhotosByCategories h2 {
  display: block;
  width: 100%;
}
.PhotosByCategories {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.PhotosForm {
  width: 24%;
  margin: auto;
  padding: 30px;
}

.PhotosForm {
  display: flex;
  line-height: 1;
  flex-direction: column;
  justify-content: space-evenly;
}

.PhotosForm .form-group {
  display: flex;
  flex-direction: row;
  justify-content: space-end;
}

.form-group label {
  line-height: 2em;
  vertical-align: middle;
  margin-right: 5px;
}
</style>

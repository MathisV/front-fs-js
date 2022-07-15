<template>
  <div class="PhotoGrid">
    <div class="PhotoGrid-container">
      <PhotoItem v-for="photo in photos" :key="photo.id" :photo="photo" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PhotoItem from "@/components/PhotoItem.vue";
export default {
  name: "PhotoGrid",
  components: {
    PhotoItem,
  },
  props: {
    cat: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  data() {
    return {
      photos: [],
    };
  },
  mounted() {
    this.fetchPhotos();
  },
  methods: {
    fetchPhotos() {
      axios
        .get(this.url + "photos/" + this.cat)
        .then((response) => {
          this.photos = response.data;
          console.log(this.photos);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
.PhotoGrid-container {
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 0;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 100%;
  height: auto;
}
</style>

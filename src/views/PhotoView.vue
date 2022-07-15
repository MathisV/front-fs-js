<template>
  <div class="PhotoView">
    <PhotoGrid :cat="this.cat" />
  </div>
</template>

<script>
// @ is an alias to /src
import PhotoGrid from "@/components/PhotoGrid.vue";

export default {
  name: "PhotoView",
  components: {
    PhotoGrid,
  },
  data() {
    return {
      cat: this.$route.params.id,
    };
  },
  methods: {
    setCat(id) {
      this.cat = id;
    },
  },
  created() {
    this.cat = parseInt(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.cat = parseInt(to.params.id);
    next();
  },
};
</script>

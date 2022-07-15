<template>
  <div class="home">
    <HomeVideo msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeVideo from "@/components/HomeVideo.vue";

export default {
  name: "HomeView",
  components: {
    HomeVideo,
  },
};
</script>

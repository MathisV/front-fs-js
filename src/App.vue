<template>
  <NavBar />
  <router-view :key="$route.fullPath" />
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
  background-color: #e9e9e9;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

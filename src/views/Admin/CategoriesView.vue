<template>
  <div id="AdminCategoriesView">
    <CategoriesAddForms />
    <CategoriesForms v-for="cat in categories" :cat="cat" :key="cat.id" />
  </div>
  <AdminNavBar />
</template>

<script>
import AdminNavBar from "@/components/Admin/NavBar.vue";
import CategoriesForms from "@/components/Admin/CategoriesForms.vue";
import CategoriesAddForms from "@/components/Admin/CategoriesAddForms.vue";
import axios from "axios";
export default {
  name: "AdminCategoriesView",
  components: {
    AdminNavBar,
    CategoriesForms,
    CategoriesAddForms,
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
    this.getCategories();
  },
  methods: {
    getCategories() {
      axios
        .get(this.url + "categories")
        .then((response) => {
          this.categories = response.data;
          console.log(this.categories);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
#AdminCategoriesView {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>

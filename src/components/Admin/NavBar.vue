<template>
  <div id="AdminNavBar">
    <nav>
      <NavItem name="Photos" link="/admin/photos" />
      <NavItem name="Categories" link="/admin/categories" />
      <NavItem name="Users" link="/admin/users" />
      <NavItem name="Logout" v-on:click="logout" link="/" />
    </nav>
  </div>
</template>

<script>
import NavItem from "@/components/NavItem.vue";
export default {
  name: "AdminNavBar",
  components: {
    NavItem,
  },
};
</script>

<style lang="scss">
#AdminNavBar {
  position: fixed;
  height: 10vh;
  width: 100%;
  background-color: #ffffff;
  bottom: 0;
}

#AdminNavBar nav {
  display: flex;
  width: 80%;
  margin: auto;
  float: none;
  justify-content: space-around;
  height: calc(10vh - 60px);
  padding: 30px;
}

#AdminPhotosView,
#AdminCategoriesView,
#AdminUsersView {
  margin-bottom: 10vh;
}
</style>

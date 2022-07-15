<template>
  <div id="AdminUsersView">
    <UsersAddForms />
    <UsersForms v-for="user in users" :user="user" v-bind:key="user.id" />
  </div>
  <AdminNavBar />
</template>

<script>
import AdminNavBar from "@/components/Admin/NavBar.vue";
import UsersForms from "@/components/Admin/UsersForms.vue";
import UsersAddForms from "@/components/Admin/UsersAddForms.vue";
import axios from "axios";
export default {
  name: "AdminUsersView",
  components: {
    AdminNavBar,
    UsersForms,
    UsersAddForms,
  },
  beforeMount() {
    this.redirectIfNotLoggedIn();
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      axios
        .get(this.url + "users")
        .then((response) => {
          this.users = response.data;
          console.log(this.users);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
#AdminUsersView {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>

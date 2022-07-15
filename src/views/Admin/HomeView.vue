<template>
  Connecté avec le token: {{ token }}
  <AdminNavBar />
</template>
<script>
import AdminNavBar from "@/components/Admin/NavBar.vue";
export default {
  name: "HomeAdminView",
  components: {
    AdminNavBar,
  },
  data() {
    return {
      token: this.$cookies.get("token"),
    };
  },
  mounted() {
    this.redirectIfNotLoggedIn();
    this.$router.push("/admin/photos");
  },
};
</script>
<style lang="scss"></style>

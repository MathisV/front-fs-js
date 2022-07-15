<template>
  <div id="NavBar">
    <img alt="Vue logo" id="logo" src="../assets/Logo.png" />
    <nav>
      <NavItem name="Home" link="/" />
      <DropDown name="Categories" />
      <NavItem name="Login" link="/login" v-if="!this.token" />
      <NavItem name="Admin" link="/admin" v-if="this.token" />
    </nav>
  </div>
</template>

<script>
import NavItem from "@/components/NavItem.vue";
import DropDown from "@/components/DropDown.vue";

export default {
  name: "NavBar",
  components: {
    NavItem,
    DropDown,
  },
  data() {
    return {
      token: false,
    };
  },
  beforeMount() {
    this.token = this.isLoggedIn(this.$cookies.get("token"));
  },
};
</script>

<style lang="scss">
#NavBar {
  display: flex;
  justify-content: space-between;
  height: 10vh;
  background-color: #ffffff;
}

#logo {
  display: inline-block;
  float: left;
  margin-left: 1em;
  height: 100%;
  width: auto;
}

nav {
  display: flex;
  justify-content: space-around;
  height: calc(10vh - 60px);
  padding: 30px;
  float: right;
  min-width: 300px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #5c7fa1;
    }
  }

  .NavItem {
    display: flex;
    margin: 0;
    justify-content: space-between;
  }
}
</style>

<template>
  <div class="login">
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
export default {
  name: "LoginView",
  components: {
    LoginComponent,
  },
};
</script>

<style lang="scss">
.login {
  display: flex;
  position: relative;
  text-align: center;
}
</style>

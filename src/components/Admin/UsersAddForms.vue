<template>
  <div class="UsersForm">
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="username">Username: </label>
        <input
          type="text"
          class="form-control"
          name="username"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label for="password">Password: </label>
        <input
          type="password"
          class="form-control"
          name="password"
          v-model="password"
        />
      </div>
      <button type="submit" v-on:click="addUser" class="btn btn-primary">
        Add
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  username: "UsersAddForms",
  props: {
    user: {
      id: Number,
      username: String,
      password: String,
    },
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  mounted() {
    if (this.user) {
      this.id = this.user.id;
      this.username = this.user.username;
      this.password = this.user.password;
    }
  },
  methods: {
    addUser() {
      axios
        .post(this.url + "users", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          this.username = "";
          this.password = "";
          this.$parent.getUsers();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
.UsersForm {
  width: 24%;
  margin: auto;
  padding: 30px;
}

.UsersForm form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.form-group {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.form-group label {
  line-height: 2em;
  vertical-align: middle;
  margin-right: 5px;
}
</style>

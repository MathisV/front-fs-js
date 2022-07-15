<template>
  <form class="login-form" @submit="onSubmit">
    <h1>Login</h1>
    <div class="form-control">
      <input
        type="text"
        name="username"
        v-model="username"
        placeholder="username"
      />
    </div>
    <div class="form-control">
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="password"
      />
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginComponent",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.username && this.password) {
        axios
          .post(this.url + "login", {
            username: this.username,
            password: this.password,
          })
          .then((response) => {
            if (response.status === 200) {
              this.$cookies.set("token", response.data.token, "1h");
              this.$router.push("/admin/photos");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log("Please fill in all fields");
      }
    },
  },
};
</script>

<style>
.login-form {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  width: 300px;
  margin: auto;
  margin-top: 5%;
  padding: 10px;
  background-color: white;
  box-shadow: 0px 11px 35px 4px rgba(0, 0, 0, 0.15);
}
h1 {
  text-align: center;
}
input {
  margin: 0 0 20px;
  padding: 10px 15px;
  border: 1px solid #ccc;
}
button {
  width: 50%;
  padding: 10px 15px;
  margin: 5px auto;
  border: 0;
  background-color: rgb(45, 150, 255);
  color: white;
}

button[type="delete"] {
  background-color: rgb(255, 49, 49);
}
button:hover {
  background-color: rgb(11, 11, 240);
}
</style>

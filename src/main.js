import { createApp } from "vue";
import VueCookies from "vue-cookies";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

export const eventBus = createApp(App);
eventBus.mixin({
  data() {
    return {
      isLogged: Boolean,
      url: "https://europe-west1-thom-b6fe9.cloudfunctions.net/webApi/",
    };
  },
  methods: {
    async isLoggedIn(token) {
      if (token) {
        //console.log("token", token);
        await axios.get(this.url + "login/" + token).then((response) => {
          //console.log("response", response);
          //console.log(response.data.message);
          if (response.data.message == "Authenticated") {
            this.isLogged = true;
          } else {
            this.isLogged = false;
          }
        });
        //console.log("isLogged", this.isLogged);
      } else {
        this.isLogged = false;
      }
    },
    async redirectIfNotLoggedIn() {
      this.isLoggedIn(this.$cookies.get("token")).then(() => {
        //console.log(this.isLogged);
        if (!this.isLogged) {
          this.$router.push("/login");
          return false;
        }
        return true;
      });
    },
    logout() {
      axios.get(this.url + "logout/" + this.$cookies.get("token")).then(() => {
        this.$cookies.remove("token");
      });
    },
  },
});

eventBus.use(router).use(VueCookies).mount("#app");

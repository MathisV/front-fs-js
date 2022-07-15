<template>
  <div class="CategoriesForm">
    <form @submit.prevent="submit">
      <input type="hidden" v-model="id" />
      <div class="form-group">
        <label for="name">Name: </label>
        <input type="text" class="form-control" id="name" v-model="name" />
      </div>
      <div class="form-group">
        <label for="description">Description: </label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="description"
        />
      </div>
      <button type="submit" v-on:click="addCat" class="btn btn-primary">
        Add
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CategoriesAddForms",
  props: {
    cat: {
      id: Number,
      name: String,
      description: String,
    },
  },
  data() {
    return {
      name: "",
      description: "",
    };
  },
  mounted() {
    if (this.cat) {
      this.id = this.cat.id;
      this.name = this.cat.name;
      this.description = this.cat.description;
    }
  },
  methods: {
    addCat() {
      axios
        .post(this.url + "categories/", {
          name: this.name,
          description: this.description,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          this.name = "";
          this.description = "";
          this.$parent.getCategories();
        });
    },
  },
};
</script>

<style lang="scss">
.CategoriesForm {
  width: 24%;
  margin: auto;
  padding: 30px;
}

.CategoriesForm form {
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

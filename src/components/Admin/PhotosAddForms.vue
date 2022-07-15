<template>
  <div class="PhotosForm">
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="name">Photo: </label>
        <input
          type="file"
          class="form-control"
          name="file"
          :onChange="handleFile"
        />
      </div>
      <div class="form-group">
        <label for="name">Name: </label>
        <input type="text" class="form-control" name="name" v-model="name" />
      </div>
      <div class="form-group">
        <label for="password">Description: </label>
        <input
          type="text"
          class="form-control"
          name="description"
          v-model="description"
        />
      </div>
      <input type="hidden" name="category" v-model="category" />
      <button type="submit" v-on:click="addPhoto" class="btn btn-primary">
        Add
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  username: "PhotosAddForms",
  props: {
    categories: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      description: "",
      category: "",
      state: {
        file: null,
      },
    };
  },
  mounted() {
    if (this.user) {
      this.name = this.photo.name;
      this.description = this.photo.description;
      this.category = this.categories;
    }
  },
  methods: {
    handleFile(e) {
      const file = e.target.files[0];
      this.state = { file };
    },
    addPhoto() {
      console.log("Uploading...", this.state.file);

      const formData = new FormData();
      formData.append("file", this.state.file);
      formData.append("name", this.name);
      formData.append("description", this.description);
      formData.append("category", this.categories);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      axios
        .post(this.url + "photos", formData, config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          this.name = "";
          this.description = "";
          this.category = "";
          this.state = {
            file: null,
          };
          this.$parent.getPhotos();
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

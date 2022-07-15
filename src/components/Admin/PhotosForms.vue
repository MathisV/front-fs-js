<template>
  <div class="PhotosForm">
    <form @submit.prevent="onSubmit" @delete.prevent="onSubmit">
      <input type="hidden" name="id" v-model="this.id" />
      <img :src="urlPhoto" :alt="description" />
      <div class="form-group">
        <label for="photos">Photos: </label>
        <input
          type="text"
          class="form-control"
          name="name"
          v-model="this.name"
        />
      </div>
      <div class="form-group">
        <label for="description">Description: </label>
        <input
          type="text"
          class="form-control"
          name="description"
          v-model="this.description"
        />
      </div>
      <div class="form-group">
        <label for="category">Category: </label>
        <select class="form-control" name="category" v-model="this.category">
          <option v-for="cat in categories" :value="cat.id" :key="cat.id">
            {{ cat.name }}
          </option>
        </select>
      </div>
      <button type="submit" v-on:click="updatePhoto" class="btn btn-primary">
        Update
      </button>
      <button type="delete" v-on:click="deletePhoto" class="btn btn-primary">
        Delete
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PhotosForms",
  props: {
    photo: {
      id: String,
      category: String,
      name: String,
      description: String,
      fileName: String,
      url: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      id: 0,
      name: "",
      description: "",
      category: "",
      urlPhoto: "",
      deleteButton: false,
      updateButton: false,
    };
  },
  mounted() {
    if (this.photo) {
      this.id = this.photo.id;
      this.name = this.photo.name;
      this.description = this.photo.description;
      this.urlPhoto = this.photo.url;
      this.category = this.photo.category;
    }
  },
  methods: {
    updatePhoto() {
      console.log("updatePhoto");
      axios
        .patch(this.url + "photos/" + this.photo.id, {
          name: this.name,
          description: this.description,
          category: this.category,
        })
        .then((response) => {
          console.log("RES", response);
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          this.$parent.getPhotos();
        });
    },
    deletePhoto() {
      console.log("deletePhoto");
      axios
        .delete(this.url + "photos/" + this.photo.id)
        .then((response) => {
          console.log("RES", response);
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          this.$parent.getPhotos();
        });
    },
  },
};
</script>

<template>
  <div class="DropDown">
    <div class="DropDownTitle" v-on:click="show = !show">
      <a>{{ name }}</a>
    </div>

    <Transition name="slide-fade">
      <div class="DropDownItems" ref="dropdown" v-if="show">
        <NavItem
          v-for="category in categories"
          :key="category.id"
          :name="category.name"
          :link="'/Photos/' + category.id"
        />
      </div>
    </Transition>
  </div>
</template>

<script>
import axios from "axios";
import NavItem from "@/components/NavItem.vue";
export default {
  name: "DropDown",
  components: {
    NavItem,
  },
  props: {
    name: String,
  },
  data() {
    return {
      categories: [],
      show: false,
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      axios
        .get(this.url + "categories")
        .then((response) => {
          this.categories = response.data;
          console.log(this.categories);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    hide() {
      this.show = false;
    },
  },
};
</script>

<style>
.DropDown {
  display: block;
  width: 100%;
  z-index: 100;
}

.DropDownItems {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* width: 100%; */
  height: auto;
  background-color: white;
  line-height: 1.5;
  padding-top: 1em;
  padding-bottom: 1em;
}

.DropDownItems .NavItem {
  margin: auto;
}

.slide-fade-enter-active {
  transition: all 0.8s ease-in-out;

  line-height: 0;
  padding: 0 1em;
  opacity: 0;
}
.slide-fade-leave-active {
  transition: all 0.8s ease-in-out;
  line-height: 1.5;
  padding-top: 1em;
  padding-bottom: 1em;
}
.slide-fade-enter-to {
  line-height: 1.5;
  padding-top: 1em;
  padding-bottom: 1em;
  opacity: 1;
}

.slide-fade-leave-to {
  line-height: 0;
  padding: 0 1em;
  opacity: 0;
}
</style>

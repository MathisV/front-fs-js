<template>
  <div class="NavItem">
    <router-link :to="{ path: link }">{{ name }}</router-link>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    name: String,
    link: String,
  },
};
</script>

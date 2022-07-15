<template>
  <div class="PhotoItem">
    <img :src="photo.url" />
  </div>
</template>

<script>
export default {
  name: "PhotoItem",
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.PhotoItem {
  display: flex;
  position: relative;
  width: 19.5%;
  height: auto;
  margin: 5px 2px;
  background-color: #fff;
  overflow: hidden;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>

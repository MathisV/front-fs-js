<template>
  <div id="HomeVideo">
    <div class="video-container">
      <video autoplay loop muted>
        <source src="/videos/home-video.mp4" type="video/mp4" />
        <source src="/videos/home-video.webm" type="video/webm" />
      </video>
    </div>
  </div>
</template>

<style lang="scss">
#HomeVideo,
video {
  position: relative;
  width: 100vw;
  height: 90vh;
  object-fit: cover;
  overflow: hidden;
  margin: auto;
  z-index: 1;
}
</style>

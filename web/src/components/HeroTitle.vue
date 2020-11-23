<template>
  <div class="hero" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
    <div class="hero-content">
      <h1 class="text-4xl">{{ pageTitle }}</h1>
      <h2 v-if="intro" class="text-xl font-weight-normal">{{ intro }}</h2>
    </div>
  </div>
</template>

<script>
// import simpleParallax from 'simple-parallax-js'

export default {
  props: {
    pageTitle: String,
    imageUrl: String,
    intro: String
  }
  // mounted() {
  //   var image = this.$refs.heroImage
  //   new simpleParallax(image, {
  //     orientation: 'down'
  //   })
  // }
}
</script>

<style lang="scss" scoped>
.hero {
  // background-image: url(https://res.cloudinary.com/atmosphere-studios/image/upload/v1604373409/Mahana/nz-beach-sunset.jpg);
  background-size: cover;
  background-position-y: center;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

h1,
h2 {
  color: #fff;
}
</style>

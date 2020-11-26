<template>
  <div class="hero">
    <cld-image class="hero-image" cloudName="mahana" :publicId="cloudinaryImg">
      <cld-transformation crop="fill" width="2000" height="600" format="auto" gravity="center" />
    </cld-image>
    <div class="hero-content">
      <h1 class="text-4xl">{{ pageTitle }}</h1>
      <h2 v-if="intro" class="text-xl font-weight-normal">{{ intro }}</h2>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
// import simpleParallax from 'simple-parallax-js'

export default {
  props: {
    pageTitle: String,
    cloudinaryImageId: String,
    intro: String
  },
  computed: {
    cloudinaryImg() {
      return 'Website/' + this.cloudinaryImageId
    }
  }
  // mounted() {
  //   var image = this.$refs.heroImage
  //   new simpleParallax(image, {
  //     orientation: 'down'
  //   })
  // }
}
</script>

<style lang="scss">
.hero {
  position: relative;
  // background-size: cover;
  // background-position-y: center;
  height: 600px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  img {
    object-fit: cover;
    width: 100%;
    height: 600px;
  }
}

.hero-content {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  z-index: 10;
  padding-bottom: $spacer-8;
  h1,
  h2 {
    color: #fff;
  }
  h2 {
    line-height: 1.3;
  }
}

.mask {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
  height: 400px;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
}
</style>

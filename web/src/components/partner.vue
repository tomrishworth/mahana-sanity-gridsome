<template>
  <div>
    <div class="logo mb-3">
      <img :src="partner.image.asset.url" :alt="partner.name" />
    </div>
    <p class="text-sm">{{ partner.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'partner',
  props: ['partner']
}
</script>

<style lang="scss" scoped>
.logo {
  text-align: center;
  img {
    object-fit: contain;
    width: 150px;
    height: 150px;
  }
}
</style>

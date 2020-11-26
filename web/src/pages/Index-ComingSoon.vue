<template>
  <div class="landing">
    <div>
      <g-image
        class="logo mb-4"
        src="https://res.cloudinary.com/dfnxivzkc/image/upload/v1606100361/Website/logo_jbhlbs.png"
        alt="Mahana Logo"
      />
      <h1 class="mb-5">Coming soon</h1>
      <p class="text-white mb-0">Media & Investor Enquires</p>
      <p class="">
        <a title="Email Ed McCullagh" href="mailto:ed@mahanabiopharma.co.nz"
          >ed@mahanabiopharma.co.nz</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'A Cure for Migraine is Coming'
  }
}
</script>

<style lang="scss" scoped>
.landing {
  background-color: #0a0b14;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  padding-bottom: $spacer-6;

  background-image: url('https://res.cloudinary.com/dfnxivzkc/image/upload/c_fill,f_auto,h_1000,w_1000/v1606100248/Website/homepage-hero-desktop_zt9gum.jpg');
  @include media-breakpoint-up(sm) {
    background-position: center center;
    background-size: cover;
    justify-content: flex-start;
    padding-left: $spacer-9;
    padding-bottom: $spacer-8;
    background-image: url('https://res.cloudinary.com/dfnxivzkc/image/upload/f_auto/v1606100248/Website/homepage-hero-desktop_zt9gum.jpg');
  }
}

.logo {
  width: 160px;
  @include media-breakpoint-up(sm) {
    width: 200px;
  }
}

h1 {
  font-size: $text-xl;
  color: #fff;
}
</style>

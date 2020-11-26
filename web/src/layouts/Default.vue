<template>
  <div>
    <header class="header w-100">
      <b-navbar type="dark" toggleable="lg" class="d-flex">
        <b-navbar-brand href="/">
          <g-image src="~/assets/images/logo.png" alt="Mahana Logo" width="150" />
        </b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-item router-component-name="g-link" to="/">Home</b-nav-item> -->
            <b-nav-item router-component-name="g-link" to="/daysaver">Daysaver</b-nav-item>
            <b-nav-item router-component-name="g-link" to="/our-products">Our Products</b-nav-item>
            <b-nav-item router-component-name="g-link" to="/cannabis-and-migraines"
              >Cannabis & Migraines</b-nav-item
            >
            <b-nav-item router-component-name="g-link" to="/our-plans">Our Plans</b-nav-item>
            <b-nav-item router-component-name="g-link" to="/about">About</b-nav-item>
            <b-nav-item router-component-name="g-link" to="/contact">Contact</b-nav-item>
            <!-- <b-button variant="outline-primary" v-b-modal.invest-modal>Invest</b-button> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <slot />
    <b-modal id="invest-modal" title="Invest with Us">
      <p class="my-4">Here is some text about the invest process</p>
      <p>Mailchimp signup form will go here</p>
    </b-modal>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
.header {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  &::before {
    content: '';
    background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    width: 100%;
    height: 200px;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
  }
}

.navbar {
  position: relative;
  z-index: 7;
}

.navbar-brand {
  position: absolute;
  top: 0;
  left: $spacer-8;
  &::before {
    content: '';
    width: 400px;
    height: 400px;
    position: absolute;
    top: -50px;
    left: -100px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 60%);
    z-index: 1;
  }
  img {
    position: relative;
    z-index: 2;
  }
}

.nav-link {
  font-size: $text-sm;
  font-weight: 700;
}
</style>

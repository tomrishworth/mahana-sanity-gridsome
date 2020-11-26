<template>
  <Layout>
    <section class="hero">
      <div class="hero-content pb-8 text-center">
        <h1 class="text-2xl">A Cure for Migraine is Coming</h1>
        <h2 class="text-lg mb-6">
          Harnessing cannabis plant genetics to create novel migraine medicines from unique
          cultivars
        </h2>
        <h3 class="text-lg">Register your interest</h3>
        <mailchimp-subscribe
          url="https://xxx.xxx.list-manage.com/subscribe/post-json"
          user-id="xxx"
          list-id="xxx"
          @error="onError"
          @success="onSuccess"
        >
          <template v-slot="{ subscribe, setEmail, error, success, loading }">
            <form @submit.prevent="subscribe">
              <div class="d-flex">
                <input
                  class="form-control mr-4"
                  placeholder="Email Address"
                  type="email"
                  @input="setEmail($event.target.value)"
                />
                <button class="btn btn-primary" type="submit">Register</button>
              </div>

              <div v-if="error">{{ error }}</div>
              <div v-if="success">Yay!</div>
              <div v-if="loading">Loading…</div>
            </form>
          </template>
        </mailchimp-subscribe>
      </div>
    </section>
    <section class="container py-10">
      <div class="row align-items-center ">
        <div class="col-sm-5">
          <p class="text-primary section-text">
            <strong>Mahana Biopharma</strong> is a NZ owned and operated Medical Cannabis company
            dedicated to migraine headache product development and research for prescripbers and
            patient in New Zealand and around the world
          </p>
        </div>
        <div class="col-sm-7">
          <g-image
            src="~/assets/images/women-in-sun.jpg"
            alt="Smiling women in the sun"
            width="600"
          />
        </div>
      </div>
    </section>
    <section class="container py-10">
      <div class="row">
        <div class="col-sm-6"></div>
        <div class="col-sm-6">
          <h3>Our Products</h3>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe'

export default {
  metaInfo: {
    title: 'Mahana Biopharma'
  },
  components: {
    MailchimpSubscribe
  },
  methods: {
    onError() {
      // handle error
    },
    onSuccess() {
      // handle success
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url(../assets/images/homepage-hero-desktop.jpg);
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.hero-content {
  max-width: 700px;
  color: #fff;
  margin-left: auto;
  margin-right: auto;
}

.section-text {
  transform: translateX(160px);
  position: relative;
  z-index: 10;
}
</style>

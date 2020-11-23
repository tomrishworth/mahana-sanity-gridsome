<template>
  <Layout>
    <hero-title
      class="mb-8"
      pageTitle="Cannabis & Migraine"
      imageUrl="https://res.cloudinary.com/dfnxivzkc/image/upload/v1606074845/Website/matthew-brodeur-qcCPIhhdgTw-unsplash_suoz9a.jpg"
      intro="Mahana is creating premium terpene and cannabinoid-based therapeutic products able to treat and support the health of patients suffering debilitating migraine headache.
"
    ></hero-title>
    <section class="container-lg">
      <div class="row">
        <div class="col-sm-3">
          <b-list-group class="menu" v-b-scrollspy:faq-list>
            <b-list-group-item
              v-for="faq in sortedFaqs"
              :key="faq.id"
              :href="`#${slug(faq.node.question)}`"
            >
              {{ faq.node.question }}
            </b-list-group-item>
          </b-list-group>
        </div>

        <div id="faq-list" class="col-sm-9">
          <div class="mb-8" :id="slug(faq.node.question)" v-for="faq in sortedFaqs" :key="faq.id">
            <h3 class="text-2xl">{{ faq.node.question }}</h3>
            <vue-simple-markdown :source="faq.node.answer"></vue-simple-markdown>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import slugify from 'slugify'
import HeroTitle from '~/components/HeroTitle'

export default {
  metaInfo: {
    title: 'FAQs'
  },
  components: {
    HeroTitle
  },
  methods: {
    slug(string) {
      return slugify(string, { remove: /[*+~.()'"!?:@]/g }).toLowerCase()
    }
  },
  computed: {
    sortedFaqs() {
      let faqs = this.$page.faqs.edges
      return faqs.sort((a, b) => a.node.order - b.node.order)
    }
  }
}
</script>

<page-query>
query {
  faqs: allSanityFaq  {
    edges {
      node {
        id
        order
        question
        answer
      }
    }
  }
}

</page-query>

<style lang="scss" scoped>
.menu {
  position: sticky;
  top: 20px;
}

.list-group-item {
  font-size: $text-base;
  font-weight: 700;
  border: none;
  padding: 10px;
  margin-bottom: $spacer-4;
  &.active {
    background: none;
    color: $blue;
  }
}
</style>

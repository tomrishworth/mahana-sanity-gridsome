<template>
  <Layout>
    <hero-title
      class="mb-8"
      pageTitle="About us"
      cloudinaryImageId="petr-vysohlid-9fqwGqGLUxc-unsplash_ow747i.jpg"
      intro="Mahana exists to improve the quality of life for millions of migraine headache sufferers worldwide. To find a cure for migraine, we are proud to have assembled a team of global industry leaders.
"
    ></hero-title>
    <section class="container-md mb-8">
      <p class="page-intro">
        Mahana has built a best in class business management and clinical research team with members
        experienced in advanced migraine and neurological study, as well as technical terpene and
        cannabinoid cultivation, extraction, fractionation and purification.
      </p>
      <p>
        Our founders have a broad range of business experience covering multiple industry sectors,
        from concept up start-ups to NZX50 listed companies.
      </p>

      <p>
        Our operational team includes GMP production processes and endocannabinoid system experts,
        with our research team supported by experts in migraine headache pain and neurology.
      </p>
    </section>
    <section class="container-lg mb-6">
      <h2 class="text-center text-2xl text-primary mb-6">Our Partners</h2>
      <div class="row">
        <partner
          class="col-sm-4 mb-6"
          v-for="partner in sortedPartners"
          :key="partner.id"
          :partner="partner.node"
        ></partner>
      </div>
    </section>
  </Layout>
</template>

<script>
// import teamMember from '~/components/teamMember'
import Partner from '~/components/partner'
import HeroTitle from '~/components/HeroTitle'
// import Partner from '../components/Partner'

export default {
  name: 'about',
  metaInfo: {
    title: 'About us'
  },
  components: {
    HeroTitle,
    Partner
  },
  computed: {
    // sortedTeamMembers() {
    //   let teamMembers = this.$page.teamMembers.edges
    //   return teamMembers.sort((a, b) => a.node.order - b.node.order)
    // },
    sortedPartners() {
      let teamMembers = this.$page.partners.edges
      return teamMembers.sort((a, b) => a.node.order - b.node.order)
    }
  }
}
</script>

<page-query>
query  {
  partners:allSanityPartner {
    edges {
      node {
        id
        name
        description
        order
        image {
          asset {
            url
          }
        }
      }
    }
  }
}
</page-query>

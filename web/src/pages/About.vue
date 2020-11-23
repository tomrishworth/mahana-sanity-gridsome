<template>
  <Layout>
    <hero-title class="mb-8" pageTitle="About Us"></hero-title>
    <section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi,
        eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem
        dolores inventore iste reprehenderit maxime! Iusto.
      </p>
      <h2>Our Team</h2>
      <div class="row">
        <team-member
          class="col"
          v-for="teamMember in sortedTeamMembers"
          :key="teamMember.node.id"
          :teamMember="teamMember.node"
        ></team-member>
      </div>
    </section>
  </Layout>
</template>

<script>
import teamMember from '~/components/teamMember'
import HeroTitle from '~/components/HeroTitle'

export default {
  name: 'about',
  metaInfo: {
    title: 'About us'
  },
  components: {
    teamMember,
    HeroTitle
  },
  computed: {
    sortedTeamMembers() {
      let teamMembers = this.$page.teamMembers.edges
      return teamMembers.sort((a, b) => a.node.order - b.node.order)
    }
  }
}
</script>

<page-query>
query  {
	teamMembers: allSanityTeamMember {
    edges {
      node {
        order
        id
        name

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

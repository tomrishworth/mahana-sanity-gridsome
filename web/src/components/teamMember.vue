<template>
  <div>
    <img :src="teamMember.image.asset.url" :alt="teamMember.name" />
    <h3>{{teamMember.name}}</h3>
    <h4>{{teamMember.role}}</h4>
    <p>{{teamMember.bio}}</p>
  </div>
</template>

<script>
export default {
  name: 'teamMember',
  props: ['teamMember']
}
</script>

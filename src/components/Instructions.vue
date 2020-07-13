<template>
<div>
 <h2>Ready? Let's start!</h2>
    <b-list-group flush>
      <b-list-group-item  v-for="s in recipe._instructions" :key="s.number">
               <b-icon icon="egg-fried"></b-icon>   {{ s.step }} </b-list-group-item>
    </b-list-group>
</div>




  
</template>

<script>
export default {
  name: "Instructions",
    props: {
    recipe: {
      type: Object,
      required: true
    }
    },

  methods: {
   
  }
    }
</script>
<style lang="scss" scoped>
.container {
  max-width: 400px;
}
</style>

<template>
  <div >
  <b-card header="What you'll need" style="max-width: 300rem;">
    <b-list-group flush>
      <b-list-group-item v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"> <b-icon icon="egg-fried"></b-icon>   {{ r.original }}</b-list-group-item>
    </b-list-group>
  </b-card>
  </div>
</template>

<script>
export default {
  name: "Ingrediants",
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

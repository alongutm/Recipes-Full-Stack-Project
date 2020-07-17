<template>
  <div>
    <b-list-group flush class="block">
      <h5 v-if="ingredients.length>0">Ingredients:</h5>
      <b-list-group-item flush v-for="i in ingredients" :key="i.number">
        <img
          width="30rem"
          :src="`https://spoonacular.com/cdn/ingredients_100x100/${i.image}`"
          :alt="i.image"
        />
        {{i.name}}
      </b-list-group-item>
    </b-list-group>

  </div>
</template>

<script>
export default {
  name: "IngredientsItem",
  props: {
    ingredients: {
      type: Array,
      required: false
    }
  }
};
</script>

<style>
.block {
  display: block;
}
</style>
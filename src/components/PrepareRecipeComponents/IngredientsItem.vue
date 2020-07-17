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


      <div v-if="extendedIngredients">
        <b-list-group-item
          v-for="(r, index) in recipe.extendedIngredients"
          :key="index + '_' + r.id"
        >
          <b-icon icon="egg-fried"></b-icon>
          {{ r.original }}
        </b-list-group-item>
      </div>
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
    },
    IngredientList: {
      type: Array,
      required: false
    },
    extendedIngredients: {
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
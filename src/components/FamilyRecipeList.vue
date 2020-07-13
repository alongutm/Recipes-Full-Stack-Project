<template>
  <b-container>
    <h3>
      {{ title }}
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <FamilyRecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FamilyRecipePreview from "./FamilyRecipePreview.vue";
export default {
  name: "FamilyRecipeList",
  components: {
    FamilyRecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.myFamilyRecipes();
  },
  methods: {
    async myFamilyRecipes() {
      try {
        const response = await this.axios.get(
          "https://test-for-3-2.herokuapp.com/recipes/random"
        );
        // console.log(response);
        const recipes = response.data.recipes;
        this.recipes = [];
        this.recipes.push(...recipes);
        console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>

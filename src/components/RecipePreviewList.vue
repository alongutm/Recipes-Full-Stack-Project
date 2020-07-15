<template>
  <b-container>
    <h3>
      {{ title }}
      <slot></slot>
    </h3>
    <b-row>
      <div v-for="r in recipes" :key="r.recipe_id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </div>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
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
  // mounted() {
  //   this.updateRecipes();
  // },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          "http://localhost:3000/recipes/randomRecipes"
          //   "https://test-for-3-2.herokuapp.com/recipes/random"
        );

        //console.log(response);
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },
    async myFavoriteRecipes() {
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.get(
          "http://localhost:3000/profiles/myFavorites"
        );
        const recipes = response.data.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        //consolconsole.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },
    async myRecipes() {
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.get(
          "http://localhost:3000/profiles/myRecipes"
        );
        // console.log(response);
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },
    async myFamilyRecipes() {
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.get(
          "https://test-for-3-2.herokuapp.com/recipes/random"
        );
        console.log("@@@@@@recipePreviewList line 88");
        console.log(response);
        console.log(response.data.recipes);
        const recipes = response.data.recipes;
        this.recipes = [];
        this.recipes.push(...recipes);
        console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },
    searchRecipes(recipesArray){  
      this.recipes = [];
      console.log(recipesArray);
      this.recipes.push(...recipesArray);
      console.log("RecipePreviewList is");
      console.log(this.recipes);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>

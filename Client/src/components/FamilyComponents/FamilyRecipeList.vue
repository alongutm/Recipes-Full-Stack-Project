<template>
  <b-container>
    <h3>
      {{ title }}
      <slot></slot>
    </h3>
    <b-card-group deck>
      <b-row>
        <div v-for="r in recipes" :key="r.recipe_id">
          <FamilyRecipePreview class="recipePreview" :recipe="r" />
        </div>
      </b-row>
    </b-card-group>
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
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.get(
          "http://localhost:3000/profiles/myFamilyRecipes"
        );
        // console.log(response);
        const recipes = response.data;
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
h3,
h5,
h1 {
  font-family: "Bahnschrift", Times, serif;
}
</style>

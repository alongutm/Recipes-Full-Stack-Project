<template>

<b-container class="bv-example-row" >
  <b-card style="max-width: 100%;">
  <div v-if="recipe">

<b-breadcrumb>
    <b-breadcrumb-item href="/">
      <b-icon icon="house-fill"   ></b-icon>
      Home
    </b-breadcrumb-item>
    <b-breadcrumb-item active>{{recipe.title}}</b-breadcrumb-item>
    </b-breadcrumb>

  <b-row >
    <b-col cols="12" md="7" align-self="center">
    <h1>{{ recipe.title }} </h1>
    <RecipeDetails :recipe="recipe" />
    </b-col>
      <b-col align-self="end">
        <b-button block  to="/PrepareRecipe" variant="dark" size="lg">Wanna make this dish? Click here!</b-button>
 </b-col>
 </b-row>

    <b-row>
    <b-col cols="12" md="7" align-self="center">
    <img :src="recipe.image" width=95% /> 
       <Instructions :recipe="recipe" />
    </b-col>
    <b-col cols="6" md="5" align-self="start">
        <br>
        <!--What you'll need-->
      <Ingredients :recipe="recipe"/>

    </b-col>
    </b-row>
    <b-row>
    <b-col cols="12" md="8" >
    </b-col>
    <b-col cols="6" md="4">
      <br>

    </b-col>
  </b-row>

    </div>
  </b-card>
  </b-container>
</template>

<script>
import Ingredients from "../components/Ingredients"
import Instructions from "../components/Instructions"
import RecipeDetails from "../components/RecipeDetails"
export default {
  components : {
    Ingredients,
    Instructions,
    RecipeDetails
  },
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      let response = undefined;
      if(response) return;
      // response = this.$route.params.response;
      console.log("########### trying to get recipe info.....")
      try {
        response = await this.axios.get(
          "http://localhost:3000/recipes/recipeInfo",
          //"https://test-for-3-2.herokuapp.com/recipes/info",
          {
            params: { id: this.$route.params.id }
          }
        );
         console.log(response.status);
         console.log(response.data.recipe);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        analyzedInstructions,
        instructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        MealsQuantity,
      } = response.data.recipe;

      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* .recipe-header{

} */
</style>

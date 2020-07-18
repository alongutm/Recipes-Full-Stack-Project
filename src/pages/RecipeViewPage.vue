<template>
  <b-container class="bv-example-row">
    <b-card style="max-width: 100%;">
      <div v-if="recipe">
        <b-breadcrumb>
          <b-breadcrumb-item href="/">
            <b-icon icon="house-fill"></b-icon>Home
          </b-breadcrumb-item>
          <b-breadcrumb-item active>{{recipe.recipeName}}</b-breadcrumb-item>
        </b-breadcrumb>

        <b-row>
          <b-col cols="12" md="7" align-self="center">
            <h1>{{ recipe.recipeName }}</h1>
            <RecipeDetails :recipe="recipe" />
          </b-col>
          <b-col align-self="end">
            <b-button
              block
              :to="{ name: 'c', params: { recipeId: recipe.recipe_id } }"
              variant="dark"
              size="lg"
              @click="addToMealPlan"
            >Wanna make this dish? Click here!</b-button>
            <b-button
              block
              variant="dark"
              size="lg"
              @click="addToMealPlanandAndReload"
            >Add the recipe to tour next meal!</b-button>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12" md="7" align-self="center">
            <b-img rounded alt="Rounded image" :src="recipe.image" />
            <Instructions :recipe="recipe" />
          </b-col>
          <b-col cols="6" md="5" align-self="start">
            <br />
            <!--What you'll need-->
            <Ingredients :recipe="recipe" />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="8"></b-col>
          <b-col cols="6" md="4">
            <br />
          </b-col>
        </b-row>
      </div>
    </b-card>
  </b-container>
</template>

<script>
import Ingredients from "../components/Ingredients";
import Instructions from "../components/Instructions";
import RecipeDetails from "../components/RecipeDetails";
import Header from "../components/Header";

export default {
  components: {
    Ingredients,
    Instructions,
    RecipeDetails
  },
  data() {
    return {
      recipe: null,
      mealPlanList: []
    };
  },
  methods: {
    addToMealPlanandAndReload() {
      this.addToMealPlan();
      location.reload();
    },
    addToMealPlan() {
      this.mealPlanList = JSON.parse(localStorage.getItem("mealPlanList"));
      if (this.mealPlanList == undefined) {
        this.mealPlanList = [];
      }
      if (!this.mealPlanList.includes(this.recipe.recipe_id)) {
        this.mealPlanList[this.recipe.recipe_id] = this.recipe;
        this.$root.store.saveMealPlanList(this.mealPlanList);
      }
    }
  },
  async created() {
    try {
      let response;

      //user is signed in
      if (this.$root.store.username) {
        // console.log("gggg");
        this.axios.defaults.withCredentials = true;
        // add to last watched:
        const responseLastWatched = await this.axios.post(
          "http://localhost:3000/profiles/updateLastWatched",
          {
            recipe_id: this.$route.params.recipeId
          }
        );
        // check in My Recipes

        const response = await this.axios.get(
          "http://localhost:3000/profiles/myRecipes"
        );
        let recipes = [];
        recipes.push(...response.data);
        //console.log(response.data);
        let result = recipes.filter(
          x => x.recipe_id === this.$route.params.recipeId
        )[0];
        //  console.log(result.recipe_id);

        if (result) {
          let {
            recipe_id,
            recipeName,
            image,
            coockingTime,
            numberOfLikes,
            Instructions,
            isVegan,
            isVegeterian,
            isGlutenFree,
            IngredientList,
            MealsQuantity,
            extendedIngredients,
            analyzedInstructions
          } = result;

          let __recipe = {
            recipe_id,
            recipeName,
            image,
            coockingTime,
            numberOfLikes,
            Instructions,
            isVegan,
            isVegeterian,
            isGlutenFree,
            IngredientList,
            MealsQuantity,
            extendedIngredients,
            analyzedInstructions
          };

          __recipe.IngredientList = IngredientList.split(",");
          this.recipe = __recipe;
          return;
        }
      }
      try {
        response = await this.axios.get(
          "http://localhost:3000/recipes/recipeInfo",
          {
            params: { recipe_id: this.$route.params.recipeId }
          }
        );

        if (response.status !== 200) {
          this.$router.replace("/NotFound");
        }
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        recipe_id,
        recipeName,
        image,
        coockingTime,
        numberOfLikes,
        instructions,
        isVegan,
        isVegeterian,
        isGlutenFree,
        IngredientList,
        MealsQuantity,
        extendedIngredients,
        analyzedInstructions
      } = response.data.data;

      let _instructions = analyzedInstructions
        .map(fstep => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        recipe_id,
        recipeName,
        image,
        coockingTime,
        numberOfLikes,
        instructions,
        _instructions,
        analyzedInstructions,
        isVegan,
        isVegeterian,
        isGlutenFree,
        IngredientList,
        MealsQuantity,
        extendedIngredients
      };
      this.recipe = _recipe;
      //    console.log(this.recipe.analyzedInstructions);
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

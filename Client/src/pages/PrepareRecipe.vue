<template>
  <b-container>
    <h1 class="center">{{ recipe.recipeName }}</h1>
    <b-img rounded alt="Rounded image" :src="recipe.image" class="center" />
    <div v-if="recipe._instructions" class="center">
      <div v-for="s in recipe._instructions" :key="s.number">
        <b-form-checkbox size="lg" v-model="recipeProgress[s.number]" @change="setChanged">
          <b-card-group>
            <b-card>
              <h5>Step #{{s.number}}:</h5>
              <b-list-group width="50rem">
                <b-list-group-item>
                  <EquipmentItem :equipment="s.equipment[0]" />
                  <IngredientsItem :ingredients="s.ingredients" />
                </b-list-group-item>
              </b-list-group>
              <b-card>
                <StepInfoItem :s="s" />
              </b-card>
            </b-card>
          </b-card-group>
        </b-form-checkbox>
      </div>
    </div>

    <div v-else-if="recipe.IngredientList" class="center">
      <b-form-checkbox size="lg" v-model="recipeProgress" @change="setChanged">
        <b-card-group>
          <b-card>
            <h5>Ingredients:</h5>
            <b-list-group width="50rem">
              <b-list-group-item v-for="(r, index) in recipe.IngredientList" :key="index + '_' + r">
                <b-icon icon="egg-fried"></b-icon>
                {{ r }}
              </b-list-group-item>
            </b-list-group>
            <h5>Instruction:</h5>
            <b-card>
              <b-icon icon="egg-fried"></b-icon>
              {{recipe.Instructions}}
            </b-card>
          </b-card>
        </b-card-group>
      </b-form-checkbox>
    </div>
  </b-container>
</template>


<script>
import EquipmentItem from "../components/PrepareRecipeComponents/EquipmentItem";
import IngredientsItem from "../components/PrepareRecipeComponents/IngredientsItem";
import StepInfoItem from "../components/PrepareRecipeComponents/StepInfoItem";

export default {
  components: {
    EquipmentItem,
    IngredientsItem,
    StepInfoItem
  },
  data() {
    return {
      recipe: null,
      recipeProgress: [],
      IngredientList: []
    };
  },

  methods: {
    setChanged() {
      console.log("changing!");
      this.$root.store.saveRecipeProgress(
        this.recipeProgress,
        `recipeProgress${this.recipe.recipe_id}`
      );

      console.log(this.recipeProgress);
    }
  },
  async created() {
    // location.load();
    try {
      let response;
      //user is signed in
      if (this.$root.store.username) {
        this.axios.defaults.withCredentials = true;
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
          this.IngredientList = IngredientList.split(",");
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

      this.recipeProgress = JSON.parse(
        localStorage.getItem(`recipeProgress${this.recipe.recipe_id}`)
      );
      if (this.recipeProgress == undefined) {
        console.log(true);
        this.recipeProgress = [];
        this.$root.store.saveRecipeProgress(
          this.recipeProgress,
          `recipeProgress${this.recipe.recipe_id}`
        );
      }
      console.log("recipe progrees after uploading", this.recipeProgress);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
.center {
  margin-top: 1rem;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>
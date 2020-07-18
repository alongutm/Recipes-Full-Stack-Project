<template>
  <div>
    <h3>My Meal Planner</h3>
    <b-button size="sm" variant="dark" @click="removeAll">
      <b-icon icon="x"></b-icon>Remove all Items
    </b-button>
    <div class="center">
      <div v-for="(recipe, index) in mealPlanList" :key="index">
        <b-card>
          <template v-slot:header>
            <h4 class="mb-1">Recipe # {{index+1}}</h4>
          </template>
          <RecipePlanCard :recipe="recipe" class="innerCard" />
          <b-button
            size="sm"
            variant="light"
            @click="makeFirst(recipe)"
          >click here to prepare this one first!</b-button>
          <template v-slot:footer>
            <b-button size="sm" variant="dark" class="left" @click="removeItem(recipe.recipe_id)">
              <b-icon icon="x"></b-icon>
            </b-button>
          </template>
        </b-card>
        <br />
      </div>
    </div>
    <div v-if="mealPlanList.length<1" class="center">
      <h4>No Recipes yet!</h4>
      <b-card
        img-src="https://img.icons8.com/ios-filled/100/000000/street-food--v1.png"
        img-alt="Card image"
        img-right
        class="mb-3"
      >
        <b-card-text>
          It seems like you didn't add some recipes to yor meal. Dont stay hungry, go look for them!
          <router-link :to="{ name: 'search' }">find some recipes</router-link>!
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import RecipePlanCard from "../components/RecipePlanCard";
export default {
  name: "MealPlanningPage",
  components: {
    RecipePlanCard
  },
  data() {
    return {
      mealPlanList: []
    };
  },
  async created() {
    const mealPlanListTmp = JSON.parse(localStorage.getItem("mealPlanList"));
    mealPlanListTmp.map(meal => {
      if (meal != undefined) this.mealPlanList.push(meal);
    });
    console.log(this.mealPlanList);
  },
  methods: {
    removeItem(id) {
      let tmpList = [];
      this.mealPlanList.map(frecipe => {
        if (frecipe.recipe_id != id) tmpList.push(frecipe);
      });
      this.mealPlanList = tmpList;
      this.$root.store.saveMealPlanList(this.mealPlanList);
      location.reload();
    },
    removeAll() {
      this.mealPlanList = [];
      this.$root.store.saveMealPlanList(this.mealPlanList);
      location.reload();
    },
    makeFirst(recipe) {
      let tmpList = [];
      this.mealPlanList.map(frecipe => {
        if (frecipe.recipe_id != recipe.recipe_id) tmpList.push(frecipe);
      });
      this.mealPlanList = tmpList;
      this.mealPlanList.unshift(recipe);
      this.$root.store.saveMealPlanList(this.mealPlanList);
      location.reload();
    }
  }
};
</script>

<style>
.left {
  display: inline-block;
  margin-left: 90%;
  margin-right: 50%;
  width: 10%;
}
.innerCard {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>
<template>
  <div>
    <h3>My Meal Planner</h3>
    <div class="center">
      <div v-for="recipe in mealPlanList" :key="recipe.number">
        <RecipePlanCard :recipe="recipe" />
        <br />
      </div>
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
  }
};
</script>

<style>
</style>
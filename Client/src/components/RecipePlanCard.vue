<template>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <router-link :to="{ name: 'prepareRecipe', params: { recipeId: recipe.recipe_id } }">
          <b-card-img :src="recipe.image" alt="Image" class="rounded-0"></b-card-img>
        </router-link>
      </b-col>
      <b-col md="6">
        <b-card-body :title="recipe.recipeName">
          <b-card-text>your progress so far:</b-card-text>
          <b-progress :value="value" variant="dark" :max="max" show-progress animated>
            <b-progress-bar :value="value">
              <strong>{{ value}} / {{ max }}</strong>
            </b-progress-bar>
          </b-progress>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: "RecipePlanCard",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      value: 0,
      max: 10
    };
  },
  mounted() {
    this.setValues();
  },
  methods: {
    setValues() {
      this.max = this.recipe._instructions.length;
      let progress = JSON.parse(
        localStorage.getItem(`recipeProgress${this.recipe.recipe_id}`)
      );
      if (progress == undefined) {
      //  console.log(progress.length);
        this.value = 0;
      } else {
      //  console.log(progress.length);
        this.value = progress.length -1;
      }
    }
  }
};
</script>

<style>
</style>
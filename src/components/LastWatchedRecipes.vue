<template>
  <b-container>
    <h3>
      {{ title }}
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <LastWatchedPreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import LastWatchedPreview from "./LastWatchedPreview.vue";
export default {
  name: "LastWatchedRecipes",
  components: {
    LastWatchedPreview
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
    this.getLastWatched();
  },
  methods: {
    async getLastWatched() {
      try {
        const response = await this.axios.get(
                      "https://test-for-3-2.herokuapp.com/recipes/random"

         // "https://localhost:3000/profiles/lastWatched"
        );
        console.log(response);
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

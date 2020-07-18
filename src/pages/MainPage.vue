<template>
  <b-container class="container">
    <b-row>
      <b-col cols="8" md="8">
        <RecipePreviewList
          ref="RecipePreviewList"
          title="Explore These Recipes"
          class="RandomRecipes left"
        />
        <br />
        <b-button block variant="dark" @click="updateRecipes">Load More Recipes</b-button>
      </b-col>

      <b-col cols="4" md="4" right>
        <LastWatchedRecipes
          v-if="$root.store.username"
          ref="LastWatchedPreview"
          title="Last Watched"
          class="Last Watched"
        />
        <LoginComponent v-else />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LoginComponent from "../components/LoginComponent";
import LastWatchedRecipes from "../components/LastWatchedRecipes";

export default {
  components: {
    RecipePreviewList,
    LoginComponent,
    LastWatchedRecipes
  },
  mounted() {
    this.$refs.RecipePreviewList.updateRecipes();
  },
  methods: {
    updateRecipes: function() {
      this.$refs.RecipePreviewList.updateRecipes();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

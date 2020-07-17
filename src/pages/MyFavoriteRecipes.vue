<template>
  <b-container class="bv-example-row">
    <b-card style="max-width: 100%;">
      <b-breadcrumb>
        <b-breadcrumb-item href="/">
          <b-icon icon="house-fill"></b-icon>Home
        </b-breadcrumb-item>
        <b-breadcrumb-item active>My Favorite Recipes</b-breadcrumb-item>
      </b-breadcrumb>

      <b-container class="container">
        <RecipePreviewList
          ref="RecipePreviewList"
          title="Your Favorite Recipes"
          class="RandomRecipes left"
        />
      </b-container>
    </b-card>
  </b-container>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  },
  mounted() {
    this.$refs.RecipePreviewList.myFavoriteRecipes();
  }
};
</script>

<style lang="scss" scoped>
</style>

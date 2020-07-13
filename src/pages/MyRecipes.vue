<template>
  <b-container class="bv-example-row">
    <b-card style="max-width: 100%;">
      <b-breadcrumb>
        <b-breadcrumb-item href="/">
          <b-icon icon="house-fill"></b-icon>Home
        </b-breadcrumb-item>
        <b-breadcrumb-item active>My Recipes</b-breadcrumb-item>
      </b-breadcrumb>

      <b-container class="container">
        <RecipePreviewList
          ref="RecipePreviewList"
          title="Your Recipes"
          class="RandomRecipes center"
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
  methods: {
    myRecipes: function() {
      this.$refs.RecipePreviewList.myRecipes();
    }
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>

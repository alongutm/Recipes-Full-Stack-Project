<template>
  <b-container class="bv-example-row">
    <b-card style="max-width: 100%;">
      <b-breadcrumb>
        <b-breadcrumb-item href="/">
          <b-icon icon="house-fill"></b-icon>Home
        </b-breadcrumb-item>
        <b-breadcrumb-item active>My Family Recipes</b-breadcrumb-item>
      </b-breadcrumb>

      <b-container class="container">
        <FamilyRecipeList
          ref="FamilyRecipeList"
          title="My Family Recipes"
          class="RandomRecipes left"
        />
      </b-container>
    </b-card>
  </b-container>
</template>

<script>
import FamilyRecipeList from "../components/FamilyComponents/FamilyRecipeList";
export default {
  components: {
    FamilyRecipeList
  },
  methods: {
    myFamilyRecipes: function() {
      this.$refs.FamilyRecipeList.myFamilyRecipes();
    }
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
</style>

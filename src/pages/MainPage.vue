<template>
  <b-container class="container">
    <b-row>
      <b-col cols="8" md="8">
        <RecipePreviewList
          ref="RecipePreviewList"
          title="Explore These Recipes"
          class="RandomRecipes center"
          
        />
        <b-button block variant="dark" @click="updateRecipes">More Recipes</b-button>
      </b-col>


      <b-col cols="4" md="4" right>
        <LastWatchedRecipes
          ref="LastWatchedPreview"
          title="Last Watched"
          class="RandomRecipes center"
           />
      </b-col>

      <!-- <b-col cols="4" md="4" right>
        <LastWatchedRecipes v-if="$root.store.username"
          ref="LastWatchedPreview"
          title="Last Watched"
          class="Last Watched"
          :bus="bus" />
        <LoginComponent v-else />
      </b-col>-->

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
    //LoginComponent,
    LastWatchedRecipes
  },
  methods: {
    updateRecipes: function() {
      this.$refs.RecipePreviewList.updateRecipes();
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

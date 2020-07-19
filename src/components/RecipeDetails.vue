<template>
  <div>
    for up to {{ recipe.MealsQuantity}} meals
    <b-list-group horizontal>
      <div v-if="recipe.isVegan"></div>
      <b-list-group-item v-if="recipe.isVegan">
        <img src="https://img.icons8.com/android/24/000000/carrot.png" />
      </b-list-group-item>
      <b-list-group-item v-else-if="recipe.isVegeterian">
        <img src="https://img.icons8.com/ios-filled/24/000000/vegetarian-mark--v1.png" />
      </b-list-group-item>
      <b-list-group-item v-if="recipe.isGlutenFree">
        <img src="https://img.icons8.com/windows/24/000000/no-gluten.png" />
      </b-list-group-item>
      <b-list-group-item>
        {{recipe.numberOfLikes}}
        <b-icon icon="hand-thumbs-up"></b-icon>
      </b-list-group-item>
      <b-list-group-item v-if="recipe.isFavorite">
        <img src="https://img.icons8.com/cotton/34/000000/like--v1.png"/>
      </b-list-group-item>
      <b-list-group-item v-if="!recipe.isFavorite">
        <b-button variant="light" @click="saveToFavorites">
          <b-icon icon="heart"></b-icon>
        </b-button>
      </b-list-group-item>
      <b-list-group-item v-if="recipe.isSeen">
        <img src="https://img.icons8.com/offices/30/000000/visible.png" style="margin-left:0px;"/>
      </b-list-group-item>
      <b-list-group-item>
        <img src="https://img.icons8.com/windows/32/000000/time.png" />
        {{recipe.coockingTime}} minutes
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "RecipeDetails",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.setFavorite();
  },
  methods: {
    async setFavorite() {
      try {
        if (this.$root.store.username) {
          this.axios.defaults.withCredentials = true;
          const response = await this.axios.get(
            "http://localhost:3000/profiles/isFavorite",
            {
              params: { recipe_id: this.recipe.recipe_id }
            }
          );
          let id = response.data.data;
          //   console.log(id);
          if (id.recipe_id === this.recipe.recipe_id) {
            console.log(false);
            this.recipe.isFavorite = true;
          }
        }
      } catch {}
    },

    async saveToFavorites() {
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.post(
          "http://localhost:3000/profiles/addFavorite",
          {
            recipe_id: this.recipe.recipe_id //this.recipe
          }
        );
        //console.log(response);
        this.recipe.isFavorite = true;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 400px;
}
div {
  font-family: "Bahnschrift", Times, serif;
}
</style>

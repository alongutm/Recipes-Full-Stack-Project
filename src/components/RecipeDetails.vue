<template>
  <div>
    for up to {{ recipe.MealsQuantity}} meals
    <b-list-group horizontal>
      <b-list-group-item v-if="recipe.isVegan">vegan</b-list-group-item>
      <b-list-group-item v-if="recipe.isVegeterian">vegeterian</b-list-group-item>
      <b-list-group-item v-if="recipe.isGlutenFree">glutten free</b-list-group-item>
      <b-list-group-item>
        {{recipe.numberOfLikes}}
        <b-icon icon="hand-thumbs-up"></b-icon>
      </b-list-group-item>
      <b-list-group-item v-if="recipe.isFavorite">
        <b-icon icon="heart-fill"></b-icon>
      </b-list-group-item>
      <b-list-group-item v-else>
        <b-button variant="light" @click="saveToFavorites">
          <b-icon icon="heart"></b-icon>
        </b-button>
      </b-list-group-item>
      <b-list-group-item v-if="recipe.isSeen">
        <b-icon icon="check-all"></b-icon>
      </b-list-group-item>
      <b-list-group-item>
        <b-icon icon="stopwatch"></b-icon>
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
</style>

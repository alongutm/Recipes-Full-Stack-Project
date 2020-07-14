<template>
  <div>
    <b-card no-body style="max-width: 20rem; height: 30rem;" img-alt="Image" img-top>
      <router-link
        :to="{ name: 'recipe', params: { recipeId: recipe.recipe_id } }"
        class="recipe-preview"
      >
        <b-card-img :src="recipe.image" height="150rem" width="50rem"></b-card-img>
        <template v-slot:header>
          <h4 class="mb-0"></h4>
        </template>
        <b-card-body>
          <b-card-sub-title class="mb-2">{{recipe.recipeName}}</b-card-sub-title>
          <b-card-text>
            <b-icon icon="stopwatch"></b-icon>
            {{recipe.coockingTime}} minutes
            <br />
            {{recipe.MealsQuantity}} meals
            <div v-if="recipe.isVegan">vegan</div>
            <div v-if="recipe.isVegeterian">vegeterian</div>
            <div v-if="recipe.isGlutenFree">glutten free</div>
          </b-card-text>
        </b-card-body>
      </router-link>

      <b-card-footer>
        <b-icon icon="hand-thumbs-up"></b-icon>
        {{recipe.numberOfLikes}}
        <b-icon v-if="recipe.isFavorite" icon="heart-fill"></b-icon>
        <b-button v-else variant="light" @click="saveToFavorites">
          <b-icon icon="heart"></b-icon>
        </b-button>
        <div v-if="recipe.isSeen">
          <b-icon icon="check-all"></b-icon>
        </div>

        <!-- <RecipeDetails :recipe="recipe"/> -->
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
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
          if (id.length > 0) {
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
        this.setFavorite();

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 98%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}
</style>

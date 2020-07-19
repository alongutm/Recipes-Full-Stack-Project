<template>
  <b-card no-body style="width: 13rem; height: 30rem;"   img-alt="Image" img-top>
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
          <img src="https://img.icons8.com/windows/32/000000/time.png" />
          {{recipe.coockingTime}} minutes
          <br />
          <img src="https://img.icons8.com/windows/32/000000/meal.png" />
          {{recipe.MealsQuantity}}
        </b-card-text>
      </b-card-body>
    </router-link>

    <b-card-footer style="max-width: 15rem; ">
      <b-list-group horizontal>
        <div v-if="recipe.isVegan">
          <img src="https://img.icons8.com/android/24/000000/carrot.png" />
        </div>
        <b-list-item v-else-if="recipe.isVegeterian">
          <img src="https://img.icons8.com/ios-filled/24/000000/vegetarian-mark--v1.png" />
        </b-list-item>
        <b-list-item v-if="recipe.isGlutenFree">
          <img src="https://img.icons8.com/windows/24/000000/no-gluten.png" />
        </b-list-item>
      </b-list-group>
    </b-card-footer>
    <b-card-footer>
      <div style="display:flex">
        <div>
      <img class="inline-block" src="https://img.icons8.com/dusk/24/000000/facebook-like.png" style="margin-bottom:9px; display: inline-block;"/>
      {{recipe.numberOfLikes}}
       </div>
      <div class="inline-block"  style="text-align:right; float: right;" v-if="$root.store.username">
        <img v-if="recipe.isFavorite" src="https://img.icons8.com/cotton/34/000000/like--v1.png"/>
        <b-button v-if="!recipe.isFavorite" variant="light" @click="saveToFavorites">
          <b-icon icon="heart" ></b-icon>
        </b-button>
      </div>
      <div class="inline-block"  style="align:right" v-if="recipe.isSeen">
        <img src="https://img.icons8.com/offices/30/000000/visible.png" align="right"/>
      </div>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  name: "RecipePreview",
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
  // created(){
  //   console.log(this.recipe.recipe_id + " " + this.recipe.isSeen)
  // },
  methods: {
    async setFavorite() {
      try {
        if (this.$root.store.username) {
          this.axios.defaults.withCredentials = true;
          console.log("Line 76 recipe id is"+this.recipe.recipe_id);
          console.log(this.recipe);
          const response = await this.axios.get(
            "http://localhost:3000/profiles/isFavorite",
            {
              params: { recipe_id: this.recipe.recipe_id }
            }
          );
          let id = response.data.data;
          //console.log("Line 82 recipe obj: " + this.recipe. );
          console.log("Line 83 RecipePreview  - recipe name is " + this.recipe.title );
          console.log(this.recipe );

          console.log("Line 84 RecipePreview  - id length is " + id.length );
          if (id.length > 0) {
            this.recipe.isFavorite = true;
            console.log("Line 86 RecipePreview  - recipe.isFavorite is " + this.recipe.isFavorite );
            
          }
        }
      } catch {}
    },
    async saveToFavorites() {
      try {
        this.axios.defaults.withCredentials = true;
        console.log(this.recipe.recipe_id + " recipePreview line 90 !!!!!")
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
div {
  font-family: "Bahnschrift Light", Times, serif;
}
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

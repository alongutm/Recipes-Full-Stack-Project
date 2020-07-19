<template>
  <div>
    <b-container class="bv-example-row">
      <b-card style="max-width: 100%;">
        <div v-if="recipe">
          <b-row>
            <!-- <b-col cols="12" md="8" align-self="center"> -->
            <h1>{{ recipe.recipeName }}</h1>
            <br />
            <div>
              for up to {{ recipe.MealsQuantity}} meals
              <b-list-group horizontal>
                <b-list-group-item v-if="recipe.isVegan">
                  <img src="https://img.icons8.com/android/24/000000/carrot.png" />
                </b-list-group-item>
                <b-list-group-item v-else-if="recipe.isVegeterian">
                  <img src="https://img.icons8.com/ios-filled/24/000000/vegetarian-mark--v1.png" />
                </b-list-group-item>
                <b-list-group-item v-if="recipe.isGlutenFree">
                  <img src="https://img.icons8.com/windows/24/000000/no-gluten.png" />
                </b-list-group-item>
                <b-list-group-item>occasion: {{recipe.occasion}}</b-list-group-item>
                <b-list-group-item>Author: {{recipe.author}}</b-list-group-item>
                <b-list-group-item>
                  {{recipe.numberOfLikes}}
                  <b-icon icon="hand-thumbs-up"></b-icon>
                </b-list-group-item>
                <b-list-group-item v-if="recipe.isSeen">
        <img src="https://img.icons8.com/offices/30/000000/visible.png" style="margin-left:0px;"/>
                </b-list-group-item>
                <b-list-group-item>
                  <img src="https://img.icons8.com/windows/32/000000/time.png" />
                  {{recipe.coockingTime}} minutes
                </b-list-group-item>
              </b-list-group>
              <br />
            </div>
            <!-- </b-col> -->
          </b-row>

          <b-row>
            <b-col cols="12" md="7" align-self="center">
              <b-img fluid-grow rounded alt="Rounded image" :src="recipe.image" />
              <!--Instructions-->
              <div>
                <h3>Ready? Let's start!</h3>
                <b-list-group flush>
                  <div v-if="recipe._instructions">
                    <b-list-group-item v-for="s in recipe._instructions" :key="s.number">
                      <b-icon icon="egg-fried"></b-icon>
                      {{ s.step }}
                    </b-list-group-item>
                  </div>
                  <div v-if="recipe.Instructions">
                    <b-list-group-item>
                      <b-icon icon="egg-fried"></b-icon>
                      {{ recipe.Instructions }}
                    </b-list-group-item>
                  </div>
                </b-list-group>
              </div>
            </b-col>
            <b-col cols="6" md="5" align-self="start">
              <br />

              <!--What you'll need-->
              <div>
                <b-card header="What you'll need" style="max-width: 300rem;">
                  <b-list-group flush>
                    <div v-if="recipe.extendedIngredients">
                      <b-list-group-item
                        v-for="(r, index) in recipe.extendedIngredients"
                        :key="index + '_' + r.id"
                      >
                        <b-icon icon="egg-fried"></b-icon>
                        {{ r.original }}
                      </b-list-group-item>
                    </div>
                    <div v-if="recipe.IngredientList">
                      <b-list-group-item
                        v-for="(r, index) in recipe.IngredientList"
                        :key="index + '_' + r"
                      >
                        <b-icon icon="egg-fried"></b-icon>
                        {{ r }}
                      </b-list-group-item>
                    </div>
                  </b-list-group>
                </b-card>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="8"></b-col>
            <b-col cols="6" md="4">
              <br />
            </b-col>
          </b-row>
        </div>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "FamilyRecipePreview",
  data() {
    return {};
  },

  props: {
    recipe: {
      type: Object,
      required: true
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
h3,
h5,
h1 {
  font-family: "Bahnschrift", Times, serif;
}

</style>


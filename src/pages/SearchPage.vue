<template>
  <div class="container">
    <h1 class="title">Search Recipes</h1>
    <b-form v-show="!searched" @submit.prevent="search">
      <b-form-input
        v-model="query"
        id="query"
        placeholder="Enter your query here"
        required
      ></b-form-input>
      <!-- <div class="mt-2">Value: {{ query }}</div> -->
      <b>Number of results:</b>
      <b-form-select
        v-model="selectedAmount"
        id="amount"
        :options="searchSizes"
      ></b-form-select>
      <b>Cuisine:</b>
      <b-form-select
        v-model="selectedCuisine"
        id="cuisine"
        :options="cuisines"
      ></b-form-select>
      <b>Diet:</b>
      <b-form-select
        v-model="selectedDiet"
        id="diet"
        :options="diets"
      ></b-form-select>
      <b>Intolerance:</b>
      <b-form-select
        v-model="selectedIntolerance"
        id="intolerance"
        :options="intolerances"
      ></b-form-select>
      <b-button
        :disabled="query.length == 0"
        size="lg"
        type="submit"
        block
        variant="dark"
        >Search</b-button
      >
    </b-form>
    <div v-show="searched">
      <b-button size="lg" block variant="dark" v-on:click="newSearch"
        >New Search</b-button
      >
      <h2 v-show="emptyResults">The Search Returned No Results</h2>
      <div v-show="!emptyResults">
        <span class="firstLabel">
          <label class="radio-inline">
            <b-form-group
              label="Sorting Criteria"
              label-class="font-weight-bold pt-0"
            >
              <b-form-radio-group
                v-model="selectedOption"
                :options="sortOptions"
                name="radios-stacked"
                stacked
              ></b-form-radio-group>
            </b-form-group>
          </label>
        </span>
        <span class="firstLabel">
          <label class="radio-inline">
            <b-form-group
              label="Sorting Order"
              label-class="font-weight-bold pt-0"
            >
              <b-form-radio-group
                v-model="selectedOrder"
                :options="sortOrder"
                name="radios-stacked2"
                stacked
              ></b-form-radio-group>
            </b-form-group>
          </label>
        </span>

        <b-button
          :disabled="!selectedOrder || !selectedOption"
          size="lg"
          style="margin-bottom: 30px;"
          @click="handleSort"
          variant="info"
          >Sort</b-button
        >
      </div>
      <b-container class="container">
        <RecipePreviewList
          v-show="!emptyResults"
          ref="RecipePreviewList"
          title="Search Results"
          class="RandomRecipes left"
        >
        </RecipePreviewList>
      </b-container>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";

export default {
  components: {
    RecipePreviewList,
  },
  data() {
    return {
      query: "",
      searched: false,
      selectedAmount: 5,
      selectedCuisine: null,
      selectedIntolerance: null,
      selectedDiet: null,
      emptyResults: false,
      radioBoxes: false,
      cuisines: [
        "African",
        "American",
        "British",
        "Cajun",
        "Caribbean",
        "Chinese",
        "Eastern European",
        "European",
        "French",
        "German",
        "Greek",
        "Indian",
        "Irish",
        "Italian",
        "Japanese",
        "Jewish",
        "Chinese",
        "Korean",
        "Latin American",
        "Mediterranean",
        "Mexican",
        "Middle Eastern",
        "Nordic",
        "Southern",
        "Spanish",
        "Thai",
        "Vietnamese",
      ],
      intolerances: [
        "Dairy",
        "Egg",
        "Gluten",
        "Grain",
        "Peanut",
        "Seafood",
        "Sesame",
        "Shellfish",
        "Soy",
        "Sulfite",
        "Tree Nut",
        "Wheat",
      ],
      diets: [
        "Gluten Free",
        "Ketogenic",
        "Vegetarian",
        "Lacto-Vegetaria",
        "Ovo-Vegetarian",
        "Vegan",
        "Pescetarian",
        "Paleo",
        "Primal",
        "Whole30",
      ],
      searchSizes: [5, 10, 15],
      sortOptions: ["Popularity", "Preparation Time"],
      sortOrder: ["Descending", "Ascending"],
      selectedOption: null,
      selectedOrder: null,
      returnedRecipes: [],
    };
  },

  methods: {
    async search() {
      this.searched = true;
      try {
        let endPoint = "recipes";
        if (this.$root.store.username) {
          endPoint = "profiles";
        }
        console.log(
          `http://localhost:3000/${endPoint}/search/query/${this.query}/amount/${this.selectedAmount}`
        );
        const response = await this.axios.get(
          `http://localhost:3000/${endPoint}/search/query/${this.query}/amount/${this.selectedAmount}`,
          {
            params: {
              // query: this.query,
              // number: this.selectedAmount,
              ...(this.selectedCuisine
                ? { cuisine: this.selectedCuisine }
                : {}),
              ...(this.selectedIntolerance
                ? { intolerances: this.selectedIntolerance }
                : {}),
              ...(this.selectedDiet ? { diet: this.selectedDiet } : {}),
            },
          }
        );
        //show recipes with component
        console.log(response);
        console.log(response.data);
        let recipesArr;
        if (endPoint == "recipes") {
          recipesArr = response.data.recipes;
        } else {
          recipesArr = response.data;
        }
        if (typeof response !== "undefined" && recipesArr.length > 0) {
          if (endPoint == "profiles") {
            this.returnedRecipes = recipesArr;
            console.log("line 238 searchPage");
            console.log(recipesArr);
            console.log(this.returnedRecipes);
            this.$root.store.saveResultSearch(
              this.returnedRecipes,
              `searchResults`
            );
            this.radioBoxes = true;
            this.$refs.RecipePreviewList.searchRecipes(this.returnedRecipes);
          } else {
            this.$refs.RecipePreviewList.searchRecipes(recipesArr);
          }
        } else {
          this.emptyResults = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
    newSearch() {
      this.searched = false;
      this.selectedDiet = null;
      this.selectedCuisine = null;
      this.selectedIntolerance = null;
      this.emptyResults = false;
      this.radioBoxes = false;
      this.selectedOption = null;
      this.selectedOrder = null;
      this.returnedRecipes = [];
    },
    sortAscendingOrderByPopularity() {
      this.returnedRecipes.sort(function(a, b) {
        return a.numberOfLikes - b.numberOfLikes;
      });
      this.$refs.RecipePreviewList.searchRecipes(this.returnedRecipes);
    },
    sortAscendingOrderByTime() {
      this.returnedRecipes.sort(function(a, b) {
        return a.coockingTime - b.coockingTime;
      });
      this.$refs.RecipePreviewList.searchRecipes(this.returnedRecipes);
    },
    sortDescendingOrderByPopularity() {
      this.returnedRecipes.sort(function(a, b) {
        return b.numberOfLikes - a.numberOfLikes;
      });
      this.$refs.RecipePreviewList.searchRecipes(this.returnedRecipes);
    },
    sortDescendingOrderByTime() {
      this.returnedRecipes.sort(function(a, b) {
        return b.coockingTime - a.coockingTime;
      });
      this.$refs.RecipePreviewList.searchRecipes(this.returnedRecipes);
    },
    handleSort() {
      if (this.selectedOrder == "Descending") {
        if (this.selectedOption == "Popularity") {
          this.sortDescendingOrderByPopularity();
        } else {
          this.sortDescendingOrderByTime();
        }
      } else {
        if (this.selectedOption == "Popularity") {
          this.sortAscendingOrderByPopularity();
        } else {
          this.sortAscendingOrderByTime();
        }
      }
    },
  },
  mounted: function() {
    // this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
    console.log("line 186 search");
    console.log(this.$root.store.searchResults);
    if (
      this.$root.store.searchResults &&
      this.$root.store.searchResults.length > 0
    ) {
      console.log("recipes exists");
      this.emptyResults = false;
      this.searched = true;
      let savedResults = JSON.parse(sessionStorage.getItem(`searchResults`));
      console.log(savedResults);
      this.returnedRecipes = savedResults;
      this.$forceUpdate();
      console.log("refs: ", this.$refs);
      console.log("refs[0]: ", this.$refs.RecipePreviewList);
      this.$refs.RecipePreviewList.searchRecipes(this.returnedRecipes);
    } else {
    }
    // })
  },
};
</script>

<style></style>

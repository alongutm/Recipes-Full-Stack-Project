<template>
  <div class="container">
     <h1 class="title">Search Recipes</h1>
<b-form @submit.prevent="search">
      <b-form-input v-model="query" id="query" placeholder="Enter your query here" required></b-form-input>
      <!-- <div class="mt-2">Value: {{ query }}</div> -->
      <b>Number of results:</b>
      <b-form-select v-model="selectedAmount" id="amount" :options="searchSizes" ></b-form-select>
      <b>Cuisine:</b>
      <b-form-select v-model="selectedCuisine" id="cuisine" :options="cuisines"></b-form-select>
      <b>Diet:</b>
      <b-form-select v-model="selectedDiet" id="diet" :options="diets"  ></b-form-select>
      <b>Intolerance:</b>
      <b-form-select v-model="selectedIntolerance" id="intolerance" :options="intolerances"></b-form-select>
      <b-button :disabled="query.length == 0" size="lg" type="submit" block variant="primary">search</b-button>
      <!-- <b-form-group label="Sort the results:" v-if="responsed_recipes.length != 0">
        <b-form-radio-group name="radio-button" v-model="selected_sorts" :options="sorts" switches></b-form-radio-group>
        <b-button variant="secondary" @click="sortHandle">Sort!</b-button>
      </b-form-group> -->
    </b-form>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return{
    query: '',
    selectedAmount: 5,
    selectedCuisine: null,
    selectedIntolerance: null,
    selectedDiet: null,
    cuisines: [
        'African',
        'American',
        'British',
        'Cajun',
        'Caribbean',
        'Chinese',
        'Eastern European',
        'European',
        'French',
        'German',
        'Greek',
        'Indian',
        'Irish',
        'Italian',
        'Japanese',
        'Jewish',
        'Chinese',
        'Korean',
        'Latin American',
        'Mediterranean',
        'Mexican' ,
        'Middle Eastern',
        'Nordic',
        'Southern',
        'Spanish',
        'Thai',
        'Vietnamese'
      ],
    intolerances: [
        'Dairy' ,
        'Egg',
        'Gluten',
        'Grain' ,
        'Peanut' ,
        'Seafood' ,
        'Sesame' ,
        'Shellfish',
        'Soy' ,
        'Sulfite',
        'Tree Nut',
        'Wheat' 
      ],
    diets: [
        'Gluten Free' ,
        'Ketogenic',
        'Vegetarian' ,
        'Lacto-Vegetaria',
        'Ovo-Vegetarian',
        'Vegan',
        'Pescetarian',
        'Paleo',
        'Primal',
        'Whole30'
      ],
      searchSizes: [5,10,15]
    }
    
  },
  methods:
  {
    
    search(){
      console.log("function search!!!");
    }
    
  }
}
</script>

<style>

</style>
<template>
  <div>
    <h3>
      {{ title }}
      <slot></slot>
    </h3>

    <b-carousel
      id="carousel-1"
      v-model="slide"
      height="600"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <div v-for="r in recipes" :key="r.recipe_id">
        <router-link
          :to="{ name: 'recipe', params: { recipeId: r.recipe_id } }"
          class="recipe-preview"
        >
          <b-carousel-slide :img-src="r.image"></b-carousel-slide>
        </router-link>
      </div>
    </b-carousel>
    <div class="mt-4">
      {{ recipes[slide].recipeName }}
      <br />
      <b-icon icon="stopwatch"></b-icon>
      {{recipes[slide].coockingTime}} minutes
      <br />
      {{recipes[slide].numberOfLikes}}
      <b-icon icon="hand-thumbs-up"></b-icon>
      <div v-if="recipes[slide].isVegan">vegan</div>
      <div v-if="recipes[slide].isVegeterian">vegeterian</div>
      <div v-if="recipes[slide].isGlutenFree">glutten free</div>
    </div>
    <!-- <b-icon icon="stopwatch"></b-icon> {{recipes[slide].readyInMinutes}} minutes -->
  </div>
</template>

<script>
export default {
  name: "LastWatchedRecipes",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recipes: [],
      slide: 0,
      sliding: null
    };
  },
  mounted() {
    this.getLastWatched();
  },
  methods: {
    async getLastWatched() {
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.get(
          "http://localhost:3000/profiles/lastWatched"
        );
        //console.log(response.data);
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },

    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>

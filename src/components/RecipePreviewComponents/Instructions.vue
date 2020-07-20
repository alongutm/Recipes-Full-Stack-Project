<template>
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
</template>

<script>
export default {
  name: "Instructions",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },

  methods: {}
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 400px;
}
h3,
h5,
h1 {
  font-family: "Bahnschrift", Times, serif;
}
div {
  font-family: "Bahnschrift", Times, serif;
}
</style>

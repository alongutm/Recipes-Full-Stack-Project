<template>
  <div class="center">
    <h4>What are you looking for, honey?</h4>
    <b-card
      img-src="https://img.icons8.com/windows/96/000000/nothing-found.png"
      img-alt="Card image"
      img-right
      class="mb-3"
    >
      <b-card-text>
        It seems like you went lost. Let me help you to find your way
        <router-link :to="{ name: 'main' }">home</router-link>!
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  width: 50%;
}
</style>
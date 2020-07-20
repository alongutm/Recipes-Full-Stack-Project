<template>
  <div>
    <h5>Instruction:</h5>
    <b-icon icon="egg-fried"></b-icon>
    {{s.step}}
  </div>
</template>

<script>
export default {
  name: "StepInfoItem",
  props: {
    s: {
      type: Object,
      required: false
    }
  }
};
</script>

<style>
h3,
h5,
h1 {
  font-family: "Bahnschrift", Times, serif;
}
</style>
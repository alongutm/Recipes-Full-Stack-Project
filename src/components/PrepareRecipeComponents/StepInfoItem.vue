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
</style>
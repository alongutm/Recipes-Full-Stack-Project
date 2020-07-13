<template>
    <div style="width:350px;">
  <label class="typo__label">Result Size</label>
  <multiselect v-model="value" :options="options" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pick a value"></multiselect>
</div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      value: '5',
      options: ['5', '10', '15']
    }
  }
}
</script>

<style  src="vue-multiselect/dist/vue-multiselect.min.css">

</style>

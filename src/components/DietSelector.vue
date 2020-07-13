<template>
    <div style="width:350px;">
  <label class="typo__label">Diet</label>
  <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :showLabels="true" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="false">
    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
  </multiselect>
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
      value: [],
      options: [
        { name: 'Gluten Free' },
        { name: 'Ketogenic'},
        { name: 'Vegetarian' },
        { name: 'Lacto-Vegetaria' },
        { name: 'Ovo-Vegetarian' },
        { name: 'Vegan' },
        { name: 'Pescetarian' },
        { name: 'Paleo'},
        { name: 'Primal' },
        { name: 'Whole30' }
      ]
    }
  }
}
</script>

<style  src="vue-multiselect/dist/vue-multiselect.min.css">

</style>

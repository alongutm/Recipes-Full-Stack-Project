<template>
    <div>
  <label class="typo__label">Intolerances</label>
  <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="false">
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
        { name: 'Dairy' },
        { name: 'Egg'},
        { name: 'Gluten' },
        { name: 'Grain' },
        { name: 'Peanut' },
        { name: 'Seafood' },
        { name: 'Sesame' },
        { name: 'Shellfish'},
        { name: 'Soy' },
        { name: 'Sulfite' },
        { name: 'Tree Nut' },
        { name: 'Wheat' }
      ]
    }
  }
}
</script>

<style  src="vue-multiselect/dist/vue-multiselect.min.css">

</style>

<template>
    <div style="width:350px;">
  <label class="typo__label">Cuisine</label>
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
        { name: 'African' },
        { name: 'American'},
        { name: 'British' },
        { name: 'Cajun' },
        { name: 'Caribbean' },
        { name: 'Chinese' },
        { name: 'Eastern European' },
        { name: 'European'},
        { name: 'French' },
        { name: 'German' },
        { name: 'Greek' },
        { name: 'Indian' },
        { name: 'Irish'},
        { name: 'Italian' },
        { name: 'Japanese' },
        { name: 'Jewish' },
        { name: 'Chinese' },
        { name: 'Korean' },
        { name: 'Latin American'},
        { name: 'Mediterranean' },
        { name: 'Mexican' },
        { name: 'Middle Eastern' },
        { name: 'Nordic' },
        { name: 'Southern' },
        { name: 'Spanish'},
        { name: 'Thai' },
        { name: 'Vietnamese' }
      ]
    }
  }
}
</script>

<style  src="vue-multiselect/dist/vue-multiselect.min.css">

</style>

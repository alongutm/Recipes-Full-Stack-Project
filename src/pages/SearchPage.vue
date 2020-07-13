<template>
<div>
  <br/>
<CuisineSelector/>
<br/>
<DietSelector/>
<br/>
<IntolerancesSelector/>
<br/>
<ResultSizeSelector/>

</div>

</template>

<script>
import CuisineSelector from "../components/CuisineSelector";
import DietSelector from "../components/DietSelector";
import IntolerancesSelector from "../components/IntolerancesSelector";
import ResultSizeSelector from "../components/ResultSizeSelector";

export default {
  components: {
    CuisineSelector,
    DietSelector,
    IntolerancesSelector,
    ResultSizeSelector
  },
  data () {
    
  }
}
</script>

<style  src="vue-multiselect/dist/vue-multiselect.min.css">

</style>

<template>
<div>
  <input style="width:350px; " placeholder="write query here">
  <br/>
<CuisineSelector/>
<br/>
<DietSelector/>
<br/>
<IntolerancesSelector/>
<br/>
<ResultSizeSelector/>
<form v-on:submit.prevent="handleSearch">
  <input type="submit" value="Search" />
  </form>

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
    
  },
  methods:
  {
    handleSearch(){
      alert("dd");
    }
  }
}
</script>

<style  src="vue-multiselect/dist/vue-multiselect.min.css">

</style>

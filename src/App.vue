<template>
  <div id="app">
    <div>
      <nav-header></nav-header>
    </div>
    <div>
      <search-form></search-from>
    </div>
    <div>
      <origin-data></origin-data>
    </div>

</template>

<script>
  
  import NavHeader from "./components/NavHeader.vue"
  import OriginData from "./components/OriginData.vue";
  import SearchForm from "./components/SearchForm.vue";
  export default {

    components: {
      NavHeader: NavHeader,
      OriginData: OriginData,
      SearchForm: SearchForm
    },

    methods: {
      handleSelect(key, keyPath) {
        alert(key);
      }
    }
  }
</script>
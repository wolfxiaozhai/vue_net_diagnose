<template>
  <div id="app">
    <div>
      <nav-header></nav-header>
    </div>
    <origin-data></origin-data>

</template>

<script>
  
  import NavHeader from "./components/NavHeader.vue"
  import OriginData from "./components/OriginData.vue";
  export default {

    components: {
      NavHeader: NavHeader,
      OriginData: OriginData,
    },

    methods: {
      handleSelect(key, keyPath) {
        alert(key);
      }
    }
  }
</script>
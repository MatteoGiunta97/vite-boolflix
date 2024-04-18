<script>
  import axios from 'axios';
  import { store } from "./store.js";
  import AppHeader from './components/AppHeader.vue';
  import ContentList from './components/ContentList.vue';

  export default {
    components: {
      AppHeader,
      ContentList
    }
    ,
    data() {
      return {
        store
      };
    }
    ,
    methods: {
      
    }
    ,
    mounted() {

    }
    }
</script>

<template>
<AppHeader></AppHeader>

<main>
  <ContentList></ContentList>
</main>
</template>

<style lang="scss">
@use './style/generic';

</style>

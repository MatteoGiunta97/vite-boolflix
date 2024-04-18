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
      getMoviesFromApi() {

        const queryParams = {
          api_key: store.apiKey,
          query: 'stellari'
        };
          
        axios.get('https://api.themoviedb.org/3/search/movie', {
          params: queryParams
        }).
        then((response) => {
          store.movies = response.data.results;
        });

      }
    }
    ,
    mounted() {
      this.getMoviesFromApi();
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

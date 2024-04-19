<script>
  import { store } from "../store.js";
  import Card from "./Card.vue";

  export default {
      name: 'ContentList',
        components: {
          Card
        }
        ,
        data() {
          return {
            store
          };
        }
    }
</script>

<template>
  
  <section class="cards-wrapper">
    <div class="container">
      <h2>MOVIES:</h2>
      <hr>
      <div class="cards-list">
        <Card v-for="movie in store.movies" :key="movie.id" :cardData="movie"></Card>
      </div>
      <h2>TV-SERIES:</h2>
      <hr>
      <div class="cards-list">
        <Card v-for="series in store.tvSeries" :key="series.id" :cardData="series"></Card>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">

.cards-wrapper {
  background-color: grey;
  padding: 20px;
  height: 100%;

    .cards-list {
      display: flex;
      flex-wrap: wrap;

    }

    hr {
      background-color: red;
      padding: 3px 0;
      border: 2px solid black;
    }
}
</style>
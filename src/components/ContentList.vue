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
      <div class="cards-list">
        <Card></Card>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">

.cards-wrapper {
  background-color: grey;
  padding: 20px;

    .cards-list {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
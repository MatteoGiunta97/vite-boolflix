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
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">

.cards-wrapper {
  background-color: grey;
  padding: 20px;
  height: calc(100vh - 80px);

    .cards-list {
        display: flex;
    }
}
</style>
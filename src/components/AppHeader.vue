<script>
import { store } from "../store.js";

export default {
    name: 'AppHeader',
    data() {
          return {
            store
          };
        }
}
</script>

<template>
    <header>
      <div class="logo">
        <h1>BOOLFLIX</h1>
      </div>
      <div class="input-field">
        <input type="text" name="search" v-model="store.searchInput">
        <button @click="$emit('searchRequest')">Search</button>
      </div>
    </header>
</template>

<style scoped lang="scss">

header {
  height: 80px;
  padding: 20px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
    .logo {
        text-align: left;
        display: flex;
        color: red;
    }
}

</style>
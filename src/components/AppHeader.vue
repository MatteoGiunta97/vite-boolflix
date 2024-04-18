<script>
  export default {
      name: 'AppHeader'
  }
</script>

<template>
    <header>
      <div class="logo">
        <h1>BOOLFLIX</h1>
      </div>
      <div class="input-field">
        <input type="text">
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
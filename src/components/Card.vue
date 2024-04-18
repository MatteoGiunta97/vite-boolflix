<script>
  export default {
      name: 'Card',
  }
</script>

<template>

    <div class="card">
        <div class="info-wrapper">
            <div class="info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestias voluptatum asperiores enim accusamus, illum ipsam quibusdam adipisci quos commodi fuga tempora saepe quis beatae magnam hic iusto quas perspiciatis?</p>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">

.card {
    width: calc(100% / 3);
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    .info-wrapper {
        background-color: black;
        text-align: center;
        padding: 10px;
        width: 100%;
        height: 100%;

        p {
            color:white;
        }
    }
}

</style>
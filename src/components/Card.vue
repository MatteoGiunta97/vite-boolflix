<script>
  export default {
      name: 'Card',
  }
</script>

<template>

    <div class="card">
        <div class="info-wrapper">
            <div class="info">
                    <h3>Title:</h3>
                    <h3>Original Title:</h3>
                    <h3>Rating:</h3>
                    <h3>Overview:</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta neque sint explicabo accusantium sit blanditiis! Expedita, ab quibusdam a reiciendis accusantium nam suscipit reprehenderit accusamus asperiores mollitia, nostrum velit!</p>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">

.card {
    width: calc(100% / 3);
    padding: 15px 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    .info-wrapper {
        background-color: black;
        text-align: center;
        padding: 10px;
        width: 100%;
        height: 100%;
        padding: 35px 15px;

        .info {
            color:white;
            text-align: left;
        }
    }
}

</style>
<script>
  export default {
      name: 'Card',
      props: {
        cardData: Object
      }
  }
</script>

<template>

    <div class="card">
        <div class="info-wrapper">
            <div class="info">
                    <h3>Title:</h3><span>{{ cardData.title }}</span>
                    <h3>Original Title:</h3><span>{{ cardData.original_title }}</span>
                    <h3>Language:</h3><span>{{ cardData.original_language }}</span>
                    <h3>Rating:</h3><span>{{ cardData.vote_average }}</span>
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

                h3 {
                    margin-top: 10px;
                }
        }
    }
}

</style>
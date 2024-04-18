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
                <h3>Language:</h3>
                <div v-if="cardData.original_language === 'en'">
                    <img src="../img/lang_eng.jpg">
                </div>
                <div v-else-if="cardData.original_language === 'it'">
                    <img src="../img/lang_ita.jpg">
                </div>
                <div v-else-if="cardData.original_language === 'fr'">
                    <img src="../img/lang_fre.jpg">
                </div>
                <div v-else-if="cardData.original_language === 'es'">
                    <img src="../img/lang_spa.jpg">
                </div>
                <div v-else-if="cardData.original_language === 'de'">
                    <img src="../img/lang_ger.jpg">
                </div>
                <div v-else-if="cardData.original_language === 'ja'">
                    <img src="../img/lang_jap.jpg">
                </div>
                <div v-else>
                    <span>{{ cardData.original_language }}</span>
                </div>
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

            img {
                height: 15px;
            }
        }
    }
}

</style>
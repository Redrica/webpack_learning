<template>
    <div class="popup popup--one">
        {{ message }}
    </div>

</template>

<script>
    export default {
        name: "additional-one",

        data () {
            return {
                message: 'Hello world! I\'m a component incorporated inside Mr. Async and my name is ONE'
            }
        }
    }
</script>

<style lang="scss">
    .popup {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        padding: 20px;
        text-align: center;
        color: white;

        &--one {
            left: 150px;
            top: 200px;
            background-color: darkorange;
        }

        &--two {
            left: 450px;
            top: 300px;
            background-color: deeppink;
        }

        &--three {
            left: 750px;
            top: 350px;
            background-color: #00699b;
        }
    }
</style>
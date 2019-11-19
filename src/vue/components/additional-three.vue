<template>
    <div class="popup popup--three">
        {{ message }}
    </div>

</template>

<script>
    export default {
        name: "additional-three",

        data () {
            return {
                message: 'Hello world! I\'m a component incorporated inside Mr. Async and my name is THREE'
            }
        }
    }
</script>

<style lang="scss">
    /*.popup {*/
    /*    position: absolute;*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*    width: 250px;*/
    /*    height: 250px;*/

    /*    &--one {*/
    /*        left: 150px;*/
    /*        top: 200px;*/
    /*        background-color: darkorange;*/
    /*    }*/

    /*    &--two {*/
    /*        left: 250px;*/
    /*        top: 300px;*/
    /*        background-color: deeppink;*/
    /*    }*/

    /*    &--three {*/
    /*        left: 450px;*/
    /*        top: 350px;*/
    /*        background-color: #006cbf;*/
    /*    }*/
    /*}*/
</style>
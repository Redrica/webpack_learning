<template>
    <div class="popup popup--two">
        {{ message }}
    </div>

</template>

<script>
    export default {
        name: "additional-two",

        data () {
            return {
                message: 'Hello world! I\'m a component incorporated inside Mr. Async and my name is TWO'
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

    /*    &--one {*/
    /*        left: 450px;*/
    /*        top: 350px;*/
    /*        background-color: #006cbf;*/
    /*    }*/
    /*}*/
</style>
<template lang="pug">
    div
        .test-box {{ message }}
    
</template>

<script>
    export default {
        name: "test",

        data () {
            return {
                message: 'Hello world form Kolesa Darom'
            }
        }
    }
</script>

<style lang="scss">
    .test-box {
        color: blue;
    }
</style>
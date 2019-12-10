<template>
    <div class="block block--index" @click="handleClick"></div>
    
</template>

<script>
    export default {
        name: "index-component",

        data() {
            return {
                message: '',
            }
        },

        methods: {
            handleClick() {
                this.message = 'Hey, I\'m here on INDEX!';
            }
        }
    }
</script>

<style>

    .block--index {
        background-color: darkorange;
        color: darkslateblue;
    }

</style>
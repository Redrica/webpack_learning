<template>
    <div class="block block--page" @click="handleClick"></div>
    
</template>

<script>
    export default {
        name: "page-component",

        data() {
            return {
                message: '',
            }
        },

        methods: {
            handleClick() {
                this.message = 'Hey, I\'m here on PAGE!';
            }
        }
    }
</script>

<style>

    .block--page {
        background-color: darkslateblue;
        color: darkorange;
    }

</style>
<template>
    <div class="another-box">{{ message }}</div>

</template>

<script>
    import additionalOne from '@vue/components/additional-one';
    import additionalTwo from '@vue/components/additional-two';
    import additionalThree from '@vue/components/additional-three';

    export default {
        name: "async-another",

        components: {

        },

        data () {
            return {
                message: 'Hello world! I\'m Another Async. I\'m alone here.',
            }
        },

        methods: {

        }
    }
</script>

<style>
    .another-box {
        background-color: #83e47d;
    }
</style>
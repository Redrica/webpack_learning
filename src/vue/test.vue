<template>
    <div>
        <button class="test-box" @click="flag = !flag">{{ message }}</button>
        <async></async>
        <button @click="secondFlag = ! secondFlag">Call Mr. Another</button>
        <async-another v-if="secondFlag"></async-another>

    </div>
</template>

<script>

    export default {
        name: "test",

        data () {
            return {
                message: 'Hello world',
                flag: false,
                secondFlag: false,
            }
        },

        components: {
            // имя компонента
            async: () => import('@vue/async'),
            asyncAnother: () => import('@vue/async-another'),
        }
    }
</script>

<style lang="scss">
    .test-box {
        color: blue;
    }
</style>
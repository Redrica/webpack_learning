<template>
    <div>
        <div class="test-box" @click="flag = !flag">{{ message }}</div>
        <acync v-if="flag"></acync>
    </div>
</template>

<script>
    export default {
        name: "test",

        data () {
            return {
                message: 'Hello world',
                flag: false
            }
        },

        components: {
            acync: () => import('../vue/acync')
        }
    }
</script>

<style lang="scss">
    .test-box {
        color: blue;
    }
</style>
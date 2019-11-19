<template>
    <div>
        <button class="test-box" @click="flag = !flag">{{ message }}</button>
        <async v-if="flag"></async>
        <button @click="secondFlag = ! secondFlag">Call Mr. Another</button>
        <async-another v-if="secondFlag"></async-another>

<!--        <additional-one></additional-one>-->
<!--        <additional-two></additional-two>-->
<!--        <additional-three></additional-three>-->
    </div>
</template>

<script>
    // import additionalOne from '@vue/components/additional-one';
    // import additionalTwo from '@vue/components/additional-two';
    // import additionalThree from '@vue/components/additional-three';

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

            // additionalOne,
            // additionalTwo,
            // additionalThree
        }
    }
</script>

<style lang="scss">
    .test-box {
        color: blue;
    }
</style>
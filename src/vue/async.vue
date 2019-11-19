<template>
    <div class="test-box test-box--colored">{{ message }}
        <span>And it's amazing :-)</span>
        <span>Who can imagine?</span>
        <button @click="callHandlerOne">Call the One!</button>
        <button @click="callHandlerTwo">Call the Two!</button>
        <button @click="callHandlerThree">Call the Three!</button>
        <additional-one v-if="one"></additional-one>
        <additional-two v-if="two"></additional-two>
        <additional-three v-if="three"></additional-three>
    </div>

</template>

<script>
    // import additionalOne from '@vue/components/additional-one';
    // import additionalTwo from '@vue/components/additional-two';
    // import additionalThree from '@vue/components/additional-three';

    export default {
        name: "async",

        components: {
            // использование Magic Comments позволяет называть чанки понятными названиями, а не по id
            additionalOne: () => import(/* webpackChunkName: 'addition-one' */ '@vue/components/additional-one'),
            additionalTwo: () => import(/* webpackChunkName: 'addition-two' */ '@vue/components/additional-two'),
            additionalThree: () => import(/* webpackChunkName: 'addition-three' */ '@vue/components/additional-three'),
        },

        data () {
            return {
                message: 'Hello world! I\'m Async. Let\'s call my friends!',
                one: false,
                two: false,
                three: false
            }
        },

        methods: {
            callHandlerOne () {
                this.one = !this.one;
            },
            callHandlerTwo () {
                this.two = !this.two;
            },
            callHandlerThree () {
                this.three = !this.three;
            }

        }
    }
</script>

<style>
    .test-box--colored {
        background-color: #7ed2e4;
    }
</style>
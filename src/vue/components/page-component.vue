<template>
  <div class="block block--page" @click="handleClick" v-html="text"></div>
</template>

<script>
    export default {
        name: "page-component",

        data() {
            return {
                text: '',
                stringStart: 'Click me!',
                stringFinish: 'Hello from Index Component! <br> On click text changes :-)'
            }
        },

        methods: {
            handleClick() {
                this.text === this.stringStart ? this.text = this.stringFinish : this.text = this.stringStart;
            }
        },

        mounted() {
            this.text = this.stringStart;
        }
    }
</script>

<style>
  .block--page {
    background-color: darkslateblue;
    color: darkorange;
    box-shadow: inset 0 0 0 10px darkslateblue, inset 0 0 0 12px darkorange, inset 0 0 2px 16px #3a3a75;
  }

</style>
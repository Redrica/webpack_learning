<template>
  <div class="block block--index" @click="handleClick" v-html="text"></div>
</template>

<script>
    export default {
        name: "index-component",

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
  .block--index {
    background-color: darkorange;
    color: darkslateblue;
    box-shadow: inset 0 0 0 10px darkorange, inset 0 0 0 12px darkslateblue, inset 0 0 2px 16px #ffa347fa;
  }

</style>
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
            },

            reload() {
              setTimeout(() => document.location.reload(), 3000);
            }
        },

        mounted() {
            this.text = this.stringStart;
            //this.reload();
        }
    }
</script>

<style lang="scss">
  @import "../../scss/main.scss";

  .block--page {
    background-color: darkslateblue;
    color: moccasin;
    box-shadow: inset 0 0 0 10px darkslateblue, inset 0 0 0 12px moccasin, inset 0 0 2px 16px #3a3a75;
  }

  .test {
    color: red;
  }

</style>
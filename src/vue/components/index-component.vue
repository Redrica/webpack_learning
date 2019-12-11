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
                stringFinish: 'Hello from Index Component! <br> Clicks count is ',
                counter: 0
            }
        },

        methods: {
            handleClick() {
                this.counter = this.counter + 1;
                this.text === this.stringStart ? this.text = this.stringFinish + this.counter : this.text = this.stringStart;
            }
        },

        mounted() {
            this.text = this.stringStart;
        }
    }
</script>

<style lang="scss">
  @import "../../scss/main.scss";

  .block--index {
    background-color: darkorange;
    color: darkslateblue;
    box-shadow: inset 0 0 0 10px darkorange, inset 0 0 0 12px darkslateblue, inset 0 0 2px 16px #ffa347fa;
  }

  .test {
    color: red;
  }


  .page-account {

    &__header {
      display: flex;
      justify-content: space-between;
    }

    &__heading {
      color: #000;
      font-size: 22px;
      letter-spacing: -.2px;
    }
  }

  .user-widget {
    display: flex;
    align-items: center;
    font-size: 12px;

    &__image {
      width: 32px;
      height: 32px;
      background-size: cover;
      border-radius: 50%;
    }

    &__name {
      padding: 0 15px;
      line-height: 28px;
    }

    &__logout {
      padding: 0 3px 0 5px;
    }

    &__logout-icon {
      width: 10px;
      height: 7px;
    }
  }

</style>
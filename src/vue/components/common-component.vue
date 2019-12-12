<template>
  <button class="button" @click="handleClick">Look up the console!</button>
</template>

<script>
    export default {
        name: "common-component",

        methods: {
            handleClick() {
                console.log('Blue button has been clicked :-)');
            }
        },
    }
</script>

<style lang="scss">

  .button {
    margin-left: 20px;
    padding: 5px 10px;
    background-color: cornflowerblue;
    border-radius: 5px;
    color: aliceblue;
    border: none;
  }

</style>
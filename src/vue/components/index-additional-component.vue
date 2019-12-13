<template>
  <button class="button-additional" @click="handleClick">Some text</button>
</template>

<script>
    export default {
        name: "common-component",

        methods: {
            handleClick() {
                console.log('Some text button has been clicked :-)');
            }
        },
    }
</script>

<style lang="scss">

  .button-additional {
    margin-left: 30px;
    padding: 5px 20px;
    background-color: cornflowerblue;
    border-radius: 10px;
    color: #ff4d43;
    border: none;
  }

</style>
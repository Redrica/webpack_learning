<template>
    <div class="test-box">{{ message }}
        <span>And it's amazing :-)</span>
        <span>Who can imagine?</span>
    </div>

</template>

<script>
    export default {
        name: "acync",

        data () {
            return {
                message: 'Hello world! I\'m Async'
            }
        }
    }
</script>

<style>
    .test-box {
        background-color: #7ed2e4;
    }
</style>
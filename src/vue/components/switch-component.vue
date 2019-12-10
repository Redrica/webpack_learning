<template>
    <a class="button"  @click="getHref()">{{ text }}</a>
</template>

<script>
    export default {
        name: "switch-component",

        props: {
            link: {
                type: String,
                default: ''
            }
        },

        data() {
            return {
                text: 'GOTO PAGE',
            }
        },



        methods: {
            handleSwitch() {
                let href = document.location.href;

                //return this.text === 'GOTO PAGE' ? 'GOTO INDEX' : 'GOTO PAGE';
                return href;
            },

            getHref() {
                //return this.link = document.location.href;
                console.log(document.location.href);
            }
        },

        mounted() {
            this.getHref();
        }
    }
</script>

<style>

    .button {
        display: inline-block;
        padding: 20px;
        margin-bottom: 30px;
        background-color: #62c300;
        border-radius: 5px;
    }

</style>
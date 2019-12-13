<template>
    <div class="block block--index" @click="handleClick + someMethod1 + someMethod2 + someMethod3" v-html="text"></div>
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
            },

            someMethod1() {
                console.log('123')
            },

            someMethod2() {
                console.log('567')
            },

            someMethod3() {
                console.log('489')
            },
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

    .search {
        padding: 25px 40px 0;


        &__to-home-link {
            font-size: 14px;
            font-weight: 300;
            line-height: 24px;
        }

        &__to-home-icon {
            margin-right: 2px;
        }

        &__title {
            margin-bottom: 5px;
            font-size: 34px;
            letter-spacing: -.3px;
            line-height: 56px;


        }

        &__description {
            margin-bottom: 27px;
            font-size: 16px;
            font-weight: 300;
            line-height: 24px;


        }

        &__search-input {

            .kd-header-search {
                margin-bottom: 7px;
            }

            .kd-header-search__select {
                display: none;
            }

            .kd-header-search__input {
                outline: 1px solid #e5e5e5;
            }

            .kd-btn.kd-btn_min.kd-btn_secondary {
                height: 42px;
            }
        }

        &__popular-searches {
            margin-top: 6px;
            display: flex;


        }

        &__popular-searches-heading {
            float: left;
            font-size: 14px;
            line-height: 24px;
            flex-shrink: 0;

        }

        &__popular-searches-list {
            display: flex;
            flex-wrap: wrap;
            padding: 0;
            margin: 0;
            list-style-type: none;
        }

        &__popular-searches-item {
            margin-left: 15px;

        }

        &__popular-searches-link {
            font-size: 14px;
            line-height: 24px;
        }

        &__interesting-title {
            margin-bottom: 10px;
            font-size: 24px;
            letter-spacing: -.2px;
            line-height: 64px;

        }

        &__interesting-list {
            display: flex;
            flex-wrap: wrap;
            padding: 0;
            margin: 0 0 50px 0;
            list-style-type: none;
        }

        &__interesting-item {
            width: 300px;
            margin-bottom: 8px;

        }

        &__interesting-link {
            font-size: 14px;
            line-height: 24px;
        }

        &__not-found-banner {
            justify-content: unset;
            padding-left: 40px;
            margin-right: -40px;
            margin-left: -40px;
            background-image: url('/local/templates/kd/assets/img_content/search_bg.png');
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: 100% 0;


            @media (max-width: 626px) {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 34px 16px 40px 16px;

                .main-section__not-found-wrapper {
                    margin-bottom: 16px;
                }
            }


            .main-section {
                &__not-found-wrapper {
                    margin-right: 19px;
                }

                &__not-found-icon {
                }

                &__not-found-text,
                &__not-found-btn.kd-btn.kd-btn_border.kd-btn_min {
                    padding: 0 31px;

                }
            }
        }

        &__results {
            margin-top: 27px;
        }

        &__main-content {
            margin-right: -40px;
            margin-left: -40px;


            .kd-tab {
                display: flex;
                flex-direction: column;
            }

            .pagination {
                justify-content: flex-end;
                margin-top: 0;
                margin-bottom: 0;
                padding: 43px 10px 29px;


                &__link_previous,
                &__link_next {

                }

                &__link_next::after,
                &__link_next::before {

                }
            }

            .sorting {
                padding: 14px 40px;
                margin-top: -20px;
                margin-left: 0;


                &__btn-wrapper {
                    margin-left: auto;


                }

                &__wrapper {
                    width: 100%;
                    margin-left: 10px;


                }

                &__select {

                }
            }

            .kd-tabs__bar {
                padding: 0 40px;

            }

            .kd-tabs__link {

            }
        }

        &__card-list {
            display: grid;
            padding: 0;
            margin: 0 0 0 1px;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            list-style-type: none;


            .product-card {
                width: unset !important;
            }
        }

        &__card-item {

            .product-card__inner {
                border: 1px solid #d7d7d7;
                border-width: 0 1px 1px 0;


            }

            .product-card__labels {
                display: flex;


            }

            .product-card__label:not(:first-child) {
                margin-left: 8px;


            }

            &.main-section__card-item_medium {

                & .product-card__inner {


                }
            }
        }

        &__tests,
        &__articles {
            display: flex;
            flex-direction: column;
            padding: 19px 40px;

        }

        &__tests-list,
        &__articles-list {
            padding: 0;
            margin: 0;
            list-style-type: none;
        }

        &__tests-item {
            display: flex;
        }

        &__tests-img {
            width: 104px;
            height: 104px;
            margin-right: 25px;


        }

        &__tests-item,
        &__articles-item {
            padding-bottom: 30px;
            border-bottom: 1px solid #e0e0e0;

            &:not(:first-child) {
                padding-top: 30px;


            }
        }

        &__tests-title,
        &__articles-title {
            font-size: 16px;
            font-weight: 600;
            line-height: 20px;


        }

        &__tests-text,
        &__articles-text {
            font-size: 14px;
            font-weight: 300;
            line-height: 22px;

            mark {
                background-color: rgba(255, 159, 0, .12);
            }

            &:last-child {
                margin-bottom: 0;
            }
        }

        &__show-more-btn {
            display: none;
            width: unset;
            margin: 30px 15px;


        }

        // гори в аду АДВ и их селекторы
        &__show-more-btn.main-section__show-more-btn.kd-btn.kd-btn_border {
            //@media (max-width: 500px) {
            display: none;


        }

        //&__show-more-icon {
        //    margin-right: 10px;
        //    fill: $primary;
        //}

        .kd-accordion-tab__title {
            display: none;
        }

        .kd-tabs__content {
            padding-top: 0;
        }
    }


</style>
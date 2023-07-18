<template>
    <div class="gradientPanel">
        <div class="gradientPanelTop">

        </div>
        <div class="gradientPanelCenter">
            <slot />
        </div>
        <div class="gradientPanelBottom">

        </div>
    </div>
</template>

<script lang="ts" setup>

    const props = defineProps({
        topColor: {
            type: String,
            default: "#000000"
        },
        middleColor: {
            type: String,
            default: "#000000"
        },
        bottomColor: {
            type: String,
            default: "#000000"
        }
    })

</script>

<style lang="scss" scoped>
    .gradientPanel {
        background-color: transparent;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding-top: 128px;
        padding-bottom: 128px;

        .gradientPanelTop {
            background-color: transparent;
            width: 100%;
            height: 10%;
            min-height: 128px;
            background: linear-gradient(180deg, v-bind(topColor) 0%, v-bind(middleColor) 100%);
        }

        .gradientPanelCenter {
            background-color: v-bind(middleColor);
            width: 100%;
            height: 80%;
        }

        .gradientPanelBottom {
            background-color: transparent;
            width: 100%;
            height: 10%;
            min-height: 128px;
            background: linear-gradient(180deg, v-bind(middleColor) 0%, v-bind(bottomColor) 100%);
        }
    }

</style>
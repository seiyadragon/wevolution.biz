<template>

    <p v-if="textType === 1">
        <slot />
    </p>

    <span v-if="textType === 2">
        <slot />
    </span>

</template>

<script lang="ts" setup>

    const props = defineProps({
        textType: {
            type: Number,
            default: 1
        }
    })

</script>

<style lang="scss" scoped>

    p {
        font-weight: 400;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 1rem;

        @media screen and (min-width: 320px) {
            font-size: 1rem;
        }
    
        @media screen and (min-width: 568px) {
            font-size: 1rem;
        }   
    
        @media screen and (min-width: 768px) {
            font-size: 1rem;
        }
    
        @media screen and (min-width: 1900px) {
            font-size: 1rem;
        }
    }

    span {
        font-weight: 400;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 1rem;

        @media screen and (min-width: 320px) {
            font-size: 1rem;
        }
    
        @media screen and (min-width: 568px) {
            font-size: 1rem;
        }   
    
        @media screen and (min-width: 768px) {
            font-size: 1rem;
        }
    
        @media screen and (min-width: 1900px) {
            font-size: 1rem;
        }
    }

</style>
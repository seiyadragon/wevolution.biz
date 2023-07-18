<template>

    <h1 v-if="level === 1">
        <slot />
    </h1>

    <h2 v-else-if="level === 2">
        <slot />
    </h2>

    <h3 v-else-if="level === 3">
        <slot />
    </h3>

</template>

<script lang="ts" setup>

    const props = defineProps({
        level: {
            type: Number,
            default: 1
        }
    })

</script>

<style lang="scss" scoped>

    h1 {
        font-weight: 700;
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 2rem;

        @media screen and (min-width: 320px) {
            font-size: 4rem;
        }
    
        @media screen and (min-width: 568px) {
            font-size: 6rem;
        }   
    
        @media screen and (min-width: 768px) {
            font-size: 6rem;
        }
    
        @media screen and (min-width: 1900px) {
            font-size: 8rem;
        }
    }

    h2 {
        font-weight: 600;
        text-align: center;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;

        @media screen and (min-width: 320px) {
            font-size: 3rem;
        }
    
        @media screen and (min-width: 568px) {
            font-size: 5rem;
        }   
    
        @media screen and (min-width: 768px) {
            font-size: 5rem;
        }
    
        @media screen and (min-width: 1900px) {
            font-size: 7rem;
        }
    }

    h3 {
        font-weight: 600;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 1rem;

        @media screen and (min-width: 320px) {
            font-size: 2rem;
        }
    
        @media screen and (min-width: 568px) {
            font-size: 4rem;
        }   
    
        @media screen and (min-width: 768px) {
            font-size: 4rem;
        }
    
        @media screen and (min-width: 1900px) {
            font-size: 6rem;
        }
    }

</style>
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

    <h4 v-else-if="level === 4">
        <slot />
    </h4>

    <h5 v-else-if="level === 5">
        <slot />
    </h5>

    <h6 v-else-if="level === 6">
        <slot />
    </h6>

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
        text-transform: uppercase;

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

    h2 {
        font-weight: 600;
        text-align: center;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;

        @media screen and (min-width: 320px) {
            font-size: 1.5rem;
        }
    
        @media screen and (min-width: 568px) {
            font-size: 3rem;
        }   
    
        @media screen and (min-width: 768px) {
            font-size: 3rem;
        }
    
        @media screen and (min-width: 1900px) {
            font-size: 5rem;
        }
    }

    h3 {
        font-weight: 600;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 1rem;

        @media screen and (min-width: 320px) {
            font-size: 1rem;
        }
    
        @media screen and (min-width: 568px) {
            font-size: 2rem;
        }   
    
        @media screen and (min-width: 768px) {
            font-size: 2rem;
        }
    
        @media screen and (min-width: 1900px) {
            font-size: 4rem;
        }
    }

    h4 {
        font-weight: 400;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 1rem;

        @media screen and (min-width: 320px) {
            font-size: 1rem;
        }
    
        @media screen and (min-width: 568px) {
            font-size: 1.5rem;
        }   
    
        @media screen and (min-width: 768px) {
            font-size: 1.5rem;
        }
    
        @media screen and (min-width: 1900px) {
            font-size: 3rem;
        }
    }

    h5 {
        font-weight: 200;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 1rem;

        @media screen and (min-width: 320px) {
            font-size: 1rem;
        }
    
        @media screen and (min-width: 568px) {
            font-size: 1.5rem;
        }   
    
        @media screen and (min-width: 768px) {
            font-size: 1.5rem;
        }
    
        @media screen and (min-width: 1900px) {
            font-size: 3rem;
        }
    }

    h6 {
        font-weight: 100;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 1rem;

        @media screen and (min-width: 320px) {
            font-size: 1rem;
        }
    
        @media screen and (min-width: 568px) {
            font-size: 1.5rem;
        }   
    
        @media screen and (min-width: 768px) {
            font-size: 1.5rem;
        }
    
        @media screen and (min-width: 1900px) {
            font-size: 3rem;
        }
    }

</style>
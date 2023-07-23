<template>

    <div class="meetingButtonHolder" :style="smallButton ? 'margin-top: 0px' : 'margin-top: 64px'">
        <NuxtLink to="/calendly" :class="smallButton ? 'alternateBookButton' : 'bookButton'">
            Book a call
        </NuxtLink>
    </div>

</template>

<script lang="ts" setup>

    const props = defineProps({
        smallButton: {
            type: Boolean,
            default: false
        }
    })

</script>

<style lang="scss" scoped>

    .meetingButtonHolder {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 64px;
        margin-top: 64px;

        .bookButton {
            background-color: transparent;
            border: 2px solid gold;
            border-radius: 8px;
            color: gold;
            font-weight: 600;
            padding: 0.5rem 1rem;
            transition: all 0.2s ease-in-out;
            text-decoration: none;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);

            &:hover {
                background-color: gold;
                color: black;
            }

            @media screen and (min-width: 320px) {
                font-size: 2.5rem;
            }
        
            @media screen and (min-width: 568px) {
                font-size: 3.5rem;
            }   
        
            @media screen and (min-width: 768px) {
                font-size: 4.5rem;
            }
        
            @media screen and (min-width: 1900px) {
                font-size: 5rem;
            }
        }

        .alternateBookButton {
            background-color: transparent;
            border: 2px solid gold;
            color: gold;
            border-radius: 8px;
            font-weight: 600;
            padding: 0.5rem 1rem;
            transition: all 0.2s ease-in-out;
            text-decoration: none;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);

            &:hover {
                background-color: gold;
                color: black;
            }

            @media screen and (min-width: 320px) {
                font-size: 0.9rem;
            }
        
            @media screen and (min-width: 568px) {
                font-size: 1.5rem;
            }   
        
            @media screen and (min-width: 768px) {
                font-size: 1.5rem;
            }
        
            @media screen and (min-width: 1900px) {
                font-size: 2rem;
            }
        }
    }

</style>
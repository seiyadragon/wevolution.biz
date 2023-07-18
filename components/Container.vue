<template>

    <div class="container">
        <slot />
    </div>

</template>

<style lang="scss" scoped>

    .container {
        background-color: transparent;
        margin-left: auto;
        margin-right: auto;

        @media screen and (min-width: 320px) {
            width: 95%;
        }
    
        @media screen and (min-width: 568px) {
            width: 85%;
        }   
    
        @media screen and (min-width: 768px) {
            width: 85%;
        }
    
        @media screen and (min-width: 1900px) {
            width: 80%;
        }
    }

</style>
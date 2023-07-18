<template>

    <div>

    </div>

</template>

<script lang="ts" setup>

    import { ref } from 'vue';
    import data from '../src/data/index.json'

    //load the file /data/index.json and put it in a ref use the fetch function
    const pageData = ref(data);

</script>

<style lang="scss" scoped>

    .spaceWaster {
        height: 128px;
    }

</style>

<style lang="scss">

    //import a modern and elegant font from google fonts
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    header {
        position: sticky;
        top: 0;
    }

    //set global styles
    * {
        font-family: 'Montserrat', sans-serif;
        margin: 0;

        ::-webkit-scrollbar {
            width: 6px;
      	    background-color: rgb(0, 0, 0, 0);
        }

        ::-webkit-scrollbar-track {
            background-color: rgb(0, 0, 0, 0);
        }

        ::-webkit-scrollbar-thumb {
            background-color:  rgb(255, 255, 255);
            border-radius: 32px;
        }
    
        ::-webkit-scrollbar-thumb:hover {
            background-color: rgb(225, 225, 225);
        }
    }

    body {
        background-color: #ff6539;
        color: #fff;
    }

</style>
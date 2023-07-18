import { Container, Title, Heading } from '../.nuxt/components';

<template>

    <div>
        <header>
            <Navbar />
        </header>
        <Container>
            <Heading :level="1">{{ pageData.Heading1[0] }}</Heading>
            <Heading :level="2">{{ pageData.Heading2[0] }}</Heading>
            <Heading :level="2">{{ pageData.Heading2[1] }}</Heading>
        </Container>
    </div>

</template>

<script lang="ts" setup>

    import { ref } from 'vue';
    import data from '../public/data/index.json'


    //load the file /data/index.json and put it in a ref use the fetch function
    const pageData = ref(data);


</script>

<style lang="scss">

    //import a modern and elegant font from google fonts
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    //set global styles
    * {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
    }

    body {
        background-color: #ff6539;
        color: #fff;
    }

</style>
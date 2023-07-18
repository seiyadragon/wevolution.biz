import { Container, Title, Heading } from '../.nuxt/components';

<template>

    <div>
        <NuxtLayout>
            <header>
                <Navbar />
            </header>
            <div class="spaceWaster"></div>
            <Container>
                <Heading :level="1">{{ pageData.Heading1[0] }}</Heading>
                <Heading :level="2">{{ pageData.Heading2[0] }}</Heading>
            </Container>
            <div class="spaceWaster"></div>
            <GradientPanel middleColor="red" top-color="#FF6539" bottomColor="#FF6539">
                <Container>
                    <Heading :level="3">{{ pageData.Heading3[0] }}</Heading>
                    <Text>{{ pageData.Paragraph1[0] }}</Text>
                    <Text>{{ pageData.Paragraph1[1] }}</Text>
                    <Text>{{ pageData.Paragraph1[2] }}</Text>
                    <Text>{{ pageData.Paragraph1[3] }}</Text>
                    <Text>{{ pageData.Paragraph1[4] }}</Text>
                </Container>
            </GradientPanel>
            <GradientPanel middleColor="#309960" top-color="#FF6539" bottomColor="#FF6539">
                <Container>
                    <Heading :level="3">{{ pageData.Heading3[1] }}</Heading>
                    <Text>{{ pageData.Paragraph2[0] }}</Text>
                    <Text>{{ pageData.Paragraph2[1] }}</Text>
                    <Text>{{ pageData.Paragraph2[2] }}</Text>
                    <Text>{{ pageData.Paragraph2[3] }}</Text>
                    <CalendlyButton />
                </Container>
            </GradientPanel>
        </NuxtLayout>
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
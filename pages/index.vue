import { Container, Title, Heading } from '../.nuxt/components';

<template>

    <div>
        <header>
            <Navbar />
        </header>
        <GradientPanel middleColor="orange" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="1" class="textShadow">{{ pageData.Heading1[0] }}</Heading>
                <Heading :level="2" class="textShadow">{{ pageData.Heading2[0] }}</Heading>
            </Container>
        </GradientPanel>
        <GradientPanel middleColor="#c32148" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3">{{ pageData.Heading3[0] }}</Heading>
                <Text v-for="i in pageData.Paragraph1.length">{{ pageData.Paragraph1[i] }}</Text>
            </Container>
        </GradientPanel>
        <GradientPanel middleColor="rgb(255, 0, 20)" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3">{{ pageData.Heading3[1] }}</Heading>
                <Text v-for="i in pageData.Paragraph2.length">{{ pageData.Paragraph2[i] }}</Text>
                <CalendlyButton />
            </Container>
        </GradientPanel>
        <GradientPanel middleColor="goldenrod" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3">{{ pageData.Heading3[2] }}</Heading>
                <div class="testimonial">
                    <YoutubeVideo v-for="video in pageData.YoutubeVideos" :videoID="video"/>
                </div>
            </Container>
        </GradientPanel>
    </div>

</template>

<script lang="ts" setup>

    import { ref } from 'vue';
    import data from '../src/data/index.json'

    //load the file /data/index.json and put it in a ref use the fetch function
    const pageData = ref(data);

</script>

<style lang="scss" scoped>

    .testimonial {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 32px;
        overflow-x: scroll;
        padding-left: 16px;
        padding-right: 16px;
    }

    .textShadow {
        text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
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
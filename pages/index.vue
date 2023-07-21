<template>

    <div>
        <Title>{{ pageData.Title }}</Title>
        <Meta name="description" :content="pageData.Description" />
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
                <Text v-for="text in pageData.Paragraph1">{{ text }}</Text>
            </Container>
        </GradientPanel>
        <GradientPanel middleColor="rgb(255, 0, 20)" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3">{{ pageData.Heading3[1] }}</Heading>
                <Text v-for="text in pageData.Paragraph2">{{ text }}</Text>
                <CalendlyButton />
            </Container>
        </GradientPanel>
        <GradientPanel middleColor="goldenrod" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3">{{ pageData.Heading3[2] }}</Heading>
                <div class="projects">
                    <YoutubeVideo class="project" v-for="video in pageData.YoutubeVideos" 
                        :videoID="video"
                        width="256px"
                        height="144px"
                    />
                </div>
                <div class="projects">
                    <img v-for="image in pageData.ProjectScreenshots" 
                        class="project" 
                        :src="image" 
                        alt="project screenshot"
                    />
                </div>
            </Container>
        </GradientPanel>
        <GradientPanel middleColor="rgb(255, 0, 20)" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3">{{ pageData.Heading3[3] }}</Heading>
                <Text v-for="text in pageData.Paragraph3">{{ text }}</Text>
            </Container>
        </GradientPanel>
        <GradientPanel middleColor="#c2b510" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3">{{ pageData.Heading3[4] }}</Heading>
                <Text v-for="text in pageData.Paragraph4">{{ text }}</Text>
            </Container>
        </GradientPanel>
        <GradientPanel middleColor="#c32148" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3">{{ pageData.Heading3[5] }}</Heading>
                <Text v-for="text in pageData.Paragraph5">{{ text }}</Text>
            </Container>
        </GradientPanel>
        <GradientPanel middleColor="goldenrod" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3">{{ pageData.Heading3[6] }}</Heading>
                <Text v-for="text in pageData.Paragraph6">{{ text }}</Text>
            </Container>
        </GradientPanel>
        <GradientPanel middleColor="rgb(255, 0, 20)" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3">{{ pageData.Heading3[7] }}</Heading>
                <Text v-for="text in pageData.Paragraph7">{{ text }}</Text>
                <CalendlyButton />
            </Container>
        </GradientPanel>
        <footer>
            <Footer />
        </footer>
    </div>

</template>

<script lang="ts" setup>

    import { ref } from 'vue';
    import data from '../src/data/index.json'

    //load the file /data/index.json and put it in a ref use the fetch function
    const pageData = ref(data);

</script>

<style lang="scss" scoped>
    .projects {
        width: 100%;
        display: flex;
        padding-left: auto;
        padding-right: auto;
        row-gap: 64px;
        column-gap: 32px;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 32px;

        @media screen and (min-width: 320px) {
            flex-direction: column;
        }
    
        @media screen and (min-width: 568px) {
            flex-direction: row;
        }   
    
        @media screen and (min-width: 768px) {
            flex-direction: row;
        }
    
        @media screen and (min-width: 1900px) {
            flex-direction: row;
        }

        .project {
            border: none;
            border-radius: 8px;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
            overflow: hidden;
            margin-left: auto;
            margin-right: auto;
            width: 256px;
            height: 144px;
        }
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

    .textShadow {
        text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
    }

</style>
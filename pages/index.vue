<template>

    <div class="whiteText" v-if="pageLoaded" style="text-align: center;">
        <Title>{{ pageData.title }}</Title>
        <Meta name="description" :content="pageData.description" />
        <header>
            <Navbar />
        </header>
        <LazyGradientPanel middleColor="orange" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="1" class="textShadow">{{ pageData.heading1 }}</Heading>
                <Heading :level="2" class="textShadow">{{ pageData.heading2 }}</Heading>
            </Container>
        </LazyGradientPanel>
        <LazyGradientPanel v-for="section in pageData.sections" :middleColor="section.backgroundColor" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3">{{ section.title }}</Heading>
                <Text v-for="text in section.content">{{ text.children[0].text }}</Text>
                <CalendlyButton v-if="section.cta"/>
                <div v-if="section.testimonials" class="testimonials">
                    <iframe class="wallOfLove"
                        id="testimonialto-web-testimonials2-tag-all-light-animated" 
                        src="https://embed-v2.testimonial.to/w/web-testimonials2?animated=on&theme=light&shadowColor=00000000&speed=1&tag=all" 
                        frameborder="0" 
                        scrolling="no"
                    />
                </div>
            </Container>
        </LazyGradientPanel>
        <footer>
            <LazyFooter />
        </footer>
    </div>

</template>

<script lang="ts" setup>

    import { ref } from 'vue';
    import {client} from '../extra/sanity'

    //load the file /data/index.json and put it in a ref use the fetch function
    const pageData = ref(await client.fetch(`*[_type == "homePage" && activeHomepage == true]`));
    const pageLoaded = ref(false);

    onMounted(async () => {
        pageData.value = (await client.fetch(`*[_type == "homePage" && activeHomepage == true]`))[0]
        pageLoaded.value = true;
    });

</script>

<style lang="scss" scoped>
    .testimonials {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 256px;
        margin-top: 64px;
        column-gap: 8px;
        row-gap: 8px;
        flex-direction: row;

        @media screen and (min-width: 320px) {
            height: 370px;
        }
        
        @media screen and (min-width: 568px) {
            height: 618px;
        }   
        
        @media screen and (min-width: 768px) {
            height: 818px;
        }
        
        @media screen and (min-width: 1900px) {
            height: 818px;
        }

        .wallOfLove {
            border: none;
            border-radius: 8px;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
            overflow: hidden;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            height: 100%;
            max-width: 766px;
            max-height: 800px;
            border: solid 3px gold;
        }
    }
</style>

<style lang="scss">

    //import a modern and elegant font from google fonts
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    header {
        position: sticky;
        top: 0;
        z-index: 99;
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
    }

    .whiteText {
        color: white;
    }

    .textShadow {
        text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
    }

    .blackText {
        color: black;
    }

</style>
<template>

    <div v-if="pageLoaded">
        <Title>{{ currentResource.title }}</Title>
        <Meta name="description" :content="currentResource.description" />
        <header>
            <Navbar />
        </header>
        <LazyGradientPanel middleColor="orange" top-color="#FF6539" bottomColor="#FF6539">
            <img :src="urlFor(currentResource.image).toString()" alt="resource image" class="heroImage" />
            <Container class="whiteText">
                <Heading :level="1" class="textShadow">{{ currentResource.title }}</Heading>
            </Container>
        </LazyGradientPanel>
        <LazyGradientPanel middleColor="white" top-color="#FF6539" bottomColor="#FF6539" >
            <Container class="blackText">
                <div v-for="section in currentResource.content">
                    <Heading :level="1" v-if="section.style == 'h1'">{{ section.children[0].text }}</Heading>
                    <Heading :level="2" v-if="section.style == 'h2'">{{ section.children[0].text }}</Heading>
                    <Heading :level="3" v-if="section.style == 'h3'">{{ section.children[0].text }}</Heading>
                    <Heading :level="4" v-if="section.style == 'h4'">{{ section.children[0].text }}</Heading>
                    <Heading :level="5" v-if="section.style == 'h5'">{{ section.children[0].text }}</Heading>
                    <Heading :level="6" v-if="section.style == 'h6'">{{ section.children[0].text }}</Heading>
                    <Text v-if="section.style == 'normal'">{{ section.children[0].text }}</Text>
                </div>
            </Container>
        </LazyGradientPanel>
        <footer class="whiteText">
            <LazyFooter />
        </footer>
    </div>

</template>

<script lang="ts" setup>

    import { ref } from 'vue';
    import {client} from '../../extra/sanity'
    import imageUrlBuilder from '@sanity/image-url'

    const route = useRoute();

    //load the file /data/index.json and put it in a ref use the fetch function
    const pageData = ref(await client.fetch(`*[_type == "learningPage" && activeLearningPage == true]`));
    const pageLoaded = ref(false);
    const currentResource = ref({} as any)
    
    // Get a pre-configured url-builder from your sanity client
    const builder = imageUrlBuilder(client)

    // Then we like to make a simple function like this that gives the
    // builder an image and returns the builder for you to specify additional
    // parameters:
    function urlFor(source: any) {
        return builder.image(source)
    }


    onMounted(async () => {
        pageData.value = (await client.fetch(`*[_type == "learningPage" && activeLearningPage == true]`))[0]

        pageData.value.sections.forEach(async (section: any) => {
            if (section.content === undefined) return;

            section.content.forEach((resource: any) => {
                if (resource.slug.current === route.params.id) {
                    currentResource.value = resource;
                }
            })
        })

        pageLoaded.value = true;
    });

</script>

<style lang="scss" scoped>

    .heroImage {
        width: 100%;
        height: auto;
        margin-bottom: 2rem;
        max-height: 320px;
        
        @media screen and (min-width: 320px) {
            margin-top: -160px;
            width: 320px;
        }
        
        @media screen and (min-width: 568px) {
            margin-top: -200px;
            width: 100%;
        }   
        
        @media screen and (min-width: 768px) {
            margin-top: -200px;
            max-height: 540px;
        }
        
        @media screen and (min-width: 1900px) {
            margin-top: -200px;
            max-height: 640px;
        }
    }


</style>
<template>

    <div class="whiteText" v-if="pageLoaded">
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
                <NuxtLink class="resourceLink" v-for="resource in section.content" :key="resource.slug.current" :to="`/resources/${resource.slug.current}`">
                    <div class="resourceTitle">
                        <img :src="urlFor(resource.image).toString()" alt="resource image" class="thumbnail"/>
                        <Heading :level="4"> {{ resource.title }} </Heading>
                    </div>
                    <Heading :level="4">
                        {{ new Date(resource.timestamp).getMonth() + 1 }}/
                        {{ new Date(resource.timestamp).getDate() }}/
                        {{ new Date(resource.timestamp).getFullYear() }}
                    </Heading>
                </NuxtLink>
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
    import imageUrlBuilder from '@sanity/image-url'

    //load the file /data/index.json and put it in a ref use the fetch function
    const pageData = ref(await client.fetch(`*[_type == "learningPage" && activeLearningPage == true]`));
    const pageLoaded = ref(false);

    onMounted(async () => {
        pageData.value = (await client.fetch(`*[_type == "learningPage" && activeLearningPage == true]`))[0]
        pageLoaded.value = true;
    });

    // Get a pre-configured url-builder from your sanity client
    const builder = imageUrlBuilder(client)

    // Then we like to make a simple function like this that gives the
    // builder an image and returns the builder for you to specify additional
    // parameters:
    function urlFor(source: any) {
        return builder.image(source)
    }

</script>

<style lang="scss" scoped>
    // create an awesome link style for the resources with a nice background and pleasing hover effect
    .resourceLink {
        color: white;
        text-decoration: none;
        padding: 16px 16px;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.1);
        transition: background-color 0.5s ease;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }

        .resourceTitle {
            display: flex;
            align-items: center;
        }

        .thumbnail {
            width: 64px;
            height: 64px;
            margin-right: 16px;
            border-radius: 100%;
        }
    }

</style>
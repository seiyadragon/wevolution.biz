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
                    <Icon name="el:file" size="24px"/>
                    <Text>{{ resource.title }}</Text>
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

    //load the file /data/index.json and put it in a ref use the fetch function
    const pageData = ref(await client.fetch(`*[_type == "learningPage" && activeLearningPage == true]`));
    const pageLoaded = ref(false);

    onMounted(async () => {
        pageData.value = (await client.fetch(`*[_type == "learningPage" && activeLearningPage == true]`))[0]
        pageLoaded.value = true;
    });

</script>

<style lang="scss" scoped>
    // create an awesome link style for the resources with a nice background and pleasing hover effect
    .resourceLink {
        color: white;
        text-decoration: none;
        padding: 8px 16px;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.1);
        transition: background-color 0.5s ease;
        display: flex;
        width: 100%;
        align-items: center;

        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    }

</style>
<template>

    <div class="whiteText">
        <Title>{{ pageData.Title }}</Title>
        <Meta name="description" :content="pageData.Description" />
        <header>
            <Navbar />
        </header>
        <LazyGradientPanel middleColor="orange" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="1" class="textShadow">{{ pageData.Heading1[0] }}</Heading>
                <Heading :level="2" class="textShadow">{{ pageData.Heading2[0] }}</Heading>
            </Container>
        </LazyGradientPanel>
        <LazyGradientPanel middleColor="#c32148" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3" class="textShadow">{{ pageData.Heading3[0] }}</Heading>
                <NuxtLink class="resourceLink" v-for="resource in webDesignAndDevelopment" :key="resource.slug" :to="`/resources/${resource.slug}`">
                    <Icon name="el:file" size="24px"/>
                    <Text>{{ resource.name }}</Text>
                </NuxtLink>
            </Container>
        </LazyGradientPanel>
        <LazyGradientPanel middleColor="rgb(255, 0, 20)" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3" class="textShadow">{{ pageData.Heading3[1] }}</Heading>
                <NuxtLink class="resourceLink" v-for="resource in socialMediaAndMarketing" :key="resource.slug" :to="`/resources/${resource.slug}`">
                    <Icon name="el:file" size="24px"/>
                    <Text>{{ resource.name }}</Text>
                </NuxtLink>
            </Container>
        </LazyGradientPanel>
        <LazyGradientPanel middleColor="goldenrod" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3" class="textShadow">{{ pageData.Heading3[2] }}</Heading>
                <NuxtLink class="resourceLink" v-for="resource in businessAndEntrepreneurship" :key="resource.slug" :to="`/resources/${resource.slug}`">
                    <Icon name="el:file" size="24px"/>
                    <Text>{{ resource.name }}</Text>
                </NuxtLink>
            </Container>
        </LazyGradientPanel>
        <LazyGradientPanel middleColor="rgb(255, 0, 20)" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3" class="textShadow">{{ pageData.Heading3[3] }}</Heading>
                <NuxtLink class="resourceLink" v-for="resource in programmingAndComputerScience" :key="resource.slug" :to="`/resources/${resource.slug}`">
                    <Icon name="el:file" size="24px"/>
                    <Text>{{ resource.name }}</Text>
                </NuxtLink>
            </Container>
        </LazyGradientPanel>
        <LazyGradientPanel middleColor="#c2b510" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3" class="textShadow">{{ pageData.Heading3[4] }}</Heading>
                <NuxtLink class="resourceLink" v-for="resource in DataScienceAndAnalytics" :key="resource.slug" :to="`/resources/${resource.slug}`">
                    <Icon name="el:file" size="24px"/>
                    <Text>{{ resource.name }}</Text>
                </NuxtLink>
            </Container>
        </LazyGradientPanel>
        <LazyGradientPanel middleColor="#c32148" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3" class="textShadow">{{ pageData.Heading3[5] }}</Heading>
                <NuxtLink class="resourceLink" v-for="resource in SelfDevelopment" :key="resource.slug" :to="`/resources/${resource.slug}`">
                    <Icon name="el:file" size="24px"/>
                    <Text>{{ resource.name }}</Text>
                </NuxtLink>
            </Container>
        </LazyGradientPanel>
        <LazyGradientPanel middleColor="goldenrod" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3" class="textShadow">{{ pageData.Heading3[6] }}</Heading>
                <NuxtLink class="resourceLink" v-for="resource in PersonalStories" :key="resource.slug" :to="`/resources/${resource.slug}`">
                    <Icon name="el:file" size="24px"/>
                    <Text>{{ resource.name }}</Text>
                </NuxtLink>
            </Container>
        </LazyGradientPanel>
        <LazyGradientPanel middleColor="rgb(255, 0, 20)" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="3" class="textShadow">{{ pageData.Heading3[7] }}</Heading>
                <NuxtLink class="resourceLink" v-for="resource in AdditionalResources" :key="resource.slug" :to="`/resources/${resource.slug}`">
                    <Icon name="el:file" size="24px"/>
                    <Text>{{ resource.name }}</Text>
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
    import data from '../src/data/learning.json'
    import resources from '../src/data/resources.json'

    import { Resource } from './resources/[id].vue'

    //load the file /data/index.json and put it in a ref use the fetch function
    const pageData = ref(data);
    const resourceData = ref(resources);

    let webDesignAndDevelopment = ref([] as Resource[])
    let socialMediaAndMarketing = ref([] as Resource[])
    let businessAndEntrepreneurship = ref([] as Resource[])
    let programmingAndComputerScience = ref([] as Resource[])
    let DataScienceAndAnalytics = ref([] as Resource[])
    let SelfDevelopment = ref([] as Resource[])
    let PersonalStories = ref([] as Resource[])
    let AdditionalResources = ref([] as Resource[])

    onMounted(() => {
        for (let resource in resourceData.value.Resources) {
            switch (resourceData.value.Resources[resource].category) {
                case "Web Design and Development":
                    webDesignAndDevelopment.value.push(resourceData.value.Resources[resource])
                    break;
                case "Social Media and Marketing":
                    socialMediaAndMarketing.value.push(resourceData.value.Resources[resource])
                    break;
                case "Business and Entrepreneurship":
                    businessAndEntrepreneurship.value.push(resourceData.value.Resources[resource])
                    break;
                case "Programming and Computer Science":
                    programmingAndComputerScience.value.push(resourceData.value.Resources[resource])
                    break;
                case "Data Science and Analytics":
                    DataScienceAndAnalytics.value.push(resourceData.value.Resources[resource])
                    break;
                case "Self Development":
                    SelfDevelopment.value.push(resourceData.value.Resources[resource])
                    break;
                case "Personal Stories":
                    PersonalStories.value.push(resourceData.value.Resources[resource])
                    break;
                case "Additional Resources":
                    AdditionalResources.value.push(resourceData.value.Resources[resource])
                    break;
            }
        }
    })

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
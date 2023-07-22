<template>

    <div>
        <Title>{{ resourceData.name }}</Title>
        <Meta name="description" :content="resourceData.description" />
        <header>
            <Navbar />
        </header>
        <GradientPanel middleColor="orange" top-color="#FF6539" bottomColor="#FF6539">
            <Container class="whiteText">
                <Heading :level="1" class="textShadow">{{ resourceData.name }}</Heading>
            </Container>
        </GradientPanel>
        <GradientPanel middleColor="white" top-color="#FF6539" bottomColor="#FF6539" >
            <Container class="blackText">
                <img :src="resourceData.image" alt="resource image" class="img-fluid" />
                <div v-for="section in resourceData.body">
                    <Heading :level="3">{{ section.Heading }}</Heading>
                    <Text v-for="paragraph in section.Paragraphs">{{ paragraph }}</Text>
                </div>
            </Container>
        </GradientPanel>
        <footer class="whiteText">
            <Footer />
        </footer>
    </div>

</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import data from '../../src/data/resources.json'

    const route = useRoute();
    //load the file /data/index.json and put it in a ref use the fetch function
    const pageData = ref(data);

    const id = ref(route.params.id);
    const resourceData = ref({} as Resource)

    export type Resource = {
        name: string,
        slug: string,
        description: string,
        image: string,
        category: string,
        body: string[]
    }

    onMounted(() => {
        resourceData.value = grabCurrentResourceFromSlug(id.value.toString())
    })

    const grabCurrentResourceFromSlug = (slug: string) => {
        let result: Resource = {
            name: '',
            slug: '',
            description: '',
            image: '',
            category: '',
            body: [] as string[],
        }

        for (let i = 0; i < pageData.value.Resources.length; i++) {
            if (pageData.value.Resources[i].slug == slug) {
                result = pageData.value.Resources[i]
            }
        }

        return result
    }

</script>

<style lang="scss" scoped>

    .img-fluid {
        width: 100%;
    }

</style>
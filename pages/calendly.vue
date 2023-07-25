<template>

    <div class="whiteText">
        <Title>{{ pageData.Title }}</Title>
        <Meta name="description" :content="pageData.Description" />
        <header>
            <Navbar />
        </header>
        <LazyGradientPanel middleColor="orange" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="1" class="textShadow">{{ pageData.heading1 }}</Heading>
                <Heading :level="2" class="textShadow">{{ pageData.heading2 }}</Heading>
            </Container>
        </LazyGradientPanel>
        <LazyGradientPanel middleColor="white" top-color="#FF6539" bottomColor="#FF6539" >
            <Container>
                <CalendlyInlineWidget v-bind="calendlyOptions" style="min-width:300px;height:996px;overflow:hidden;" class="calendlyWidget"/>
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
    const pageData = ref(await client.fetch(`*[_type == "calendlyPage" && activeCalendlyPage == true]`));
    const pageLoaded = ref(false);

    const calendlyOptions = {
        url: "https://calendly.com/arlenmolina101/web-discussion",
        prefill: {
            name: "Arlen Molina",
            email: "arlenmolina101@gmail.com",
            questions: "What are your goals for your website?",
        }
    }

    onMounted(async () => {
        pageData.value = (await client.fetch(`*[_type == "calendlyPage" && activeCalendlyPage == true]`))[0]
        pageLoaded.value = true;
    });

</script>
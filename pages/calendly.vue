<template>

    <div class="whiteText">
        <Title>{{ pageData.Title }}</Title>
        <Meta name="description" :content="pageData.Description" />
        <header>
            <Navbar />
        </header>
        <GradientPanel middleColor="orange" top-color="#FF6539" bottomColor="#FF6539">
            <Container>
                <Heading :level="1" class="textShadow">{{ pageData.Heading1[0] }}</Heading>
            </Container>
        </GradientPanel>
        <GradientPanel middleColor="white" top-color="#FF6539" bottomColor="#FF6539" >
            <Container>
                <CalendlyInlineWidget v-bind="calendlyOptions" style="min-width:300px;height:996px;overflow:hidden;" class="calendlyWidget"/>
            </Container>
        </GradientPanel>
        <footer>
            <Footer />
        </footer>
    </div>

</template>

<script lang="ts" setup>

    import { ref } from 'vue';
    import data from '../src/data/calendly.json'

    //load the file /data/index.json and put it in a ref use the fetch function
    const pageData = ref(data);

    const calendlyOptions = {
        url: "https://calendly.com/arlenmolina101/web-discussion",
        prefill: {
            name: "Arlen Molina",
            email: "arlenmolina101@gmail.com",
            questions: "What are your goals for your website?",
        }
    }

</script>
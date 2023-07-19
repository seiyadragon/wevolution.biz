<template>

    <div>
        <iframe :width="width" :height="height" :src="`https://www.youtube.com/embed/${videoID}${autoplay ? '?autoplay=1' : '?autoplay=0'}${muted ? '&mute=1' : '&mute=0'}`"/>
    </div>

</template>

<script lang="ts" setup>

    const props = defineProps({
        width: {
            type: String,
            default: "560px"
        },
        height: {
            type: String,
            default: "315px"
        },
        autoplay: {
            type: Boolean,
            default: false
        },
        muted: {
            type: Boolean,
            default: false
        },
        videoID: {
            type: String,
            default: "https://www.youtube.com/embed/9d8wWcJLnFI"
        }
    })

    const { width, height, autoplay, muted, videoID } = toRefs(props)

</script>

<style lang="scss" scoped>

    iframe {
        outline: none;
        border: solid 12px silver;
        border-radius: 32px;
        box-shadow: 0px 0px 32px 0px rgba(0,0,0,0.75);
        margin-top: 32px;
        margin-bottom: 32px;
    }

</style>
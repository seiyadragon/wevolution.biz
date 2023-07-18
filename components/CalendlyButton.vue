<template>

    <div class="meetingButtonHolder">
        <NuxtLink to="/calendly" class="bookButton">
            Book a call
        </NuxtLink>
    </div>

</template>

<style lang="scss" scoped>

    .meetingButtonHolder {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 100%;
        height: 64px;
        margin-top: 32px;
        margin-bottom: 32px;

        .bookButton {
            background-color: transparent;
            border: 2px solid gold;
            border-radius: 32px;
            color: gold;
            font-size: 3rem;
            font-weight: 600;
            padding: 0.15rem 1rem;
            transition: all 0.2s ease-in-out;
            text-decoration: none;

            &:hover {
                background-color: gold;
                color: black;
            }
        }
    }

</style>
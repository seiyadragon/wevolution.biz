import { Container, Navbar, NuxtLink } from '../.nuxt/components';
<template>

    <div class="navbar">
        <Container>
            <NuxtLink to="/" class="logo">
                <img src="/images/LOGO_TRANSPARENT.png" alt="Wevolution.biz logo">
            </NuxtLink>
        </Container>
    </div>

</template>

<style lang="scss" scoped>

    @keyframes spin {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(180deg); }
        100% { transform: rotate(360deg); }
    }

    .navbar {
        position: sticky;
        top: 0;
        width: 100%;
        background: rgb(0,0,0);
        background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
        height: 78px;
        border-bottom: 6px solid gold;
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
    }

    .logo {
        width: 64px;
        height: 64px;

        img {
            width: 64px;
            height: 64px;
            animation: spin 100s linear infinite;
        }
    }

</style>
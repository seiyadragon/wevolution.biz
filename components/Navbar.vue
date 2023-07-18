import { Container, Navbar, NuxtLink, Heading } from '../.nuxt/components';
<template>

    <div class="navbar">
        <Container>
            <div class="navbarInner">
                <NuxtLink to="/" class="logo">
                    <img src="/images/LOGO_TRANSPARENT.png" alt="Wevolution.biz logo">
                    <Heading :level="1" class="banner">Wevolution</Heading>
                </NuxtLink>
                <div class="navbarLinks">
                    <CalendlyButton />
                </div>
            </div>
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
        height: 88px;
        border-bottom: 6px solid gold;
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;

        .navbarInner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;
        }
    }

    .logo {
        display: flex;
        align-items: center;
        text-decoration: none;

        img {
            width: 88px;
            height: 88px;
            animation: spin 100s linear infinite;
        }

        .banner {
            color: white;
            margin-left: 16px;
            text-decoration: none;
            font-size: 2em;
        }
    }

</style>
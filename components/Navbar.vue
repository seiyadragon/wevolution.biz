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
                    <NuxtLink to="/learning" class="navbarLink">Learning</NuxtLink>
                    <CalendlyButton :smallButton="true" />
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
        width: 100%;
        background: rgb(0,0,0);
        background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
        border-bottom: 6px solid gold;
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        height: 88px;

        .navbarInner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;

            .navbarLinks {
                display: flex;
                align-items: center;
                column-gap: 16px;

                .navbarLink {
                    color: white;
                    text-decoration: none;
                    font-size: 1.5rem;
                    font-weight: 600;
                    padding: 8px 16px;
                    border-radius: 8px;
                    background-color: rgba(255, 255, 255, 0.1);
                    transition: background-color 0.5s ease;

                    &:hover {
                        background-color: rgba(255, 255, 255, 0.2);
                    }

                    @media screen and (min-width: 320px) {
                        font-size: 1rem;
                        padding: 4px 8px;
                    }
                
                    @media screen and (min-width: 568px) {
                        font-size: 1.5rem;
                        padding: 8px 16px;
                    }   
                
                    @media screen and (min-width: 768px) {
                        font-size: 1.5rem;
                        padding: 8px 16px;
                    }
                
                    @media screen and (min-width: 1900px) {
                        font-size: 2rem;
                        padding: 8px 16px;
                    }
                }
            }
        }

        @media screen and (min-width: 320px) {
            height: 66px;
        }
    
        @media screen and (min-width: 568px) {
            height: 66px;
        }   
    
        @media screen and (min-width: 768px) {
            height: 88px;
        }
    
        @media screen and (min-width: 1900px) {
            height: 88px;
        }
    }

    .logo {
        display: flex;
        align-items: center;
        text-decoration: none;
        width: 25%;

        img {
            animation: spin 100s linear infinite;

            @media screen and (min-width: 320px) {
                height: 44px;
                width: 44px;
            }
        
            @media screen and (min-width: 568px) {
                height: 66px;
                width: 66px;
            }   
        
            @media screen and (min-width: 768px) {
                height: 88px;
                width: 88px;
            }
        
            @media screen and (min-width: 1900px) {
                height: 88px;
                width: 88px;
            }
        }

        .banner {
            color: white;
            margin-left: 16px;
            text-decoration: none;

            @media screen and (min-width: 320px) {
                font-size: 1rem;
                visibility: hidden;
            }
        
            @media screen and (min-width: 568px) {
                font-size: 1.5rem;
                visibility: hidden;
            }   
        
            @media screen and (min-width: 768px) {
                font-size: 1.5rem;
                visibility: visible;
            }
        
            @media screen and (min-width: 1900px) {
                font-size: 2rem;
                visibility: visible;
            }
        }
    }

</style>
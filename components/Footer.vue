<template>

    <div class="footer">
        <Container>
            <div class="footerContent">
                <div class="footerSection">
                    <h4>Contact</h4>
                    <div class="footerContact">
                        <Icon name="logos:zoom" size="64px"/>
                        Zoom:
                        <Text>
                            <NuxtLink to="/calendly" class="footerLink">Book a call</NuxtLink>
                        </Text>
                    </div>
                    <div class="footerContact">
                        <Icon name="logos:google-gmail" size="32px"/>
                        Email:
                        <Text>arlenmolina101@gmail.com</Text>
                    </div>
                    <div class="footerContact">
                        <Icon name="logos:telegram" size="32px"/>
                        Telegram:
                        <Text>@arlenmolina101</Text>
                    </div>
                </div>
                <div class="footerSection">
                    <h4>Social</h4>
                    <div class="footerContact">
                        <Icon name="logos:twitter" size="32px"/>
                        Twitter:
                        <Text>
                            <NuxtLink to="https://twitter.com/arlenmolina101" class="footerLink">Twitter</NuxtLink>
                        </Text>
                    </div>
                    <div class="footerContact">
                        <Icon name="logos:instagram" size="64px"/>
                        Instagram:
                        <Text>
                            <NuxtLink to="https://www.instagram.com/arlenmolina101/" class="footerLink">Instagram</NuxtLink>
                        </Text>
                    </div>
                    <div class="footerContact">
                        <Icon name="logos:linkedin" size="64px"/>
                        LinkedIn:
                        <Text>
                            <NuxtLink to="https://www.linkedin.com/in/arlen-molina-423159183/" class="footerLink">LinkedIn</NuxtLink>
                        </Text>
                    </div>
                </div>
                <div class="footerSection">
                    <h4>Links</h4>
                </div>
            </div>
        </Container>
        <div class="copyrightSection">
            <p class="copyright">© 2023 Arlen Molina</p>
            <div class="line"></div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

    .footer {
        background-color: transparent;
        width: 100%;
        margin-top: 64px;
        height: 100%;

        .footerContent {
            background-color: transparent;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            height: 100%;
            //flex-wrap: wrap;

            @media screen and (min-width: 320px) {
                flex-direction: column;
            }
        
            @media screen and (min-width: 568px) {
                flex-direction: column;
            }   
        
            @media screen and (min-width: 768px) {
                flex-direction: row;
            }
        
            @media screen and (min-width: 1900px) {
                flex-direction: row;
            }

            .footerSection {
                background-color: transparent;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                height: 100%;
                text-align: left;

                h4 {
                    background-color: transparent;
                    color: white;
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-bottom: 32px;
                }

                .footerContact {
                    background-color: transparent;
                    width: 100%;
                    margin-bottom: 8px;
                    margin-top: 8px;

                    svg {
                        background-color: transparent;
                        color: white;
                    }

                    p {
                        background-color: transparent;
                        color: white;
                        margin-left: 8px;
                    }

                    .footerLink {
                        background-color: transparent;
                        color: white;
                        font-size: 1.25rem;
                        font-weight: 600;
                        margin-bottom: 8px;
                        text-decoration: none;
                        transition: all 0.2s ease-in-out;
    
                        &:hover {
                            color: gold;
                        }
                    }
                }
            }
        }

        .copyrightSection{
            background-color: transparent;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            margin-top: 128px;
            margin-bottom: 64px;
            
            .line {
                background-color: white;
                width: 100%;
                height: 6px;
                margin-top: -15px;
            }
    
            .copyright {
                background-color: #ff6539;
                font-size: 1.25rem;
                font-weight: 600;
                z-index: 1000;
                width: 15%;
                text-align: center;

                @media screen and (min-width: 320px) {
                    width: 80%;
                }
            
                @media screen and (min-width: 568px) {
                    width: 60%;
                }   
            
                @media screen and (min-width: 768px) {
                    width: 50%;
                }
            
                @media screen and (min-width: 1900px) {
                    width: 15%;
                }
            }


        }

    }

</style>
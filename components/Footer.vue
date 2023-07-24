<template>

    <div class="footer">
        <Container>
            <div class="footerContent" data-aos="zoom-in-bottom" data-aos-delay="50" data-aos-easing="ease-in-out" data-aos-duration="1500">
                <div class="copyrightSection">
                    <p class="copyright">© 2023 Arlen Molina</p>
                    <div class="line"></div>
                </div>
                <div class="footerInner">
                    <NuxtLink class="footerLink" to="https://twitter.com/@arlenmolina101">
                        <Icon name="fa6-brands:twitter" size="64px"/>
                    </NuxtLink>
                    <NuxtLink class="footerLink" to="https://instagram.com/arlenmolina101">
                        <Icon name="fa6-brands:instagram" size="64px"/>
                    </NuxtLink>
                    <NuxtLink class="footerLink" to="https://www.linkedin.com/in/arlen-molina-423159183/">
                        <Icon name="fa6-brands:linkedin" size="64px"/>
                    </NuxtLink>
                    <NuxtLink class="footerLink" to="https://t.me/@arlenmolina101">
                        <Icon name="fa6-brands:telegram" size="64px"/>
                    </NuxtLink>
                </div>
            </div>
        </Container>
    </div>

</template>

<style lang="scss" scoped>

    .footer {
        background-color: transparent;
        width: 100%;
        margin-top: 64px;
        height: 100%;
        margin-bottom: 64px;
        
        .footerContent {
            background-color: transparent;
            width: 100%;
            height: 100%;
            border: solid 3px gold;
            border-radius: 8px;
            padding-top: 32px;
            padding-bottom: 32px;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);

            .footerInner {
                background-color: transparent;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                height: 100%;
                margin-top: 128px;
                margin-bottom: 64px;

                .footerLink {
                    background-color: transparent;
                    text-decoration: none;
                    color: gold;
                    transition: all 0.3s ease-in-out;
                    border-radius: 8px;
                    padding: 8px;
                    margin: 8px;
                    border: solid 3px gold;
                    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);

                    &:hover {
                        background-color: gold;
                        color: black;
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
            margin-top: 8px;
            margin-bottom: 8px;
            
            .line {
                background-color: gold;
                width: 100%;
                height: 3px;
                margin-top: -15px;
                border-radius: 100%;
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
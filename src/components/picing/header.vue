<template>
    <div class="container text-[#282938]">

        <div class="flex flex-col items-center justify-center">
            <div class="text-center max-w-[562px] w-full">

                <h1 class="font-semibold mt-[128px] mb-[16px] text-[48px] leading-[64px]">Our Pricing Plans</h1>
                <p class="opacity-[70%]">When you’re ready to go beyond prototyping in Figma, Webflow is ready to help
                    you bring your designs to life — without coding them.</p>
            </div>
        </div>


        <div>
            <div class="my-16 relative" >
                <img v-if="ellipse" :src="card.ellipse" alt="" class="absolute">
                <div :class="`bg-[${card.bg}]`" class="pt-16 pl-12 rounded-md max-w-[406px]">
                    <div class="flex items-center">
                        <h1 class="font-semibold text-white mr-2 text-[38px] leading-[56px]">$399</h1>
                        <p class="text-[16px] leading-7 text-[#FCD980]">Multi Design</p>
                    </div>
                    <p class="opacity-[70%] font-medium twxt-[16px] leading-7 text-white mt-2 w-72">
                        When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.
                    </p>
                    <div class="mt-14 pb-[79px]">
                        <div class="flex mb-6">
                            <img :src=card.img alt="" class="min-w-[26px]">
                            <h1 class="ml-2 text-[16px] leading-7 text-white">
                                {{ card.text1 }}
                            </h1>
                        </div>
                        <div class="flex mb-6">
                            <img :src=card.img alt="" class="min-w-[26px]">
                            <h1 class="ml-2 text-[16px] leading-7 text-white">
                                {{ card.text2 }}
                            </h1>
                        </div>
                        <div class="flex mb-6">
                            <img :src=card.img alt="" class="min-w-[26px]">
                            <h1 class="ml-2 text-[16px] leading-7 text-white">
                                {{ card.text3 }}
                            </h1>
                        </div>
                        <div class="flex mb-6">
                            <img :src=card.img alt="" class="min-w-[26px]">
                            <h1 class="ml-2 text-[16px] leading-7 text-white">
                                {{ card.text4 }}
                            </h1>
                        </div>
                        <div class="flex mb-6">
                            <img :src=card.img alt="" class="min-w-[26px]">
    
                            <h1 class="ml-2 text-[16px] leading-7 text-white">
                                {{ card.text5 }}
                            </h1>
                        </div>
                    </div>
    
                    <button class="ml-[40px] mb-16 px-[78px] py-4 bg-[#FCD980] rounded-[41px]">{{ card.button }}</button>
    
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from "vue";
const card = ref([
    {
        bg: '#1C1E53',
        img: '/public/img/Pointer.png',
        ellipse: '/public/img/Ellipse.png',
        button: 'Get started',
        text1: 'All limited linksv',
        text2: 'Own analytics platform',
        text3: 'Chat support',
        text4: 'Optimize hashtags',
        text5: 'Unlimited users',
        text6: 'Assist and Help',
    },
    {
        bg: '#1C1E53',
        img: '/public/img/Pointer.png',
        ellipse: '/public/img/Ellipse.png',
        button: 'Get started',
        text1: 'All limited linksv',
        text2: 'Own analytics platform',
        text3: 'Chat support',
        text4: 'Optimize hashtags',
        text5: 'Unlimited users',
        text6: 'Assist and Help',
    },
    {
        bg: '#1C1E53',
        img: '/public/img/Pointer.png',
        ellipse: '/public/img/Ellipse.png',
        button: 'Get started',
        text1: 'All limited linksv',
        text2: 'Own analytics platform',
        text3: 'Chat support',
        text4: 'Optimize hashtags',
        text5: 'Unlimited users',
        text6: 'Assist and Help',
    }

]
)

</script>

<style lang="scss" scoped></style>
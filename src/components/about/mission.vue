<template>
    <div class="bg-[#EEF4FA] text-[#282938]">
        <div class="container py-[128px]">

            <div class="flex  justify-between mb-24">
                <div class="my-14 max-w-[623px] w-full">
                    <h3 class=" font-medium text-[16px] leading-7">{{ OurMission.topTitle }}</h3>
                    <h1 class="my-4 font-semibold text-[38px] leading-[56px]">{{ OurMission.title }}</h1>
                    <p class="opacity-[70%] text-[16px] leading-7">{{ OurMission.text }}</p>
                </div>
                <div>
                    <img src="../../../public/image/mission-Img.png" alt="">
                </div>
            </div>
             
            <div class="flex  justify-between">
                <div>
                    <img src="../../../public/image/mission-Img1.png" alt="">
                </div>
                <div class="my-14 max-w-[623px] w-full">
                    <h3 class=" font-medium text-[16px] leading-7">{{ OurMission.topTitle2 }}</h3>
                    <h1 class="my-4 font-semibold text-[38px] leading-[56px]">{{ OurMission.title2 }}</h1>
                    <p class="opacity-[70%] text-[16px] leading-7">{{ OurMission.text }}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const OurMission = ref(
    {
        topTitle:'Our Mission',
        topTitle2:'Our Vision',
        title:'Inspire, Innovate, Share',
        title2:'Laser focus',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
)

</script>

<style lang="scss" scoped>

</style>
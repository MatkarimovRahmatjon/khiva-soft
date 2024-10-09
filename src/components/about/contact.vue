<template>
    <div>
        <div class="container text-[#282938] mt-[128px]">
            <div class="bg-[#F4F5F5] flex justify-between px-[80px]">
                <div class="max-w-[515px] w-full">
                    <h1 class="font-medium text-[16px] leading-7 mt-20">{{ content.WhoWeAre }}</h1>
                    <h1 class="font-semibold text-[38px] leading-[56px]">{{ content.title }}</h1>
                    <p class="text-[16px] leading-7 opacity-[70%]">{{ content.text }}</p>
                </div>
                <div class="max-w-[515px] w-full mb-20">
                    <h1 class="font-semibold text-[38px] leading-[56px] mt-[112px]">{{ content.title2 }}</h1>
                    <p class="text-[16px] leading-7 opacity-[70%   ]">{{ content.text }}</p>
                </div>
            </div>
            <img src="../../../public/image/Contact-img.png" alt="">

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const content = ref(
    {
        WhoWeAre:'Who we are',
        title:'Goal focussed',
        title2:'Continuous improvement',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
)

</script>

<style lang="scss" scoped>

</style>
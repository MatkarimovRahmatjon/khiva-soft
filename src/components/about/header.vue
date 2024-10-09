<template>
    <div>
        <div class="container text-[#282938] flex justify-between mt-32 ">
            <div class="w-[595px] h-[303px] ">
                <h1 class="text-[18px] leading-8 ">{{ header.About }}</h1>
                <h1 class="font-semibold text-[54px] leading-[74px]">{{ header.title }}</h1>
                <p class="opacity-[70%] text-[16px] leading-7 text-justify">{{ header.text }}</p>
            </div>
            <div>
                <img src="../../../public/image/header-img.png" alt="">
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from "vue";

const header = ref(
    {
        About:'About us',
        title:'Our designs solve problems',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    }
)

</script>

<style lang="scss" scoped>

</style>
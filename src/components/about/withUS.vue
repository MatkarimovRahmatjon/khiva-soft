<template>
    <div class="container text-[#282938]">
        <div class="flex justify-center">
            <h1 class="text-center font-semibold text-[48px] leading-[64px] w-[630px] mt-[128px] mb-[48px]">{{ qwerty.h1 }}</h1>
        </div>

        <div class="flex justify-between gap-x-8 mb-[48px]">
            <div v-for="item, index of qwe" :key="index" class="p-[50px] bg-[#F4F6FC] ">
                <img :src="item.img" alt="" class="mb-[26px]">
                <h class="text-[24px] leading-9 mb-3">{{item.title}}</h>
                <p class="opacity-[70%] text-[16px leading-7] w-[325px]">{{item.text}}</p>
            </div>
        </div>

        <div class="flex justify-between items-center mb-[128px]">
            <div>
                <h1 class="font-semibold text-[38px] leading-[56px]">{{ qwerty.subscribe }}</h1>
                <p class="opacity-[70%]">{{ qwerty.Text2 }}</p>
            </div>
            <div class="flex gap-x-[60px] max-h-[32px] h-full">
                <img src="../../../public/image/icon/Logo 1.png" alt="" >
                <img src="../../../public/image/icon/Logo 2.png" alt="" >
                <img src="../../../public/image/icon/Logo 3.png" alt="" >
                <img src="../../../public/image/icon/Logo 4.png" alt="" >
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from "vue";

const qwerty = ref (
    {
        h1:'The benefits of working with us',
        title:'Customize with ease',
        title2:'Perfectly Responsive',
        title3:'Friendly Support',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
        subscribe:'100.000+',
        Text2:'Finsweet Users'
    }
)
const qwe =ref ([
    {
        img:'../../../public/image/icon/card1.png',
        title:'Customize with ease',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
    },
    {
        img:'../../../public/image/icon/card2.png',
        title:'Perfectly Responsive',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
    },
    {
        img:'../../../public/image/icon/card3.png',
        title:'Friendly Support',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
    },
])

</script>

<style lang="scss" scoped>

</style>
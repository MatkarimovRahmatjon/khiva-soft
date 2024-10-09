<template>
    <div class="bg-[#1C1E53] text-white">
        <div class="container">
            <div class=" flex ">
                <div class=" max-w-[517px] w-full">
                    <h1 class="font-medium pt-[120px] text-[32px] leading-7">{{ foter.title }}</h1>
                    <p class="opacity-[80%] font-medium text-[32px] mt-[12px] mb-[58px] leading-7">{{ foter.text }}</p>
                    <div class="flex  bg-[#FCD980] text-black py-4 pl-9">
                        <div>
                            <h1>{{ foter.footerText }}</h1>
                            <p>{{ foter.email }}</p>
                        </div>
                        <div class="ml-9">
                            <h1>{{ foter.footerText1 }}</h1>
                            <p>{{ foter.phone }}</p>
                        </div>
                    </div>
                </div>
                <div class="ml-[142px] pt-[80px]">
                    <h1 class="font-semibold text-[48px] leading-[64px]">{{ content.title }}</h1>
                    <h1 class="opacity-[80%] text-[16px] leading-7 max-w-[399px] w-full">{{ content.text }}</h1>
                    <div class="flex gap-7">
                        <a href="#!">
                            <img src="../../public/image/facebook.png" alt="">
                        </a>
                        <a href="#!">
                            <img src="../../public/image/twiter.png" alt="">
                        </a>
                        <a href="#!">
                            <img src="../../public/image/insta.png" alt="">
                        </a>
                        <a href="#!">
                            <img src="../../public/image/likedn.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="py-4">
        <div class="container flex items-center justify-between">
            <RouterLink to="/" class=" text-[16px] font-medium leading-7">Copyright 2022, khivasoft.uz</RouterLink>
            <div class=" flex gap-x-7">
                <RouterLink class="py-5 " :to="item.link" v-for="item, index of links" :key="index">{{
                    item.name }}</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const foter = ref(
    {
        title: 'Khiva Soft',
        text: 'Мы всегда открыты для обсуждения вашего проекта и улучшения вашего присутствия в Интернете.',
        footerText: 'Напишите по адресу',
        footerText1: 'Позвоните нам',
        email: 'khivasoft@gmail.com',
        phone: '+998 91 913 58 56'
    }
)
const content = ref(
    {
        title: 'Давай поговорим!',
        text: 'Мы всегда открыты для обсуждения вашего проекта, улучшения вашего присутствия в Интернете и помощи в решении ваших задач по дизайну UX/UI.',
    }
)
const links = ref([
    { link: '/', name: 'Home' },
    { link: '/about', name: 'О нас' },
    { link: '/features', name: 'особенности' },
    { link: '/pricing', name: 'Цены' },
    { link: '/', name: 'FAQ' },
    { link: '/', name: 'Blog' },
])
</script>

<style lang="scss" scoped></style>
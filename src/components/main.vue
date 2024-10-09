<template>
    <div class="pt-[123px] pb-[267px] bg-[#F4F6FC]">
        <div class="container flex justify-between">
            <div class="max-w-[405px] w-full">
                <h1 class="text-[#282938] font-semibold text-[32px] leading-[64px]  ">Наш подход к веб-разработке</h1>
                <p class="text-[18px] leading-7">На каждом этапе мы уделяем приоритетное внимание открытому общению,
                    вниманию к деталям и
                    достижению совершенства. Ваш успех – наша миссия.</p>
                <div class="flex items-center">
                    <a href="#!" class="text-[#2405F2] mr-[54px]">Свяжись с нами</a>
                    <a href="#!"><img src="../../public/img/Arrow 2.svg" alt=""></a>
                </div>
            </div>
            <div class="max-w-[656px] w-full flex flex-wrap">

                <div v-for="item, index of obj" :key="index" class="mb-5">
                    <div class="max-w-[328px] w-full px-7">
                        <img :src="item.img" alt="">
                        <h1 class="text-[32px] leading-10 font-medium text-[#282938]">{{ item.title }}</h1>
                        <p class="text-[16px leading-7] text-[#282938]">{{ item.text }}</p>
                    </div>
                </div>
                <div v-for="item, index of obj" :key="index">
                    <div class="max-w-[328px] w-full px-7">
                        <img :src="item.img" alt="">
                        <h1 class="text-[32px] leading-10 font-medium text-[#282938]">{{ item.title }}</h1>
                        <p class="text-[16px leading-7] text-[#282938]">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const obj = ref([
    {
        img: '../img/pointer.svg',
        title: 'Стратегия',
        text: 'Наши специалисты кодируют, оптимизируют и тестируют ваш сайт.'
    },
    {
        img: '../img/pointer.svg',
        title: 'Стратегия',
        text: 'Наши специалисты кодируют, оптимизируют и тестируют ваш сайт.'
    },

])

</script>

<style lang="scss" scoped></style>
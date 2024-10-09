<template>
    <div class="container text-[#282938]">
        <h1 class=" mb-12 mt-32 text-center font-semibold text-[48px] leading-[64px]">{{ qwe.title }}</h1>
        <div class="flex justify-between mb-32">
            <div v-for="item, index of card" :key="index">
                <img :src="item.img" alt="">
                <h1 class="font-medium text-[24px] leading-9 mt-8">{{ item.title }}</h1>
                <p class="text-[16px] leading-7 opacity-[70%] w-[250px] mt-2">{{ item.text }}</p>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from "vue";
const qwe = ref(
    {
        title:'The process we follow'
    }
)
const card = ref([
    {
        img:'../../../public/image/card-icon.png',
        title:'Planning',
        text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    },
    {
        img:'../../../public/image/card-icon.png',
        title:'Conception',
        text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    },
    {
        img:'../../../public/image/card-icon.png',
        title:'Design',
        text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    },
    {
        img:'../../../public/image/card-icon.png',
        title:'Development',
        text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    },
])

</script>

<style lang="scss" scoped>

</style>
<template>
    <div class=" bg-[#F4F6FC]">

        <div class="container text-[#282938] bg-[#F4F6FC] pb-[128px]">
            <h1 class="text-center font-semibold text-[48px] leading-[64px] pt-[148px] pb-[48px]">Meet our team</h1>
            <div class="flex justify-between">
                <div v-for="item, index of card" :key="index"
                    class="flex flex-col justify-center items-center bg-white py-[48px] px-[64px]">
                    <img :src="item.img" alt="">
                    <h1 class="mt-[30px] mb-[5px] text-[24px] leading-9 ">{{ item.title }}</h1>
                    <p>{{ item.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";


const card = ref([
    {
        img: '/public/image/icon/img1.png',
        title: 'John Smith',
        text: 'CEO'
    },
    {
        img: '/public/image/icon/img2.png',
        title: 'Simon Adams',
        text: 'CTO'
    },
    {
        img: '/public/image/icon/img3.png',
        title: 'Paul Jones',
        text: 'Design Lead '
    },
    {
        img: '/public/image/icon/img4.png',
        title: 'Sara Hardin',
        text: 'Project Manager'
    },
])

</script>

<style lang="scss" scoped></style>
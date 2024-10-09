<template>
    <div>
        <div class="container">
            <div class="mb-[64px]">
                <div class="flex justify-between mt-32 mb-16">

                    <h1 class="font-semibold text-[48px] leading-[64px]">{{ card.title }}</h1>

                    <div class="flex items-center">
                        <a href="#!" class="text-[#282938] mr-[7px]">{{ card.text }}</a>
                        <a href="#!"><img src="../../public/image/Arrow 1.png" alt="" ></a>
                    </div>

                </div>
                <div class="flex justify-between mt-2">
                    <div class="max-w-[840px] w-full relative">
                        <img :src="imgObj.img1" alt="">
                        <div class="pt-[312px] pl-[48px] max-w-sm w-full max-h-[600px] h-full top-0 left-0 bg-[linear-gradient(329.39deg,_#1C1E53_-10.96%,_rgba(28,_30,_83,_0.42)_103.96%)] absolute">
                            <h1 class="text-white font-semibold text-[24px] leading-9 ">{{ card.cardtitle }}</h1>
                            <p class=" mt-[18px] mb-3 max-w-[293px] w-full font-medium text-[16px] left-6 text-[#FFFFFF] opacity-[80%]">{{ card.cardtext }}</p>
                            <div class="flex items-center">
                                <a href="#!" class="text-[#FCD980] mr-1">{{ card.cardlink }}</a>
                                <a href="#!"><img src="../../public/image/Arrow 2.png" alt=""></a>
                            </div>
                        </div>
                    </div>
                    <div class="max-w-[410px] w-full">
                        <div class="mb-8"><img :src="imgObj.img2" alt=""></div>
                        <div class=""><img :src="imgObj.img3" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const card = ref(
    {
        text: 'Посмотреть больше',
        title: 'Текущие проекты',
        linkLogo: '../../image/link.png',
        cardtitle: 'Ecodonate ',
        cardtext: '«EcoDonate — это ваш путь к более зеленому будущему. Присоединяйтесь к нам в посадке деревьев и поддержке экологической устойчивости в Узбекистане»',
        cardlink: 'Посмотреть проект',
    },

)

const imgObj = ref(
    {
        img1: '../../img/Card.png',
        img2: '../../img/caard2.png',
        img3: '../../img/Card3.png',
    }
)
</script>

<style lang="scss" scoped></style>
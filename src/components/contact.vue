<template>
    <div class="container ">
        <div class="mt-[1299px] mb-[993px]">
            <div class="flex">
                <div class="relative w-2/4 h-[691px]">
                    <img src="../../public/image/Convert.png" alt="" class="absolute w-full h-full">
                    <img src="../../public/image/shadow.png" alt="" class="absolute w-full h-full">

                    <div class="absolute w-full h-full max-w-[464px]  ml-[96px]">
                        <h1 class="pt-[96px] font-semibold text-[32px] leading-[74px] text-white">{{ content.title }}
                        </h1>
                        <p class=" font-medium text-[16px] leading-7 text-white mt-[110px] pb-[196px]">{{ content.Text
                            }}</p>
                    </div>
                </div>

                <div class="px-[96px] w-2/4 bg-[#1C1E53]">
                    <h1 class="font-medium text-[32px] leading-[48px] text-white mt-4">{{ contact.title }}</h1>
                    <h1 class="font-medium text-[16px] leading-7 text-[#F4F6FC]">{{ contact.text }}</h1>

                    <input type="text" placeholder="Ваше имя"
                        class="w-[432px] bg-[#1C1E53] mt-5 text-[#F4F6FC] opacity-[50%] pl-[32px] mb-[16px] rounded-lg border-[1.5px] py-[18px]">
                    <input type="email" placeholder="Email"
                        class="w-[432px] bg-[#1C1E53] text-[#F4F6FC] opacity-[50%] pl-[32px] mb-[16px] rounded-lg border-[1.5px] py-[18px]">
                    <input type="text" placeholder="Ваш запрос..."
                        class="w-[432px] bg-[#1C1E53] text-[#F4F6FC] opacity-[50%] pl-[32px] rounded-lg border-[1.5px] py-[18px]"><br>
                    <button class="bg-[#FCD980] w-[432px] px-[136px] py-4 rounded-[41px] my-10">Отправить запрос</button>

                        <a href="#!" class="text-white gap-10 flex justify-center items-center">
                            Свяжись с нами <Icon icon="pajamas:arrow-right" />
                        </a>

                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue'
const content = ref(
    {
        title: 'Создание веб-сайтов для ранних стартапов',
        Text: 'Наш подход характеризуется открытым общением, вниманием к деталям и неустанным стремлением к совершенству. Мы не просто ваш партнер по веб-разработке; мы ваши сторонники цифрового успеха. Выбирая Khiva Soft, вы выбираете надежного союзника в своем онлайн-путешествии.'
    }
)

const contact = ref(
    {
        title: 'Отправить запрос',
        text: 'Наша команда здесь, чтобы помочь. Если вам нужна дополнительная информация, ценовое предложение или вы готовы начать свой проект, мы на расстоянии одного сообщения. Свяжитесь с нами, заполнив форму ниже, и мы оперативно ответим вам, чтобы помочь вам всем, чем сможем».',
        button: 'Отправить запрос',
        link: 'Свяжись с нами'
    }
)

</script>

<style lang="scss" scoped></style>
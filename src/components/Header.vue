<template>
    <header class="bg-[#1C1E53]">
        <div class="container flex py-[125px] gap-x-16">
            <div class="text-white font-['Poppins']">
                <h1 class="text-[54px]">Создание веб-сайтов для ранних стартапов</h1>
                <p class="opacity-[70%]">
                    Наша цель в Khiva Soft — расширять возможности стартапов и бизнеса путем создания исключительных
                    веб-сайтов, способствующих успеху.
                </p>
                <div class="flex items-center gap-x-10 mt-5">
                    <RouterLink to="/" class="bg-[#FCD980] py-4  px-4 rounded-full text-black font-semibold">Посмотреть
                        нашу
                        работу</RouterLink>
                    <RouterLink to="/">
                        Посмотреть
                        цены
                        <Icon icon="pajamas:arrow-right" />
                    </RouterLink>
                </div>
            </div>
            <div>
                <img src="/image/Illustration.svg" alt="">
            </div>
        </div>
        <div>
        </div>
    </header>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style lang="scss" scoped></style>
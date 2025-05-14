<template>
    <header class="bg-[#1C1E53]">
        <div class="container flex py-[125px] gap-x-16">
            <div class="text-white font-['Poppins']">
                <h1 class="text-[54px]">All the features you need</h1>
                <p class="opacity-[70%] my-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <RouterLink to="/pricing" class="bg-[#FCD980] py-4 max-w-48 block px-12 rounded-full text-black font-normal">View Pricing</RouterLink>

            </div>
            <div>
                <img src="/image/Feature Hero Illustration.svg" alt="">
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
<template>
    <div>
        <nav class="bg-[#1C1E53] py-4">
            <div class="container flex items-center justify-between">
                <RouterLink to="/" class="text-white text-3xl">Khiva Soft</RouterLink>
                <div class="text-white flex gap-x-7">
                    <RouterLink class="py-5 text-linkColor" :to="item.link" v-for="item, index of links" :key="index">{{
                        item.name }}</RouterLink>
                    <button class="border rounded-full py-4 px-12 border-linkColor">Contact us</button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const links = ref([
    { link: '/', name: 'Home' },
    { link: '/about', name: 'About' },
    { link: '/features', name: 'Features' },
    { link: '/pricing', name: 'Pricing' },
    { link: '/', name: 'FAQ' },
    { link: '/', name: 'Blog' },
])
</script>

<style lang="scss" scoped></style>
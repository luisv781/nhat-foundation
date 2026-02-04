<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <nav>
        <div><RouterLink className="text-4xl font-black" to="/">The Nhat Foundation</RouterLink></div>

        <div id="links">
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/donate">Donate</RouterLink>
        </div>
    </nav>
</template>

<style scoped>
    @reference '../style.css';

    nav {
        @apply flex sticky top-0 left-0 p-4 w-full z-10 justify-between items-center
            text-emerald-100 text-2xl font-bold bg-emerald-950;
    }
    nav #links {
        @apply flex gap-8
    }
</style>
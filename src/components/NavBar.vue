<template>
    <nav>
        <div><h1 className="text-4xl font-black">The Nhat Foundation</h1></div>

        <div id="links">
            <a href="#about">About</a>
            <a href="#donate">Donate</a>
        </div>
    </nav>
</template>

<style scoped>
    @reference '../style.css';

    nav {
        @apply flex sticky top-0 left-0 p-4 justify-between items-center w-full
            text-emerald-100 text-2xl font-bold bg-emerald-950;
    }
    nav #links {
        @apply flex gap-8
    }
</style>
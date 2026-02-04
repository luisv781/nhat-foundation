<template>
  <div>
    <img className="object-cover w-full" src="/img/header.jpg">
    <h1>The Nhat Foundation</h1>
  </div>
</template>

<style scoped>
@reference '../style.css';

div {
    @apply relative m-0 p-0 w-full h-dvh overflow-clip filter-[brightness(80%)];
}

h1 {
    @apply absolute top-1/2 left-1/2 -translate-1/2
        text-9xl font-black
}
</style>
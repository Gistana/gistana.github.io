<script setup>
import { Vue3Lottie } from "vue3-lottie";
import { about } from "../../data";
</script>
<template>
  <div
    class="container flex flex-auto flex-col justify-center gap-y-8 md:w-9/12 lg:w-auto lg:gap-y-0"
  >
    <h3 class="text-center text-3xl font-bold lg:text-left">Tentang</h3>
    <div class="flex flex-col items-center gap-x-32 gap-y-16 lg:flex-row">
      <p class="flex-[2] text-lg">
        WebGIS adalah sebuah website peta interaktif yang dilengkapi dengan
        informasi terkini tentang jalur evakuasi dan titik kumpul yang
        strategis. Dengan navigasi yang intuitif sehinnga dapat dengan mudah
        menemukan rute tercepat dan teraman.
      </p>

      <Vue3Lottie class="hidden w-1/2 flex-1 md:block" :animationData="about" />
    </div>
  </div>
</template>

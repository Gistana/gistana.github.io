<script setup>
import { ref } from "vue";
const menuToggle = ref(false);
</script>

<template>
  <input
    type="checkbox"
    id="menu-toggle"
    class="peer hidden"
    ref="menuToggle"
  />

  <label
    class="fixed right-4 top-4 z-20 flex h-8 w-8 cursor-pointer flex-col justify-center peer-checked:first:*:rotate-45 peer-checked:last:*:-rotate-45 peer-checked:odd:*:translate-y-0 peer-checked:even:*:scale-x-0 md:hidden"
    for="menu-toggle"
  >
    <span
      class="absolute block h-1 w-full -translate-y-2 rounded-full bg-yellow-600 transition-transform"
    ></span>
    <span
      class="absolute block h-1 w-full rounded-full bg-yellow-600 transition-transform"
    ></span>
    <span
      class="absolute block h-1 w-full translate-y-2 rounded-full bg-yellow-600 transition-transform"
    ></span>
  </label>

  <nav
    class="md:shadow-default pointer-events-none fixed left-0 right-0 top-0 z-10 h-svh -translate-y-1/3 bg-white py-2 opacity-0 transition duration-300 peer-checked:pointer-events-auto peer-checked:translate-y-0 peer-checked:opacity-100 md:pointer-events-auto md:h-auto md:translate-y-0 md:opacity-100"
  >
    <div
      class="container mx-auto flex h-full flex-col items-center justify-center md:flex-row md:justify-between"
      @click="menuToggle.checked = false"
    >
      <router-link to="/" class="px-2 py-4 text-2xl font-bold">
        Web<span class="text-yellow-600">GIS</span>Destana
      </router-link>
      <ul
        class="flex w-full list-none flex-col items-center justify-center text-3xl font-bold md:h-full md:flex-row md:justify-end md:text-base md:font-normal"
      >
        <slot />
      </ul>
    </div>
  </nav>
</template>

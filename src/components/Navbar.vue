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
    class="fixed right-4 top-4 z-20 flex h-8 w-8 cursor-pointer flex-col justify-center peer-checked:first:*:rotate-45 peer-checked:last:*:-rotate-45 peer-checked:odd:*:translate-y-0 peer-checked:even:*:scale-x-0"
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
    class="sm:shadow-default fixed left-0 right-0 top-0 z-10 h-svh -translate-y-full bg-white py-5 transition peer-checked:translate-y-0"
  >
    <div class="container mx-auto flex h-full items-center justify-between">
      <a href="" class="hidden text-3xl font-bold">
        Web<span class="text-yellow-600">GIS.</span>
      </a>
      <ul
        class="flex h-full w-full list-none flex-col items-center justify-center text-3xl font-bold"
        @click="menuToggle.checked = false"
      >
        <slot />
      </ul>
    </div>
  </nav>
</template>

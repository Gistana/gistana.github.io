<template>
  <nav class="shadow-default fixed left-0 right-0 top-0 z-10 bg-white py-5">
    <div class="container mx-auto flex items-center justify-between">
      <a href="" class="text-3xl font-bold">
        Web<span class="text-yellow-600">GIS.</span>
      </a>
      <ul class="flex list-none">
        <slot />
      </ul>
    </div>
  </nav>
</template>

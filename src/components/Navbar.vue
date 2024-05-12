<template>
  <nav class="shadow-default py-5">
    <div class="container mx-auto flex items-center justify-between">
      <a href="" class="text-3xl font-bold">
        Web<span class="text-yellow-600">GIS.</span>
      </a>
      <ul class="flex list-none gap-10">
        <slot />
      </ul>
    </div>
  </nav>
</template>

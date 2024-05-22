<template>
  <!-- Wrapper -->
  <div class="relative isolate z-10 bg-white">
    <!-- Uncollapsible -->
    <div class="h-full w-[3.25rem] bg-inherit">
      <div class="flex h-28 w-full border-b border-black/25">
        <img
          class="my-auto ms-auto h-10 w-10"
          src="/img/bnpb.png"
          alt="Logo BNPB"
        />
      </div>
    </div>

    <input type="checkbox" id="sidebar-toggle" class="peer hidden" checked />

    <!-- Collapsible -->
    <div
      class="absolute left-full top-0 isolation-auto -z-10 flex h-full w-max -translate-x-[calc(100%-0.75rem)] flex-col bg-inherit transition-transform peer-checked:translate-x-0"
    >
      <div
        class="relative flex h-28 flex-none flex-col justify-center border-b border-black/25 pe-8 ps-4"
      >
        <h1 class="text-xl font-bold">
          Maps Web<span class="text-yellow-600">GIS.</span>
        </h1>
        <p>Jelajahi dan selamatkan!</p>

        <label
          for="sidebar-toggle"
          class="absolute left-full top-full z-40 flex aspect-square w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-yellow-600 text-white"
        >
          <v-icon
            id="chevron-icon"
            class="ms-1 transition-transform"
            name="fa-chevron-right"
            scale="0.8"
          />
        </label>
      </div>

      <div class="flex flex-auto flex-col gap-8 overflow-auto pe-8 ps-4 py-8">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
#sidebar-toggle:checked + div #chevron-icon {
  transform: rotate(180deg);
  margin-inline-start: 0;
}
</style>

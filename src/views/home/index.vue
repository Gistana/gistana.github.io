<script setup>
import { Button } from "@/components/ui/button";
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    class="container flex flex-auto flex-col items-center justify-center lg:flex-row lg:justify-between lg:gap-32"
  >
    <div class="flex flex-col gap-4 lg:flex-[2]">
      <h1 class="text-4xl font-bold">
        Web<span class="text-yellow-600">GIS.</span> Destana
      </h1>
      <p class="text-xl">
        Website Sistem Informasi Geografis Desa Tangguh Bencana
      </p>
      <div class="flex gap-4">
        <Button :as="RouterLink" to="map">Lihat Peta</Button>
        <Button variant="outline">Kontak Darurat</Button>
      </div>
    </div>
    <img
      class="w-4/5 object-contain lg:flex-[3]"
      width="200"
      src="/img/heroimage.png"
      alt=""
    />
  </section>
</template>

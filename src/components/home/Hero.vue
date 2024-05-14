<script setup>
import { Button } from "@/components/ui/button";
</script>

<template>
  <section class="sm:mt-20">
    <div
      class="container flex h-svh flex-col items-center justify-center sm:justify-between sm:gap-32"
    >
      <div class="flex flex-col gap-4 sm:flex-[2]">
        <h1 class="text-4xl font-bold">
          Web<span class="text-yellow-600">GIS.</span> Destana
        </h1>
        <p class="text-xl">
          Website Sistem Informasi Geografis Desa Tangguh Bencana
        </p>
        <div class="flex gap-4">
          <Button>Lihat Peta</Button>
          <Button variant="outline">Kontak Darurat</Button>
        </div>
      </div>
      <img
        class="w-4/5 object-contain sm:flex-[3]"
        width="200"
        src="/img/heroimage.png"
        alt=""
      />
    </div>
  </section>
</template>

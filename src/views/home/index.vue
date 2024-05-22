<script setup>
import { Button } from "@/components/ui/button";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="background flex flex-auto items-center bg-landingcolor">
    <div class="container flex flex-col gap-3">
      <div
        class="relative top-0 isolate flex w-full overflow-x-hidden text-4xl font-medium before:absolute before:-left-10 before:top-0 before:z-10 before:block before:h-full before:w-20 before:bg-gradient-to-l before:from-transparent before:via-landingcolor before:to-landingcolor after:absolute after:-right-10 after:top-0 after:z-10 after:block after:h-full after:w-20 after:bg-gradient-to-r after:from-transparent after:via-landingcolor after:to-landingcolor"
      >
        <div class="animate-marquee whitespace-nowrap py-12">
          <span class="mx-4"
            >Selamat Data di Website Desa Tangguh Bencana Kecamatan Bulawa
            Kabupaten Bone Bolango</span
          >
        </div>

        <div class="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
          <span class="mx-4"
            >Selamat Data di Website Desa Tangguh Bencana Kecamatan Bulawa
            Kabupaten Bone Bolango</span
          >
        </div>
      </div>
      <section
        class="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between lg:gap-32"
      >
        <div
          class="flex flex-col items-center gap-3 lg:flex-[2] lg:items-start"
        >
          <img src="/img/herotop.png" width="150" alt="" />
          <h1 class="text-center text-4xl font-bold">
            Web<span class="text-yellow-600">GIS</span>Destana
          </h1>
          <p class="text-center text-xl lg:text-start">
            Website Sistem Informasi Geografis Desa Tangguh Bencana
          </p>
          <div class="flex gap-4">
            <Button :as="RouterLink" to="map">Lihat Peta</Button>
            <Button
              class="border border-black bg-landingcolor text-black hover:text-white"
              >Nomor Kecamatan</Button
            >
          </div>
        </div>
        <img
          class="w-2/4 object-contain md:h-2/5 lg:w-10 lg:flex-[2]"
          width="200"
          src="/img/heroimage.png"
          alt=""
        />
      </section>
    </div>
  </div>
</template>

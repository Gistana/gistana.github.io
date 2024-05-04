<script setup>
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar.vue";
</script>

<template>
  <Navbar />
  <section>
    <div class="container flex justify-between items-center">
      <div class="flex flex-col gap-4">
        <h1 class="text-3xl font-bold">
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
      <img class="basis-1/2" width="200" src="/img/heroimage.png" alt="" />
    </div>
  </section>
</template>

<style scoped></style>

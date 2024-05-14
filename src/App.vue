<script setup>
import { Button } from "@/components/ui/button";
import { Navbar, NavLink, TeamCard } from "@/components";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
</script>

<template>
  <navbar>
    <nav-link to="#layanan">Layanan</nav-link>
    <nav-link to="#tentang">Tentang</nav-link>
    <nav-link to="#tim">Tim</nav-link>
  </navbar>

  <!-- Hero -->
  <section class="mt-20">
    <div class="container flex items-center justify-between gap-32">
      <div class="flex flex-[2] flex-col gap-4">
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
      <img class="flex-[3]" width="200" src="/img/heroimage.png" alt="" />
    </div>
  </section>

  <!-- Layanan -->
  <section id="layanan" class="mt-16 flex flex-col gap-16">
    <h3 class="text-center text-3xl font-bold">Layanan</h3>
    <div class="container flex gap-32">
      <img class="flex-1" width="200" src="/img/layanan.png" alt="Layanan" />
      <div class="flex flex-1 flex-col gap-4">
        <div
          class="shadow-default flex flex-col gap-2 rounded border border-black/25 px-8 py-4 md:rounded-md lg:rounded-lg"
        >
          <h4 class="text-lg font-bold">Peta Interaktif</h4>
          <p class="text-base">
            Peta interaktif yang dilengkapi dengan informasi terkini tentang
            jalur evakuasi dan titik kumpul yang strategis,tercepat dan teraman.
          </p>
        </div>
        <div
          class="shadow-default flex flex-col gap-2 rounded border border-black/25 px-8 py-4 md:rounded-md lg:rounded-lg"
        >
          <h4 class="text-lg font-bold">Kontak Darurat</h4>
          <p class="text-base">
            Kontak Darurat penting yang bekerjasama dengan lembaga
            penanggulangan bencana dan tim penyelamat lokal untuk keselamatan.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Tentang -->
  <section id="tentang" class="my-32">
    <div class="container flex flex-col gap-8">
      <h3 class="text-3xl font-bold">Tentang</h3>
      <div class="flex items-center gap-32">
        <p class="flex-[3] text-lg">
          Peta interaktif yang dilengkapi dengan informasi terkini tentang jalur
          evakuasi dan titik kumpul yang strategis,tercepat dan teraman.
        </p>
        <img class="flex-1" width="200" src="/img/tentang.png" alt="Layanan" />
      </div>
    </div>
  </section>

  <!-- Tim -->
  <section id="tim" class="my-48">
    <div class="container">
      <h3 class="text-center text-3xl font-bold" @click="onSlideChange">
        Tim Web<span class="text-yellow-600">GIS.</span>
      </h3>
      <swiper
        :slidesPerView="4"
        class="my-16"
        :pagination="{
          dynamicBullets: true,
          clickable: true,
          dynamicMainBullets: 3,
        }"
        :modules="[Pagination]"
      >
        <!-- :loop="true" -->
        <swiper-slide>
          <team-card
            name="Yasdil Lasoma"
            role="Fullstack Dev"
            image="adi.png"
          />
        </swiper-slide>
        <swiper-slide>
          <team-card
            name="Abdul Malik Matoha"
            role="UI/UX & Front End Dev"
            image="malik.png"
            link="https://www.linkedin.com/in/abdul-malik-matoha-8aa454254/"
          />
        </swiper-slide>
        <swiper-slide>
          <team-card
            name="Tri Putra Fauzan H. Radji"
            role="Front End Dev"
            image="fauzan.png"
            link="https://www.linkedin.com/in/tri-putra-fauzan-h-radji-404810257/"
          />
        </swiper-slide>
        <swiper-slide>
          <team-card
            name="Dhani Ardiyanto Syahdila"
            role="Fullstack Dev"
            image="dani.png"
          />
        </swiper-slide>
        <swiper-slide>
          <team-card
            name="Mersita Tamrin"
            role="Copywriter"
            image="malik.png"
          />
        </swiper-slide>
        <swiper-slide>
          <team-card name="Slide 6" role="Front End Dev" image="malik.png" />
        </swiper-slide>
        <swiper-slide>
          <team-card name="Slide 7" role="Front End Dev" image="malik.png" />
        </swiper-slide>
        <swiper-slide>
          <team-card name="Slide 8" role="Front End Dev" image="malik.png" />
        </swiper-slide>
        <swiper-slide>
          <team-card name="Slide 9" role="Front End Dev" image="malik.png" />
        </swiper-slide>
      </swiper>
    </div>
  </section>

  <footer class="border-t border-black py-4">
    <p class="container text-sm">
      Built with &hearts; by
      <a href="https://github.com/gistana" class="text-cyan-800 underline"
        >Gistana Team</a
      >
      &copy; Copyright 2024.
    </p>
  </footer>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding: 8rem;
}
</style>

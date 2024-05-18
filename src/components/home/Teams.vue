<script setup>
import { TeamCard } from "@/components";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Teams from "../../../src/data/teams.json";
</script>

<template>
  <section id="tim" class="my-48">
    <div class="container">
      <h3 class="text-center text-3xl font-bold" @click="onSlideChange">
        Tim Web<span class="text-yellow-600">GIS.</span>
      </h3>
      <swiper
        class="my-16"
        :slidesPerView="1"
        :breakpoints="{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }"
        :loop="true"
        :autoplay="true"
        :pagination="{
          dynamicBullets: true,
          clickable: true,
          dynamicMainBullets: 3,
        }"
        :modules="[Pagination]"
      >
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
            name="Dhani Ardiyanto Syahdila"
            role="Fullstack Dev"
            image="dani.png"
          />
        </swiper-slide>
        <swiper-slide>
          <team-card name="Mersita Tamrin" role="Copywriter" image="sita.png" />
        </swiper-slide>
        <swiper-slide>
          <team-card
            name="Nanda Eka Cahya Utama"
            role="UI/UX Designer"
            image="anan.png"
          />
        </swiper-slide>
        <swiper-slide>
          <team-card
            name="Moh Aqshal Safatullah Ibrahim"
            role="Backend Dev"
            image="aqshal.png"
          />
        </swiper-slide>
        <swiper-slide>
          <team-card
            name="Jessica Thiony Rura Koyansow"
            role="Copywriter"
            image="jes.png"
          />
        </swiper-slide>
        <swiper-slide>
          <team-card
            name="Putra Anshori Arta Amuda"
            role="Copywriter & Marketing"
            image="uta.png"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

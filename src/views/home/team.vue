<script setup>
import { TeamCard } from "@/components";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { team } from "@/data";
</script>

<template>
  <section
    class="container flex flex-auto flex-col items-center justify-center"
  >
    <h3 class="text-center text-3xl font-bold" @click="onSlideChange">
      Tim Web<span class="text-yellow-600">GIS.</span>
    </h3>
    <swiper
      class="my-16 w-full"
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
      <swiper-slide v-for="member in team">
        <team-card
          :key="member.id"
          :name="member.name"
          :role="member.role"
          :image="member.image"
          :link="member.link"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

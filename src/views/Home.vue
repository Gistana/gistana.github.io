<script setup>
import { Hero, Service, About, Teams } from "@/components/home";
import { Navbar, NavLink, Footer } from "@/components";
</script>

<template>
  <navbar>
    <nav-link to="#layanan">Layanan</nav-link>
    <nav-link to="#tentang">Tentang</nav-link>
    <nav-link to="#tim">Tim</nav-link>
  </navbar>

  <Hero />
  <Service />
  <About />
  <Teams />
  <Footer />
</template>

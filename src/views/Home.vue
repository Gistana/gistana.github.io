<script setup>
import { Hero, Service, About, Teams } from "@/components/home";
import { FloatingActionButton, Footer, Navbar, NavLink } from "@/components";
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

  <floating-action-button href="#" icon="fa-arrow-up" />
</template>

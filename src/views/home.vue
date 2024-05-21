<script setup>
import { Footer, Navbar, NavLink } from "@/components";
</script>

<template>
  <navbar>
    <nav-link to="service">Layanan</nav-link>
    <nav-link to="about">Tentang</nav-link>
    <nav-link to="team">Tim</nav-link>
  </navbar>

  <main class="flex min-h-svh flex-col">
    <RouterView />

    <Footer />
  </main>
</template>

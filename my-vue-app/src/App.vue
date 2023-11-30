<script setup lang="ts">
import NavBar from "./components/Navbar/NavBar.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
  <div>
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped></style>

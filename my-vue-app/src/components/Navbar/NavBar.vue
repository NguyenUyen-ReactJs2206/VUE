<template>
  <div>
    <router-link :to="{ name: 'home' }" exact>Home</router-link>
    <router-link :to="{ name: 'about' }" exact>About</router-link>
  </div>
</template>

<script setup></script>

<style>
.router-link-active {
  color: red;
}
</style>

<script setup>
import { RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue'
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <the-navbar />
  <div class="container">
    <!-- <div class="container--glass-boxes bg--gradient-1">
      <img
        class="js-lazy is-cover"
        src="./assets/images/upper-right.png"
        alt="gradient background"
      />
    </div>
    <div
      class="container--glass-boxes bg--gradient-2"
      style="
        transform-origin: 50% 50%;
        transform: translate3d(0px, 0px, 0px) scale(1.4856, 1.48558);
      "
    >
      <img
        class="js-lazy is-cover"
        src="./assets/images/middle-left.png"
        alt="gradient background"
        data-ll-status="loaded"
      />
    </div> -->
    <RouterView />
  </div>
  <the-footer />
</template>

<style scoped></style>

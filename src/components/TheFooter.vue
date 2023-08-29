<template>
  <footer class="primary-footer">
    <router-link to="/" class="primary-logo"> StockMod </router-link>

    <div class="footer-info">© 2023 StockMod. All rights reserved</div>

    <nav class="secondary-nav">
      <router-link to="/terms" class="nav-link">Terms of Service</router-link>
      <router-link to="/privacy" class="nav-link">Privacy Policy</router-link>
    </nav>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

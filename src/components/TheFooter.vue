<template>
  <footer class="primary-footer">
    <router-link to="/" class="primary-logo">
			ModularEX
		</router-link>

		<div class="footer-info">
			© 2023 ModularEX. All rights reserved
		</div>

		<nav class="secondary-nav">
			<router-link to="#" class="nav-link">Terms of Service</router-link>
			<router-link to="#" class="nav-link">Privacy Policy</router-link>
		</nav>

  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>

</style>
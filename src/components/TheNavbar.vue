<template>
  <header class="primary-header">
    <router-link to="/" class="primary-logo">
			StockMod
		</router-link>

		<nav class="primary-nav">
			<router-link to="/" class="nav-link">Trading bots</router-link>
			<router-link to="/about" class="nav-link">About app</router-link>
		</nav>

		<nav class="secondary-nav">
			<router-link to="#" class="nav-link">Profile</router-link>
		</nav>

  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>

</style>
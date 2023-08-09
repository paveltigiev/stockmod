<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
	<the-navbar />
	<div class="container">
		<RouterView />
	</div>
	<the-footer />
</template>

<style scoped>

</style>

<template>
	<div class="primary-header-panel">
		<h1>{{ title }}</h1>
	</div>
</template>

<script setup>
import { ref } from "vue";

const title = ref('EEE')
</script>

<style lang="scss" scoped>

.primary-header-panel {
	border-bottom: 1px solid var(--color-border);	
	h1 {
		margin: 0;
	}
}
</style>
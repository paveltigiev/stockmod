<script setup>
import MarketBotsItem from './MarketBotsItem.vue';
import { useMarketBotsStore } from '../../stores/MarketBotsStore'
import { computed } from 'vue';

const store = useMarketBotsStore()

const marketBots = computed(() => store.marketBots)

</script>

<template>
	<div class="bots-grid">
		<market-bots-item v-for="botItem in marketBots" :key="botItem.id" :botItem="botItem" />
	</div>
</template>

<style lang="scss" scoped>
.bots-grid {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	margin-right: -1px;
	margin-bottom: -1px;
}
</style>

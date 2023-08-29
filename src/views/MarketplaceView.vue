<script setup>
import { computed } from 'vue'
import MarketBotsItem from '../components/marketBots/MarketBotsItem.vue'
import { useMarketBotsStore } from '../stores/MarketBotsStore'

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
  margin: 32px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
}
</style>

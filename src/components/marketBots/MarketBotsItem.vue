<script setup>
defineProps({
  botItem: {
    type: Object,
    required: true
  }
})
const runBot = (id) => console.log(`Copy Bot #${id} 👌`)
</script>

<template>
  <div class="bots-grid-item">
    <div class="bot-header">
      <div class="bot-name">{{ botItem.name }} #{{ botItem.id }}</div>
      <div class="bot-type">DA Long strategy</div>
    </div>
    <div class="bot-metrics roi">
      <div class="bot-metrics-value success-text">{{ botItem.statistics.roi }}%</div>
      <div class="bot-metrics-label">30D ROI</div>
    </div>
    <div class="bot-metrics pnl">
      <div class="bot-metrics-value success-text">{{ botItem.statistics.pnl }}</div>
      <div class="bot-metrics-label">30D PNL</div>
    </div>
    <div class="bot-metrics mdd">
      <div class="bot-metrics-value">{{ botItem.statistics.mdd }}%</div>
      <div class="bot-metrics-label">30D MDD</div>
    </div>
    <div class="bot-metrics winrate">
      <div class="bot-metrics-value">{{ botItem.statistics.win_rate }}%</div>
      <div class="bot-metrics-label">30D Win Rate</div>
    </div>
    <div class="bot-footer">
      <button class="btn btn-primary" @click="runBot(botItem.id)">Run bot</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bots-grid-item {
  padding: 1em;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  display: grid;
  gap: 16px;
  background: transparent;
  transition: all 0.3s ease;

  // &:hover {
  //   transition: all 0.3s ease;
  //   background: #181a1e;
  //   background-image: linear-gradient(180deg, rgba(20, 22, 25, 0.1) 0%, rgba(27, 27, 30, 0.1) 100%);
  //   backdrop-filter: blur(3px);
  // }
}

.bot-header {
  grid-row: span 1;
  grid-column: span 4;

  .bot-name {
    font-size: 1.1em;
    font-weight: bold;
  }
  .bot-type {
    font-size: 0.9em;
    color: var(--color-text-soft);
  }
}

.bot-metrics {
  grid-row: span 1;
  grid-column: span 2;

  .bot-metrics-value {
    font-size: 1.4em;
    line-height: 1em;
    font-weight: 700;
  }
  .bot-metrics-label {
    font-size: 0.8em;
    color: var(--color-text-soft);
  }
}

.bot-footer {
  grid-row: span 1;
  grid-column: span 4;

  .btn {
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    gap: 8px;
  }
}
</style>

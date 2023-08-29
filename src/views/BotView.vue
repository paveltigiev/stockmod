<script setup>
// import MarketBotsItem from '../components/marketBots/MarketBotsItem.vue';
// import { useMarketBotsStore } from '../stores/MarketBotsStore';
// const MarketBotsStore = useMarketBotsStore()

const botItem = {
  id: '7',
  name: 'Super profit Bot',
  type: 'DA Long strategy',
  description: 'Тут маркдаун или html текст',
  status: 'Stopped',
  statistics: {
    roi: '53.31',
    pnl: '14,450',
    mdd: '65.18',
    win_rate: '59.66'
  },
  settings: {
    market: 'Features',
    pairs: 'BTCUSDT, SUIUSDT, ATOMUSDT',
    order_amount: 1000,
    take_profit: 7,
    trailing_stop_price: 2,
    trailing_stop_step: 1,
    stop_loss: 3,
    max_open_orders: 5
  }
}
const logs = [
  {
    created_at: 3453453,
    event: 'Position closed with +100500% profit'
  },
  {
    created_at: 3453453,
    event: 'Position open for usdt/btx'
  },
  {
    created_at: 3453453,
    event: 'Trading bot launched'
  },
  {
    created_at: 3453453,
    event: 'Position closed with +100500% profit'
  },
  {
    created_at: 3453453,
    event: 'Position open for usdt/btx'
  },
  {
    created_at: 3453453,
    event: 'Trading bot launched'
  },
  {
    created_at: 3453453,
    event: 'Position closed with +100500% profit'
  },
  {
    created_at: 3453453,
    event: 'Position open for usdt/btx'
  },
  {
    created_at: 3453453,
    event: 'Trading bot launched'
  },
  {
    created_at: 3453453,
    event: 'Position closed with +100500% profit'
  },
  {
    created_at: 3453453,
    event: 'Position open for usdt/btx'
  },
  {
    created_at: 3453453,
    event: 'Trading bot launched'
  }
]
</script>

<template>
  <div class="panel">
    <div class="bot-page">
      <div class="bots-info">
        <div class="bot-header">
          <div class="bot-name">
            {{ botItem.name }} #{{ botItem.id }}
            <div class="label status">{{ botItem.status }}</div>
          </div>
          <div class="bot-type">DA Long strategy</div>
        </div>
        <div class="bot-actions">
          <button class="btn btn-primary" @click="runBot(botItem.id)">Run bot</button>
          <!--<button class="btn btn-primary" @click="stopBot(botItem.id)">Stop bot</button>-->
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
      </div>

      <div class="bot-settings-form">
        <div class="bot-setting form-field bs_mt">
          <div class="form-field_label">Bot settings</div>
          <div class="form-field_tabs">
            <div class="form-field_tab active">Features</div>
            <div class="form-field_tab">Spot</div>
          </div>
        </div>
        <div class="bot-setting form-field bs_pairs">
          <div class="form-field_label">Pairs</div>
          <input class="form-field_input" placeholder="0.0000" v-model="botItem.settings.pairs" />
        </div>
        <div class="bot-setting form-field bs_amount">
          <div class="form-field_label">Order amount USDT</div>
          <input
            class="form-field_input"
            placeholder="0.0000"
            v-model="botItem.settings.order_amount"
          />
        </div>
        <div class="bot-setting form-field bs_tp">
          <div class="form-field_label">Take profit %</div>
          <input
            class="form-field_input"
            placeholder="0.0000"
            v-model="botItem.settings.take_profit"
          />
        </div>
        <div class="bot-setting form-field bs_ts">
          <div class="form-field_label">Trailing stop %</div>
          <div class="form-field_inputs">
            <input
              class="form-field_input"
              placeholder="0.0000"
              v-model="botItem.settings.trailing_stop_price"
            />
            <input
              class="form-field_input"
              placeholder="0.0000"
              v-model="botItem.settings.trailing_stop_step"
            />
          </div>
        </div>
        <div class="bot-setting form-field bs_sl">
          <div class="form-field_label">Stop loss %</div>
          <input
            class="form-field_input"
            placeholder="0.0000"
            v-model="botItem.settings.stop_loss"
          />
        </div>
        <div class="bot-setting form-field bs_mo">
          <div class="form-field_label">Max orders</div>
          <input
            class="form-field_input"
            placeholder="0.0000"
            v-model="botItem.settings.max_open_orders"
          />
        </div>
      </div>

      <div class="bot-description">
        <p>
          Лонговый бот, строго для восходящей фазы рынка. Рекомендовано включать при выходе цены из
          консолидации BTCUSDT на таймфрейме 1h.
        </p>
        <p>Бот работает одним ордером на вход в позицию, без усреднения и мартингейла</p>
        <p>Рассчитывайте риски самостоятельно</p>
        <p>Пример настройки <a href="#">http://www.youtube.com/...</a></p>
      </div>

      <div class="bot-logs">
        <div class="log-item" v-for="item in logs" :key="item.created_at">
          <div class="log-item_time">{{ item.created_at }}</div>
          <div class="log-item_event">{{ item.event }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bot-page {
  display: grid;
  // grid-template-columns: repeat(8, 12.5%);
  grid-template:
    'a a' auto
    'c d' auto
    'b d' 2fr / 1fr 1fr;

  .bots-info {
    padding: 2em;
    display: grid;
    row-gap: 16px;
    grid-template-columns: repeat(8, 12.5%);
    background: transparent;
    transition: all 0.3s ease;
    border-bottom: 1px solid var(--color-border);
    grid-area: a;

    .bot-header {
      grid-row: span 1;
      grid-column: span 4;

      .bot-name {
        font-size: 2.2em;
        line-height: 1;
        font-weight: 700;
      }
      .bot-type {
        color: var(--color-text-soft);
        font-size: 1em;
      }
    }

    .bot-actions {
      grid-row: span 1;
      grid-column: span 4;
      display: flex;
      flex-direction: row-reverse;
      gap: 8px;

      .btn {
        padding-left: 32px;
        padding-right: 32px;
      }
    }
    .bot-metrics {
      grid-row: span 1;
      grid-column: span 1;

      .bot-metrics-value {
        font-size: 1.4em;
        line-height: 1em;
        font-weight: 700;
      }
      .bot-metrics-label {
        color: var(--color-text-soft);
        font-size: 0.8em;
      }
    }
  }

  .bot-description {
    padding: 2em;
    background: transparent;
    transition: all 0.3s ease;
    border-top: 1px solid var(--color-border);
    color: var(--color-text-soft);
    grid-area: b;

    p {
      margin-bottom: 8px;
    }
  }

  .bot-settings-form {
    padding: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 66px);
    gap: 16px 8px;
    background: transparent;
    transition: all 0.3s ease;
    grid-area: c;

    .bot-setting {
      grid-row: span 1;
      grid-column: span 1;
      &.bs_mt {
        grid-row: span 1;
        grid-column: span 2;
      }

      &.bs_pairs {
        grid-row: span 1;
        grid-column: span 2;
      }
      &.bs_amount {
      }
      &.bs_tp {
      }
      &.bs_ts {
        grid-row: span 1;
        grid-column: span 2;
      }
      &.bs_sp {
      }
      &.bs_step {
      }
      &.bs_sl {
      }
      &.bs_mo {
      }
    }
    .bot-footer {
      grid-row: span 1;
      grid-column: span 2;
    }
  }

  .bot-logs {
    position: relative;
    padding: 2em;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: transparent;
    transition: all 0.3s ease;
    overflow-y: scroll;
    max-height: calc(100vh - 314px);
    border-left: 1px solid var(--color-border);
    background-image: url('../assets/images/logs-bg.png');
    background-size: contain;
    grid-area: d;

    .log-item {
      .log-item_time {
        opacity: 0.5;
      }
      .log-item_event {
      }
    }
  }
}

.form-field {
  width: 100%;

  .form-field_label {
    font-size: 13px;
    line-height: 16px;
    color: #c3c2d4;
    margin-bottom: 8px;
  }
  .form-field_inputs {
    display: flex;
    gap: 8px;
  }
  .form-field_input {
    width: 100%;
    height: 40px;
    min-height: 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    border-radius: 6px;
    padding-left: 12px;
    overflow: hidden;
    border: none;
    background-color: #232334;
    color: #f7f7f7;
    align-items: center;

    &:focus {
      outline: none;
    }
  }
  .form-field_tabs {
    border: 1px solid var(--color-border);
    border-radius: 12px;
    color: var(--color-text-soft);
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    .form-field_tab {
      text-align: center;
      padding: 8px;
      cursor: pointer;
      &.active {
        background-color: #232334;
        color: var(--color-text);
      }
      &:first-child {
        border-right: 1px solid var(--color-border);
      }
    }
  }
}
</style>

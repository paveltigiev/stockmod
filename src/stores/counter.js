import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const totalBalance = ref(0)
  const doubleBalance = computed(() => totalBalance.value * 2)
  function makeTrade() {
    totalBalance.value++
  }

  return { totalBalance, doubleBalance, makeTrade }
})

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMarketBotsStore = defineStore('MarketBotsStore', () => {

	const marketBots = ref([
		{
			id: '1',
			name: 'Super profit Bot',
			type: 'DA Long strategy',
			roi: '53.31',
			pnl: '14,450',
			mdd: '65.18',
			win_rate: '59.66'
		},
		{
			id: '2',
			name: 'Super profit Bot',
			type: 'DA Long strategy',
			roi: '53.31',
			pnl: '14,450',
			mdd: '65.18',
			win_rate: '59.66'
		},
		{
			id: '3',
			name: 'Super profit Bot',
			type: 'DA Long strategy',
			roi: '53.31',
			pnl: '14,450',
			mdd: '65.18',
			win_rate: '59.66'
		},
		{
			id: '4',
			name: 'Super profit Bot',
			type: 'DA Long strategy',
			roi: '53.31',
			pnl: '14,450',
			mdd: '65.18',
			win_rate: '59.66'
		},
		{
			id: '5',
			name: 'Super profit Bot',
			type: 'DA Long strategy',
			roi: '53.31',
			pnl: '14,450',
			mdd: '65.18',
			win_rate: '59.66'
		},
		{
			id: '6',
			name: 'Super profit Bot',
			type: 'DA Long strategy',
			roi: '53.31',
			pnl: '14,450',
			mdd: '65.18',
			win_rate: '59.66'
		},
		{
			id: '7',
			name: 'Super profit Bot',
			type: 'DA Long strategy',
			roi: '53.31',
			pnl: '14,450',
			mdd: '65.18',
			win_rate: '59.66'
		},
		{
			id: '8',
			name: 'Super profit Bot',
			type: 'DA Long strategy',
			roi: '53.31',
			pnl: '14,450',
			mdd: '65.18',
			win_rate: '59.66'
		},
		{
			id: '9',
			name: 'Super profit Bot',
			type: 'DA Long strategy',
			roi: '53.31',
			pnl: '14,450',
			mdd: '65.18',
			win_rate: '59.66'
		},
		{
			id: '10',
			name: 'Super profit Bot',
			type: 'DA Long strategy',
			roi: '53.31',
			pnl: '14,450',
			mdd: '65.18',
			win_rate: '59.66'
		},
	])













  const totalBalance = ref(0)
  const doubleBalance = computed(() => totalBalance.value * 2)
  function makeTrade() {
    totalBalance.value++
  }

  return { marketBots, totalBalance, doubleBalance, makeTrade }
})

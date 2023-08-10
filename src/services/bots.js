import api from './api'

export async function getBots() {
	const response = await api.get('/bots')
	return response.data
}

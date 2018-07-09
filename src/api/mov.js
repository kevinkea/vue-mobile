import request from '@/utils/request'

export function indexfilm(query) {
	return request({
		url: '/indexFilm_data',
		method: 'get',
		params: query
	})
}

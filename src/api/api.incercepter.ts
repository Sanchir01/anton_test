import axios from 'axios'
import { getContentType } from './api.helper'

export const instance = axios.create({
	baseURL: 'https://api.skilla.ru/mango',
	headers: getContentType()
})

instance.interceptors.request.use(async config => {
	if (config.headers) {
		config.headers.Authorization = `Bearer testtoken`
	}
	return config
})

import axios from 'axios'

const base_url = 'http://localhost:8000';

 export const AxiosConfig = axios.create({
    baseURL: base_url,
})

AxiosConfig.defaults.headers.common['Content-Type'] = 'application/json';
AxiosConfig.defaults.headers.common.Accept = 'application/json';
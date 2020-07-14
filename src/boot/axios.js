import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://192.168.18.9:3000/'
})
export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }

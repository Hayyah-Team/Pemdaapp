import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://0dc1a04889bc.ngrok.io/'
})
export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }

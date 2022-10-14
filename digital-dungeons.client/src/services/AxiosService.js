import Axios from 'axios'
import { baseURL } from '../env'
export const baseApi = Axios.create({
  baseURL,
  timeout: 4000
})

export const dndApi = Axios.create({
  baseURL: "https://www.dnd5eapi.co",
  timeout: 4000
})

export const openDndApi = Axios.create({
  baseURL: "https://api-beta.open5e.com",
  timeout: 4000
})


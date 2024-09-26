import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

// export const api = axios.create({
//   baseURL: 'https://back-locadora-red-devs.onrender.com/Register', @Viana-Gabriel
// })

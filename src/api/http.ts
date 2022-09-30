import axios from 'axios'

const BASE_URL = import.meta.env.DEV ? 'http://localhost:8080' : 'http://localhost:8080'

const path = {
  admin: {
    login: '/admin/login',
  },
  file: {
    getFile: '/',
  },
}

async function req(url: string, params?: object, data?: object) {
  const response = await axios({
    method: 'post',
    baseURL: BASE_URL,
    url,
    params,
    data,
  })

  return response.data
}

export { path, req }

import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:4000/api'
})

export function getToken (username, password) {
  return request.post('/auth/token/login', {
    username: username,
    password: password
  }).then(res => res.data.auth_token)
}

export function getCards (token) {
  return request.get('/cards', {
    headers: {
      Authorization: `Token ${token}` // this is how we comm w backend
    }
  }).then(res => res.data.results)
}

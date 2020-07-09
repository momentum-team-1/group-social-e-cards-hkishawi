import axios from 'axios'

const request = axios.create({
  baseURL: 'https://egret-kishawi-carter.herokuapp.com'
})

export function getToken (username, password) {
  return request.post('/api/auth/token/login/', {
    username: username,
    password: password
  }).then(response => response.data.auth_token)
}

export function getCards (token) {
  return request.get('api/cards/all/', {
    headers: {
      Authorization: `Token ${token}` // this is how we comm w backend
    }
  })
}

export function postCards (token) {
  return request.post('api/cards/', {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}

export function getUsers (token) {
  return request.get('api/users/', {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}

export function deleteACard (token, cardId) {
  return request.delete('api/cards/${cardId)', {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}

export function getFavorites (token) {
  return request.get('api/favorites/', {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}
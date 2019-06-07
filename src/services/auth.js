import client from '../providers/client.js'

export const login = credentials =>
  client.post('users/login', credentials)

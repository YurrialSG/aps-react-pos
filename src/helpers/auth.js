export const setToken = token =>
  window.localStorage.setItem('@list:token', token)

export const getToken = () =>
  window.localStorage
    .getItem('@list:token')

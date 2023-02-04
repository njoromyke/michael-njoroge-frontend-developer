import { AUTH_USER } from '../constants'

export const getFromLocal = (key) => {
  const value = localStorage.getItem(key)

  if (value) {
    return JSON.parse(value)
  }

  return null
}

export const storeLocally = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getUserFromLocal = () => {
  return new Promise((resolve, reject) => {
    const user = getFromLocal(AUTH_USER)

    if (user) {
      resolve(user)
    }
  })
}

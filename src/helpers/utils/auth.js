import { AUTH_USER } from '../constants'

export const getFromLocal = (itemName) => {
  const fromLocal = localStorage.getItem(itemName)
  if (!fromLocal) {
    return
  }
  return JSON.parse(fromLocal)
}

export const storeLocally = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getUserFromLocal = () => {
  const user = getFromLocal(AUTH_USER)
  return new Promise(function (resolve, reject) {
    resolve(user)
  })
}

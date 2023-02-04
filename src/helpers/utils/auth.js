import { AUTH_USER } from '../constants'

export const getUserFromLocal = () => {
  const user = localStorage.getItem(AUTH_USER)

  if (user) {
    return new Promise((resolve, reject) => {
      resolve(JSON.parse(user))
    })
  }

  return null
}

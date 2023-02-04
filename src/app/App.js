import { useEffect, useState } from 'react'
import Loader from '../components/loader/loader'
import { getUserFromLocal } from '../helpers/utils/auth'
import { DEFAULT_GLOBAL_STATE, GlobalContext } from './context/context'
import ProtectedRoutes from './routes/protectedRoutes'
import UnprotectedRoutes from './routes/unprotectedRoutes'

const App = () => {
  const [globalState, setGlobalState] = useState(DEFAULT_GLOBAL_STATE)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const updateGlobalState = (obj) => {
    setGlobalState({ ...globalState, ...obj })
  }

  const getUser = () => {
    getUserFromLocal()
      .then((user) => {
        if (user) {
          setUser(user)
          updateGlobalState({ user })
          setLoading(false)
        }

        setUser(null)
        setLoading(false)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        globalState,
        setGlobalState
      }}
    >
      {loading
        ? (
        <Loader />
          )
        : user
          ? (
        <ProtectedRoutes />
            )
          : (
        <UnprotectedRoutes />
            )}
    </GlobalContext.Provider>
  )
}

export default App

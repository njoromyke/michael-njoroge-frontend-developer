import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
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
        console.log(user, 'Kama')
        setUser(user)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getUser()
  }, [])

  console.log(user)

  return (
    <div id='main'>
      <GlobalContext.Provider
        value={{
          globalState,
          updateGlobalState
        }}
      >
        <ToastContainer />
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
    </div>
  )
}

export default App

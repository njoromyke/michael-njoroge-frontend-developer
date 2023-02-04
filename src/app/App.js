import { useState } from 'react'
import { getUserFromLocal } from '../helpers/utils/auth'
import { DEFAULT_GLOBAL_STATE, GlobalContext } from './context/context'

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
        }

        setUser(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <GlobalContext.Provider
      value={{
        globalState,
        setGlobalState
      }}
    ></GlobalContext.Provider>
  )
}

export default App

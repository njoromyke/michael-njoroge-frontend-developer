import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../../pages/auth/login'
import Register from '../../pages/auth/register'

const UnprotectedRoutes = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default UnprotectedRoutes

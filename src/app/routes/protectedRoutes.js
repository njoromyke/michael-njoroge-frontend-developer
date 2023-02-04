import { BrowserRouter as Router, Routes } from 'react-router-dom'
import RouteComponent from './routes'

const ProtectedRoutes = () => {
  return (
    <Router>
      <Routes>
        <RouteComponent />
      </Routes>
    </Router>
  )
}

export default ProtectedRoutes

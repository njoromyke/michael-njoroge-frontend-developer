import { BrowserRouter as Router } from 'react-router-dom'
import CustomNav from '../../components/navbar/custom-nav'
import RouteComponent from './routes'

const ProtectedRoutes = () => {
  return (
    <Router basename='/'>
      <CustomNav />
      <RouteComponent />
    </Router>
  )
}

export default ProtectedRoutes

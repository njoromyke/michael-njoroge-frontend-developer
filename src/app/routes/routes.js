import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home/home'

function RouteComponent () {
  const routes = [
    {
      path: '/',
      component: <Home />,
      index: true
    }
  ]

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  )
}

export default RouteComponent

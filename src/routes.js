import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Plans = React.lazy(() => import('./views/dashboard/Plans'))

const routes = [
  { path: '/', name: 'Home', element: Dashboard },
  { path: '/plans', name: 'Plans', element: Plans, exact: true },
]

export default routes

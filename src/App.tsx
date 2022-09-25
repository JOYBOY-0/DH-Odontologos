import { useState } from 'react'
import { Route } from 'react-router-dom'
import './App.scss'
import { AuthGuard, AdminGuard, PrivateRoutes, PublicRoutes, AdminRoutes } from '@/guard'
import { RouteNotFound } from './utilities/RouteNotFound'
import { Dasboard, Home, Turnos } from '@/views'
import Auth from './views/auth/Auth'
import { useDataContext } from './context/dataContext'

function App() {

  const {patients, dentists, appointments} = useDataContext();
  
  return (
    <RouteNotFound>
      <Route path={PublicRoutes.AUTH} element={<Auth />} />
      <Route path={PublicRoutes.HOME} element={<Home />} />
      {/* <Route path={PrivateRoutes.SUBMIT} element={<Submit />} /> */}

      <Route element={<AuthGuard />}>
        <Route path={PrivateRoutes.TURNOS} element={<Turnos />} />
      </Route>
      <Route element={<AdminGuard />}>
        <Route path={AdminRoutes.ADMIN} element={<Dasboard />} />
      </Route>
    </RouteNotFound>
  )
}

export default App

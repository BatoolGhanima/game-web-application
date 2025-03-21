
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import React from 'react'
export const Layout = () => {
  return (
      <>
          <NavBar></NavBar>
          <Outlet/>
      </>
  )
}

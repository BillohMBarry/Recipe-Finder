import React from 'react'
import { Outlet } from 'react-router-dom'
import NavLinks from '../Component/NavLinks'
function MainLayout() {
  return (
    <div>
        <NavLinks />
        <Outlet />
    </div>
  )
}

export default MainLayout

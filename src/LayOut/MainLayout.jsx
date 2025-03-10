import { Outlet } from 'react-router-dom'
import NavLinks from '../Component/NavLinks'

function MainLayout() {
  return (
    <>
      <NavLinks />
      <Outlet />
    </>
  )
}

export default MainLayout

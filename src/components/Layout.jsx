
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import GameDetails from './GameDetails'
export const Layout = () => {
  return (
      <>
      <NavBar></NavBar>
      
          <Outlet/>
      </>
  )
}

import Header from '../components/Header'
import { Outlet } from "react-router-dom"

// Outlet Component acts as a placeholder, it render child routes in you routing configs

const Main = () => {
  return (
    <>
     <Header />
     <Outlet />
    </>
  )
}

export default Main
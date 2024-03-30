import { Outlet } from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import MobileNav from "./MobileNav"

const AppLayout = () => {
  return (
    <>
    <Header />
    <Navbar />
    <main>
        <Outlet />
    </main>
    <Footer />
    <MobileNav />
    </>
  )
}

export default AppLayout
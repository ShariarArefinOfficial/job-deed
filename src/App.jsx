import { Outlet } from "react-router-dom"
import NavBar from "./SharedComponent/NavBar/NavBar"
import Footer from "./SharedComponent/Footer/Footer"


function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App

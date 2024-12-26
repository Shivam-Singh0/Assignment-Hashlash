import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/pages/Home"
import { ToastContainer } from "react-toastify"
import Favorites from "./components/pages/Favorites"



function App() {
  

  return (
    <Router>
       <Header/>
       <ToastContainer />
      <main>
   
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/fav" element={<Favorites/>} />
      </Routes>
   
   </main>
   </Router>
  )
}

export default App

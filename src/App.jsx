
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './Pages/Products/Products'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import SignIn from './Pages/Auth/SignIn'
function App() {


 return(
  <BrowserRouter>
  <Navbar/>

  <Routes>
    {/* <Route path='/' element={<Home />} />  Default path */}
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='SignIn' element={<SignIn/>}/>
    
  </Routes>
  </BrowserRouter>
 )


}

export default App

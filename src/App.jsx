
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './Pages/Products/Products'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import SignIn from './Pages/Auth/SignIn'
import AddProduct from './Pages/AddProduct/AddProduct'
import Loading from './Components/Loading/Loading'
import Profile from './Pages/User/profile/Profile'
function App() {


 return(
  <BrowserRouter>
  <Navbar/>

  <Routes>
    <Route path='/' element={<Home />} />  
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='SignIn' element={<SignIn/>}/>
    <Route path='AddProduct' element={<AddProduct/>}/>
    <Route path='Loading' element={<Loading/>}/>
    <Route path='profile' element={<Profile/>}/>

    
  </Routes>
  </BrowserRouter>
 )


}

export default App

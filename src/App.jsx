import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./Pages/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import SignIn from "./Pages/Auth/SignIn";
import AddProduct from "./Pages/AddProduct/AddProduct";
import Loading from "./Components/Loading/Loading";
import Profile from "./Pages/User/profile/Profile";
import UserLayout from "./Components/UserLayout/UserLayout";
import UserProduct from "./Pages/User/UserProduct/UserProduct";
import Bid from "./Pages/User/Bid/Bid";
import ProductDetail from "./Pages/Products/ProductDetail";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/productdetail" element={<ProductDetail/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/Loading" element={<Loading />} />

        <Route path="/user" element={<UserLayout/>}>
          <Route path="profile" element={<Profile />} />
          <Route path="userproduct" element={<UserProduct />} />
          <Route path="Bid" element={<Bid />} />
        </Route>

        <Route path="*" element={"Page not found"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

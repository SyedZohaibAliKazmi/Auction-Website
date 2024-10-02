import "./Products.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../../utils/firebase";
import dayjs from "dayjs";
// var relativeTime = require("dayjs/plugin/relativeTime");
import relativeTime from "dayjs/plugin/relativeTime"; // ES 2015
import { AuthContext } from "../../Context/AuthContext/AuthContext";
dayjs.extend(relativeTime);

function Products() {
  const [products, setProducts] = useState([]);

 const {user} = useContext(AuthContext)
//  console.log("user=>", user);
 

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const productCollection = collection(db, "products");
      const q = query(productCollection, orderBy("createdAt", "desc"));
      const doc = await getDocs(q);
      const arr = [];
      doc.forEach((product) => arr.push({ ...product.data(), id: product.id }));
      setProducts([...arr]);
      // console.log("arr=>", arr);
    } catch (error) {
      console.log("error=>", error);
    }
  };

  const navigate = useNavigate();


  const handleAddProduct = () => {

    if (!user || !user.isLogin) {
      navigate("/signin");
      return;
      console.log("fun user=>", user);
      
    }
    navigate("/addproduct");
  };

  return (
    <>
      <div className="product-main">
        <div className="add-option">
          <h1>Products</h1>

          <button onClick={handleAddProduct}>Add Products</button>
        </div>
        {/* product */}
        <div className="all-product">
          {products.map((data) => (
            <Link to={`/products/${data.id}`}key={data.id}>
              <div className="product">
                <img src={data.img} alt="" className="image" />
                <h2>{data.title}</h2>
                <h3>Price: {data.price}</h3>
                <h4>{dayjs().to(data.createdAt.toDate())}</h4>
                <button>Bid Now</button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Products;

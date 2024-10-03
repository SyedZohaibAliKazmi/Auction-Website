import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { useQuery } from "@tanstack/react-query";
import "./ProductDetail.css";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // ES 2015
import BidModal from "../../Components/BidModal/BidModal";
import { set } from "react-hook-form";
dayjs.extend(relativeTime);
const getProductInfo = async (id) => {
  const docRef = doc(db, "products", id);
  const productInfo = getDoc(docRef);
  return await productInfo;
};

function ProductDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log("id=>",id);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductInfo(id),
  });

  // Bid Button Work

  const handleOnBid = () => {
    setIsModalOpen(true);
  };

  // console.log("🚀 product:", product)
  if (isLoading) return <h1>Loading</h1>;
  if (!isLoading && !data.exists()) return <h1>Page Not Found</h1>;

  const { img, desc, price, title, location, quantity, createdAt } =
    data.data();

  const handlePrevious = () => {
    navigate("/products");
  };

  return (
    <div>
      <div className="detail-main">
        <div className="image">
          <img src={img} alt={title} />
        </div>
        <div className="detail-text">
          <div className="btn">
            <button onClick={handlePrevious}>X</button>
          </div>
          <BidModal
            isModalOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={title}
           
            price={price}
            ProductId={id}
          />
          <h1> {title}</h1>
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#f5f4dc",
              width: "90% ",
              margin: "6px 0",
            }}
          />
          <h2>Rs: {price}</h2>
          <p>
            <span>Description: </span> <br />
            {desc}
          </p>
          <p>
            <span>Location:</span>
            <br />
            {location}
          </p>
          <p>
            <span>Quantity:</span> <br />
            {quantity}
          </p>
          <h4>
            <span>Posted:</span> <br />
            {dayjs().to(createdAt.toDate())}
          </h4>
          <button onClick={handleOnBid}>Bid Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { useQuery } from "@tanstack/react-query";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // ES 2015
dayjs.extend(relativeTime);
const getProductInfo = async (id) =>{
        
        const docRef = doc(db,"products",id)
        const productInfo =  getDoc(docRef)
        return await productInfo
     
}

function ProductDetail() {

const {id} = useParams()
// console.log("id=>",id);

const {data, isLoading,isError,refetch} = useQuery({queryKey:["products", id], queryFn: ()=> getProductInfo(id)})
// console.log("🚀 product:", product)
if(isLoading) return <h1>Loading</h1>
if(!isLoading && !data.exists()) return <h1>Page Not Found</h1>

const {img ,desc , price, title, location , quantity ,createdAt}= data.data()




    return(
        <div>
            
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h2>Price: {price}</h2>
            <p> Description: {desc}</p>
            <p>Location: {location}</p>
            <p>Quantity: {quantity}</p>
            <p>{createdAt?.toDate().toLocaleString()}</p>

        </div>
    )

}

export default ProductDetail;
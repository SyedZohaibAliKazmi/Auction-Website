
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../Components/Input/Input";
import './AddProduct.css'
import { message } from "antd";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db, storageDB } from "../../utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function AddProduct() {
  const navigate = useNavigate()

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();


    
    const onSubmit = async (data) => {

try {

  if (!data.img || data.img.length === 0) {
    message.error("Please upload an image.");
    return; // Stop the function if no file is selected
}

  const file = data.img[0];
 
  const storageRef = ref(storageDB,`products/${file.name}`)
  const snapshot = await uploadBytes(storageRef,file)
  const downloadURL  = await  getDownloadURL(snapshot.ref)


 // Step 2: Add document to Firestore

      const productCollectionRef = collection(db,"products")
      console.log("data",data)
      const obj={
        ...data,
        img: downloadURL,
        createdAt:serverTimestamp(),
        createdBy: auth.currentUser.uid,
        status: "active",
      }
     await addDoc(productCollectionRef,obj)
        reset()
        message.success("Product added successfully!")
  
  
} catch (error) {
  console.log("error=>",error);
  message.error("Error in adding product!")
  
  
}
   
        
    }

    return(
        <>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Title for Add Product  */}
          <Input 
          placeholder={"Product title"}
          obj={{...register("title", {required:true,maxLength:30})}}
          errorMsg={"Text Length should be 30"}
          formKey={"title"}
          errors={errors}
          />

          <Input
          placeholder={"Product Price"}
          obj={{ ...register("price", { required: true }) }}
          errorMsg={"Price is required"}
          formKey={"price"}
          type={"number"}
          errors={errors}
          
          />

          <Input
           placeholder={"Product Description"}
           obj={{ ...register("desc", { required: true }) }}
           errorMsg={"Description is required"}
           formKey={"desc"}
           errors={errors}
          
          />

          <Input
           placeholder={"Product Image"}
           obj={{ ...register("img", { required: true }) }}
           errorMsg={"Image is required"}
           formKey={"img"}
           type={"file"}
           errors={errors}
          />

          <Input
           placeholder={"Product Location"}
           obj={{ ...register("location", { required: true }) }}
           errorMsg={"Location is required"}
           formKey={"location"}
           errors={errors}
          />

          <Input
            placeholder={"Product Quantity"}
            obj={{ ...register("quantity", { required: true }) }}
            errorMsg={"Quantity is required"}
            formKey={"quantity"}
            type={"number"}
            errors={errors}
          />

          <div className="btn-container">

          <button type="submit">Submit</button>

          </div>
        </form>
        
        </>
        
    )

     
}

export default AddProduct

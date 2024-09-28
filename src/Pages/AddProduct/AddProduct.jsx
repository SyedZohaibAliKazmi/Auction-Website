
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../Components/Input/Input";
import './AddProduct.css'

function AddProduct() {
  const navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("hoa=>", data);
        
    }

    return(
        <>
        {/* <h1>helllo</h1> */}

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

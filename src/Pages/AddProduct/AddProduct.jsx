
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../Components/Input/Input";

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

          <Input 
          placeholder={"Product title"}
          obj={{...register("title", {required:true,maxLength:30})}}
          errorMsg={"Text Length should be 30"}
          formKey={"title"}
          errors={errors}


          />
            
        </form>
     
        
        {/* <CustomInput
        placeholder={"Product Title"}
        obj={{ ...register("title", { required: true, maxLength: 30 }) }}
        errorMsg={"Text Length should be between 1 to 30"}
        formKey={"title"}
        errors={errors}
        /> */}
        
        </>
        
    )

     
}

export default AddProduct

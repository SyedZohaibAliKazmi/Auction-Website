
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("hoa=>", data);
        
    }

    return(
        <>
        <h1>helllo</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            
        </form>
     
        
        </>
        
    )

     
}

export default AddProduct


const CustomInput = ({ formKey, obj, placeholder, errors, errorMsg, type }) => {
    return (
      <div className="flex flex-col mx-4">
        <input
          className="border mt-2 w-full  h-10 border-purple-600 lg:w-2/3 mx-auto p-4 rounded-md"
          placeholder={placeholder}
          type={type ? type : "text"}
          {...obj}
        />
        {errors[formKey] && (
          <span className="text-sm mb-1 text-red-500">{errorMsg}</span>
        )}
      </div>
    );
  }
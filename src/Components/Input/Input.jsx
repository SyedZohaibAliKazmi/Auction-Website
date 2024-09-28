import { useForm } from "react-hook-form";
import './Input.css'

function Input({ formKey, obj, placeholder, errors, errorMsg, type }) {


    

    return(
        <div >
         <div className="main-inp">
          {errors [formKey] && (<span>**{errorMsg}**</span>)}
          <input placeholder={placeholder} type={type ? type:"text" } {...obj} />
          {/* {errors [formKey] && ( <span>{errorMsg ? errorMsg:"Its Error"}</span> )} */}
         </div>
      </div>

    )
    
}

export default Input


// const CustomInput = ({ formKey, obj, placeholder, errors, errorMsg, type }) => {
//     return (
//       <div className="flex flex-col mx-4">
//         <input
//           className="border mt-2 w-full  h-10 border-purple-600 lg:w-2/3 mx-auto p-4 rounded-md"
//           placeholder={placeholder}
//           type={type ? type : "text"}
//           {...obj}
//         />
//         {errors[formKey] && (
//           <span className="text-sm mb-1 text-red-500">{errorMsg}</span>
//         )}
//       </div>
//     );
//   };
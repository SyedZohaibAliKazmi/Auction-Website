import { useForm } from "react-hook-form";
import "./Input.css";

function Input({
  formKey,
  obj,
  placeholder,
  errors,
  errorMsg,
  type,
  value,
  onChange,
}) {
  return (
    <div>
      <div className="main-inp">
        {errors && errors[formKey] && (
          <span>**{errorMsg ? errorMsg : "Its Error"}**</span>
        )}
        <input
          placeholder={placeholder}
          value={value}
          type={type ? type : "text"}
          {...obj}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Input;

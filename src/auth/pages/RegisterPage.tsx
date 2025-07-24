import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { RegisterUser } from "../models";
import {  SignInForm } from "../components/ui/SignInForm";
import { register } from "../config";
import { useLoading } from "../../context/LoadingContext";

 const RegisterPage = () => {
  const navigate = useNavigate();
 const { showLoading, hideLoading } = useLoading();

    const onSubmit = async (data: RegisterUser) => {
      if (data.password !== data.confirmPassword) {
        toast.error("Password do not match");
        return;
      }
  
      try {
        showLoading("Create new user...")
        await register(data);
        toast.success("Account created successfully");
        navigate('/auth/login');
      } catch (error: unknown) {
        if (error instanceof Error) toast.error(error.message);
        else toast.error("Login failed");
      }finally{
          hideLoading()
      }
    }


  return (
    <div>
    <SignInForm onRegister={onSubmit}/>
    </div>
  );
}

export default RegisterPage;
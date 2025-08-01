import { useNavigate } from "react-router-dom";
import type { UserLogin } from "../models";
import { LoginForm } from "../components/ui/LoginForm"
import { toast } from "react-toastify";
import { useLoading } from "../../app/context/LoadingContext";
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";
import { loginService } from "../services";


 const LoginPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showLoading, hideLoading } = useLoading();

  const handleLogin = async (data: UserLogin) => {
    showLoading("Logging in...");
    try {
      const response = await loginService(data);
    
      //dispatch the data
      dispatch(login(response.data));

      toast.success("Login successful!");
      navigate("/dashboard/summary");
    } catch (error: unknown) {
      if (error instanceof Error) toast.error(error.message);
      else toast.error("Login failed");
    } finally {
      hideLoading();
    }
  };

 return(
  <LoginForm onLogin={handleLogin} />
);
}

export default LoginPage;
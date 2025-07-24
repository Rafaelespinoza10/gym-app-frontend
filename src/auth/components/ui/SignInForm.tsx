import { Link } from "react-router-dom";
import { useForm} from 'react-hook-form';
import type {  RegisterUser } from "../../models";
import { emailValidation, passwordMessage, strongPasswordValidation } from "../../config/validations";

interface PropsSignIn{
    onRegister: (data: RegisterUser) => void;
}

export const SignInForm = ({onRegister}: PropsSignIn) => {
  const {register: formRegister, handleSubmit, formState: {errors}} = useForm<RegisterUser>({mode: 'onTouched'});

    return (
      <div className="flex flex-col w-full max-w-md mx-auto">
      <p className="text-3xl font-extrabold text-gray-800 mb-2 tracking-tight">Create Your Account</p>
      <p className="text-sm text-gray-500 mb-6">Enter your details to get started with your fitness journey.</p>

        <form className="space-y-2" onSubmit={handleSubmit(onRegister)}>
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#07857b] transition"
              {...formRegister("name", {required: 'Name is required'})}
            />
              {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>
  
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#07857b] transition"
              {...formRegister("email", {required: 'Email is required', pattern: {value: emailValidation, message: 'Invalid email format'}})}              
            />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>  

   <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#07857b] transition"
              {...formRegister("password", {required: 'Password is required', pattern: {value: strongPasswordValidation, message: passwordMessage}})}              
            />
              {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>
         
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="confirm password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#07857b] transition"
              {...formRegister("confirmPassword", { required: "Confirm password is required" })}  
            />
        {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}

          </div>

          <div className="flex justify-end">
          <p className="mt-1 text-center text-sm text-black">
          Already have an account?{" "}
        <Link
            to='/auth/login'
             className="text-[#5386F4] hover:underline"
        >Login here!</Link>
        </p> 
          </div>
 
          <button
            type="submit"
            className="w-full py-2 bg-[#5386F4] text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
  
 
      </div>
    );
  };
  
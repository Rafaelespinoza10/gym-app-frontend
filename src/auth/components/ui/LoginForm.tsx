import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import type { UserLogin } from "../../models";
import { emailValidation, userNameValidation } from "../utils";



interface PropsLoginForm {
  onLogin: (data: UserLogin) => void;
}

export const LoginForm = ({ onLogin }: PropsLoginForm) => {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({ mode: "onTouched" });

  return (
    <div className="flex flex-col w-full max-w-md mx-auto">
      <p className="text-3xl font-extrabold text-gray-800 mb-2 tracking-tight">
        Welcome Back
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Please enter your credentials to log in to your account.
      </p>

      <form className="space-y-2" onSubmit={handleSubmit(onLogin)}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="username"
            type="text"
            placeholder="you@example.com or username"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#07857b] transition"
            {...formRegister("username", {
              required: "Email or username is required",
              validate: (value) =>
                emailValidation.test(value) || userNameValidation.test(value)
                  ? true
                  : "Enter a valid email or username",
            })}
          />
          {errors.username && (
            <p className="text-xs text-red-500">{errors.username.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#07857b] transition"
            {...formRegister("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="flex justify-end">
          <p className="mt-4 text-center text-sm text-black">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="text-[#5386F4] hover:underline"
            >
              Sign up now!
            </Link>
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#5386F4] text-white rounded-lg font-semibold hover:bg-[#3D6DE6] transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

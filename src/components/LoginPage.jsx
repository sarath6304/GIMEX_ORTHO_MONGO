import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

// Validation schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const navigate = useNavigate();
    React.useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
          window.location.href = "/";
        }
      }, []);
  const handleLogin = () => {
    navigate("/dashboard");
  }
      
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // You can handle login logic here (API call etc.)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    storedUser.email = data.email;
    storedUser.password = data.password;

    if(
        storedUser &&
         storedUser.email === data.email && 
         storedUser.password === data.password
      ) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              {...register("password")}
              className={`w-full px-4 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            onClick={() => {handleLogin()}}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

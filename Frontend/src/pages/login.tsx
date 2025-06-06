import { NavLink, useNavigate } from "react-router";
import Button from "../components/Button";
import Input from "../components/Input";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/axiosInterceptor";
import { object, string } from "yup";
import { useBook } from "../context/booksContext";
import { useMember } from "../context/membersContext";

let loginSchema = object({
  username: string().required("Username is required"),
  password: string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { updateMemberData } = useMember();
  const { updateBookData } = useBook();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    //fetching api
    try {
      const values = await loginSchema.validate(formValues);
      console.log(values);
      const response = await axiosInstance(`/auth/login`, {
        method: "POST",
        data: values,
      });
      localStorage.setItem("token", response.data.token);
      updateBookData();
      updateMemberData();
      navigate("/");
      toast.success("Welcome");
    } catch (errorMessage: any) {
      setErrorMessage(
        errorMessage.response?.data?.message || "Login failed, Please try again"
      );
      toast.error("Login failed, Please try again");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-700 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            name="username"
            type="text"
            id="username"
            label="Email or Mobile"
          />
          <Input
            name="password"
            type="password"
            id="password"
            label="Password"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          <Button label="Login" type="submit" />
        </form>
        <p className="text-md text-center text-gray-800 mt-6">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-600 hover:underline">
            Register here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;

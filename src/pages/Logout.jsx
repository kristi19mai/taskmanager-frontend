import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useGlobalContext } from "../context/Context";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
const logoutUrl = `${API_BASE_URL}/api/v1/auth/logout`;

const Logout = () => {
  const navigate = useNavigate();
  const { updateUser } = useGlobalContext();
  const logoutUser = async () => {
    try {
      const response = await axios.delete(logoutUrl, { withCredentials: true });
      toast.success(response?.data?.msg);
      updateUser({ name: "", userId: "", role: "" });
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 2000);
      return () => {
        clearTimeout(timeoutId);
      };
    } catch (error) {
      toast.error(error.response?.data);
    }
  };

  useEffect(() => {
    logoutUser();
  }, []);

  return (
    <>
      <ToastContainer position="top-center" theme="light" autoClose="3000" />
    </>
  );
};

export default Logout;

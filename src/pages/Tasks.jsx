import { Sidebar, TaskList, AddTaskForm,} from "../Components/index.js";
import { redirect, useLoaderData } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useGlobalContext } from "../context/Context.jsx";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
const getUserUrl = `${API_BASE_URL}/api/v1/users/showMe`;


export const loader = async () => {
  try {
    const response = await axios.get(getUserUrl, { withCredentials: true });
    return response.data.user;
  } catch (error) {
    return redirect("/");
  }
};

const Tasks = () => {
  const { updateUser } = useGlobalContext();
  const user = useLoaderData();

  useEffect(() => {
    if (user) updateUser(user);
  }, []);
  return (
    <>
      <Sidebar />
      <div className="main-container">
        <TaskList />
        <AddTaskForm />
      </div>
    </>
  );
};
export default Tasks;

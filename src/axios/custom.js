import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;


export const fetchTasks = axios.create({
  baseURL: `${API_BASE_URL}/api/v1/tasks`,
  withCredentials: true,
});

export const fetchData = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
});

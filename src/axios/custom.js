import axios from "axios";

export const fetchTasks = axios.create({
  baseURL: "http://localhost:5001/api/v1/tasks",
});

export const fetchData = axios.create({
  baseURL: "http://localhost:5001/api/v1/",
});

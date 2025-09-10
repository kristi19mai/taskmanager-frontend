import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {fetchTasks} from "./axios/custom";
import { useGlobalContext } from "./context/Context";

const fetchAllTasks = async (params) => {
  const { task, important, status } = params;

  const queryParams = new URLSearchParams();
  if (task) {
    queryParams.append("task", task);
  }
  if (important) {
    queryParams.append("important", important);
  }
  if (status) {
    queryParams.append("status", status);
  }

  const response = await fetchTasks.get("", {params:Object.fromEntries(queryParams)});
  return response.data;
};

export const useFetchTasks = () => {
  const { queryKey } = useGlobalContext();

  const { isPending, data, isError, error } = useQuery({
    queryKey: queryKey,
    queryFn: () => fetchAllTasks(queryKey[1]||{}),
  });
  return { isPending, error, isError, data };
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: createTask } = useMutation({
    mutationFn: (taskTitle) => fetchTasks.post("/", { task: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { createTask };
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: updateTask } = useMutation({
    mutationFn: ({ taskId, requestBody }) =>
      fetchTasks.patch(`/${taskId}`, requestBody),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { updateTask };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask } = useMutation({
    mutationFn: (taskId) => fetchTasks.delete(`/${taskId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { deleteTask };
};

export const useUploadFile = () => {
  const queryClient = useQueryClient();
  const {
    mutate: uploadFile,
    isLoading,
    isError,
    error,
    data,
  } = useMutation({
    mutationFn: async ({ fileToUpload }) => {
      const formData = new FormData();
      formData.append("file", fileToUpload);
      const response = await fetchTasks.post("/uploads", formData);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("file was uploaded", data);
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      if (error?.response?.data?.msg) {
        toast.error(error.response.data.msg);
      } else {
        console.error(error);
      }
    },
  });
  return { uploadFile, isLoading, isError, error, data };
};

export const useDeleteFile = () => {
  const queryClient = useQueryClient();
  const {
    mutate: deleteFile,
    isLoading,
    isError,
    error,
    data,
  } = useMutation({
    mutationFn: async ({ fileToDelete }) => {
      const response = await fetchTasks.delete("/delete-file", {
        data: { fileToDelete },
      });
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      if (error?.response?.data?.msg) {
        toast.error(error.response.data.msg);
      } else {
        console.error(error);
      }
    },
  });
  return { deleteFile, isLoading, isError, error, data };
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

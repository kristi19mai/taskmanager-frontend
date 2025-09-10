import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const ProviderComponent = ({ children }) => {
  const [user, setUser] = useState({ name: "", userId: "", role: "" });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  

  const [searchTerm, setSearchTerm] = useState("");
  const [onlyImportant, setOnlyImportant] = useState(null);
  const [taskStatus, setTaskStatus] = useState(null);

  const queryKey = [
    "tasks",
    {
      task: searchTerm,
      important: onlyImportant,
      status: taskStatus,
    },
  ];
  const updateUser = ({ name, userId, role }) => {
    setUser({
      ...user,
      name: name,
      userId: userId,
      role: role,
    });
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
 

  return (
    <GlobalContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        setUser,
        isSidebarOpen,
        setSearchTerm,
        setOnlyImportant,
        setTaskStatus,
        queryKey,
        updateUser,
        user,
        searchTerm,
        onlyImportant,
        taskStatus,
       
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const ProviderComponent = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const setUser = (user) => {};
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

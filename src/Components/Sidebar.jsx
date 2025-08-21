import { links } from "../data.jsx";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/Context.jsx";
import SearchInput from "./SearchInput.jsx";
const Sidebar = () => {
  const {
    closeSidebar,
    isSidebarOpen,
    setOnlyImportant,
    setTaskStatus,
    setSearchTerm,
  } = useGlobalContext();
  const handleClick = (e) => {
    const btnName = e.currentTarget.name;
    if (btnName === "wichtig") {
      setOnlyImportant(true);
      setTaskStatus("");
    } else if (btnName === "erledigt") {
      setOnlyImportant(null);
      setTaskStatus("erledigt");
    } else if (btnName === "geplant") {
      setOnlyImportant(null);
      setTaskStatus("geplant");
    } else if (btnName === "alle aufgaben") {
      setOnlyImportant(null);
      setTaskStatus("");
      setSearchTerm("");
    }
  };
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <SearchInput />
      <ul className="links">
        {links.map((link) => {
          const { id, text, url, icon } = link;
          return (
            <li key={id}>
              <button
                type="button"
                className="icon-btn"
                name={text}
                onClick={handleClick}
              >
                {icon}
                {text}
              </button>
            </li>
          );
        })}
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </ul>
    </aside>
  );
};
export default Sidebar;

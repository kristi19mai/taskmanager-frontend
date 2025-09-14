import { links } from "../data.jsx";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/Context.jsx";
import { SearchInput } from "./index.js";

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
    } else if (btnName === "erledigt") {
      setTaskStatus("erledigt");
    } else if (btnName === "in bearbeitung") {
      setTaskStatus("in bearbeitung");
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
          const { id, text, icon } = link;
          return (
            <li key={id}>
              <button
                type="button"
                className="icon-btn"
                name={text}
                onClick={handleClick}
              >
                {icon}
                <p>{text}</p>
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

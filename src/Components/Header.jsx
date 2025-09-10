import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/Context";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <Wrapper>
      <div className="header-center">
        {!isSidebarOpen && (
          <button className="open-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        )}
        <div className="logo">
          <span className="orange"> ToDo</span>
          Liste
        </div>
        <Nav/>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100vw;
  background-color: var(--primary-ocean);
  height: 5rem;

  .header-center {
    margin: 0 auto;
    width: 90vw;
    max-width: var(--max-width);
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    color: white;
    letter-spacing: 2px;
    font-size: clamp(1.5rem, 3vw, 2.3rem);
    font-weight: 700;
    .orange {
      color: var(--secondary-orange);
    }
  }
  .open-btn {
    background-color: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-light-ocean);
    cursor: pointer;
    transition: var(--transition);
  }
  .open-btn:hover {
    transform: scale(1.05);
  }
`;
export default Header;

import styled from "styled-components";
import { TbLogout } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/Context";
const Nav = () => {
  const { user } = useGlobalContext();
  
  return (
    <Wrapper>
      {user?.name ? (
        <div className="link-container">
          <p>Hallo, {<span>{user.name}</span>}</p>
          <NavLink to="/logout" className="nav-link">
            <TbLogout /> Ausloggen
          </NavLink>
        </div>
      ) : (
       <p></p>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  gap: 1rem;

  .nav-link {
    font-size: 1.3rem;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  svg {
    border-color: transparent;
    background-color: transparent;
    font-size: 2.5rem;
    color: white;
    display: grid;
    place-items: center;
    padding: 0.5rem;
  }
  .link-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  p {
    font-size: 1.5rem;
    color: white;
  }
  span {
    text-transform: capitalize;
  }
`;
export default Nav;

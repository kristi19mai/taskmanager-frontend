import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";

const CloseBtn = ({ handleClick }) => {
  return (
    <Wrapper className="icon-btn" type="button" onClick={handleClick}>
      <IoCloseOutline />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--grey-500);
  font-size: 1.5rem;
  padding: 0;
`;

export default CloseBtn;

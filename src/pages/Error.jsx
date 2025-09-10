import img from "../assets/not-found.svg";
import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="nicht gefunden" />
          <h3>Ooh!</h3>
          <p>Wir können die Seite, nach der Sie suchen, nicht finden.</p>
          <Link to="/">zurück</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Etwas ist schiefgelaufen</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
text-align: center;
img{
  display: block;
  width: 90vw;
  max-width: 600px;
  margin-bottom: 0.5rem;
  margin-top: -3rem;
}
h3{
  margin-bottom: 0.5rem;
}
p{
  line-height: 2;
  color: var(--grey-700);
  margin-bottom: 1rem;
}
a{
  color: var(--primary-ocean);
  text-transform: capitalize;
  font-size: 1.2rem;
}
`;
export default Error;

import styled from "styled-components";

const EmailInfo = () => {
  return (
    <Wrapper>
      <h4>
        Erfolg! Bitte überprüfen Sie Ihre E-Mail, um Ihr Konto zu bestätigen
      </h4>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 90vw;
  max-width: var(--fixed-width);
  margin: 4rem auto;
  text-align: center;
`;
export default EmailInfo;

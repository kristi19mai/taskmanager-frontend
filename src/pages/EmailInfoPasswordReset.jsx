import styled from "styled-components";

const EmailInfoPasswordReset = () => {
  return (
    <Wrapper>
      <h4>
        Bitte überprüfen Sie Ihre E-Mail, um Ihr Passwort zurückzusetzen
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
export default EmailInfoPasswordReset;

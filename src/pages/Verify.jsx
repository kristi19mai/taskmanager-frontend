import { useLocation, Link, useNavigation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
const verifyUrl = `${API_BASE_URL}/api/v1/auth/verify-email`;

const Verify = () => {
  const [error, setError] = useState(false);
  const query = new URLSearchParams(useLocation().search);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const verifyToken = async () => {
    try {
      const response = await axios.post(verifyUrl, {
        verificationToken: query.get("token"),
        email: query.get("email"),
      });
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <h2>Loading...</h2>
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h4>
          Es ist ein Fehler aufgetreten. Bitte überprüfen Sie Ihren
          Bestätigungslink.{" "}
        </h4>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h4>Konto bestätigt</h4>
      <Link to="/" className="btn">
        Bitte, melden Sie sich an!
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 90vw;
  max-width: var(--fixed-width);
  margin: 4rem auto;
  line-height: 2;
  text-align: center;
  h4 {
    margin-bottom: 2rem;
  }
`;

export default Verify;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atomic-components";
import ALL_ROUTES from "../../router/routes";
import { StyledBackground } from "./styles";

function ErrorScreen() {
  const navigate = useNavigate();

  return (
    <StyledBackground>
      <h1>404 - Oops</h1>
      <h2>We couldn't find the page you are asking for</h2>
      <Button onClick={() => navigate(ALL_ROUTES.LOGIN.path)}>Home</Button>
    </StyledBackground>
  );
}

export default ErrorScreen;

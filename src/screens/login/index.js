import React, { useRef, useState } from "react";
import { auth } from "../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { Button } from "../../atomic-components/atoms/button";
import ALL_ROUTES from "../../router/routes";
import { Title } from "../../atomic-components";

const LoginScreen = () => {
  let navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");

  const onLogin = async (event) => {
    setError("");

    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch {
      setError("Username or password is incorrect!");
    }
  };

  const onRegister = () => navigate(ALL_ROUTES.REGISTER.path);

  return (
    <form
      className="flex flex-column align-items-center justify-content-center gap-4"
      style={{ height: "90vh" }}
    >
      <Title>Login</Title>
      <div className="col-sm-4">
        <label
          htmlFor="mail"
          className="form-label font-black text-gray-500 py-2"
        >
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          id="mail"
          ref={emailRef}
          required
        />
      </div>
      <div className="col-sm-4">
        <label htmlFor="password" className="font-black text-gray-500 py-2">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          ref={passwordRef}
          required
        />
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="flex gap-4">
        <Button onClick={onLogin}>LOGIN</Button>
      </div>
      <div className="flex flex-column align-items-center m-4">
        <p>Don't have an account?</p>
        <Button onClick={onRegister}>REGISTER</Button>
      </div>
    </form>
  );
};

export default LoginScreen;

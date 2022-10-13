import React, { useState } from "react";
import { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, Title } from "../../atomic-components";
import { useRef } from "react";
import { Alert } from "react-bootstrap";
import ALL_ROUTES from "../../router/routes";

const RegisterScreen = () => {
  let navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");

  const onRegister = async (event) => {
    setError("");

    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (e) {
      switch (e.code) {
        case "auth/invalid-email":
          setError("Email is not valid");
          break;
        case "auth/weak-password":
          setError("Your password is too weak");
          break;
        case "auth/email-already-in-use":
          setError("This email is already in use");
          break;
        default:
          setError("Something went wrong, please try again later");
          break;
      }
    }
  };

  const onLogin = () => navigate(ALL_ROUTES.LOGIN.path);

  return (
    <form
      className="flex flex-column align-items-center justify-content-center gap-4"
      style={{ height: "90vh" }}
    >
      <Title>Register</Title>
      <div className="col-sm-4">
        <label htmlFor="mail" className="form-label font-black text-gray-500">
          Email address
        </label>
        <input
          className="form-control"
          placeholder="Email"
          type="email"
          id="mail"
          ref={emailRef}
          required
        />
      </div>
      <div className="col-sm-4">
        <label htmlFor="password" className="font-black text-gray-500">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
      <div>
        <Button onClick={onRegister}>REGISTER</Button>
      </div>
      <div className="flex flex-column align-items-center m-4">
        <p>Already have an account?</p>
        <Button onClick={onLogin}>LOGIN</Button>
      </div>
    </form>
  );
};

export default RegisterScreen;

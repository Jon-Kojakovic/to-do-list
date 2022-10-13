import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "../firebase";
import { ContentWrapper, LoadingIndicator } from "../../atomic-components";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <ContentWrapper center>
        <LoadingIndicator />
      </ContentWrapper>
    );
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.defaultProps = {};
AuthProvider.propTypes = {
  children: PropTypes.element,
};

export { AuthContext, AuthProvider };

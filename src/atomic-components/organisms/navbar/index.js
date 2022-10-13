import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import logo from "../../../constants/images/clipboard.png";
import { auth } from "../../../utils/firebase";
import ALL_ROUTES from "../../../router/routes";

const NavigationBar = () => {
  const logout = () => auth.signOut();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="navbarIcon" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href={ALL_ROUTES.NEW_LIST.path}>New List</Nav.Link>
            <Nav.Link href={ALL_ROUTES.MY_LISTS.path}>My Lists</Nav.Link>
            <Nav.Link href="#" onClick={logout}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { NavigationBar as Navbar };

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../Assets/recipe.svg";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="auto"
            height="50"
            className="d-inline-block align-top pe-4"
            alt="Echevarne logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" className="fs-5 pe-4">
            Recetas
          </Nav.Link>
          <Nav.Link href="#home" className="fs-5 pe-4">
            Blog
          </Nav.Link>
          <Nav.Link href="#home" className="fs-5 pe-4">
            Enviar Receta
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;

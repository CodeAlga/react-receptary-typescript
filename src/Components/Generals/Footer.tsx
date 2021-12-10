/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <Container className="mt-auto mb-0 py-3">
      <footer>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Recetas
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Sobre nosotros
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Enviar receta
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">&copy; 2022 Mama, Inc</p>
      </footer>
    </Container>
  );
}

export default Footer;

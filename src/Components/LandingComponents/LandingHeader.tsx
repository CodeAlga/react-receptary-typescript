import React from "react";
import { Container, Form } from "react-bootstrap";

function LandingHeader() {
  return (
    <header className="landign-header">
      <h1 className="text-center display-4 fw-bolder text-white p-4">
        Las recetas de mi Madre
      </h1>
      <div className="m-3 ps-5 d-flex flex-column">
        <p className="fs-4 fw-bold text-white mb-0">Aquí están!</p>
        <p className="fs-4 fw-bold text-white mb-0">
          Las recetas más calientes del momento!
        </p>
        <p className="fs-4 fw-bold text-white mb-0">Cocina tus favoritas</p>
      </div>
      <div>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Quiero cocinar..."
            ></Form.Control>
            <Form.Select defaultValue="">
              <option value="">Plato...</option>
              <option value="breakfast">Desayuno</option>
              <option value="main">Principal</option>
              <option value="snack">Aperitivo</option>
              <option value="dessert">Postre</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </div>
    </header>
  );
}

export default LandingHeader;

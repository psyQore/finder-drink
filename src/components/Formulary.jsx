import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const Formulary = () => {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="name">Nombre de Cocktail </Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Ej. tequila, ron, vodka etc."
              name="name"
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="category">Categoria Cocktails </Form.Label>
            <Form.Select id="category" name="category">
              <option>-- Selecciona Categoria --</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulary;

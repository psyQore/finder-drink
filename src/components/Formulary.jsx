import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import useCategories from "../hooks/useCategories";

const Formulary = () => {
  const { categories } = useCategories();

  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
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
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Categoria Cocktails </Form.Label>
            <Form.Select id="category" name="category">
              <option>-- Selecciona Categoria --</option>
              {categories.map((category) => (
                <option key={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button variant="danger" className="text-uppercase w-100">
            Buscar Cocktail
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulary;

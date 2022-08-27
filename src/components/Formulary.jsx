import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategories from "../hooks/useCategories";

const Formulary = () => {
  const { categories } = useCategories();
  const [alert, setAlert] = useState("");
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }
    setAlert("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alert && <Alert variant="danger" className="text-center">{alert}</Alert>}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Nombre de Cocktail </Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Ej. tequila, ron, vodka etc."
              name="name"
              value={search.name}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Categoria Cocktails </Form.Label>
            <Form.Select
              id="category"
              name="category"
              value={search.category}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            >
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
          <Button type="submit" variant="danger" className="text-uppercase w-100">
            Buscar Cocktail
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulary;

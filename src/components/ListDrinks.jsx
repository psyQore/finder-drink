import React from "react";
import Drink from "../components/Drink";
import { Row } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

const ListDrinks = () => {
  const { drinks } = useDrinks();

  return (
    <Row>
      {drinks.map((drink) => (
        <Drink key={drink.idDrink} drink={drink} />
      ))}
    </Row>
  );
};

export default ListDrinks;

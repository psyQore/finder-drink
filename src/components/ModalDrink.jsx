import React from "react";
import { Modal, Image } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

const ModalDrink = () => {
  const { modal, handleModalClick, recipe, loading, setRecipe } = useDrinks();

  const showIngredients = () => {
    let ingredients = [];

    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <Modal
      show={modal}
      onHide={() => {
        handleModalClick();
        setRecipe({});
      }}
    >
      <Image
        src={recipe.strDrinkThumb}
        alt={`Imagen receta ${recipe.strDrink}`}
      />
      <Modal.Header>
        <Modal.Title>{recipe.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
          <h2>Intrucciones</h2>
          {recipe.strInstructions}
          <h2>Ingredientes y Cantidades</h2>
          {showIngredients()}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalDrink;

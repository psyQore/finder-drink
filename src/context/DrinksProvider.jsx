import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkID, setDrinkID] = useState(null);

  useEffect(() => {
    const getPescription = async () => {
      if (!drinkID) return;

      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`;

        const { data } = await axios(url);

        console.log(data.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getPescription();
  }, [drinkID]);

  const getDrink = async (search) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`;

      const { data } = await axios(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleDrinkClick = (id) => {
    setDrinkID(id);
  };

  return (
    <DrinksContext.Provider
      value={{
        getDrink,
        drinks,
        handleModalClick,
        modal,
        handleDrinkClick,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };

export default DrinksContext;

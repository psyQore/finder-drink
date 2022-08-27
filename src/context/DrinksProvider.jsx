import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {

  return (
    <DrinksProvider.Provider
      value={{
      }}
    >
      {children}
    </DrinksProvider.Provider>
  );
};

export { DrinksProvider };

export default DrinksContext;

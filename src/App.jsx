import { Container } from "react-bootstrap";
import Formulary from "./components/Formulary";
import { CategoriesProvider } from "./context/CategoryProvider";
import { DrinksProvider } from "./context/DrinksProvider";

function App() {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <>
          <header className="py-5">
            <h1>Buscador de Cocktails </h1>
          </header>

          <Container className="mt-5">
            <Formulary />
          </Container>
        </>
      </DrinksProvider>
    </CategoriesProvider>
  );
}

export default App;

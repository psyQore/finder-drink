import { Container } from "react-bootstrap";
import Formulary from "./components/Formulary";
import { CategoriesProvider } from "./context/CategoryProvider";

function App() {
  return (
    <CategoriesProvider>
      <>
        <header className="py-5">
          <h1>Buscador de Cocktails </h1>
        </header>

        <Container className="mt-5">
          <Formulary />
        </Container>
      </>
    </CategoriesProvider>
  );
}

export default App;

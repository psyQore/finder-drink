import { Container } from 'react-bootstrap';
import Formulary from "./components/Formulary";

function App() {
  return (
    <>
      <header className="py-5">
        <h1>Buscador de Cocktails </h1>
      </header>

      <Container className="mt-5">
        <Formulary />
      </Container>
    </>
  );
}

export default App;

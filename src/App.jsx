import styled from "styled-components";
import Veterinaria from "./components/Veterinaria";
import Caninos from "./data";

function App() {
  return (
    <>
      <Titulo>Clientes caninos de Veterinaria</Titulo>
      <Veterinaria Caninos={Caninos} />
    </>
  );
}

export default App;

const Titulo = styled.h1`
  color: blue;
  font-size: 2rem;
`;

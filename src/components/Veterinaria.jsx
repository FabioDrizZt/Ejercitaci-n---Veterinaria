import styled from "styled-components";
import CaninoInfo from "./CaninoInfo";

const Lista = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  list-style: none;
`;

const Veterinaria = ({ Caninos }) => {
  return (
    <Lista>
      {Caninos.map((Canino) => (
        <CaninoInfo key={Canino.id} Canino={Canino} />
      ))}
    </Lista>
  );
};

export default Veterinaria;

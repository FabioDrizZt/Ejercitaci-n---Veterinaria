import styled from "styled-components";

const InfoContainer = styled.li`
  background-color: grey;
  padding: 10px;
  margin: 10px 0;
  width: 200px;
`;
const InfoHeading = styled.h2`
  font-size: 1.5rem;
`;
const InfoParagraph = styled.p`
  margin: 5px 0;
`;

const CaninoInfo = ({ Canino }) => {
  return (
    <InfoContainer>
      <InfoHeading>Nombre: {Canino.nombre}</InfoHeading>
      <InfoParagraph>Edad: {Canino.edad}</InfoParagraph>
      <InfoParagraph>Sexo: {Canino.sexo}</InfoParagraph>
      <InfoParagraph>Raza: {Canino.raza}</InfoParagraph>
      <InfoParagraph>Tamaño: {Canino.tamaño}</InfoParagraph>
    </InfoContainer>
  );
};

export default CaninoInfo;

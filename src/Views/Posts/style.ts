/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
  /* Adicione um paddingTop que é igual à altura da imagem */
`;
export const ContainerWebview = styled.View`
  height: 700px;
  width: 390px;
  
`;
export const ContainerImgPost = styled.Image`
  position: absolute; /* Fixa a imagem no topo */
  top: 0; /* Posiciona a imagem no topo */
  width: 100%;
  height: 30%;
`;

export const TitleText = styled.Text`
  color: black;
  margin-top: 105%;
`;

export const MateriaDescText = styled.Text`
  color: red;
`;

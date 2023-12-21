/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  background-color: white;
  /* Adicione um paddingTop que é igual à altura da imagem */
`;
export const ContainerWebview = styled.View`

  height: 1100px;
  width: 390px;
`;
export const ContainerImgPost = styled.Image`
  width: 100%;
`;
export const ContainerImg = styled.View`
  position: absolute; /* Fixa a imagem no topo */
  top: 0; /* Posiciona a imagem no topo */
  width: 100%;
  height: 700px;
`;

export const TitleText = styled.Text`
  color: black;
 
  margin-left: 24px;
  
`;

export const MateriaDescText = styled.Text`
  color: red;
`;
export const ContainerButton = styled.View`
  margin-top: 230px;
  
  align-self: center;
  align-items: center;
  flex-direction: row;
`;

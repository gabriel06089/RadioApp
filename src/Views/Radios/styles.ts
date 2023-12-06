/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';


interface ContainerProps {
  colors: (string | number)[] | undefined;
  backgroundColor?: string;
}


export const Container = styled(LinearGradient).attrs({
  colors: ['#000000', '#333333'], // Substitua com as cores desejadas
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  
  justify-content: center;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;

 height: 100px;
 background-color: #ea5d65;
 padding-top:50px;
`;

export const ContainerNavigation = styled.View`
 position: relative;
 top: 12px;
left: 50px;
align-items: center;

justify-content: center;`;

export const ContainerHeaderText = styled.View`
 flex: 1;
 align-items: center;
 justify-content: center;
`;
export const HeaderText = styled.Text`
font-weight:bold; font-size:16px; 
`;
export const ContainerButton = styled.View`
  position: relative;
`;
export const ButtonPlayer = styled.TouchableOpacity`
  margin-right: 16px;
  width: 72px;
  height: 28px;
  border-radius: 25px;
  background-color: #ea5d65;
  align-items: center;
  justify-content: center;
`;
export const ButtonPlayerText = styled.Text`
font-weight: bold;
  font-size: 18px;
  color: #FFFFFF;
  text-align: center;`;

export const ContainerRadio = styled.View`
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
`;

export const ContainerDescRadio = styled.View`
  flex-direction: row;
`;

export const ContainerImgRadio = styled(LinearGradient).attrs((props: ContainerProps) => ({
  colors: props.colors,
})) <ContainerProps>`
  width: 90px;
  height: 90px;
  border-radius: 24px;
  margin-top: 16px;
  margin-left: 16px;
 `;
export const ImgRadio = styled.Image``;
export const ContainerText = styled.View`
  margin-left: 16px;
  justify-content: center;
`;
export const Titulo = styled.Text`
  font-weight: bold;
  font-size: 26px;
  color: #FFFFFF;
`;

export const Subtitulo = styled.Text`
  font-size: 18px;
  opacity: 0.6;
  color: #FFFFFF;
`;
export const Line = styled.View`
  align-self: flex-end;
  width: 65%;
  height: 1px;
  background-color: #c8c7cc;
  margin-right: 16px;
`;

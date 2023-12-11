/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface ContainerProps {
  colors: (string | number)[] | undefined;
  backgroundColor?: string;
}

export const Container = styled(LinearGradient).attrs({
  colors: ['#541084', '#9248FF'], // Substitua com as cores desejadas
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  justify-content: center;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;

  height: 70px;
  background-color: #541084;
  padding-top: 25px;

  border-bottom-width: 0.5px;
  border-bottom-color: whitesmoke;
`;

export const ContainerNavigation = styled.View`
  position: relative;

  left: 50px;
  align-items: center;

  justify-content: center;
`;

export const ContainerHeaderText = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const HeaderText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  padding-bottom: 20px;
  color: whitesmoke;
`;
export const ContainerButton = styled.View`
  position: relative;
`;

export const ContainerRadio = styled.View`
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
`;

export const ContainerDescRadio = styled.View`
  flex-direction: row;
`;

export const ContainerImgRadio = styled(LinearGradient).attrs(
  (props: ContainerProps) => ({
    colors: props.colors,
  }),
)<ContainerProps>`
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
  color: #ffffff;
`;

export const Subtitulo = styled.Text`
  font-size: 18px;
  opacity: 0.6;
  color: #ffffff;
`;
export const Line = styled.View`
  align-self: flex-end;
  width: 65%;
  height: 1px;
  background-color: #c8c7cc;
  margin-right: 16px;
`;

/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar} from 'react-native';

export const Container = styled(LinearGradient).attrs({
  colors: ['#541084', '#9248FF'], // Substitua com as cores desejadas
  start: {x: 0, y: 0},
  end: {x: 0, y: 0.7},
})`
  justify-content: center;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight + 24 : 24}px;
`;

export const ContainerNavigation = styled.View`
  position: relative;
  top: -3px;
  left: 46px;
  align-items: center;
width: 100%;
  justify-content: center;
`;

export const ContainerRadio = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
`;

export const ContainerText = styled.View`
  margin-left: 8px;
  justify-content: center;
`;
export const Titulo = styled.Text`
  font-weight: bold;
  font-size: 26px;
  color: white;
`;

export const Subtitulo = styled.Text`
  font-size: 18px;
  opacity: 0.6;
  color: white;
`;

export const Line2 = styled.View`
  align-self: flex-end;
  width: 65%;
  height: 1px;

  margin-right: 16px;
  margin-bottom: 64px;
`;

export const ContainerList = styled.View`
  height: 80px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 74.5px;
  border: 1px solid #fff;
  margin-top: 24px;
`;
export const ContainerPlayRadio = styled.View`
  align-items: center;
  margin-left: 20px;
  flex-direction: row;
`;

export const LogoImg = styled.Image`
  height: 30px;
  width: 60px;
  margin-right: 24px;
`;


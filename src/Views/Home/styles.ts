/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

export const Container = styled(LinearGradient).attrs({
  colors: ['#000000', '#333333'], // Substitua com as cores desejadas
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  align-items: center;
`;
export const ContainerHeader = styled.View`
  background-color: gray;
  width: 100%;
  height: 55%;
`;
export const ContainerHeaderText = styled.View`
  margin-top: 30%;

  justify-content: center;
  margin-left: 24px;
  margin-right: 80px;
`;
export const HeaderTitleText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
export const HeaderText = styled.Text`
  font-size: 17px;
`;
export const AudioVisuContainer = styled.View`align-items: center;
  flex-direction: row;`;
export const ButtonPlayer = styled.TouchableOpacity`
  margin-top: 16px;
  width: 72px;
  height: 28px;
  border-radius: 8px;
  background-color: #ea5d65;
  align-items: center;
  justify-content: center;
`;
export const ButtonPlayerText = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
  opacity: 0.8;
`;

export const ContainerLine = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 24px;
`;
export const Line = styled.View`
  width: 26px;
  height: 4px;
  border-radius: 2px;
  background-color: white;
  
`;
export const Line2 = styled.View`
  margin-left: 24px;
  width: 26px;
  height: 4px;
  background-color: white;
  border-radius: 2px;
  opacity: 0.5;
  margin-left: 8px;
`;

export const Line3 = styled.View`
  margin-left: 24px;
  width: 26px;
  height: 4px;
  background-color: white;
  border-radius: 2px;
  opacity: 0.5;
  margin-left: 8px;
`;

export const ContainerLogo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0};
  margin: 24px;
`;
export const ImageLogo = styled.Image`
  width: 100px;
  height: 50px;
`;
export const ContainerMenu = styled.View`
  flex-direction: row;
  
  align-items: center;
`;
export const MenuText = styled.Text`
margin-right: 16px;
font-weight:bold;
font-size: 20px;`;

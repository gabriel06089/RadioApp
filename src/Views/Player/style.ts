/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar} from 'react-native';
import normalize from 'react-native-normalize';
export const Container = styled(LinearGradient).attrs({
  colors: ['#FFC007', '#F4E72D'],
  start: {x: 0.5, y: 0},
  end: {x: 0.5, y: 1},
})`
  flex: 1;
`;
export const ContainerHeader = styled.View`
  flex-direction: row;
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight + 24 : 24}px;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerHome = styled.View`
  align-items: flex-start;
  padding-right: 24px;
`;
export const ContainerHome1 = styled.View`
  align-items: flex-end;

  padding-left: 24px;
`;
export const ContainerTextRadio = styled.View`
  align-items: center;
 
`;
export const TextRadio = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: black;
`;
export const TextRadioDesc = styled.Text`
  color: black;
`;
export const ContainerPhoto = styled.View`
  height: 45%;
  width: 75%;
  background-color: white;
  align-self: center;
  border-radius: 10px;
  margin-top: 50px;
`;
export const ImgPlus = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;
export const ContainerTextMusic = styled.View`
  align-self: center;
  margin-top: 50px;
  align-items: center;
`;
export const TextMusic = styled.Text`
  font-weight: bold;
  font-size: ${normalize(15)}px;
  color: black;
`;

export const TextMusicDesc = styled.Text`
  font-weight: bold;
  color: black;
  font-size: ${normalize(24)}px;
`;

export const TextMusicDescProg = styled.Text`
  font-weight: thin;
  color: black;
  font-size: ${normalize(15)}px;
`;
export const ContainerButtons = styled.View`
  margin-top: 50px;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;

  width: 80%;
  align-items: center;
`;
export const ButtonPlayer = styled.TouchableOpacity`
  height: 28px;

  align-items: center;
  justify-content: center;
`;

/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#FFD700', '#FFFF00'], 
  start: {x: 0.5, y: 0}, 
  end: {x: 0.5, y: 1},
})`
  flex: 1;
`;
export const ContainerHeader = styled.View`
  flex-direction: row;

  height: 70px;

  padding-top: 25px;

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
  margin-top: 12px;
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
  height: 350px;
  width: 300px;
  background-color: white;
  align-self: center;
  border-radius: 10px;
  margin-top: 50px;
`;
export const ImgPlus = styled.Image`
  width: 300px;
  height: 350px;
  border-radius: 12px;
`;
export const ContainerTextMusic = styled.View`
  align-self: center;
  margin-top: 50px;
  align-items: center;
`;
export const TextMusic = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: black;
`;
export const TextMusicDesc = styled.Text`
  font-weight: bold;
  color: black;
  font-size: 24px;
`;
export const TextMusicDescProg = styled.Text`
  font-weight: thin;
  color: black;
  font-size: 15px;
`;
export const ContainerButtons = styled.View`
  margin-top: 50px;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  width: 80%;
  align-items: center;
`;
export const ButtonPlayer = styled.TouchableOpacity`
  height: 28px;

  align-items: center;
  justify-content: center;
`;

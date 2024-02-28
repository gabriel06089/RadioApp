/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {StatusBar, Platform, Dimensions} from 'react-native';

export const Container = styled(LinearGradient).attrs({
  colors: ['#541084', '#9248FF'],
  start: {x: 0, y: 0.7}, //
  end: {x: 0, y: 1}, //
})`
  flex: 1.2;
`;
export const ContainerHeader = styled.View`
  background-color: #541084;
  width: 100%;
  height: 450px;
  position: relative;
`;
export const ContainerHeaderText = styled.View`
  position: absolute;
  bottom: 20px;

  justify-content: center;
  margin-left: 24px;
  margin-right: 80px;
`;
export const HeaderTitleText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;
export const HeaderText = styled.Text`
  font-size: 17px;
  color: white;
`;
export const AudioVisuContainer = styled.View`
  flex-direction: row;
`;
export const ButtonPlayer = styled.TouchableOpacity`
  margin-top: 16px;
  width: 72px;
  height: 28px;
  border-radius: 8px;
  background-color: red;
  align-items: center;
  justify-content: center;
`;
export const ButtonPlayerText = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
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

  margin-left: 8px;
`;

export const Line3 = styled.View`
  margin-left: 24px;
  width: 26px;
  height: 4px;
  background-color: white;
  border-radius: 2px;

  margin-left: 8px;
`;

export const ContainerLogo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${StatusBar.currentHeight}px;

  margin: 24px;
`;
export const ImageLogo = styled.Image`
  width: 100px;
  height: 50px;
`;
export const TextLogo = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: thin;
`;
export const ContainerImgPlus = styled.View`
  position: absolute;
  align-items: center;
  top: 105px;
  left: 0;
  right: 15px;

  z-index: -1;
`;
export const ImagePlus = styled.Image`
  width: 400px;
  height: 380px;
  padding-top: 14px;
`;

export const ImagePlusPlayer = styled.Image`
  width: ${Platform.OS === 'ios' ? '60px' : '80px'};
  height: ${Platform.OS === 'ios' ? '70px' : '60px'};
`;
export const ContainerMenu = styled.View`
  flex-direction: row;

  align-items: center;
`;
export const MenuText = styled.Text`
  margin-right: 16px;
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

export const MusicContainer = styled(LinearGradient).attrs({
  colors: ['#ffc007', '#f9e55c'], // Começa com a cor escura e vai para a cor clara
  start: {x: 0, y: 0}, // Começa à esquerda
  end: {x:3.5, y: 0}, // Termina à direita
})`
  position: absolute;

  bottom: 0px;
  width: 100%;
  flex-direction: row;
  background-color: #f9e55c;
  align-items: center;
  justify-content: space-between;
  height: ${Platform.OS === 'ios' ? '90px' : '70px'};

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const MusicPhotoContainer = styled.View`
  align-items: center;
  justify-content: center;
  
  width: 80px;
  height: 70px;
`;

export const MusicTextContainer = styled.View`
  margin-left: 10px;
  padding: 10px;
`;
export const ContainerLogoText = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const TitleRadioText = styled.Text`
  color: white;
  color: #541084;
  font-weight: bold;
  font-size: 18px;
`;

export const ArtistRadioText = styled.Text`

  color: white;
  color: #541084;
`;
export const ArtistRadioText1 = styled.Text`

margin-top: 5px;
  color: white;
  color: #541084;
`;
export const ContainerPlayerMusic = styled.View`
  margin-right: 22px;
`;

export const ContainerNoticias = styled.View`
  width: 100%;

  padding: 20px;
`;
export const ContainerMateria = styled.View`
  height: 100px;
  width: 200px;
  background-color: whitesmoke;
  flex-direction: column;
  border-radius: 8px;
`;
export const ContainerPromo = styled.View`
  height: 100px;
  width: 150px;
  background-color: whitesmoke;
  flex-direction: column;
  border-radius: 8px;
  margin-left: 24px;
`;
export const ImagePromo = styled.Image`
  height: 100px;
  width: 150px;
  border-radius: 8px;
`;
export const ImageMateria = styled.Image`
  height: 100px;
  width: 200px;
  border-radius: 8px;
`;
export const MateriaTitle = styled.Text`
  margin-bottom: 12px;
  margin-top: 12px;
  color: white;
`;
export const ContainerCarrousel = styled.View`
  flex-direction: row;
  width: 100%;
  margin-right: 24px;
`;
export const ContainerNoticiasColumn = styled.View`
  flex-direction: column;
  width: 200px;
  margin-left: 24px;
`;

export const ContainerBottom = styled.View`
  margin-bottom: 80px;
`;
export const ContainerLogoContato = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const LogoContato = styled.Image`
  height: 50px;
  width: 100px;
  margin-top: 24px;
`;
export const ContainerContato = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;

  flex-direction: row;
`;
export const BackgroundImG = styled.Image`
position: absolute;
 flex: 1;
  z-index: -1;
`;

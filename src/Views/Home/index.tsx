/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {
  AudioVisuContainer,
  ButtonPlayer,
  ButtonPlayerText,
  Container,
  ContainerHeader,
  ContainerHeaderText,
  ContainerLine,
  ContainerLogo,
  ContainerMenu,
  HeaderText,
  HeaderTitleText,
  ImageLogo,
  Line,
  Line2,
  MenuText,
} from './styles';
import Svg, { Rect } from 'react-native-svg';
const AudioVisualizer = () => {
  const [bars, setBars] = useState([1, 2, 3, 4, 5]); // Pode ajustar a quantidade de barras conforme necessário

  useEffect(() => {
    const interval = setInterval(() => {
      const newBars = bars.map(() => Math.random());
      setBars(newBars);
    }, 120); // Intervalo ajustado para 16 milissegundos (aproximadamente 60 FPS)

    return () => clearInterval(interval);
  }, [bars]);

  return (
    <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 16 }}>
      {bars.map((height, index) => (
        <Svg key={index} height="20" width="3">
          <Rect x="0" y={50 - height * 50} width="10" height={height * 50} fill="#fff" />
        </Svg>
      ))}
    </View>
  );
};

const HomeScreen = () => {

  return (
    <Container colors={['#000', '#333333']}>
      <ContainerHeader>
        <ContainerLogo>
          <ImageLogo source={require('../../../assets/plus-1.png')} />
          <ContainerMenu>
            <MenuText>CE - PLus</MenuText><MenuText>---/ </MenuText>
          </ContainerMenu>
        </ContainerLogo>

        <ContainerHeaderText>
          <HeaderTitleText>NO AR</HeaderTitleText>
          <HeaderText>Pediu, Tocou! A Plus toca aquela música favorita e você ainda ganha prêmios.</HeaderText>
          <AudioVisuContainer><ButtonPlayer><ButtonPlayerText>AO VIVO</ButtonPlayerText></ButtonPlayer>
            <AudioVisualizer /></AudioVisuContainer>
          <ContainerLine><Line /><Line2 /><Line2 /></ContainerLine>
        </ContainerHeaderText>

      </ContainerHeader>
      <Text>Conteúdo da HomeScreen</Text>
    </Container>
  );
};

export default HomeScreen;

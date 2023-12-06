/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, Easing, StatusBar } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { CaretDown } from 'phosphor-react-native';

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
  Line3,
  MenuText,
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const INTERVAL = 100;
const HEIGHT_MULTIPLIER = 45;

const AudioVisualizer = () => {
  const [bars, setBars] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBars = bars.map(() => Math.random());
      setBars(newBars);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [bars]);

  return (
    <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 16 }}>
      {bars.map((height, index) => (
        <Svg key={index} height="24" width="5">
          <Rect
            x="0"
            y={50 - Easing.bezier(0.42, 0, 0.58, 1)(height) * HEIGHT_MULTIPLIER}
            width="3"
            height={Easing.bezier(0.42, 0, 0.58, 1)(height) * HEIGHT_MULTIPLIER}
            rx="2" 
            ry="2" 
            fill="#fff"
          />
        </Svg>
      ))}
    </View>
  );
};

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [visibleLineIndex, setVisibleLineIndex] = useState(0);
  const [lineOpacities, setLineOpacities] = useState([1, 0.5, 0.5]);

  const headerTexts = [
    'Pediu, Tocou! A Plus toca aquela música favorita e você ainda ganha prêmios.',
    'Qual é a sua? A sua música favorita vale muitos prêmios.',
    'Bom demais Plus: O melhor da programação da Plus em uma hora sem qualquer intervalo',
  ];
  const headerTitleTexts = ['NO AR', 'NO AR', 'A SEGUIR'];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLineIndex(prevIndex => (prevIndex + 1) % 3);

      // Atualiza as opacidades das linhas com base no índice atual
      setLineOpacities(prevOpacities =>
        prevOpacities.map((_, index) => (index === visibleLineIndex ? 1 : 0.5)),
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [visibleLineIndex]);

  return (
    <Container colors={['#000', '#333333']}>
      <StatusBar animated={true}
        backgroundColor="transparent"

        translucent={true} />
      <ContainerHeader>
        <ContainerLogo>
          <ImageLogo source={require('../../../assets/plus-1.png')} />
          <ContainerMenu>
            <MenuText>CE - PLus</MenuText>
            <TouchableOpacity onPress={() => navigation.navigate('Radio')}>
              <CaretDown color="whitesmoke" weight="bold" size={20} />
            </TouchableOpacity>

          </ContainerMenu>
        </ContainerLogo>

        <ContainerHeaderText>
          <HeaderTitleText>
            {headerTitleTexts[visibleLineIndex]}
          </HeaderTitleText>
          <HeaderText>{headerTexts[visibleLineIndex]}</HeaderText>
          <AudioVisuContainer>
            <ButtonPlayer>
              <ButtonPlayerText>AO VIVO</ButtonPlayerText>
            </ButtonPlayer>
            <AudioVisualizer />
          </AudioVisuContainer>
          <ContainerLine>
            <Line style={{ opacity: lineOpacities[0] }} />
            <Line2 style={{ opacity: lineOpacities[1] }} />
            <Line3 style={{ opacity: lineOpacities[2] }} />
          </ContainerLine>
        </ContainerHeaderText>
      </ContainerHeader>
      <Text>Conteúdo da HomeScreen</Text>
    </Container>
  );
};

export default HomeScreen;

/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import { Text } from 'react-native';
import {
  Container,
  Titulo,
  ButtonPlayer,
  ContainerImgRadio,
  ContainerRadio,
  Line,
  ContainerButton,
  ContainerDescRadio,
  ContainerText,
  Subtitulo,
  ContainerHeader,
} from './styles';
import TrackPlayer from 'react-native-track-player';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);


  const setupTrackPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: 'radio',
      url: 'https://webradio.amsolution.com.br/radio/8020/plus',
      title: 'Radio Stream',
      artist: 'Your Radio Name',
    });
  };
  const setupTrackPlayer2 = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: 'radio2',
      url: 'https://webradio.amsolution.com.br/radio/8180/aracati',
      title: 'Radio Stream',
      artist: 'Your Radio Name',
    });
  };

  const togglePlay = async () => {
    if (!isPlaying) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
    setIsPlaying(!isPlaying);
  };
  const togglePlay2 = async () => {
    if (!isPlaying2) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
    setIsPlaying2(!isPlaying2);
  };

  // Setup TrackPlayer on component mount
  useEffect(() => {
    setupTrackPlayer();
    setupTrackPlayer2();
  }, []);


  return (

    <Container>
      <ContainerHeader>
        <Text>PlusAPP</Text>
      </ContainerHeader>

      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio />
          <ContainerText>
            <Titulo>Aracati</Titulo>
            <Subtitulo>98.1</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer onPress={togglePlay}>
          {isPlaying ? <Text> Parar </Text> : <Text> Ouvir </Text>}
        </ButtonPlayer>
      </ContainerRadio>

      <Line />
      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio />
          <ContainerText>
            <Titulo>Cariri</Titulo>
            <Subtitulo>100.5</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ContainerButton>
          <ButtonPlayer onPress={togglePlay2}>
            {isPlaying2 ? <Text> Parar </Text> : <Text> Ouvir </Text>}
          </ButtonPlayer>

        </ContainerButton>
      </ContainerRadio>

      <Line />
      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio />
          <ContainerText>
            <Titulo>Crateús</Titulo>
            <Subtitulo>93.3</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer onPress={togglePlay}>
          {isPlaying ? <Text> Ouvir </Text> : <Text>Parar </Text>}
        </ButtonPlayer>
      </ContainerRadio>

      <Line />
      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio />
          <ContainerText>
            <Titulo>Iguatú/Cariiús</Titulo>
            <Subtitulo>91.5</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer onPress={togglePlay}>
          {isPlaying ? <Text> Ouvir </Text> : <Text>Parar </Text>}
        </ButtonPlayer>
      </ContainerRadio>

      <Line />
      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio />
          <ContainerText>
            <Titulo>Paraipaba</Titulo>
            <Subtitulo>88.7</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer onPress={togglePlay}>
          {isPlaying ? <Text> Ouvir </Text> : <Text>Parar </Text>}
        </ButtonPlayer>
      </ContainerRadio>

      <Line />

      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio />
          <ContainerText>
            <Titulo>Redenção</Titulo>
            <Subtitulo>98.7</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer onPress={togglePlay}>
          {isPlaying ? <Text> Ouvir </Text> : <Text>Parar </Text>}
        </ButtonPlayer>
      </ContainerRadio>

      <Line />

    </Container>
  );
}

/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import TrackPlayer, { Event } from 'react-native-track-player';
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
  ButtonPlayerText,
} from './styles';

export default function RadioScreen() {
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
    if (isPlaying) {
      await TrackPlayer.stop();
    } else {
      await TrackPlayer.play();
      console.log('Radio PlusAPP is playing');
    }
    setIsPlaying(!isPlaying);
  };

  const togglePlay2 = async () => {
    if (isPlaying2) {
      await TrackPlayer.stop();
    } else {
      await TrackPlayer.play();
      console.log('Radio Aracati is playing');
    }
    setIsPlaying2(!isPlaying2);
  };

  useEffect(() => {
    setupTrackPlayer();
    setupTrackPlayer2();

    const trackChangedListener = TrackPlayer.addEventListener(Event.PlaybackTrackChanged, handleTrackChanged);
    const playbackStateListener = TrackPlayer.addEventListener(Event.PlaybackState, handlePlaybackState);
    const playbackEndListener = TrackPlayer.addEventListener(Event.PlaybackQueueEnded, handlePlaybackEnd);
    const playbackErrorListener = TrackPlayer.addEventListener(Event.PlaybackError, handlePlaybackError);

    return () => {
      trackChangedListener.remove();
      playbackStateListener.remove();
      playbackEndListener.remove();
      playbackErrorListener.remove();
    };
  }, []);

  const handleTrackChanged = async (e: { nextTrack: any; }) => {
    console.log(`Track changed to ${e.nextTrack}`);
  };

  const handlePlaybackState = (e: { state: any; }) => {
    console.log(`Playback state changed to ${e.state}`);
  };

  const handlePlaybackEnd = () => {
    console.log('Playback ended');
  };

  const handlePlaybackError = (e: { error: any; }) => {
    console.log(`Playback error: ${e.error}`);
  };
  return (
    <Container colors={['#000', '#333333']}>
      <ContainerHeader>
        <Text>PlusAPP</Text>
      </ContainerHeader>

      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio colors={['#ff6347', '#ffa500']} />

          <ContainerText>
            <Titulo>Aracati</Titulo>
            <Subtitulo>98.1</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer onPress={togglePlay}>
          {isPlaying ? <ButtonPlayerText> Parar </ButtonPlayerText> : <ButtonPlayerText> Ouvir </ButtonPlayerText>}
        </ButtonPlayer>
      </ContainerRadio>


      <Line />
      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio colors={['#3498db', '#2ecc71']} />

          <ContainerText>
            <Titulo>Cariri</Titulo>
            <Subtitulo>100.5</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ContainerButton>
          <ButtonPlayer onPress={togglePlay2}>
            {isPlaying2 ? <ButtonPlayerText> Parar </ButtonPlayerText> : <ButtonPlayerText> Ouvir </ButtonPlayerText>}
          </ButtonPlayer>

        </ContainerButton>
      </ContainerRadio>

      <Line />
      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio colors={['#f39c12', '#e67e22']} />

          <ContainerText>
            <Titulo>Crateús</Titulo>
            <Subtitulo>93.3</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer onPress={togglePlay}>
          {isPlaying ? <ButtonPlayerText> Parar </ButtonPlayerText> : <ButtonPlayerText> Ouvir </ButtonPlayerText>}
        </ButtonPlayer>
      </ContainerRadio>

      <Line />
      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio colors={['#e74c3c', '#f39c12']} />



          <ContainerText>
            <Titulo>Iguatú/Cariiús</Titulo>
            <Subtitulo>91.5</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer onPress={togglePlay}>
          {isPlaying ? <ButtonPlayerText> Ouvir </ButtonPlayerText> : <ButtonPlayerText>Parar </ButtonPlayerText>}
        </ButtonPlayer>
      </ContainerRadio>

      <Line />
      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio colors={['#3498db', '#8e44ad']} />

          <ContainerText>
            <Titulo>Paraipaba</Titulo>
            <Subtitulo>88.7</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer onPress={togglePlay}>
          {isPlaying ? <ButtonPlayerText> Ouvir </ButtonPlayerText> : <ButtonPlayerText>Parar </ButtonPlayerText>}
        </ButtonPlayer>
      </ContainerRadio>

      <Line />

      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio colors={['#2ecc71', '#3498db']} />

          <ContainerText>
            <Titulo>Redenção</Titulo>
            <Subtitulo>98.7</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer onPress={togglePlay}>
          {isPlaying ? <ButtonPlayerText> Ouvir </ButtonPlayerText> : <ButtonPlayerText>Parar </ButtonPlayerText>}
        </ButtonPlayer>
      </ContainerRadio>

      <Line />

    </Container>
  );
}
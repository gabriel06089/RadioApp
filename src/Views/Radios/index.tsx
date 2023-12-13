/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar} from 'react-native';
import {useAudioPlayer} from '../../Context/AudioPlayerContext';
import {TouchableOpacity, ScrollView} from 'react-native';
import {
  Container,
  Titulo,
  ContainerImgRadio,
  ContainerRadio,
  Line,
  ContainerButton,
  ContainerDescRadio,
  ContainerText,
  Subtitulo,
  ContainerHeader,
  ContainerNavigation,
  ContainerHeaderText,
  HeaderText,
  Line2,
  ImageLogo,
  ContainerPlayer,
} from './styles';
import {CaretDown} from 'phosphor-react-native';

import PlayPauseButton from './buttonPlayer';

export default function RadioScreen({navigation}: {navigation: any}) {
  const {setIsPlaying, setCurrentTrack} = useAudioPlayer();
  const handlePlay = () => {
    setIsPlaying(true); // Atualize o estado de reprodução quando necessário
  };
  const handlePlayerNavigation = (track: any) => {
    setCurrentTrack(track); // Defina a faixa atual
    navigation.navigate('Player', {track});
  };

  const aracatiTrack = {
    id: 1,
    url: 'https://webradio.amsolution.com.br/radio/8180/aracati',
    title: 'Radio Aracati',
    artist: 'Radio Aracati',
    isPlaying: false,
  };

  const plusTrack = {
    id: 2,
    url: 'https://webradio.amsolution.com.br/radio/8020/plus',
    title: 'Radio Plus',
    artist: 'Radio Plus',
    isPlaying: false,
  };
  const caririTrack = {
    id: 3,
    url: 'https://webradio.amsolution.com.br/radio/8140/cariri',
    title: 'Radio Cariri',
    artist: 'Radio Cariri',
    isPlaying: false,
  };
  const cascavelTrack = {
    id: 4,
    url: 'https://webradio.amsolution.com.br/radio/8110/catarina',
    title: 'Radio Catarina',
    artist: 'Radio Catarina',
    isPlaying: false,
  };
  const crateusTrack = {
    id: 5,
    url: 'https://webradio.amsolution.com.br/radio/8120/crateus',
    title: 'Radio Crateus',
    artist: 'Radio Crateus',
    isPlaying: false,
  };
  const iguatuTrack = {
    id: 6,
    url: 'https://webradio.amsolution.com.br/radio/8070/iguatu',
    title: 'Radio Iguatu',
    artist: 'Radio Iguatu',
    isPlaying: false,
  };
  const pacajusTrack = {
    id: 7,
    url: 'https://webradio.amsolution.com.br/radio/8130/pacajus',
    title: 'Radio Pacajus',
    artist: 'Radio Pacajus',
    isPlaying: false,
  };
  const paraipabaTrack = {
    id: 8,
    url: 'https://webradio.amsolution.com.br/radio/8150/paraipaba',
    title: 'Radio Paraipaba',
    artist: 'Radio Paraipaba',
    isPlaying: false,
  };
  const santaQuiteriaTrack = {
    id: 9,
    url: 'https://webradio.amsolution.com.br/radio/8170/santaquiteria',
    title: 'Radio SantaQuiteria',
    artist: 'Radio SantaQuiteria',
    isPlaying: false,
  };
  const sobralTrack = {
    id: 10,
    url: 'https://webradio.amsolution.com.br/radio/8030/sobral',
    title: 'Radio Sobral',
    artist: 'Radio Sobral',
    isPlaying: false,
  };
  const redencaoTrack = {
    id: 11,
    url: 'https://webradio.amsolution.com.br/radio/8090/redencao',
    title: 'Radio Redencao',
    artist: 'Radio Redencao',
    isPlaying: false,
  };
  const catarinaTrack = {
    id: 12,
    url: 'https://webradio.amsolution.com.br/radio/8110/catarina',
    title: 'Radio Catarina',
    artist: 'Radio Catarina',
    isPlaying: false,
  };

  return (
    <Container colors={['#000', '#333333']}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        translucent={true}
      />

      <ContainerHeader>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <ContainerNavigation>
            <CaretDown color="whitesmoke" weight="bold" />
          </ContainerNavigation>
        </TouchableOpacity>
        <ContainerHeaderText>
          <HeaderText>AFILIADOS</HeaderText>
        </ContainerHeaderText>
      </ContainerHeader>

      <ScrollView>
        <TouchableOpacity onPress={() => handlePlayerNavigation(aracatiTrack)}>
          <ContainerRadio>
            <ContainerDescRadio>
              <ContainerImgRadio colors={['#541084', '#ff4500']}>
                <ImageLogo source={require('../../../assets/plus-1.png')} />
              </ContainerImgRadio>

              <ContainerText>
                <Titulo>Aracati</Titulo>
                <Subtitulo>98.1</Subtitulo>
              </ContainerText>
            </ContainerDescRadio>
            <ContainerPlayer />
          </ContainerRadio>
        </TouchableOpacity>
        <PlayPauseButton track={aracatiTrack} />
        <Line />

        <TouchableOpacity onPress={() => handlePlayerNavigation(caririTrack)}>
          <ContainerRadio>
            <ContainerDescRadio>
              <ContainerImgRadio colors={['#541084', '#000000']}>
                <ImageLogo source={require('../../../assets/plus-1.png')} />
              </ContainerImgRadio>

              <ContainerText>
                <Titulo>Cariri</Titulo>
                <Subtitulo>100.5</Subtitulo>
              </ContainerText>
            </ContainerDescRadio>
            <ContainerButton>
              <ContainerPlayer />
            </ContainerButton>
          </ContainerRadio>
        </TouchableOpacity>

        <Line />
        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#f39c12', '#e67e22']}>
              <ImageLogo source={require('../../../assets/plus-1.png')} />
            </ContainerImgRadio>

            <ContainerText>
              <Titulo>Crateús</Titulo>
              <Subtitulo>93.3</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <ContainerPlayer />
        </ContainerRadio>

        <Line />

        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#e74c3c', '#f39c12']}>
              <ImageLogo source={require('../../../assets/plus-1.png')} />
            </ContainerImgRadio>

            <ContainerText>
              <Titulo>Iguatú/Cariús</Titulo>
              <Subtitulo>91.5</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <ContainerPlayer />
        </ContainerRadio>

        <Line />
        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#3498db', '#8e44ad']}>
              <ImageLogo source={require('../../../assets/plus-1.png')} />
            </ContainerImgRadio>

            <ContainerText>
              <Titulo>Paraipaba</Titulo>
              <Subtitulo>88.7</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <ContainerPlayer />
        </ContainerRadio>

        <Line />

        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#ff6347', '#ffa500']}>
              <ImageLogo source={require('../../../assets/plus-1.png')} />
            </ContainerImgRadio>

            <ContainerText>
              <Titulo>Redenção</Titulo>
              <Subtitulo>98.7</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <ContainerPlayer />
        </ContainerRadio>

        <Line />

        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#f39c12', '#e67e22']}>
              <ImageLogo source={require('../../../assets/plus-1.png')} />
            </ContainerImgRadio>

            <ContainerText>
              <Titulo>Cascavel</Titulo>
              <Subtitulo>98.7</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <ContainerPlayer />
        </ContainerRadio>

        <Line />

        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#e74c3c', '#f39c12']}>
              <ImageLogo source={require('../../../assets/plus-1.png')} />
            </ContainerImgRadio>

            <ContainerText>
              <Titulo>Pacajus</Titulo>
              <Subtitulo>98.7</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <ContainerPlayer />
        </ContainerRadio>

        <Line />

        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#3498db', '#8e44ad']}>
              <ImageLogo source={require('../../../assets/plus-1.png')} />
            </ContainerImgRadio>

            <ContainerText>
              <Titulo>Santa Quitéria</Titulo>
              <Subtitulo>98.7</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <ContainerPlayer />
        </ContainerRadio>

        <Line />

        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#27ae60', '#2980b9']}>
              <ImageLogo source={require('../../../assets/plus-1.png')} />
            </ContainerImgRadio>

            <ContainerText>
              <Titulo>Sobral</Titulo>
              <Subtitulo>98.7</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <ContainerPlayer />
        </ContainerRadio>

        <Line />
        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#27ae60', '#2980b9']}>
              <ImageLogo source={require('../../../assets/plus-1.png')} />
            </ContainerImgRadio>

            <ContainerText>
              <Titulo>Catarina</Titulo>
              <Subtitulo>98.7</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <ContainerPlayer />
        </ContainerRadio>

        <Line />
        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#27ae60', '#2980b9']}>
              <ImageLogo source={require('../../../assets/plus-1.png')} />
            </ContainerImgRadio>

            <ContainerText>
              <Titulo>Plus</Titulo>
              <Subtitulo>98.7</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <ContainerPlayer />
        </ContainerRadio>

        <Line2 />
      </ScrollView>
    </Container>
  );
}

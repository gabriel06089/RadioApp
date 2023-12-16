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

export default function RadioScreen({navigation}: {navigation: any}) {
  const {setIsPlaying, setCurrentTrack} = useAudioPlayer();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handlePlay = () => {
    setIsPlaying(true); // Atualize o estado de reprodução quando necessário
  };
  const handlePlayerNavigation = (track: any) => {
    setCurrentTrack(track); // Defina a faixa atual
    navigation.navigate('Player', {track});
  };
  const currentHour = new Date().getHours();
  const currentDay = new Date().getDay();
  let artist = 'Radio Plus';

  if (currentHour >= 0 && currentHour < 5) {
    artist = 'Corujao da Plus';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 5 &&
    currentHour < 6
  ) {
    artist = 'Clube Plus';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 6 &&
    currentHour < 7
  ) {
    artist = 'Deu B.O.';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 7 &&
    currentHour < 8
  ) {
    artist = 'Ceara News';
  } else if (
    currentDay >= 1 &&
    currentDay <= 6 &&
    currentHour >= 8 &&
    currentHour < 9
  ) {
    artist = 'Ao Colo de Jesus e Maria';
  } else if (
    currentDay >= 1 &&
    currentDay <= 6 &&
    currentHour >= 9 &&
    currentHour < 11
  ) {
    artist = 'Manha da Plus';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 12 &&
    currentHour < 14
  ) {
    artist = 'Redação da Plus';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 14 &&
    currentHour < 17
  ) {
    artist = 'Tarde Plus';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 17 &&
    currentHour < 18
  ) {
    artist = 'Ta Todo Mundo Plus';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 18 &&
    currentHour < 19
  ) {
    artist = 'As Mais Pedidas';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 20 &&
    currentHour < 22
  ) {
    artist = 'Plus Mania';
  } else if (currentDay === 6 && currentHour >= 12 && currentHour < 14) {
    artist = 'Festa Plus';
  } else if (currentDay === 6 && currentHour >= 21 && currentHour < 22) {
    artist = 'Time Machine';
  } else if (currentDay === 6 && currentHour >= 22 && currentHour < 24) {
    artist = 'Upgrade';
  } else if (
    currentDay === 0 &&
    ((currentHour >= 5 && currentHour < 8) ||
      (currentHour >= 20 && currentHour < 22))
  ) {
    artist = 'Playlist da Plus';
  } else if (currentDay === 0 && currentHour >= 8 && currentHour < 9) {
    artist = 'Terço da Misericordia';
  } else if (currentDay === 0 && currentHour >= 10 && currentHour < 15) {
    artist = 'Domingao da Plus';
  } else if (currentDay === 0 && currentHour >= 15 && currentHour < 19) {
    artist = 'Mega Plus';
  } else if (currentDay === 0 && currentHour >= 19 && currentHour < 20) {
    artist = 'A Grande Hora';
  } else if (currentDay === 0 && currentHour >= 22 && currentHour < 24) {
    artist = 'Sem Limites Para Amar';
  }
  const aracatiTrack = {
    id: 1,
    url: 'https://webradio.amsolution.com.br/radio/8180/aracati',
    title: 'Plus Aracati',
    artist: artist,
    isPlaying: false,
    artwork: require('../../../assets/pluzinho.png'),
    frequency: '98.1',
  };

  const plusTrack = {
    id: 2,
    url: 'https://webradio.amsolution.com.br/radio/8020/plus',
    title: 'Radio Plus',
    artist: artist,
    isPlaying: false,
    artwork: require('../../../assets/pluzinho.png'),
  };
  const caririTrack = {
    id: 3,
    url: 'https://webradio.amsolution.com.br/radio/8140/cariri',
    title: 'Radio Cariri',
    artist: artist,
    isPlaying: false,
    artwork: require('../../../assets/pluzinho.png'),
    frequency: '97.1',
  };
  const cascavelTrack = {
    id: 4,
    url: 'https://webradio.amsolution.com.br/radio/8110/catarina',
    title: 'Radio Catarina',
    artist: artist,
    isPlaying: false,
    artwork: require('../../../assets/pluzinho.png'),
    frequency: '106.1',
  };
  const crateusTrack = {
    id: 5,
    url: 'https://webradio.amsolution.com.br/radio/8120/crateus',
    title: 'Radio Crateus',
    artist: artist,
    isPlaying: false,
    artwork: require('../../../assets/pluzinho.png'),
    frequency: '93.3',
  };
  const iguatuTrack = {
    id: 6,
    url: 'https://webradio.amsolution.com.br/radio/8070/iguatu',
    title: 'Radio Iguatu',
    artist: artist,
    isPlaying: false,
    artwork: require('../../../assets/pluzinho.png'),

    frequency: '98.5',
  };
  const pacajusTrack = {
    id: 7,
    url: 'https://webradio.amsolution.com.br/radio/8130/pacajus',
    title: 'Radio Pacajus',
    artist: artist,
    isPlaying: false,
    artwork: require('../../../assets/pluzinho.png'),
    frequency: '99.5',
  };
  const paraipabaTrack = {
    id: 8,
    url: 'https://webradio.amsolution.com.br/radio/8150/paraipaba',
    title: 'Radio Paraipaba',
    artist: artist,
    isPlaying: false,
    artwork: require('../../../assets/pluzinho.png'),
    frequency: '88.7',
  };
  const santaQuiteriaTrack = {
    id: 9,
    url: 'https://webradio.amsolution.com.br/radio/8170/santaquiteria',
    title: 'Radio SantaQuiteria',
    artist: artist,
    isPlaying: false,
    artwork: require('../../../assets/pluzinho.png'),
    frequency: '106.5',
  };
  const sobralTrack = {
    id: 10,
    url: 'https://webradio.amsolution.com.br/radio/8030/sobral',
    title: 'Radio Sobral',
    artist: artist,
    isPlaying: false,
    artwork: require('../../../assets/pluzinho.png'),
    frequency: '105.1',
  };
  const redencaoTrack = {
    id: 11,
    url: 'https://webradio.amsolution.com.br/radio/8090/redencao',
    title: 'Radio Redencao',
    artist: artist,
    isPlaying: false,
    artwork: require('../../../assets/pluzinho.png'),
    frequency: '98.7',
  };
  const catarinaTrack = {
    id: 12,
    url: 'https://webradio.amsolution.com.br/radio/8110/catarina',
    title: 'Radio Catarina',
    artist: artist,
    isPlaying: false,
    artwork: require('../../../assets/pluzinho.png'),
    frequency: '88.7',
  };

  return (
    <Container colors={['#000', '#333333']}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        translucent={true}
      />

      <ContainerHeader>
        <ContainerHeaderText>
          <HeaderText>Radios</HeaderText>
        </ContainerHeaderText>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <ContainerNavigation>
            <CaretDown color="whitesmoke" weight="bold" />
          </ContainerNavigation>
        </TouchableOpacity>
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

        <TouchableOpacity onPress={() => handlePlayerNavigation(crateusTrack)}>
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
        </TouchableOpacity>

        <Line />

        <TouchableOpacity onPress={() => handlePlayerNavigation(iguatuTrack)}>
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
        </TouchableOpacity>

        <Line />

        <TouchableOpacity
          onPress={() => handlePlayerNavigation(paraipabaTrack)}>
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
        </TouchableOpacity>

        <Line />

        <TouchableOpacity onPress={() => handlePlayerNavigation(redencaoTrack)}>
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
        </TouchableOpacity>

        <Line />

        <TouchableOpacity onPress={() => handlePlayerNavigation(cascavelTrack)}>
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
        </TouchableOpacity>

        <Line />

        <TouchableOpacity onPress={() => handlePlayerNavigation(pacajusTrack)}>
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
        </TouchableOpacity>

        <Line />

        <TouchableOpacity
          onPress={() => handlePlayerNavigation(santaQuiteriaTrack)}>
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
        </TouchableOpacity>

        <Line />

        <TouchableOpacity onPress={() => handlePlayerNavigation(sobralTrack)}>
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
        </TouchableOpacity>

        <Line />

        <TouchableOpacity onPress={() => handlePlayerNavigation(catarinaTrack)}>
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
        </TouchableOpacity>

        <Line />

        <TouchableOpacity onPress={() => handlePlayerNavigation(plusTrack)}>
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
        </TouchableOpacity>
        <Line2 />
      </ScrollView>
    </Container>
  );
}

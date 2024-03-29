/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {useAudioPlayer} from '../../../Context/AudioPlayerContext';
import {TouchableOpacity, ScrollView} from 'react-native';
import {
  Container,
  Titulo,
  ContainerRadio,
  ContainerText,
  Subtitulo,
  ContainerHeader,
  ContainerNavigation,
  Line2,
  ContainerList,
  ContainerPlayRadio,
  LogoImg,
} from './styles';
import {ArrowCircleLeft, PlayCircle} from 'phosphor-react-native';

export default function RadioList({navigation}: {navigation: any}) {
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
  let artist = 'Rádio Plus';

  const plusTrack = {
    id: 2,
    url: 'https://webradio.amsolution.com.br/radio/8020/plus',
    title: 'Plus FM',
    artist: artist,
    isPlaying: false,
    artwork: 'https://plusfm.com.br/Imagens/artwork.jpeg',
    frequency: 'Rede',
  };
  const caririTrack = {
    id: 3,
    url: 'https://webradio.amsolution.com.br/radio/8140/cariri',
    title: 'Plus Cariri',
    artist: artist,
    isPlaying: false,
    artwork: 'https://plusfm.com.br/Imagens/artwork.jpeg',
    frequency: '97.1',
  };
  const iguatuTrack = {
    id: 6,
    url: 'https://webradio.amsolution.com.br/radio/8070/iguatu',
    title: 'Plus Iguatu',
    artist: artist,
    isPlaying: false,
    artwork: 'https://plusfm.com.br/Imagens/artwork.jpeg',

    frequency: '91.5',
  };

  if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 12 &&
    currentHour < 13 &&
    (plusTrack.isPlaying || iguatuTrack.isPlaying || caririTrack.isPlaying)
  ) {
    artist = 'Sem Limites Para Amar';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 13 &&
    currentHour < 14 &&
    (plusTrack.isPlaying || iguatuTrack.isPlaying || caririTrack.isPlaying)
  ) {
    artist = 'Plus FM';
  } else if (
    currentDay >= 0 &&
    currentDay <= 6 &&
    currentHour >= 0 &&
    currentHour < 5
  ) {
    artist = 'Corujão da Plus';
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
    artist = 'Ceará News';
  } else if (
    currentDay >= 1 &&
    currentDay <= 6 &&
    currentHour >= 8 &&
    currentHour < 9
  ) {
    artist = 'No Colo de Jesus e Maria';
  } else if (
    currentDay >= 1 &&
    currentDay <= 6 &&
    currentHour >= 9 &&
    currentHour < 11
  ) {
    artist = 'Manhã da Plus';
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
    artist = 'Tá Todo Mundo Plus';
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
    artist = 'Terço da Misericórdia';
  } else if (currentDay === 0 && currentHour >= 10 && currentHour < 15) {
    artist = 'Domingão da Plus';
  } else if (currentDay === 0 && currentHour >= 15 && currentHour < 19) {
    artist = 'Mega Plus';
  } else if (currentDay === 0 && currentHour >= 19 && currentHour < 20) {
    artist = 'A Grande Hora';
  } else if (currentDay === 0 && currentHour >= 22 && currentHour < 24) {
    artist = 'Sem Limites Para Amar';
  } else if (
    currentDay >= 1 &&
    currentDay <= 6 &&
    currentHour >= 11 &&
    currentHour < 12
  ) {
    artist = 'As melhores da Plus';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 22 &&
    currentHour < 24
  ) {
    artist = 'Slow Motion';
  }
  const aracatiTrack = {
    id: 1,
    url: 'https://webradio.amsolution.com.br/radio/8180/aracati',
    title: 'Plus Aracati',
    artist: artist,
    isPlaying: false,
    artwork: 'https://plusfm.com.br/Imagens/artwork.jpeg',
    frequency: '98.1',
  };

  const cascavelTrack = {
    id: 4,
    url: 'https://webradio.amsolution.com.br/radio/8160/cascavel',
    title: 'Plus Cascavel',
    artist: artist,
    isPlaying: false,
    artwork: 'https://plusfm.com.br/Imagens/artwork.jpeg',
    frequency: '106.1',
  };
  const crateusTrack = {
    id: 5,
    url: 'https://webradio.amsolution.com.br/radio/8120/crateus',
    title: 'Plus Crateús',
    artist: artist,
    isPlaying: false,
    artwork: 'https://plusfm.com.br/Imagens/artwork.jpeg',
    frequency: '93.3',
  };

  const pacajusTrack = {
    id: 7,
    url: 'https://webradio.amsolution.com.br/radio/8130/pacajus',
    title: 'Plus Pacajus',
    artist: artist,
    isPlaying: false,
    artwork: 'https://plusfm.com.br/Imagens/artwork.jpeg',
    frequency: '99.5',
  };
  const paraipabaTrack = {
    id: 8,
    url: 'https://webradio.amsolution.com.br/radio/8150/paraipaba',
    title: 'Plus Paraipaba',
    artist: artist,
    isPlaying: false,
    artwork: 'https://plusfm.com.br/Imagens/artwork.jpeg',
    frequency: '88.7',
  };
  const santaQuiteriaTrack = {
    id: 9,
    url: 'https://webradio.amsolution.com.br/radio/8170/santaquiteria',
    title: 'Plus Santa Quitéria',
    artist: artist,
    isPlaying: false,
    artwork: 'https://plusfm.com.br/Imagens/artwork.jpeg',
    frequency: '106.5',
  };
  const sobralTrack = {
    id: 10,
    url: 'https://webradio.amsolution.com.br/radio/8030/sobral',
    title: 'Plus Sobral',
    artist: artist,
    isPlaying: false,
    artwork: 'https://plusfm.com.br/Imagens/artwork.jpeg',
    frequency: '105.1',
  };
  const redencaoTrack = {
    id: 11,
    url: 'https://webradio.amsolution.com.br/radio/8090/redencao',
    title: 'Plus Redenção',
    artist: artist,
    isPlaying: false,
    artwork: 'https://plusfm.com.br/Imagens/artwork.jpeg',
    frequency: '98.7',
  };
  const catarinaTrack = {
    id: 12,
    url: 'https://webradio.amsolution.com.br/radio/8110/catarina',
    title: 'Plus Catarina',
    artist: artist,
    isPlaying: false,
    artwork: 'https://plusfm.com.br/Imagens/artwork.jpeg',
    frequency: '88.7',
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <Container colors={['#000', '#333333']}>
        <StatusBar
          animated={true}
          backgroundColor="transparent"
          translucent={true}
        />

        <ContainerHeader>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{width: '100%'}}>
            <ContainerNavigation>
              <ArrowCircleLeft color="whitesmoke" weight="bold" size={35} />
            </ContainerNavigation>
          </TouchableOpacity>
        </ContainerHeader>
        <ScrollView>
          <TouchableOpacity onPress={() => handlePlayerNavigation(plusTrack)}>
            <ContainerRadio>
              <ContainerList>
                <ContainerPlayRadio>
                  <PlayCircle size={40} weight={'duotone'} color={'white'} />
                  <ContainerText>
                    <Titulo>Plus</Titulo>
                    <Subtitulo>Rede</Subtitulo>
                  </ContainerText>
                </ContainerPlayRadio>
                <LogoImg source={require('../../../../assets/plus-1.png')} />
              </ContainerList>
            </ContainerRadio>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePlayerNavigation(sobralTrack)}>
            <ContainerRadio>
              <ContainerList>
                <ContainerPlayRadio>
                  <PlayCircle size={40} weight={'duotone'} color={'white'} />
                  <ContainerText>
                    <Titulo>Sobral</Titulo>
                    <Subtitulo>{sobralTrack?.frequency}</Subtitulo>
                  </ContainerText>
                </ContainerPlayRadio>
                <LogoImg source={require('../../../../assets/plus-1.png')} />
              </ContainerList>
            </ContainerRadio>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePlayerNavigation(caririTrack)}>
            <ContainerRadio>
              <ContainerList>
                <ContainerPlayRadio>
                  <PlayCircle size={40} weight={'duotone'} color={'white'} />
                  <ContainerText>
                    <Titulo>Cariri</Titulo>
                    <Subtitulo>{caririTrack?.frequency}</Subtitulo>
                  </ContainerText>
                </ContainerPlayRadio>
                <LogoImg source={require('../../../../assets/plus-1.png')} />
              </ContainerList>
            </ContainerRadio>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePlayerNavigation(aracatiTrack)}>
            <ContainerRadio>
              <ContainerList>
                <ContainerPlayRadio>
                  <PlayCircle size={40} weight={'duotone'} color={'white'} />
                  <ContainerText>
                    <Titulo>Aracati</Titulo>
                    <Subtitulo>{aracatiTrack?.frequency}</Subtitulo>
                  </ContainerText>
                </ContainerPlayRadio>
                <LogoImg source={require('../../../../assets/plus-1.png')} />
              </ContainerList>
            </ContainerRadio>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePlayerNavigation(cascavelTrack)}>
            <ContainerRadio>
              <ContainerList>
                <ContainerPlayRadio>
                  <PlayCircle size={40} weight={'duotone'} color={'white'} />
                  <ContainerText>
                    <Titulo>Cascavel</Titulo>
                    <Subtitulo>{cascavelTrack?.frequency}</Subtitulo>
                  </ContainerText>
                </ContainerPlayRadio>
                <LogoImg source={require('../../../../assets/plus-1.png')} />
              </ContainerList>
            </ContainerRadio>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePlayerNavigation(crateusTrack)}>
            <ContainerRadio>
              <ContainerList>
                <ContainerPlayRadio>
                  <PlayCircle size={40} weight={'duotone'} color={'white'} />
                  <ContainerText>
                    <Titulo>Crateús</Titulo>
                    <Subtitulo>{crateusTrack?.frequency}</Subtitulo>
                  </ContainerText>
                </ContainerPlayRadio>
                <LogoImg source={require('../../../../assets/plus-1.png')} />
              </ContainerList>
            </ContainerRadio>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePlayerNavigation(iguatuTrack)}>
            <ContainerRadio>
              <ContainerList>
                <ContainerPlayRadio>
                  <PlayCircle size={40} weight={'duotone'} color={'white'} />
                  <ContainerText>
                    <Titulo>Iguatu</Titulo>
                    <Subtitulo>{iguatuTrack?.frequency}</Subtitulo>
                  </ContainerText>
                </ContainerPlayRadio>
                <LogoImg source={require('../../../../assets/plus-1.png')} />
              </ContainerList>
            </ContainerRadio>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePlayerNavigation(pacajusTrack)}>
            <ContainerRadio>
              <ContainerList>
                <ContainerPlayRadio>
                  <PlayCircle size={40} weight={'duotone'} color={'white'} />
                  <ContainerText>
                    <Titulo>Pacajus</Titulo>
                    <Subtitulo>{pacajusTrack?.frequency}</Subtitulo>
                  </ContainerText>
                </ContainerPlayRadio>
                <LogoImg source={require('../../../../assets/plus-1.png')} />
              </ContainerList>
            </ContainerRadio>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePlayerNavigation(paraipabaTrack)}>
            <ContainerRadio>
              <ContainerList>
                <ContainerPlayRadio>
                  <PlayCircle size={40} weight={'duotone'} color={'white'} />
                  <ContainerText>
                    <Titulo>Paraipaba</Titulo>
                    <Subtitulo>{paraipabaTrack?.frequency}</Subtitulo>
                  </ContainerText>
                </ContainerPlayRadio>
                <LogoImg source={require('../../../../assets/plus-1.png')} />
              </ContainerList>
            </ContainerRadio>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePlayerNavigation(redencaoTrack)}>
            <ContainerRadio>
              <ContainerList>
                <ContainerPlayRadio>
                  <PlayCircle size={40} weight={'duotone'} color={'white'} />
                  <ContainerText>
                    <Titulo>Redenção</Titulo>
                    <Subtitulo>{redencaoTrack?.frequency}</Subtitulo>
                  </ContainerText>
                </ContainerPlayRadio>
                <LogoImg source={require('../../../../assets/plus-1.png')} />
              </ContainerList>
            </ContainerRadio>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePlayerNavigation(santaQuiteriaTrack)}>
            <ContainerRadio>
              <ContainerList>
                <ContainerPlayRadio>
                  <PlayCircle size={40} weight={'duotone'} color={'white'} />
                  <ContainerText>
                    <Titulo>Santa Quitéria</Titulo>
                    <Subtitulo>{santaQuiteriaTrack?.frequency}</Subtitulo>
                  </ContainerText>
                </ContainerPlayRadio>
                <LogoImg source={require('../../../../assets/plus-1.png')} />
              </ContainerList>
            </ContainerRadio>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePlayerNavigation(catarinaTrack)}>
            <ContainerRadio>
              <ContainerList>
                <ContainerPlayRadio>
                  <PlayCircle size={40} weight={'duotone'} color={'white'} />
                  <ContainerText>
                    <Titulo>Catarina</Titulo>
                    <Subtitulo>{catarinaTrack?.frequency}</Subtitulo>
                  </ContainerText>
                </ContainerPlayRadio>
                <LogoImg source={require('../../../../assets/plus-1.png')} />
              </ContainerList>
            </ContainerRadio>
          </TouchableOpacity>

          <Line2 />
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

/* eslint-disable prettier/prettier */
import {
  ArrowCircleLeft,
  Globe,
  InstagramLogo,
  Playlist,
  ShareNetwork,
  WhatsappLogo,
} from 'phosphor-react-native';
import React, {useState, useEffect} from 'react';
import {SvgUri} from 'react-native-svg';
import {
  Linking,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useAudioPlayer} from '../../Context/AudioPlayerContext';
import {
  Container,
  ContainerButtons,
  ContainerHeader,
  ContainerHome,
  ContainerHome1,
  ContainerPhoto,
  ContainerTextMusic,
  TextRadio,
  TextMusicDesc,
  ContainerTextRadio,
  TextRadioDesc,
  ImgPlus,
  TextMusicDescProg,
} from './style';
import PlayPauseButton from '../Radios/buttonPlayer';

import {
  PanGestureHandler,
  State,
  GestureHandlerGestureEvent,
} from 'react-native-gesture-handler'; // Import the GestureHandlerGestureEvent type
import MarqueeView from 'react-native-marquee-view';
import {View} from 'react-native-animatable';
import {ArtistRadioText, ArtistRadioText1} from '../Home/styles';
export default function Player({navigation}: {navigation: any}) {
  const {currentTrack, currentSong} = useAudioPlayer();

  console.log(currentTrack);

  const onGestureEvent = React.useCallback(
    ({nativeEvent}: GestureHandlerGestureEvent) => {
      if (nativeEvent.oldState === State.ACTIVE) {
        navigation.navigate('Home');
      }
    },
    [navigation],
  );

  const currentHour = new Date().getHours();
  const currentDay = new Date().getDay();

  let artist = 'Rádio Plus';

  if (
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
    artist = 'No Colo de Jesus e de Maria';
  } else if (
    currentDay >= 1 &&
    currentDay <= 6 &&
    currentHour >= 9 &&
    currentHour < 11
  ) {
    artist = 'Manhã da Plus';
  } else if (
    currentTrack &&
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 12 &&
    currentHour < 13 &&
    (currentTrack.title === 'Plus FM' ||
      currentTrack.title === 'Plus Cariri' ||
      currentTrack.title === 'Plus Iguatu')
  ) {
    artist = 'Sem Limites Para Amar';
  } else if (
    currentTrack &&
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 13 &&
    currentHour < 14 &&
    (currentTrack.title === 'Plus FM' ||
      currentTrack.title === 'Plus Cariri' ||
      currentTrack.title === 'Plus Iguatu')
  ) {
    artist = 'Plus FM';
  } else if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 12 &&
    currentHour < 14 &&
    (!currentTrack ||
      (currentTrack.title !== 'Plus FM' &&
        currentTrack.title !== 'Plus Cariri' &&
        currentTrack.title !== 'Plus Iguatu'))
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
  const programImages: Record<string, string> = {
    'Corujão da Plus':
      'https://plusfm.com.br/imagemprogamacao/corujaodaplus.png',
    'Clube Plus': 'https://plusfm.com.br/imagemprogamacao/clubeplus.png',
    'Deu B.O.': 'https://plusfm.com.br/imagemprogamacao/deubo.png',
    'Ceará News': 'https://plusfm.com.br/imagemprogamacao/cearanews.png',
    'Ao Colo de Jesus e de Maria':
      'https://plusfm.com.br/imagemprogamacao/nocolodejesusedemaria.png',
    'Manhã da Plus': 'https://plusfm.com.br/imagemprogamacao/manhadaplus.png',
    'Redação da Plus': 'https://plusfm.com.br/imagemprogamacao/redacaoplus.png',
    'Tarde Plus': 'https://plusfm.com.br/imagemprogamacao/tardeplus.png',
    'Tá Todo Mundo Plus':
      'https://plusfm.com.br/imagemprogamacao/tatodomundoplus.png',
    'As Mais Pedidas':
      'https://plusfm.com.br/imagemprogamacao/asmaispedidas.png',
    'Plus Mania': 'https://plusfm.com.br/imagemprogamacao/plusmania.png',
    'Festa Plus': 'https://plusfm.com.br/imagemprogamacao/festaplus.png',
    'Time Machine': 'https://plusfm.com.br/imagemprogamacao/timemachine.png',
    Upgrade: 'https://plusfm.com.br/imagemprogamacao/upgrade.png',
    'Playlist da Plus':
      'https://plusfm.com.br/imagemprogamacao/playlistdaplus.png',
    'Terço da Misericórdia':
      'https://plusfm.com.br/imagemprogamacao/tercodamisericordia.png',
    'Domingão da Plus': 'https://plusfm.com.br/imagemprogamacao/domingao.png',
    'Mega Plus': 'https://plusfm.com.br/imagemprogamacao/megaplus.png',
    'A Grande Hora': 'https://plusfm.com.br/imagemprogamacao/agrandehora.png',
    'Sem Limites Para Amar':
      'https://plusfm.com.br/imagemprogamacao/semlimitesparaamar.png',
    'As melhores da Plus':
      'https://plusfm.com.br/imagemprogamacao/asmelhoresdaplus.png',
    'Slow Motion': 'https://plusfm.com.br/imagemprogamacao/slowmotion.png',
    // Adicione mais programas aqui...
  };
  let programImage = programImages[artist];

  console.log(
    `A imagem do programa ${artist} sendo exibida é: ${programImage}`,
  );

  if (!programImage) {
    programImage = 'https://plusfm.com.br/imagemprogamacao/plusmania.svg';
  }
  const [isMarquee, setIsMarquee] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const text = `${currentSong.artist} - ${currentSong.title}`;

  useEffect(() => {
    const textLength = text.length; // Conta o número de caracteres no texto

    console.log('Comprimento do texto:', textLength); // Log do comprimento do texto

    setIsMarquee(textLength > 46); // Altere o número 50 para o comprimento que justifica o uso do marquee
  }, [text]);
  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onGestureEvent}>
      <Container colors={['#000', '#333333']}>
        <StatusBar
          animated={true}
          backgroundColor="transparent"
          translucent={true}
        />
        <ContainerHeader>
          <ContainerHome1>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <ArrowCircleLeft size={30} weight="bold" color="#541084" />
            </TouchableOpacity>
          </ContainerHome1>
          <ContainerTextRadio>
            <TextRadio>{currentTrack?.title || 'PlusFM'}</TextRadio>
            <TextRadioDesc>{currentTrack?.frequency || 'PlusFM'}</TextRadioDesc>
          </ContainerTextRadio>

          <ContainerHome>
            <TouchableOpacity onPress={() => navigation.navigate('RadioList')}>
              <Playlist size={30} weight="fill" color="#541084" />
            </TouchableOpacity>
          </ContainerHome>
        </ContainerHeader>

        <ContainerPhoto>
          <Image
            style={{width: '90%', height: '100%'}}
            source={{uri: programImage}}
            resizeMode="contain"
          />
        </ContainerPhoto>
        <ContainerTextMusic>
          <TextMusicDescProg>Você está escutando</TextMusicDescProg>
          {/* <TextMusicDesc>{artist || 'PlusFM'}</TextMusicDesc> */}
          {isMarquee ? (
            <MarqueeView speed={0.11} style={{width: '80%'}}>
              <View>
                <ArtistRadioText1>{text}</ArtistRadioText1>
              </View>
            </MarqueeView>
          ) : (
            <View>
              <ArtistRadioText1>{text}</ArtistRadioText1>
            </View>
          )}
        </ContainerTextMusic>

        <ContainerButtons>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://play.google.com/store/apps/details?id=com.johnallreal.PLUSFM',
              )
            }>
            <ShareNetwork weight="fill" color="#541084" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://plusfm.com.br/')}>
            <Globe color="#541084" weight="bold" />
          </TouchableOpacity>
          {currentTrack && <PlayPauseButton track={currentTrack} />}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://whatsapp.com/channel/0029VaDSwXYA89MeJrPw1p1A',
              )
            }>
            <WhatsappLogo color="#541084" weight="bold" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.instagram.com/plusfmrede/')
            }>
            <InstagramLogo color="#541084" weight="bold" />
          </TouchableOpacity>
        </ContainerButtons>
      </Container>
    </PanGestureHandler>
  );
}

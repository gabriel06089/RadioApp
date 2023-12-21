/* eslint-disable prettier/prettier */
import {
  ArrowCircleLeft,
  Globe,
  
  InstagramLogo,
  Playlist,
  ShareNetwork,
  WhatsappLogo,
} from 'phosphor-react-native';
import React from 'react';

import {Linking, StatusBar, TouchableOpacity} from 'react-native';
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
export default function Player({navigation}: {navigation: any}) {
  const {currentTrack} = useAudioPlayer(); // Use o hook useAudioPlayer para acessar o estado do player
  const onGestureEvent = React.useCallback(
    ({nativeEvent}: GestureHandlerGestureEvent) => {
      if (nativeEvent.oldState === State.ACTIVE) {
        navigation.navigate('Home');
      }
    },
    [navigation],
  );
  
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
          <ImgPlus source={require('../../../assets/thumb2.png')} />
        </ContainerPhoto>

        <ContainerTextMusic>
          <TextMusicDescProg>Você está escutando</TextMusicDescProg>
          <TextMusicDesc>{currentTrack?.artist || 'PlusFM'}</TextMusicDesc>
        </ContainerTextMusic>

        <ContainerButtons>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://seu-link-para-share-network')
            }>
            <ShareNetwork weight="fill" color="#541084" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://plusfm.com.br/')}>
            <Globe color="#541084" weight="bold" />
          </TouchableOpacity>
          {currentTrack && <PlayPauseButton track={currentTrack} />}
          <TouchableOpacity
            onPress={() => Linking.openURL('https://whatsapp.com/channel/0029VaDSwXYA89MeJrPw1p1A')}>
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

/* eslint-disable prettier/prettier */
import {
  Browser,
  CaretDown,
  InstagramLogo,
  ListBullets,
  ShareNetwork,
  WhatsappLogo,
} from 'phosphor-react-native';
import React from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
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
  TextMusic,
  TextMusicDesc,
  ContainerTextRadio,
  TextRadioDesc,
} from './style';
import PlayPauseButton from '../Radios/buttonPlayer';

export default function Player({navigation}: {navigation: any}) {
  const {currentTrack} = useAudioPlayer(); // Use o hook useAudioPlayer para acessar o estado do player

  return (
    <Container colors={['#000', '#333333']}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        translucent={true}
      />
      <ContainerHeader>
        <ContainerHome1>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <CaretDown size={30} weight="bold" />
          </TouchableOpacity>
        </ContainerHome1>
        <ContainerTextRadio>
          <TextRadio>{currentTrack?.title || 'PlusFM'}</TextRadio>
          <TextRadioDesc>{currentTrack?.artist || 'PlusFM'}</TextRadioDesc>
        </ContainerTextRadio>

        <ContainerHome>
          <TouchableOpacity onPress={() => navigation.navigate('Radio')}>
            <ListBullets size={30} weight="bold" />
          </TouchableOpacity>
        </ContainerHome>
      </ContainerHeader>

      <ContainerPhoto />

      <ContainerTextMusic>
        <TextMusic>{currentTrack?.title || 'PLUSFM'}</TextMusic>
        <TextMusicDesc>{currentTrack?.artist || 'PlusFM'}</TextMusicDesc>
      </ContainerTextMusic>

      <ContainerButtons>
        <ShareNetwork weight="fill" />
        <Browser />

        <WhatsappLogo />
        <InstagramLogo />
      </ContainerButtons>
      {currentTrack && <PlayPauseButton track={currentTrack} />}
    </Container>
  );
}

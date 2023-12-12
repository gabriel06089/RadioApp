/* eslint-disable prettier/prettier */
import {
  Browser,
  CaretDown,
  InstagramLogo,
  ListBullets,
  ShareNetwork,
  WhatsappLogo,
} from 'phosphor-react-native';
import React, {useState} from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import AracatiPlayer from '../Radios/RadioPlayers/Aracati';

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

export default function Player({navigation}: {navigation: any}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const aracatiTrack = {
    id: 1,

    url: 'https://webradio.amsolution.com.br/radio/8180/aracati',
    title: 'Radio Aracati',
    artist: 'Radio Aracati',
  };
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
          <TextRadio>PlusFM</TextRadio>
          <TextRadioDesc>PlusFM</TextRadioDesc>
        </ContainerTextRadio>

        <ContainerHome>
          <TouchableOpacity onPress={() => navigation.navigate('Radio')}>
            <ListBullets size={30} weight="bold" />
          </TouchableOpacity>
        </ContainerHome>
      </ContainerHeader>

      <ContainerPhoto />

      <ContainerTextMusic>
        <TextMusic>PLUSFM</TextMusic>
        <TextMusicDesc>PlusFM</TextMusicDesc>
      </ContainerTextMusic>

      <ContainerButtons>
        <ShareNetwork weight="fill" />
        <Browser />
        <AracatiPlayer track={aracatiTrack} />
        <WhatsappLogo />
        <InstagramLogo />
      </ContainerButtons>
    </Container>
  );
}

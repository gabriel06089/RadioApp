/* eslint-disable prettier/prettier */
import {
  Browser,
  CaretDown,
  InstagramLogo,
  ListBullets,
  ShareNetwork,
  WhatsappLogo,
} from 'phosphor-react-native';
import React, {useState, useEffect} from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import GenericPlayer from '../Radios/RadioPlayers/GenericPlayer';

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

export default function Player({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<any | null>(null);

  useEffect(() => {
    // Atualiza o estado da faixa quando a rota for alterada
    if (route.params?.track) {
      const {isPlaying, ...trackInfo} = route.params.track;
      setCurrentTrack(trackInfo);
      setIsPlaying(isPlaying || false);
    }
  }, [route.params?.track]);

  const togglePlay = () => {
    // Altera o estado de reprodução e atualiza o estado
    const newIsPlaying = !isPlaying;
    setIsPlaying(newIsPlaying);
    setCurrentTrack((prevTrack: any) => ({
      ...prevTrack,
      isPlaying: newIsPlaying,
    }));
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
        <GenericPlayer track={currentTrack} />
        <WhatsappLogo />
        <InstagramLogo />
      </ContainerButtons>
    </Container>
  );
}

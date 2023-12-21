/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Text, StatusBar, ScrollView, Linking} from 'react-native';

import {
  FacebookLogo,
  InstagramLogo,
  Playlist,
  WhatsappLogo,
  YoutubeLogo,
} from 'phosphor-react-native';

import {
  ArtistRadioText,
  AudioVisuContainer,
  BackgroundImG,
  Container,
  ContainerBottom,
  ContainerCarrousel,
  ContainerContato,
  ContainerHeader,
  ContainerHeaderText,
  ContainerImgPlus,
  ContainerLogo,
  ContainerLogoContato,
  ContainerLogoText,
  ContainerMateria,
  ContainerMenu,
  ContainerNoticiasColumn,
  ContainerPlayerMusic,
  ContainerPromo,
  ImageLogo,
  ImageMateria,
  ImagePlus,
  ImagePlusPlayer,
  ImagePromo,
  LogoContato,
  MateriaTitle,
  MenuText,
  MusicContainer,
  MusicPhotoContainer,
  MusicTextContainer,
  TextLogo,
  TitleRadioText,
} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAudioPlayer} from '../../Context/AudioPlayerContext';
import DropShadow from 'react-native-drop-shadow';
import PlayPauseButton from '../Radios/buttonPlayer';
import AudioVisualizer from './AudioVisualizer';
import styled from 'styled-components/native';

const HomeScreen = ({navigation}: {navigation: any}) => {
  const {currentTrack, isPlaying} = useAudioPlayer();
  const [promoImage, setPromoImage] = useState('');

  const [promoLink, setPromoLink] = useState('');

  const [posts, setPosts] = useState<any[]>([]);
  const Logo = styled.View`
    color: white;
    margin-right: 12px;
    margin-left: 12px;
    margin-top: 24px;
    margin-bottom: 24px;
  `;
  useEffect(() => {
    const fetchNews = async () => {
      fetch('https://plusfm.com.br/wp-json/wp/v2/posts?status&per_page=3')
        .then(response => response.json())
        .then(data => {
          console.log('Notícias carregadas:'); // Adiciona log de console para depuração
          setPosts(data);
        })
        .catch(error => console.error(error));
    };

    fetchNews();
  }, []);
  useEffect(() => {
    const fetchPromotions = async () => {
      fetch(
        'https://plusfm.com.br/wp-json/wp/v2/posts?categories=14&per_page=1',
      )
        .then(response => response.json())
        .then(data => {
          console.log('Promoções carregadas:'); // Adiciona log de console para depuração
          if (data.length > 0) {
            const firstPost = data[0];
            if (
              firstPost.yoast_head_json &&
              firstPost.yoast_head_json.og_image &&
              firstPost.yoast_head_json.og_image[0]
            ) {
              setPromoImage(firstPost.yoast_head_json.og_image[0].url);
              setPromoLink(firstPost.link);
            }
          }
        })
        .catch(error => console.error(error));
    };

    fetchPromotions();
  }, []);
  return (
    <Container colors={['#000', '#333333']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <StatusBar
          animated={true}
          backgroundColor="transparent"
          translucent={true}
        />

        <ContainerHeader>
          <ContainerLogo>
            <ImageLogo source={require('../../../assets/plus-1.png')} />
            <TouchableOpacity onPress={() => navigation.navigate('RadioList')}>
              <ContainerMenu>
                <MenuText>{currentTrack?.title}</MenuText>

                <Playlist color="whitesmoke" weight="fill" size={30} />
              </ContainerMenu>
            </TouchableOpacity>
          </ContainerLogo>
          <BackgroundImG
            source={require('../../../assets/FundoSemDetalhes.png')}
          />
          <ContainerImgPlus>
            <ImagePlus
              source={require('../../../assets/PlusSemFundoDireita.png')}
            />
          </ContainerImgPlus>

          <ContainerHeaderText>
            <AudioVisuContainer>
              {isPlaying && <AudioVisualizer />}
            </AudioVisuContainer>
          </ContainerHeaderText>
        </ContainerHeader>

        <Text
          style={{
            paddingTop: 12,
            paddingLeft: 24,
            paddingBottom: 12,
            alignSelf: 'flex-start',
            color: 'white',
          }}>
          Promoções
        </Text>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <ContainerCarrousel>
            <TouchableOpacity onPress={() => Linking.openURL(promoLink)}>
              <DropShadow
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.55,
                  shadowRadius: 3.84,
                }}>
                <ContainerPromo>
                  {promoImage !== '' && (
                    <ImagePromo source={{uri: promoImage}} />
                  )}
                </ContainerPromo>
              </DropShadow>
            </TouchableOpacity>
          </ContainerCarrousel>
        </ScrollView>
        <Text
          style={{
            paddingTop: 12,
            paddingLeft: 24,
            paddingBottom: 12,
            alignSelf: 'flex-start',
            color: 'white',
          }}>
          Notícias
        </Text>

        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <ContainerCarrousel>
            {posts.map((post, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('Posts', {post})}>
                <ContainerNoticiasColumn>
                  <DropShadow
                    style={{
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 1,
                        height: 5,
                      },
                      shadowOpacity: 0.45,
                      shadowRadius: 3.84,
                    }}>
                    <ContainerMateria>
                      {post &&
                      post.yoast_head_json &&
                      post.yoast_head_json.og_image &&
                      post.yoast_head_json.og_image[0] &&
                      post.yoast_head_json.og_image[0].url ? (
                        <ImageMateria
                          source={{
                            uri: post.yoast_head_json.og_image[0].url,
                          }}
                        />
                      ) : null}
                    </ContainerMateria>
                  </DropShadow>
                  <MateriaTitle>
                    {post ? post.yoast_head_json.title : 'Carregando...'}
                  </MateriaTitle>
                </ContainerNoticiasColumn>
              </TouchableOpacity>
            ))}
          </ContainerCarrousel>
        </ScrollView>
        <ContainerLogoContato>
          <LogoContato source={require('../../../assets/plus-1.png')} />
          <TextLogo>Aqui é legal demais</TextLogo>
        </ContainerLogoContato>
        <ContainerContato>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.instagram.com/plusfmrede/')
            }>
            <Logo as={InstagramLogo} size={24} weight="duotone" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.youtube.com/@plusfmrede')
            }>
            <Logo as={YoutubeLogo} size={24} weight="duotone" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://whatsapp.com')}>
            <Logo as={WhatsappLogo} size={24} weight="duotone" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.facebook.com/plusfmrede/')
            }>
            <Logo as={FacebookLogo} size={24} weight="duotone" color="white" />
          </TouchableOpacity>
        </ContainerContato>
        <ContainerBottom />
      </ScrollView>

      <MusicContainer colors={['#000', '#333333']}>
        <TouchableOpacity onPress={() => navigation.navigate('RadioList')}>
          <ContainerLogoText>
            <MusicPhotoContainer>
              <ImagePlusPlayer source={require('../../../assets/thumb.png')} />
            </MusicPhotoContainer>
            <MusicTextContainer>
              <TitleRadioText>{currentTrack?.title}</TitleRadioText>
              <ArtistRadioText>{currentTrack?.artist}</ArtistRadioText>
            </MusicTextContainer>
          </ContainerLogoText>
        </TouchableOpacity>
        <ContainerPlayerMusic>
          {currentTrack && <PlayPauseButton track={currentTrack} />}
        </ContainerPlayerMusic>
      </MusicContainer>
    </Container>
  );
};

export default HomeScreen;

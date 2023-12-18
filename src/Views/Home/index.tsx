/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Text,
  StatusBar,
  Animated,
  Easing,
  ScrollView,
  Linking,
} from 'react-native';

import {CaretDown} from 'phosphor-react-native';

import {
  ArtistRadioText,
  AudioVisuContainer,
  ButtonPlayer,
  ButtonPlayerText,
  Container,
  ContainerBottom,
  ContainerCarrousel,
  ContainerHeader,
  ContainerHeaderText,
  ContainerImgPlus,
  ContainerLine,
  ContainerLogo,
  ContainerLogoText,
  ContainerMateria,
  ContainerMenu,
  ContainerNoticiasColumn,
  ContainerPlayerMusic,
  ContainerPromo,
  HeaderText,
  HeaderTitleText,
  ImageLogo,
  ImageMateria,
  ImagePlus,
  ImagePlusPlayer,
  ImagePromo,
  Line,
  Line2,
  Line3,
  MateriaTitle,
  MenuText,
  MusicContainer,
  MusicPhotoContainer,
  MusicTextContainer,
  TitleRadioText,
} from './styles';
import {
  PanGestureHandler,
  State,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {useAudioPlayer} from '../../Context/AudioPlayerContext';
import DropShadow from 'react-native-drop-shadow';
import PlayPauseButton from '../Radios/buttonPlayer';
import AudioVisualizer from './AudioVisualizer';

const HomeScreen = ({navigation}: {navigation: any}) => {
  const [, setVisibleLineIndex] = useState(0);
  const [lineOpacities, setLineOpacities] = useState([1, 0.5, 0.5]);
  const [opacity] = useState(new Animated.Value(1));
  const headerTexts = [
    'Pediu, Tocou! A Plus toca aquela música favorita e você ainda ganha prêmios.',
    'Qual é a sua? A sua música favorita vale muitos prêmios.',
    'Bom demais Plus: O melhor da programação da Plus em uma hora sem qualquer intervalo',
  ];
  const headerTitleTexts = ['NO AR', 'NO AR', 'A SEGUIR'];
  const {currentTrack, isPlaying} = useAudioPlayer();
  const [promoImage, setPromoImage] = useState('');
  const [translateX] = useState(new Animated.Value(0));
  const [headerTextIndex, setHeaderTextIndex] = useState(0);
  const [promoLink, setPromoLink] = useState('');
  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const onHandlerStateChange = ({nativeEvent}: {nativeEvent: any}) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        // Atualiza o índice do texto do cabeçalho com base na direção do arrasto
        const newIndex =
          ((nativeEvent.velocityX > 0
            ? headerTextIndex + 1
            : headerTextIndex - 1) +
            headerTexts.length) %
          headerTexts.length;
        setHeaderTextIndex(newIndex);

        // Atualiza o índice da linha visível
        setVisibleLineIndex(newIndex);

        // Atualiza as opacidades das linhas com base no novo índice
        setLineOpacities(prevOpacities =>
          prevOpacities.map((_, index) => (index === newIndex ? 1 : 0.5)),
        );

        // Anima a opacidade de volta a 1
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();

        // Redefine translateX para 0
        translateX.setValue(0);
      });
    }
  };

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://plusfm.com.br/wp-json/wp/v2/posts?status&per_page=3')
      .then(response => response.json())
      .then(data => {
        console.log('Notícias carregadas:'); // Adiciona log de console para depuração
        setPosts(data);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch('https://plusfm.com.br/wp-json/wp/v2/posts?categories=14&per_page=1')
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
            <TouchableOpacity onPress={() => navigation.navigate('Radio')}>
              <ContainerMenu>
                <MenuText>{currentTrack?.title}</MenuText>

                <CaretDown color="whitesmoke" weight="bold" size={20} />
              </ContainerMenu>
            </TouchableOpacity>
          </ContainerLogo>

          <ContainerImgPlus>
            <ImagePlus source={require('../../../assets/pluzinho.png')} />
          </ContainerImgPlus>

          <ContainerHeaderText>
            <PanGestureHandler
              onGestureEvent={onGestureEvent}
              onHandlerStateChange={onHandlerStateChange}>
              <Animated.View style={{transform: [{translateX}], opacity}}>
                <HeaderTitleText>
                  {headerTitleTexts[headerTextIndex]}
                </HeaderTitleText>
                <HeaderText>{headerTexts[headerTextIndex]}</HeaderText>
              </Animated.View>
            </PanGestureHandler>

            <AudioVisuContainer>
              <ButtonPlayer>
                <ButtonPlayerText>AO VIVO</ButtonPlayerText>
              </ButtonPlayer>
              {isPlaying && <AudioVisualizer />}
            </AudioVisuContainer>
            <ContainerLine>
              <Line style={{opacity: lineOpacities[0]}} />
              <Line2 style={{opacity: lineOpacities[1]}} />
              <Line3 style={{opacity: lineOpacities[2]}} />
            </ContainerLine>
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
          Noticías
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
                      {post ? (
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

        <ContainerBottom />
      </ScrollView>

      <MusicContainer colors={['#000', '#333333']}>
        <TouchableOpacity onPress={() => navigation.navigate('Radio')}>
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

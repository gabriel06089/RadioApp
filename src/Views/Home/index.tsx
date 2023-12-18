/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  StatusBar,
  Animated,
  Easing,
  ScrollView,
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
  HeaderText,
  HeaderTitleText,
  ImageLogo,
  ImageMateria,
  ImagePlus,
  ImagePlusPlayer,
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

  const [translateX] = useState(new Animated.Value(0));
  const [headerTextIndex, setHeaderTextIndex] = useState(0);

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
          Noticías
        </Text>

        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <ContainerCarrousel>
            <ContainerNoticiasColumn>
              <ContainerMateria>
                <ImageMateria
                  source={{
                    uri: 'https://s2-g1.glbimg.com/uCAIdX6BwNyegrPLVQNf0y2M-s0=/0x64:1920x1144/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/A/S/76jbhGQQAmT8Vd0GBN8g/chile-constituicao.jpg',
                  }}
                />
              </ContainerMateria>
              <MateriaTitle>
                Chile rejeita Constituição cnservadora que substituiria texto da
                era Pinochet
              </MateriaTitle>
            </ContainerNoticiasColumn>

            <ContainerNoticiasColumn>
              <ContainerMateria>
                <ImageMateria
                  source={{
                    uri: 'https://s2-g1.glbimg.com/m8h6MLJulL_3O7SVGjhGQN5E4C0=/0x435:4176x2784/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/R/g/2uzislSBmbkZO7Z4BWsg/53395364846-a11c7226eb-o.jpg',
                  }}
                />
              </ContainerMateria>
              <MateriaTitle>
                Com posse nesta 2ª na PGR, Gonet monta equipe para pacificar MP
              </MateriaTitle>
            </ContainerNoticiasColumn>

            <ContainerNoticiasColumn>
              <ContainerMateria>
                <ImageMateria
                  source={{
                    uri: 'https://s2-g1.glbimg.com/ejheUTYlnSizXeAVEwsFFLDcyxM=/0x0:1920x1080/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/E/o/BymteFTiSEMBN8POakXg/globo-canal-4-20231217-2000-frame-274413.jpeg',
                  }}
                />
              </ContainerMateria>
              <MateriaTitle>
                Caso Renato Cariani: PF descobre e-mail para farmacêutica e
                notas falsas
              </MateriaTitle>
            </ContainerNoticiasColumn>
          </ContainerCarrousel>
        </ScrollView>
        <ScrollView horizontal>
          <ContainerCarrousel>
            <ContainerNoticiasColumn>
              <ContainerMateria />
              <MateriaTitle>texto materia</MateriaTitle>
            </ContainerNoticiasColumn>

            <ContainerNoticiasColumn>
              <ContainerMateria />
              <MateriaTitle>texto materia</MateriaTitle>
            </ContainerNoticiasColumn>

            <ContainerNoticiasColumn>
              <ContainerMateria />
              <MateriaTitle>texto materia</MateriaTitle>
            </ContainerNoticiasColumn>
          </ContainerCarrousel>
        </ScrollView>
        <ScrollView horizontal>
          <ContainerCarrousel>
            <ContainerNoticiasColumn>
              <ContainerMateria />
              <MateriaTitle>texto materia</MateriaTitle>
            </ContainerNoticiasColumn>

            <ContainerNoticiasColumn>
              <ContainerMateria />
              <MateriaTitle>texto materia</MateriaTitle>
            </ContainerNoticiasColumn>

            <ContainerNoticiasColumn>
              <ContainerMateria />
              <MateriaTitle>texto materia</MateriaTitle>
            </ContainerNoticiasColumn>
          </ContainerCarrousel>
          <ContainerBottom />
        </ScrollView>
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

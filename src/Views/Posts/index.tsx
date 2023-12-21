/* eslint-disable prettier/prettier */
import React from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
import {
  Container,
  ContainerButton,
  ContainerImg,
  ContainerImgPost,
  ContainerWebview,
  TitleText,
} from './style';
import {WebView} from 'react-native-webview';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useAudioPlayer} from '../../Context/AudioPlayerContext';
import {ArrowCircleLeft} from 'phosphor-react-native';
import YouTube from 'react-native-youtube-iframe';
type PostScreenRouteProp = RouteProp<
  {Posts: {post: any}}, // Substitua 'any' pelo tipo real do seu post
  'Posts'
>;

export default function Posts({navigation}: {navigation: any}) {
  const route = useRoute<PostScreenRouteProp>();
  const post = route.params.post;
  const {pauseTrack} = useAudioPlayer(); // Obtenha a função pauseTrack do contexto
  const date = new Date(post.date).toLocaleDateString('pt-BR');
  let iframeSrc = '';
  const match = post.content.rendered.match(
    /<iframe[^>]*src="https:\/\/www\.youtube\.com\/embed\/([^"]*)"[^>]*><\/iframe>/,
  );
  if (match && match.length > 1) {
    iframeSrc = 'https://www.youtube.com/embed/' + match[1];
  }
  const htmlContent = `
  <style>
  body {
    font-family: Arial, sans-serif;
    margin: 48px
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: 40px;
    text-align: center; // Centraliza os títulos
  }
  p, span {
    font-size: 40px;
  }
  a {
    color: #9248FF; 
    text-decoration: none !important;
    
  }
  
</style>
<h1>${post.yoast_head_json.title}</h1>




${post.content.rendered.replace(
  /<iframe[^>]*src="https:\/\/www\.youtube\.com\/embed\/([^"]*)"[^>]*><\/iframe>/,
  '',
)}

  `;

  return (
    <Container>
      <ScrollView>
        <ContainerImg>
          <ContainerImgPost
            source={{uri: post.yoast_head_json.og_image[0].url}}
            style={{width: '100%', height: '30%'}}
          />
        </ContainerImg>
        <ContainerButton>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <ArrowCircleLeft color="#9248FF" weight="bold" size={35} />
          </TouchableOpacity>
          <TitleText>Publicado em {date}</TitleText>
        </ContainerButton>
        <View
          style={{
            width: '100%',
            padding: 20,
            overflow: 'hidden',
          }}>
          {match && match[1] ? (
            <YouTube
              videoId={match[1]} // O ID do vídeo do YouTube
              play={false} // Não reproduza o vídeo automaticamente
              onChangeState={event => {
                if (event === 'playing') {
                  pauseTrack(); // Pausa a rádio quando o vídeo começa a ser reproduzido
                }
              }}
              height={200}
            />
          ) : null}
        </View>
        <ContainerWebview>
          <WebView source={{html: htmlContent}} />
        </ContainerWebview>
      </ScrollView>
    </Container>
  );
}

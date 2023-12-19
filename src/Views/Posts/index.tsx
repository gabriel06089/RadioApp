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
import {ScrollView, TouchableOpacity} from 'react-native';
import {ArrowCircleLeft} from 'phosphor-react-native';

type PostScreenRouteProp = RouteProp<
  {Posts: {post: any}}, // Substitua 'any' pelo tipo real do seu post
  'Posts'
>;

export default function Posts({navigation}: {navigation: any}) {
  const route = useRoute<PostScreenRouteProp>();
  const post = route.params.post;
  const date = new Date(post.date).toLocaleDateString('pt-BR');
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


${post.content.rendered}
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

        <ContainerWebview>
          <WebView source={{html: htmlContent}} />
        </ContainerWebview>
      </ScrollView>
    </Container>
  );
}

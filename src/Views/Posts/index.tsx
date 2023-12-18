/* eslint-disable prettier/prettier */
import React from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
import {
  Container,
  ContainerImgPost,
  ContainerWebview,
  TitleText,
} from './style';
import {WebView} from 'react-native-webview';

type PostScreenRouteProp = RouteProp<
  {Posts: {post: any}}, // Substitua 'any' pelo tipo real do seu post
  'Posts'
>;

const Posts = () => {
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
      <ContainerImgPost
        source={{uri: post.yoast_head_json.og_image[0].url}}
        style={{width: '100%', height: '30%'}}
      />

      <TitleText>Publicado em {date}</TitleText>
      <ContainerWebview>
        <WebView source={{html: htmlContent}} />
      </ContainerWebview>
    </Container>
  );
};

export default Posts;

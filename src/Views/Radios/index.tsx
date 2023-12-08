/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar } from 'react-native';

import { TouchableOpacity } from 'react-native';
import {
  Container,
  Titulo,
  ButtonPlayer,
  ContainerImgRadio,
  ContainerRadio,
  Line,
  ContainerButton,
  ContainerDescRadio,
  ContainerText,
  Subtitulo,
  ContainerHeader,
  ButtonPlayerText,
  ContainerNavigation,
  ContainerHeaderText,
  HeaderText,
} from './styles';
import { CaretDown } from 'phosphor-react-native';
import AracatiPlayer from './Aracati';
import PlusPlayer from './Plus';



export default function RadioScreen({ navigation }: { navigation: any }) {


  return (
    <Container colors={['#000', '#333333']}>

      <StatusBar animated={true}
        backgroundColor="transparent"

        translucent={true} />

      <ContainerHeader>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <ContainerNavigation>
            <CaretDown color="whitesmoke" weight="bold" />
          </ContainerNavigation>
        </TouchableOpacity>
        <ContainerHeaderText>
          <HeaderText>AFILIADOS</HeaderText>
        </ContainerHeaderText>


      </ContainerHeader>

      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio colors={['#ff6347', '#ffa500']} />

          <ContainerText>
            <Titulo>Aracati</Titulo>
            <Subtitulo>98.1</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer >
          <ButtonPlayerText> Ouvir </ButtonPlayerText>
        </ButtonPlayer>
      </ContainerRadio>

      <AracatiPlayer />
      <Line />

      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio colors={['#3498db', '#2ecc71']} />

          <ContainerText>
            <Titulo>Cariri</Titulo>
            <Subtitulo>100.5</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ContainerButton>
          <ButtonPlayer >
            <ButtonPlayerText> Ouvir </ButtonPlayerText>
          </ButtonPlayer>

        </ContainerButton>
      </ContainerRadio>
      <PlusPlayer />
      <Line />
      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio colors={['#f39c12', '#e67e22']} />

          <ContainerText>
            <Titulo>Crateús</Titulo>
            <Subtitulo>93.3</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer >
          <ButtonPlayerText> Ouvir </ButtonPlayerText>
        </ButtonPlayer>
      </ContainerRadio>

      <Line />
      
      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio colors={['#e74c3c', '#f39c12']} />



          <ContainerText>
            <Titulo>Iguatú/Cariiús</Titulo>
            <Subtitulo>91.5</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer >
          <ButtonPlayerText> Ouvir </ButtonPlayerText>
        </ButtonPlayer>
      </ContainerRadio>

      <Line />
      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio colors={['#3498db', '#8e44ad']} />

          <ContainerText>
            <Titulo>Paraipaba</Titulo>
            <Subtitulo>88.7</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer >
          <ButtonPlayerText> Ouvir </ButtonPlayerText>
        </ButtonPlayer>
      </ContainerRadio>

      <Line />

      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio colors={['#2ecc71', '#3498db']} />

          <ContainerText>
            <Titulo>Redenção</Titulo>
            <Subtitulo>98.7</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer >
          <ButtonPlayerText> Ouvir </ButtonPlayerText>
        </ButtonPlayer>
      </ContainerRadio>

      <Line />


      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio colors={['#2ecc71', '#3498db']} />

          <ContainerText>
            <Titulo>Redenção</Titulo>
            <Subtitulo>98.7</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer >
          <ButtonPlayerText> Ouvir </ButtonPlayerText>
        </ButtonPlayer>
      </ContainerRadio>

      <Line />


      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio colors={['#2ecc71', '#3498db']} />

          <ContainerText>
            <Titulo>Redenção</Titulo>
            <Subtitulo>98.7</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer >
          <ButtonPlayerText> Ouvir </ButtonPlayerText>
        </ButtonPlayer>
      </ContainerRadio>

      <Line />

    </Container>
  );
}

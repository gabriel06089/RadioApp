/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar } from 'react-native';

import { TouchableOpacity, ScrollView } from 'react-native';
import {
  Container,
  Titulo,
  ContainerImgRadio,
  ContainerRadio,
  Line,
  ContainerButton,
  ContainerDescRadio,
  ContainerText,
  Subtitulo,
  ContainerHeader,
  ContainerNavigation,
  ContainerHeaderText,
  HeaderText,
} from './styles';
import { CaretDown } from 'phosphor-react-native';
import AracatiPlayer from './RadioPlayers/Aracati';
import PlusPlayer from './RadioPlayers/Plus';
import CrateusPlayer from './RadioPlayers/Crateus';
import IguatuPlayer from './RadioPlayers/Iguatu';
import ParaipabaPlayer from './RadioPlayers/Paraipaba';
import RedencaoPlayer from './RadioPlayers/Redencao';
import CaririPlayer from './RadioPlayers/Cariri';
import CascavelPlayer from './RadioPlayers/Cascavel';
import PacajusPlayer from './RadioPlayers/Pacajus';
import SobralPlayer from './RadioPlayers/Sobral';
import SantaQuiteriaPlayer from './RadioPlayers/SantaQuiteria';

export default function RadioScreen({ navigation }: { navigation: any }) {
  const aracatiTrack = {
    id: 1,
    url: 'https://webradio.amsolution.com.br/radio/8180/aracati',
    title: 'Radio Aracati',
    artist: 'Radio Aracati',
  };

  const plusTrack = {
    id: 2,
    url: 'https://webradio.amsolution.com.br/radio/8020/plus',
    title: 'Radio Plus',
    artist: 'Radio Plus',
  };
  const caririTrack = {
    id: 3,
    url: 'https://webradio.amsolution.com.br/radio/8140/cariri',
    title: 'Radio Cariri',
    artist: 'Radio Cariri',
  };
  const cascavelTrack = {
    id: 4,
    url: 'https://webradio.amsolution.com.br/radio/8110/catarina',
    title: 'Radio Catarina',
    artist: 'Radio Catarina',
  };
  const crateusTrack = {
    id: 5,
    url: 'https://webradio.amsolution.com.br/radio/8120/crateus',
    title: 'Radio Crateus',
    artist: 'Radio Crateus',
  };
  const iguatuTrack = {
    id: 6,
    url: 'https://webradio.amsolution.com.br/radio/8070/iguatu',
    title: 'Radio Iguatu',
    artist: 'Radio Iguatu',
  };
  const pacajusTrack = {
    id: 7,
    url: 'https://webradio.amsolution.com.br/radio/8130/pacajus',
    title: 'Radio Pacajus',
    artist: 'Radio Pacajus',
  };
  const paraipabaTrack = {
    id: 8,
    url: 'https://webradio.amsolution.com.br/radio/8150/paraipaba',
    title: 'Radio Paraipaba',
    artist: 'Radio Paraipaba',
  };
  const santaQuiteriaTrack = {
    id: 9,
    url: 'https://webradio.amsolution.com.br/radio/8170/santaquiteria',
    title: 'Radio SantaQuiteria',
    artist: 'Radio SantaQuiteria',
  };
  const sobralTrack = {
    id: 10,
    url: 'https://webradio.amsolution.com.br/radio/8030/sobral',
    title: 'Radio Sobral',
    artist: 'Radio Sobral',
  };
  const redencaoTrack = {
    id: 10,
    url: 'https://webradio.amsolution.com.br/radio/8090/redencao',
    title: 'Radio Redencao',
    artist: 'Radio Redencao',
  };
  return (
    <ScrollView>
      <Container colors={['#000', '#333333']}>
        <StatusBar
          animated={true}
          backgroundColor="transparent"
          translucent={true}
        />

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
          <AracatiPlayer track={aracatiTrack} />
        </ContainerRadio>


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
            <CaririPlayer track={caririTrack} />
          </ContainerButton>
        </ContainerRadio>

        <Line />
        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#f39c12', '#e67e22']} />

            <ContainerText>
              <Titulo>Crateús</Titulo>
              <Subtitulo>93.3</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <CrateusPlayer track={crateusTrack} />
        </ContainerRadio>

        <Line />

        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#e74c3c', '#f39c12']} />

            <ContainerText>
              <Titulo>Iguatú/Cariús</Titulo>
              <Subtitulo>91.5</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <IguatuPlayer track={iguatuTrack} />
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
          <ParaipabaPlayer track={paraipabaTrack} />
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
          <RedencaoPlayer track={redencaoTrack} />
        </ContainerRadio>

        <Line />

        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#2ecc71', '#3498db']} />

            <ContainerText>
              <Titulo>Cascavel</Titulo>
              <Subtitulo>98.7</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <CascavelPlayer track={cascavelTrack} />
        </ContainerRadio>

        <Line />

        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#2ecc71', '#3498db']} />

            <ContainerText>
              <Titulo>Pacajus</Titulo>
              <Subtitulo>98.7</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <PacajusPlayer track={pacajusTrack} />
        </ContainerRadio>

        <Line />

        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#2ecc71', '#3498db']} />

            <ContainerText>
              <Titulo>Santa Quitéria</Titulo>
              <Subtitulo>98.7</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <SantaQuiteriaPlayer track={santaQuiteriaTrack} />
        </ContainerRadio>

        <Line />

        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#2ecc71', '#3498db']} />

            <ContainerText>
              <Titulo>Sobral</Titulo>
              <Subtitulo>98.7</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <SobralPlayer track={sobralTrack} />
        </ContainerRadio>

        <Line />

        <ContainerRadio>
          <ContainerDescRadio>
            <ContainerImgRadio colors={['#2ecc71', '#3498db']} />

            <ContainerText>
              <Titulo>Plus</Titulo>
              <Subtitulo>98.7</Subtitulo>
            </ContainerText>
          </ContainerDescRadio>
          <PlusPlayer track={plusTrack} />
        </ContainerRadio>

        <Line />
      </Container>
    </ScrollView>
  );
}

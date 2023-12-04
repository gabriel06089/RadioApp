/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;

  justify-content: center;
`;

export const ContainerHeader = styled.View`
  align-items: center;
`;
export const ContainerButton = styled.View`
  position: relative;
`;
export const ButtonPlayer = styled.TouchableOpacity`
  margin-right: 16px;
  width: 72px;
  height: 28px;
  border-radius: 25px;
  background-color: #ea5d65;
  align-items: center;
  justify-content: center;
`;
export const ContainerRadio = styled.View`
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
`;

export const ContainerDescRadio = styled.View`
  flex-direction: row;
`;
export const ContainerImgRadio = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 24px;
  background-color: blue;

  margin-top: 16px;
  margin-left: 16px;
`;
export const ImgRadio = styled.Image``;
export const ContainerText = styled.View`
  margin-left: 16px;
  justify-content: center;
`;
export const Titulo = styled.Text`
  font-weight: bold;
  font-size: 17px;
 
`;

export const Subtitulo = styled.Text`
  font-size: 13px;
  opacity: 0.6;
`;
export const Line = styled.View`
  align-self: flex-end;
  width: 65%;
  height: 1px;
  background-color: #c8c7cc;
  margin-right: 16px;
`;

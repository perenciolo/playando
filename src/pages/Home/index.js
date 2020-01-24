import React from 'react';

import {
  Button,
  Container,
  primaryColor,
  secondayColor,
  textColor
} from '../../styles/global';
import { Title, Line, PlayerWrapper, InputWrapper } from './styles';

import Player from '../../components/Player';

export default function Home() {
  return (
    <Container>
      <Title>Playando</Title>
      <form>
        <InputWrapper>
          <input
            type="text"
            name="video-title"
            placeholder="Link ou título do vídeo"
          />
          <Button bg={primaryColor} gradient type="submit">
            adicionar
          </Button>
        </InputWrapper>
        <Line />
        <InputWrapper>
          <input type="text" name="video-title" placeholder="palavras-chave" />
          <Button bg={secondayColor} gradient color={textColor} type="submit">
            filtrar
          </Button>
        </InputWrapper>
      </form>
      <PlayerWrapper>
        <Player />
      </PlayerWrapper>
    </Container>
  );
}

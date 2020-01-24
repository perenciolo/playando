import React from 'react';

import { MdPlayArrow, MdPause, MdClose } from 'react-icons/md';

import { Card, CardPlayer, CardActions, CardBtn } from './styles';
import {
  whiteColor,
  primaryColor,
  secondayColor,
  textColor
} from '../../styles/global';

export default function Player() {
  const play = false;
  const mock = Array(10).fill(0);

  return mock.map((el, i) => (
    <Card key={String(i)}>
      <CardPlayer></CardPlayer>
      <CardActions>
        <CardBtn gradient bg={primaryColor}>
          {!play && <MdPlayArrow size={30} color={whiteColor} />}
          {play && <MdPause size={30} color={whiteColor} />}
        </CardBtn>
        <CardBtn gradient bg={secondayColor}>
          <MdClose size={30} color={textColor} />
        </CardBtn>
      </CardActions>
    </Card>
  ));
}

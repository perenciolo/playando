import React from 'react';

import { Spinner } from './styles';
import { Backdrop } from '../../styles/global';

export default function Loading({ color }) {
  return (
    <Backdrop>
      <Spinner color={color} />
    </Backdrop>
  );
}

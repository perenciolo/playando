import React from 'react';

import { ModalItem } from './styles';
import { Backdrop } from '../../styles/global';

export default function Modal({ children }) {
  return (
    <Backdrop>
      <ModalItem>{children}</ModalItem>
    </Backdrop>
  );
}

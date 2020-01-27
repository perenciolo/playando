import React from 'react';

import { Box } from './styles';

export default function MsgBox({ children, ...otherProps }) {
  return <Box {...otherProps}>{children}</Box>;
}

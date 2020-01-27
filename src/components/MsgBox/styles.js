import styled from 'styled-components';
import { defaultColor, textColor } from '../../styles/global';
import { lighten, darken } from 'polished';

export const Box = styled.div`
  flex: 1;
  margin: 2rem;
  padding: 2rem;
  background: ${props =>
    props.bg ? lighten(0.2, props.bg) : lighten(0.1, defaultColor)};
  color: ${props =>
    props.color ? darken(0.3, props.color) : darken(0.1, textColor)};
  border-radius: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

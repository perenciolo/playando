import styled from 'styled-components';
import { darken } from 'polished';

import './styles.scss';

export const defaultSpacer = 2;
export const radius = '2rem';

// Colors
export const primaryColor = '#EA7235';
export const secondayColor = '#E5E5E5';
export const whiteColor = '#FFF';
export const textColor = '#545454';
export const dangerColor = '#bb2124';
export const warningColor = '#f0ad4e';
export const successColor = '#22bb33';
export const defaultColor = '#aaaaaa';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Button = styled.button`
  margin: 5px 0 0;
  height: 44px;

  ${props => {
    if (props.bg && props.gradient) {
      return `
        background-image: linear-gradient(
          to bottom,
          ${props.bg},
          ${darken(0.2, props.bg)}
          );

          &:hover {
            background-image: linear-gradient(
              to right,
              ${darken(0.2, props.bg)},
              ${props.bg}
            );
          }
          `;
    }

    if (props.bg) {
      return `
        background: ${props.bg}
        &:hover ${darken(0.2, props.bg)}
      `;
    }
  }}

  font-weight: bold;
  color: ${props => (props.color ? props.color : whiteColor)};
  border: 0;
  border-radius: ${radius};
  font-size: 16px;
  transition: background 0.2s;
`;

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 5rem;
  z-index: 1000;
`;

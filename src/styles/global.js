import styled, { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export const defaultSpacer = 2;
export const radius = '2rem';

// Colors
export const primaryColor = '#EA7235';
export const secondayColor = '#E5E5E5';
export const whiteColor = '#FFF';
export const textColor = '#545454';

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

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

 @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

  * {
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html {
    font-size: 10px;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 1.4rem 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-top: 0;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: ${radius};
      height: 4.4rem;
      padding: 0 1.5rem 0 ${defaultSpacer}rem;
      color: ${textColor};
      margin: 0 0 ${defaultSpacer / 2}rem;

      &::placeholder {
        color: rgba(0, 0, 0, 0.7);
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: ${radius};
      height: 200px;
      padding: 0 15px;
      margin: 0 0 ${defaultSpacer / 2}rem;

      color: #fff;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

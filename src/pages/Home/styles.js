import styled from 'styled-components';

import { primaryColor, defaultSpacer, radius } from '../../styles/global';

export const Title = styled.h1`
  padding: 2rem;
  font-size: 3.6rem;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > input {
      margin-bottom: 0;
      width: 78%;
      margin-right: 2rem;
    }

    > button {
      flex: 1;
    }
  }
`;

export const Line = styled.hr`
  border: none;
  height: 0.25rem;
  background-color: ${primaryColor};
  margin: ${defaultSpacer}rem 0;
  border-radius: ${radius};
`;

export const PlayerWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 32rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

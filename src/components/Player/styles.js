import styled from 'styled-components';
import { Button } from '../../styles/global';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-top: 0;
  width: 100%;

  @media (min-width: 768px) {
    max-width: ${100 / 2}%;
  }

  @media (min-width: 960px) {
    max-width: ${100 / 3}%;
  }
`;

export const CardPlayer = styled.div`
  background: magenta;
  height: 0;
  padding-top: 56.25%;
  position: relative;
  z-index: 10;
`;

export const CardActions = styled.div`
  height: 3rem;
  position: relative;
  z-index: 20;
  transform: translateY(-50%);
  top: 0;
  left: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
`;

export const CardBtn = styled(Button)`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`;

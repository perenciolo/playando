import styled from 'styled-components';
import { Button, textColor, primaryColor } from '../../styles/global';
import Youtube from 'react-youtube';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-top: 0;
  width: 100%;

  @media (min-width: 768px) {
    max-width: ${100 / 2}%;
  }

  > .yt-playr {
    display: flex;
    position: relative;
    height: 0;
    padding-top: 56.25%;
  }
`;

export const PlayerWrapper = styled.div`
  position: relative;
`;

export const CardPlayer = styled(Youtube)`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
`;

export const CardCover = styled.div`
  background: ${props =>
    props.bgUrl
      ? `black url(${props.bgUrl}) center center no-repeat`
      : 'black'};
  position: relative;
  flex: 1;
  height: 0;
  padding-top: 56.25%;
  z-index: ${props => (props.cover ? 40 : 20)};
`;

export const CardActions = styled.div`
  height: 3rem;
  position: relative;
  z-index: 100;
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

export const CardTitle = styled.div`
  color: ${textColor};
  font-size: 1.6rem;
  margin-top: 1rem;
  display: flex;

  > .num {
    color: ${primaryColor};
    font-weight: 900;
  }

  > .txt {
    margin-left: 1rem;
  }
`;

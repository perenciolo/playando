import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Container,
  primaryColor,
  secondayColor,
  textColor
} from '../../styles/global';
import { Title, Line, PlayerWrapper, InputWrapper } from './styles';

import Player from '../../components/Player';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';

import { getVideosRequest } from '../../store/modules/videoList/actions';
import { URL_REGEX } from '../../services/constants';

export default function Home() {
  const defaultTxt = 'buscar';
  const alterTxt = 'adicionar';
  const [videoTerm, setVideoTerm] = useState('');
  const [btnTxt, setBtnTxt] = useState(defaultTxt);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videoList.videos);

  useEffect(() => {
    console.log(videos);
  }, [videos]);

  function handleAdd() {
    setIsLoading(true);
    dispatch(getVideosRequest(videoTerm));
    setIsLoading(false);
    setShowModal(true);
  }

  function handleVideoSearch(term) {
    if (URL_REGEX.test(term)) {
      setBtnTxt(alterTxt);
    }

    if (!term) {
      setBtnTxt(defaultTxt);
    }

    setVideoTerm(term);
  }

  return (
    <Container>
      {isLoading && <Loading color={primaryColor} />}

      {showModal &&
        videos &&
        videos.map(video => (
          <Modal key={String(video.id.videoId)}>
            <h3>
              <strong>Escolha um vídeo para adicionar</strong>
            </h3>
            <Line />
            <div>
              <div>{video.snippet.title}</div>
            </div>
            <Button
              bg={secondayColor}
              gradient
              color={textColor}
              onClick={e => setShowModal(false)}
            >
              Fechar
            </Button>
          </Modal>
        ))}

      <Title>Playando</Title>

      <form>
        <InputWrapper>
          <input
            type="text"
            name="videoTitle"
            placeholder="Link ou título do vídeo"
            onChange={e => handleVideoSearch(e.target.value)}
          />
          <Button bg={primaryColor} onClick={handleAdd} gradient type="button">
            {btnTxt}
          </Button>
        </InputWrapper>
        <Line />
        <InputWrapper>
          <input type="text" name="video-title" placeholder="palavras-chave" />
          <Button bg={secondayColor} gradient color={textColor} type="button">
            filtrar
          </Button>
        </InputWrapper>
      </form>

      <PlayerWrapper>
        <Player />
      </PlayerWrapper>
    </Container>
  );
}

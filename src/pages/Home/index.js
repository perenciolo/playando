import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Container,
  primaryColor,
  secondayColor,
  textColor,
  dangerColor,
  warningColor
} from '../../styles/global';
import { Title, Line, PlayerWrapper, InputWrapper } from './styles';

import Player from '../../components/Player';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import MsgBox from '../../components/MsgBox';

import { getVideosRequest } from '../../store/modules/videoList/actions';
import { URL_REGEX } from '../../services/constants';
import {
  pushVideo,
  emptyDisclaimer
} from '../../store/modules/playlist/actions';
import { showLoading, hideModal } from '../../store/modules/behaviors/actions';

export default function Home() {
  const defaultTxt = 'buscar';
  const alterTxt = 'adicionar';
  const filterTxt = 'filtrar';
  const filterAlterTxt = 'limpar filtro';

  const [videoTerm, setVideoTerm] = useState('');
  const [btnTxt, setBtnTxt] = useState(defaultTxt);
  const [filterBtnTxt, setFilterBtnTxt] = useState(filterTxt);
  const [vidTxt, setVidTxt] = useState('');
  const [vidKey, setVidKey] = useState('');
  const [directlyUrl, setDirectlyUrl] = useState(false);
  const [localPlaylist, setLocalPlaylist] = useState([]);
  const [readyOnly, setReadyOnly] = useState(false);

  const dispatch = useDispatch();

  const videos = useSelector(state => state.videoList.videos);
  const isLoading = useSelector(state => state.behaviors.isLoading);
  const showDialog = useSelector(state => state.behaviors.showDialog);
  const playlist = useSelector(state => state.playlist.playlist);
  const emptyPlaylistTxt = useSelector(
    state => state.playlist.emptyPlaylistTxt
  );
  const disclaimer = useSelector(state => state.playlist.disclaimer);

  useEffect(() => {
    setLocalPlaylist(playlist);
  }, [playlist]);

  function handleAdd() {
    dispatch(showLoading());
    dispatch(getVideosRequest(videoTerm, directlyUrl));
    if (directlyUrl) {
      setVidTxt('');
      setBtnTxt(defaultTxt);
      setDirectlyUrl(false);
    }
  }

  function handleVideoSearch(term) {
    if (URL_REGEX.test(term)) {
      setBtnTxt(alterTxt);
      setDirectlyUrl(true);
    }

    if (!term) {
      setBtnTxt(defaultTxt);
    }

    setVidTxt(term);
    setVideoTerm(term);
  }

  function handleSelectVideo(video) {
    dispatch(pushVideo(video));
    dispatch(hideModal());
    setVidTxt('');
    window.location.reload();
  }

  function handleFilter() {
    if (filterBtnTxt === 'limpar filtro') {
      setVidKey('');
      setFilterBtnTxt(filterTxt);
      setReadyOnly(false);
      return setLocalPlaylist(playlist);
    }

    setFilterBtnTxt(filterAlterTxt);
    setReadyOnly(true);

    const filteredPlaylist = playlist.filter(video => {
      const title = video.snippet.title.toLowerCase();
      const terms = vidKey.toLowerCase().split(' ');

      let has = false;

      terms.forEach(term => {
        if (title.includes(term)) {
          has = true;
        }
      });

      return has;
    });

    setLocalPlaylist(filteredPlaylist);
    dispatch(emptyDisclaimer());
  }

  return (
    <Container>
      {isLoading && <Loading color={primaryColor} />}

      {showDialog && videos && (
        <Modal>
          <h3>
            <strong>Escolha um vídeo para adicionar</strong>
          </h3>
          <Line />
          {videos.map(video => (
            <div
              style={{ maginTop: '2rem', marginBottom: '2rem' }}
              key={String(video.id.videoId)}
              onClick={e => handleSelectVideo(video)}
            >
              {video.snippet.title}
            </div>
          ))}
          <Button
            bg={secondayColor}
            gradient
            color={textColor}
            onClick={e => dispatch(hideModal())}
          >
            Fechar
          </Button>
        </Modal>
      )}

      <Title>Playando</Title>

      <form>
        <InputWrapper>
          <input
            type="text"
            name="videoTitle"
            placeholder="Link ou título do vídeo"
            value={vidTxt}
            onChange={e => handleVideoSearch(e.target.value)}
          />
          <Button bg={primaryColor} onClick={handleAdd} gradient type="button">
            {btnTxt}
          </Button>
        </InputWrapper>
        <Line />
        <InputWrapper>
          <input
            type="text"
            name="video-title"
            placeholder="palavras-chave"
            value={vidKey}
            onChange={e => {
              setVidKey(e.target.value);
            }}
            readOnly={readyOnly}
          />
          <Button
            onClick={handleFilter}
            bg={secondayColor}
            gradient
            color={textColor}
            type="button"
          >
            {filterBtnTxt}
          </Button>
        </InputWrapper>
      </form>

      <PlayerWrapper>
        {!!disclaimer && (
          <MsgBox bg={dangerColor} color={dangerColor}>
            {disclaimer}
          </MsgBox>
        )}
        {localPlaylist && !!localPlaylist.length && (
          <Player playlist={localPlaylist} />
        )}
        {localPlaylist.length === 0 && (
          <MsgBox bg={warningColor} color={warningColor}>
            {emptyPlaylistTxt}
          </MsgBox>
        )}
      </PlayerWrapper>
    </Container>
  );
}

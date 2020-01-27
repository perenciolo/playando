import React, { useState, useRef, createRef } from 'react';
import { useDispatch } from 'react-redux';

import { MdPlayArrow, MdPause, MdClose } from 'react-icons/md';

import { removeVideo } from '../../store/modules/playlist/actions';

import {
  Card,
  CardActions,
  CardCover,
  CardPlayer,
  CardBtn,
  CardTitle,
  PlayerWrapper
} from './styles';
import {
  whiteColor,
  primaryColor,
  secondayColor,
  textColor
} from '../../styles/global';

export default function Player({ playlist }) {
  const [play, setPlay] = useState(false);
  const [current, setCurrent] = useState(null);
  const vidRef = useRef([...playlist.map(() => createRef())]);
  const dispatch = useDispatch();

  async function handleClick(id) {
    vidRef.current.filter(async video => {
      if (video && video.current && video.current.props.videoId !== id) {
        await video.current.internalPlayer.pauseVideo();
        return false;
      }
      if (video && video.current) {
        setPlay(true);
        setCurrent(video.current.props.videoId);
        if ((await video.current.internalPlayer.getPlayerState()) === 1) {
          setPlay(false);
          await video.current.internalPlayer.pauseVideo();
          return true;
        }

        await video.current.internalPlayer.playVideo();
        return true;
      }
    });
  }

  function excerpt(str) {
    if (!str) return '';

    return str.length > 112 ? `${str.substr(0, 112)}...` : str;
  }

  return playlist.map((video, i) => (
    <Card key={String(video.id.videoId)}>
      <PlayerWrapper>
        <CardPlayer
          ref={vidRef.current[i]}
          containerClassName="yt-playr"
          className="yt-playr--item"
          videoId={video.id.videoId}
          opts={{
            height: video.snippet.thumbnails.medium.height,
            width: video.snippet.thumbnails.medium.width,
            playerVars: {
              autoplay: 0,
              controls: 0
            }
          }}
        ></CardPlayer>
        <CardCover
          bgUrl={video.snippet.thumbnails.high.url}
          cover={!play || current !== video.id.videoId}
        ></CardCover>
      </PlayerWrapper>
      <CardActions>
        <CardBtn
          gradient
          bg={primaryColor}
          onClick={() => handleClick(video.id.videoId)}
        >
          {(!play || current !== video.id.videoId) && (
            <MdPlayArrow size={30} color={whiteColor} />
          )}
          {play && current === video.id.videoId && (
            <MdPause size={30} color={whiteColor} />
          )}
        </CardBtn>
        <CardBtn
          gradient
          bg={secondayColor}
          onClick={() => dispatch(removeVideo(video.id.videoId))}
        >
          <MdClose size={30} color={textColor} />
        </CardBtn>
      </CardActions>
      <CardTitle>
        <div className="num">{`${++i}.`}</div>
        <div className="txt">{excerpt(video.snippet.title)}</div>
      </CardTitle>
    </Card>
  ));
}

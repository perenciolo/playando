import React from 'react';
import { useDispatch } from 'react-redux';

import { MdPlayArrow, MdPause, MdClose } from 'react-icons/md';

import { removeVideo } from '../../store/modules/playlist/actions';

import { Card, CardPlayer, CardActions, CardBtn, CardTitle } from './styles';
import {
  whiteColor,
  primaryColor,
  secondayColor,
  textColor
} from '../../styles/global';
import VideoPlayer from './VideoPlayer';

export default function Player({ playlist }) {
  const play = false;

  const dispatch = useDispatch();

  return playlist.map((video, i) => (
    <Card key={String(video.id.videoId)}>
      {!play && <VideoPlayer videoId={video.id.videoId}></VideoPlayer>}
      {play && (
        <CardPlayer bgUrl={video.snippet.thumbnails.high.url}></CardPlayer>
      )}
      <CardActions>
        <CardBtn gradient bg={primaryColor}>
          {!play && <MdPlayArrow size={30} color={whiteColor} />}
          {play && <MdPause size={30} color={whiteColor} />}
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
        <div className="txt">{video.snippet.title}</div>
      </CardTitle>
    </Card>
  ));
}

import React from 'react';

import { Container } from './styles';

export default function VideoPlayer({ videoId }) {
  return (
    <Container>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
        title="Video player"
      />
    </Container>
  );
}

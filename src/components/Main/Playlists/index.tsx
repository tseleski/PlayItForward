import React from 'react';
import {
  GridWrapper,
  Title,
  Wrapper,
} from './styles';
import {
  Playlist,
} from '../../../types';
import Tile from './Tile';

type Props = {
  playlists: Playlist[];
  setPlaylistId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Playlists: React.FC<Props> = ({
  playlists,
  setPlaylistId,
}) => {
  const renderPlaylists = playlists.map(playlist => (
    <Tile
      key={playlist.id}
      playlist={playlist}
      setPlaylistId={setPlaylistId}
    />
  ))

  return (
    <Wrapper>
      <Title>Playlists</Title>
      <GridWrapper>
        {renderPlaylists}
      </GridWrapper>
    </Wrapper>
  )
}

export default Playlists;

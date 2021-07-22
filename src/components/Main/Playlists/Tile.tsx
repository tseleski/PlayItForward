import React from 'react';
import {
  ImageWrapper,
  PlaylistTitle,
  TileWrapper,
} from './styles';
import { Playlist } from '../../../types';
import albumPlaceholder from './album-placeholder.png';


type Props = {
  playlist: Playlist;
  setPlaylistId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Tile: React.FC<Props> = ({
  playlist,
  setPlaylistId,
}) => {
  const imgSrc = (playlist?.images && playlist.images.length > 0)
    ? playlist.images[0].url
    : albumPlaceholder;
  return (
    <TileWrapper onClick={() => setPlaylistId(playlist.id)}>
      <ImageWrapper>
        <img src={imgSrc} height={170} width={170} alt="album-image" />
      </ImageWrapper>
      <PlaylistTitle>{playlist.name}</PlaylistTitle>
    </TileWrapper>
  )
}

export default Tile;

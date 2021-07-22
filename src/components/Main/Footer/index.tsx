import React, { useState } from 'react';
import {
  AddButton,
  AddWrapper,
  AlbumImage,
  Artist,
  Left,
  NoSongsWrapper,
  Plus,
  TextWrapper,
  Track,
  Wrapper,
} from './styles';
import { CurrentSong, Playlist } from '../../../types';
import Dropdown from './Dropdown';

type Props = {
  addToPlaylist: (playlistId: string, uri: string) => any;
  addToNewPlaylist: (userId: string, name: string, uri: string) => Promise<void>;
  currentSong?: CurrentSong;
  isLoggedIn: boolean;
  playlists: Playlist[];
  userId?: string;
}

const Footer: React.FC<Props> = ({
  addToPlaylist,
  addToNewPlaylist,
  currentSong,
  isLoggedIn,
  playlists,
  userId,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  if (!isLoggedIn) return null;

  if (!currentSong || !currentSong.item) {
    return (
      <NoSongsWrapper>
        Not currently jammin'
      </NoSongsWrapper>
    )
  }

  return (
    <Wrapper>
      <Left>
        <AlbumImage src={currentSong?.item.album.images[0].url} />
        <TextWrapper>
          <Track>{currentSong?.item.name}</Track>
          <Artist>{currentSong?.item.artists.map(artist => artist.name).join(', ')}</Artist>
        </TextWrapper>
      </Left>
      <AddWrapper>
        <AddButton onClick={() => setShowDropdown(!showDropdown)}>
          <Plus>+</Plus>
          Add to Playlist
        </AddButton>
        {showDropdown && (
          <Dropdown
            currentSong={currentSong}
            addToPlaylist={addToPlaylist}
            addToNewPlaylist={addToNewPlaylist}
            playlists={playlists}
            setShowDropdown={setShowDropdown}
            userId={userId}
          />
        )}
      </AddWrapper>
    </Wrapper>
  )
}

export default Footer;

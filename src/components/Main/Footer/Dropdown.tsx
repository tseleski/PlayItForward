import React, { useState, useRef } from 'react';
import {
  CurrentSong,
  Playlist,
} from '../../../types';
import {
  AddSong,
  ButtonWrapper,
  DropdownItem,
  PlaylistDropdown,
  StyledInput,
} from './styles';
import { useClickOutside } from '../../../useClickOutside';

type Props = {
  addToPlaylist: (playlistId: string, uri: string) => Promise<Response> | void;
  addToNewPlaylist: (userId: string, name: string, uri: string) => Promise<void>;
  currentSong: CurrentSong;
  playlists: Playlist[];
  setShowDropdown: (value: boolean) => void;
  userId?: string;
}

const Dropdown:React.FC<Props> = ({
  addToPlaylist,
  addToNewPlaylist,
  currentSong,
  playlists,
  setShowDropdown,
  userId,
}) => {
  const [name, setName] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isCreating, setIsCreating] = useState(false);

  useClickOutside(dropdownRef, () => setShowDropdown(false));

  const createNewPlaylist = () => {
    if (name && userId && !isCreating) {
      setIsCreating(true)
      addToNewPlaylist(userId, name, currentSong.item.uri).then(() => {
        setName('');
        setShowDropdown(false);
        setIsCreating(false);
      });
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      createNewPlaylist();
    }
  }

  const renderPlaylists = playlists.map(playlist => (
    <DropdownItem
      key={playlist.id}
      onClick={() => {
        addToPlaylist(playlist.id, currentSong.item.uri);
        setShowDropdown(false);
      }}
    >
      {playlist.name}
    </DropdownItem>
  ))
  return (
    <PlaylistDropdown ref={dropdownRef}>
      {renderPlaylists}
      <AddSong>
        <div>Add Song to New Playlist:</div>
        <StyledInput
          type="text"
          value={name}
          placeholder="Playlist Name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <ButtonWrapper onClick={createNewPlaylist}>Add</ButtonWrapper>
      </AddSong>
    </PlaylistDropdown>
  )
}

export default Dropdown;

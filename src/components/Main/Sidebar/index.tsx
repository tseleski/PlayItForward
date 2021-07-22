import React from 'react';
import {
  Logo,
  Logout,
  MenuItem,
  MenuWrapper,
  Name,
  Wrapper,
} from './styles';
import logo from '../spotify-logo.png';

type Props = {
  isLoggedIn: boolean;
  playlistId: string | undefined;
  setPlaylistId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Sidebar:React.FC<Props> = ({
  isLoggedIn,
  playlistId,
  setPlaylistId,
}) => {
  const logout = () => {
    window.location.href = '/';
  }

  if (!isLoggedIn) return null;

  return (
    <Wrapper>
      <Name>
        <Logo src={logo} alt="logo" /> PlayItForward
      </Name>
      <MenuWrapper>
        <MenuItem selected={!playlistId} onClick={() => setPlaylistId(undefined)}>
          <i className="fa fa-music" style={{ marginRight: 10 }} />
          Your Library
        </MenuItem>
        <Logout selected={false} onClick={logout}>
          <i className="fa fa-sign-out" style={{ marginRight: 10 }} />
          Logout
        </Logout>
      </MenuWrapper>
    </Wrapper>
  )
}

export default Sidebar;

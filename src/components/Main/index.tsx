import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar/index';
import Header from './Header/index';
import Footer from './Footer';
import Playlists from './Playlists';
import PlaylistPage from './Playlists/PlaylistPage';
import {
  ButtonWrapper,
  Circle1,
  Circle2,
  GetButton,
  Page,
  TextBig,
  TextSmall,
  UnstyledLink,
  Wrapper,
} from './styles';
import { getHashParams, authUrl } from '../../helpers';
import {
  CurrentSong,
  Playlist,
  PlaylistData,
  TrackItem,
  UserInfo,
} from '../../types';
import {
  addSongToPlaylist,
  createPlaylist,
  getCurrentlyPlaying,
  getInfo,
  getPlaylist,
  getPlaylists,
  removeFromPlaylist,
} from '../../fetchers';

const Main:React.FC = () => {
  const { access_token: accessToken } = getHashParams();
  const [userId, setUserId] = useState<string>();
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [privatePlaylists, setPrivatePlaylists] = useState<Playlist[]>([]);
  const [currentSong, setCurrentSong] = useState<CurrentSong>();
  const [playlistId, setPlaylistId] = useState<string>();
  const [tracks, setTracks] = useState<TrackItem[]>([]);

  const fetchAndSetPlaylists = () => {
    if (userId) {
      getPlaylists(userId).then(resp => resp.json().then((data: PlaylistData) => {
        setPlaylists(data.items)
        const ownedPlaylists = data.items.filter(item => (
          item.owner.id === userId
        ))
        setPrivatePlaylists(ownedPlaylists)
      }));
    }
  }

  const addToPlaylist = (playlistIdToAddTo: string, uri: string) => {
    addSongToPlaylist(playlistIdToAddTo, uri).then(() => {
      fetchAndSetPlaylists();
      if (playlistIdToAddTo === playlistId) {
        getPlaylist(playlistIdToAddTo).then(resp => resp.json().then(
          (data: Playlist) => {
            setTracks(data.tracks.items);
          }
        ))
      }
    })
  }

  const addToNewPlaylist = (id: string, name: string, uri: string) => {
    return createPlaylist(name, id).then((resp: Response) => resp.json().then((playlist: Playlist) => {
      addToPlaylist(playlist.id, uri);
    })).then(fetchAndSetPlaylists);
  }

  useEffect(() => {
    if (accessToken) {
      getCurrentlyPlaying().then((resp: Response) => {
        resp.json().then((data: CurrentSong) => {
          setCurrentSong(data);
        });
      });

      getInfo().then((resp: Response) => {
        resp.json().then((data: UserInfo) => {
          setUserId(data.id);
        });
      });
    }
  }, [accessToken]);

  useEffect(() => {
    fetchAndSetPlaylists();
  }, [userId]);

  const isLoggedIn = !!userId;

  return (
    <Wrapper>
      {!isLoggedIn ? (
        <>
          <Header />
          <Page>
            <Circle1 />
            <Circle2 />
            <TextBig>Listening is everything</TextBig>
            <TextSmall>Millions of songs and podcasts. No credit card needed.</TextSmall>
            <ButtonWrapper>
              <GetButton>
                <UnstyledLink href={authUrl}>
                  GET SPOTIFY FREE
                </UnstyledLink>
              </GetButton>
            </ButtonWrapper>
          </Page>
        </>
      ) : (
        <>
          <Sidebar
            isLoggedIn={isLoggedIn}
            setPlaylistId={setPlaylistId}
            playlistId={playlistId}
          />
          <Footer
            addToPlaylist={addToPlaylist}
            addToNewPlaylist={addToNewPlaylist}
            playlists={privatePlaylists}
            currentSong={currentSong}
            isLoggedIn={isLoggedIn}
            userId={userId}
          />
          {!playlistId ? (
            <Playlists
              playlists={playlists}
              setPlaylistId={setPlaylistId}
            />
          ) : (
            <PlaylistPage
              getPlaylist={getPlaylist}
              key={playlistId}
              playlistId={playlistId}
              removeFromPlaylist={removeFromPlaylist}
              fetchAndSetPlaylists={fetchAndSetPlaylists}
              setPlaylistId={setPlaylistId}
              tracks={tracks}
              setTracks={setTracks}
            />
          )}
        </>
      )}

    </Wrapper>
  )
}

export default Main;

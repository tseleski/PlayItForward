import React, { useEffect, useState } from 'react';
import {
  BackCircle,
  Data,
  Details,
  Header,
  Name,
  Owner,
  SongNumber,
  Table,
  Top,
  TopContentWrapper,
  Wrapper,
} from './styles';
import {
  Playlist,
  TrackItem,
} from '../../../types';
import { msToMinutes } from '../../../helpers';
import TrackRow from './TrackRow';
import albumPlaceholder from './album-placeholder.png';


type Props = {
  fetchAndSetPlaylists: () => void;
  getPlaylist: (playlistId: string) => Promise<Response>;
  playlistId?: string;
  removeFromPlaylist: (playlistId: string, uri: string, position: number) => Promise<Response>;
  setPlaylistId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setTracks: React.Dispatch<React.SetStateAction<TrackItem[]>>;
  tracks: TrackItem[];
}

const PlaylistPage: React.FC<Props> = ({
  fetchAndSetPlaylists,
  getPlaylist,
  playlistId,
  removeFromPlaylist,
  setPlaylistId,
  setTracks,
  tracks,
}) => {
  const [playlist, setPlaylist] = useState<Playlist>();

  const goBack = () => {
    setPlaylistId(undefined);
    setPlaylist(undefined);
    setTracks([]);
  }

  const getAndSetPlaylist = () => {
    if (playlistId) {
      getPlaylist(playlistId).then(resp => resp.json().then((data: Playlist) => {
        setTracks(data.tracks.items);
        setPlaylist(data);
        fetchAndSetPlaylists();
      }));
    }
  }

  const removeFromPlaylistAndUpdate = (uri: string, position: number) => {
    playlistId && removeFromPlaylist(playlistId, uri, position).then(getAndSetPlaylist);
  }

  useEffect(() =>{
    getAndSetPlaylist();
  }, []);

  const numTracks = playlist?.tracks.total || 0;
  const imgSrc = (playlist?.images && playlist.images.length > 0)
    ? playlist.images[0].url
    : albumPlaceholder;

  const renderTracks = tracks.map((item, idx) => (
    <TrackRow
      index={idx + 1}
      key={`${item.track.id}-${idx}`}
      track={item.track}
      removeFromPlaylist={removeFromPlaylistAndUpdate}
    />
  ))

  const addTime = (total: number, num: number) => {
    return total + num;
  }

  const totalTime = tracks.map(item => item.track.duration_ms).reduce(addTime, 0)
  const formatTotalTime = () => {
    if (numTracks === 0) return '';

    const timeArray = msToMinutes(totalTime).split(':');
    return ', ' + timeArray[0] + ' min ' + timeArray[1] + ' sec'
  }

  return (
    <Wrapper>
      <Top>
        <BackCircle onClick={goBack}>{'<'}</BackCircle>
        <TopContentWrapper>
          <img src={imgSrc} style={{ height: 200, width: 200 }} alt="album-image" />
          <Data>
            <Header>Playlist</Header>
            <Name>{playlist?.name || ''}</Name>
            <Details>
              <Owner>{`${playlist?.owner.display_name || ''} •`}</Owner>
              <SongNumber>{` ${numTracks} ${numTracks === 1 ? 'song' : 'songs'}${formatTotalTime()}`}</SongNumber>
            </Details>
          </Data>
        </TopContentWrapper>
      </Top>
      <Table>
        <tr>
          <th key="position">#</th>
          <th key="title">Title</th>
          <th key="album">Album</th>
          <th key="duration">Duration</th>
          <th key="actions">Actions</th>
        </tr>
        {renderTracks}
      </Table>
    </Wrapper>
  )
}

export default PlaylistPage;

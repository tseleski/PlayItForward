import React from 'react';
import {
  AlbumImage,
  Artist,
  Left,
  RemoveTD,
  TextWrapper,
  Track as TrackWrapper,
} from './styles';
import { Track } from '../../../types';
import { msToMinutes } from '../../../helpers';

type Props = {
  index: number;
  removeFromPlaylist: (uri: string, position: number) => void;
  track: Track;
}

const TrackRow: React.FC<Props> = ({
  index,
  removeFromPlaylist,
  track,
}) => {

  return (
    <tr style={{ marginTop: 10 }}>
      <td>{index}</td>
      <td>
        <Left>
          <AlbumImage src={track.album.images[0].url} alt="album-image" />
          <TextWrapper>
            <TrackWrapper small>{track.name}</TrackWrapper>
            <Artist small>{track.artists.map(artist => artist.name).join(', ')}</Artist>
          </TextWrapper>
        </Left>
      </td>
      <td>{track.album.name}</td>
      <td>{msToMinutes(track.duration_ms)}</td>
      <RemoveTD onClick={() => removeFromPlaylist(track.uri, index - 1)}>
        <i className="fa fa-trash-o" />
      </RemoveTD>
    </tr>
  )
}

export default TrackRow;

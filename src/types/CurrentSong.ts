import { Artist } from './Artist';
import { Album } from './Album';

export type CurrentSong = {
  currently_playing_type: string;
  is_playing: boolean;
  item: {
    album: Album;
    artists: Artist[];
    name: string;
    disc_number: number;
    duration_ms: number;
    uri: string;
  }
  progress_ms: number;
  timestamp: number;
}

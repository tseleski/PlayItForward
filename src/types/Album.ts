import { Artist } from './Artist';

export type Album = {
  album: string;
  album_type: string;
  artists: Artist[];
  images: {
    height: number;
    width: number;
    url: string;
  }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

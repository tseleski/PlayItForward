import { Album } from './Album';
import { Artist } from './Artist';

export type Track = {
  artists: Artist[];
  album: Album;
  disc_number: number;
  duration_ms: number;
  episode: boolean;
  explicit: boolean;
  external_ids: {
    isrc: string;
  }
  external_urls: {
    spotify: string;
  }
  href: string;
  id: string;
  is_local: false
  name: string;
  popularity: number;
  preview_url: string;
  track: boolean;
  track_number: number;
  type: string;
  uri: string;
}

export type TrackItem = {
  added_at: string;
  added_by: {
    external_urls: {
      spotify: string;
    }
    href: string;
    id: string;
    type: string;
    uri: string;
  }
  track: Track;
  video_thumbnail: {
    url: string;
  }
}

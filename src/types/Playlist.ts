import { UserInfo } from './UserInfo';
import { TrackItem } from './Track';

export type Playlist = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  }
  href: string;
  id: string;
  images: {
    height: number;
    width: number;
    url: string;
  }[];
  name: string;
  owner: UserInfo;
  primary_color: string | null;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
    items: TrackItem[];
  }
  type: string;
  uri: string;
}

export type PlaylistData = {
  href: string;
  items: Playlist[];
  limit: number;
  next: string | null
  offset: number;
  previous: string | null
  total: number;
}

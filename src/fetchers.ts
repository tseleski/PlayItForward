import { getHashParams, serialize } from './helpers';

const { access_token: accessToken } = getHashParams();

export const getInfo = () => {
  return fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
  });
}

export const getCurrentlyPlaying = () => {
  return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
  })
}

export const getPlaylists = (userId: string) => {
  return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
  });
}

export const getPlaylist = (playlistId: string) => {
  return fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
  })
}

export const removeFromPlaylist = (playlistId: string, uri: string, position: number) => {
  return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tracks: [{
        uri,
        positions: [position]
      }]
    }),
  })
}

export const addSongToPlaylist = (playlistId: string, uri: string) => {
  const query = {
    uris: uri,
  }
  
  return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?${serialize(query)}`, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
  })
}

export const createPlaylist = (name: string, userId: string) => {
  const query = {
    name: name,
    description: 'description',
    public: 'false',
  }

  return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  })
}

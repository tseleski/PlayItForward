const client_id = 'b239a8cd051149f09f501bed6085faa1'; // spotify client_id

type Auth = {
  access_token: string;
  token_type: string;
  expires_in: string;
}

type Keys = 'access_token' | 'token_type' | 'expires_in';

const scopes = [
  'user-read-playback-state',
  'playlist-modify-private',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-read-collaborative',
]

const query = {
  client_id,
  response_type: 'token',
  redirect_uri: window.location.origin,
  scope: scopes.join(' '),
  show_dialog: 'true',
}

export const serialize = (obj: { [key: string]: string }) => {
  const str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

export const authUrl = `https://accounts.spotify.com/authorize?${serialize(query)}`;

export const getHashParams = (): Auth => {
  const hash = window.location.hash.substr(1);

  const result = hash.split('&').reduce(function (res, item) {
    const parts = item.split('=');
    res[parts[0] as Keys] = parts[1];
    return res;
  }, {} as Auth);

  return result;
}

export const msToMinutes = (ms: number) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = parseInt(((ms % 60000) / 1000).toFixed(0));
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

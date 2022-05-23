export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = "2c4c33a6dc2e4417ac98534f9301c856";
export const liveURL = "...";
export const devURl = "http://localhost:3000/";
export const redirectURL = devURl;
export const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "streaming",
];

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

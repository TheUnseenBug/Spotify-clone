import * as actionTypes from "./actionTypes";
import SpotifyWebApi from "spotify-web-api-node";

export const fetchPlaylistStart = () => {
  return { type: actionTypes.FETCH_PLAYLIST_START };
};

export const fetchPlaylistSuccess = (playlists) => {
  return { type: actionTypes.FETCH_PLAYLIST_SUCCESS, payload: playlists };
};

export const fetchPlaylistFail = (error) => {
  return { type: actionTypes.FETCH_PLAYLIST_FAIL, payload: error };
};

export const fetchPlaylist = (spotifyApi) => {
  return async (dispatch) => {
    dispatch(fetchPlaylistStart());
    try {
      const data = await spotifyApi.getUserPlaylists();
      dispatch(fetchPlaylistSuccess(data.body.items));
    } catch (e) {
      dispatch(fetchPlaylistFail(e));
    }
  };
};

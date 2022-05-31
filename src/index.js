import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import { ThemeProvider } from "@mui/system";
import { themeOptions } from "./style/material-themes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "2c4c33a6dc2e4417ac98534f9301c856",
  clientSecret: "7dbc5fd945cc458f877c0ce179141959",
  redirectUri: "http://localhost:3000/",
});
const store = configureStore(spotifyApi);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={themeOptions}>
          <App spotifyApi={spotifyApi} />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
